#!/usr/bin/env python3
"""
scripts/smooth_imessage_checker.py

Performs a smooth, rate-limited batch check of iMessage availability
for all contractor phone numbers in /Users/workpc/Documents/google-maps-scraper/output/tree_leads/.
Uses native macOS IDS daemon queries directly without sending any messages.
"""

import os
import re
import csv
import time
import json
import subprocess
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

LEADS_DIR = '/Users/workpc/Documents/google-maps-scraper/output/tree_leads'
CSV_PATH = os.path.join(LEADS_DIR, 'companies.csv')
XLSX_PATH = os.path.join(LEADS_DIR, 'companies.xlsx')
SWIFT_HELPER = '/tmp/ids_checker.swift'

TOLL_FREE_PREFIXES = {'800', '888', '877', '866', '855', '844', '833'}

SWIFT_SCRIPT = """
import Foundation

_ = dlopen("/System/Library/PrivateFrameworks/IDS.framework/IDS", RTLD_LAZY)
guard let cls = NSClassFromString("IDSIDQueryController") as? NSObject.Type else {
    fputs("ERROR: IDSIDQueryController class not found\\n", stderr)
    exit(1)
}
let sharedInstance = cls.perform(NSSelectorFromString("sharedInstance")).takeUnretainedValue()

let querySel = NSSelectorFromString("_currentIDStatusForDestination:service:listenerID:")
let queryMethod = class_getInstanceMethod(cls, querySel)!
typealias QueryFunc = @convention(c) (AnyObject, Selector, NSString, NSString, NSString) -> Int
let queryFn = unsafeBitCast(method_getImplementation(queryMethod), to: QueryFunc.self)

let refSel = NSSelectorFromString("refreshIDStatusForDestination:service:listenerID:queue:completionBlock:")
let refMethod = class_getInstanceMethod(cls, refSel)!
typealias BlockType = @convention(block) (Int) -> Void
let dummyBlock: BlockType = { _ in }
typealias RefSingleFunc = @convention(c) (AnyObject, Selector, NSString, NSString, NSString, DispatchQueue, AnyObject) -> Bool
let refSingleFn = unsafeBitCast(method_getImplementation(refMethod), to: RefSingleFunc.self)

let service = "com.apple.madrid" as NSString
let listener = "smoothBatchChecker" as NSString

// Read numbers from arguments
let args = CommandLine.arguments.dropFirst()
let numbers = Array(args)

// 1. Send refresh requests
for n in numbers {
    _ = refSingleFn(sharedInstance, refSel, n as NSString, service, listener, DispatchQueue.main, unsafeBitCast(dummyBlock, to: AnyObject.self))
}

// 2. Wait for daemon to receive responses from Apple IDS
RunLoop.main.run(until: Date(timeIntervalSinceNow: 3.2))

// 3. Query final statuses
var results: [String: Int] = [:]
for n in numbers {
    let s = queryFn(sharedInstance, querySel, n as NSString, service, listener)
    results[n] = s
}

if let jsonData = try? JSONSerialization.data(withJSONObject: results, options: []),
   let jsonStr = String(data: jsonData, encoding: .utf8) {
    print(jsonStr)
}
"""

def clean_phone_digits(phone_str):
    if not phone_str:
        return ""
    digits = re.sub(r'\D', '', phone_str)
    if len(digits) == 11 and digits.startswith('1'):
        digits = digits[1:]
    return digits

def check_batch_native(batch_numbers):
    """Invokes the Swift helper for a batch of international phone numbers."""
    if not batch_numbers:
        return {}
    with open(SWIFT_HELPER, 'w') as f:
        f.write(SWIFT_SCRIPT)

    cmd = ['swift', SWIFT_HELPER] + batch_numbers
    try:
        proc = subprocess.run(cmd, capture_output=True, text=True, timeout=15)
        if proc.returncode == 0 and proc.stdout.strip():
            return json.loads(proc.stdout.strip())
        else:
            print(f"Swift helper error: {proc.stderr}")
            return {}
    except Exception as e:
        print(f"Subprocess error: {e}")
        return {}

def run_smooth_check(batch_size=10, sleep_between=1.0):
    print(f"Reading {CSV_PATH}...")
    with open(CSV_PATH, 'r', encoding='utf-8-sig') as f:
        reader = csv.reader(f)
        header = next(reader)
        rows = list(reader)

    phone_idx = header.index('Контактный номер')
    imsg_idx = header.index('Наличие iMessage')

    print(f"Total rows in dataset: {len(rows)}")

    # Prepare list of items to check
    to_check = []
    for idx, r in enumerate(rows):
        phone_raw = r[phone_idx]
        digits = clean_phone_digits(phone_raw)
        if not digits or len(digits) != 10:
            r[imsg_idx] = "Нет номера"
            continue
        area_code = digits[:3]
        if area_code in TOLL_FREE_PREFIXES:
            r[imsg_idx] = "Нет (Toll-free)"
            continue
        
        intl_phone = f"+1{digits}"
        to_check.append((idx, intl_phone, r[0]))

    print(f"Found {len(to_check)} valid mobile/local contractor numbers to verify.")
    print(f"Running smooth check in batches of {batch_size} with {sleep_between}s delays...")

    # Process in batches
    verified_count = 0
    imessage_yes = 0
    imessage_no = 0

    total_batches = (len(to_check) + batch_size - 1) // batch_size

    for b_idx in range(total_batches):
        batch = to_check[b_idx * batch_size : (b_idx + 1) * batch_size]
        batch_numbers = [item[1] for item in batch]

        results = check_batch_native(batch_numbers)

        for row_idx, num, comp_name in batch:
            raw_status = results.get(num, 0)
            if raw_status == 2:
                status_str = "Да"
                imessage_yes += 1
            elif raw_status == 1:
                status_str = "Нет"
                imessage_no += 1
            else:
                # 0 means either unconfirmed or non-iMessage
                status_str = "Нет (SMS)"
                imessage_no += 1

            rows[row_idx][imsg_idx] = status_str
            verified_count += 1

        pct = (verified_count / len(to_check)) * 100
        print(f"[{b_idx + 1}/{total_batches}] Checked {verified_count}/{len(to_check)} ({pct:.1f}%) | iMessage Да: {imessage_yes}, Нет: {imessage_no}")

        if b_idx < total_batches - 1:
            time.sleep(sleep_between)

    # Clean up temp helper
    if os.path.exists(SWIFT_HELPER):
        os.remove(SWIFT_HELPER)

    print("\nCheck complete! Updating CSV and styled Excel table...")

    # Write to CSV
    with open(CSV_PATH, 'w', encoding='utf-8-sig', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(header)
        writer.writerows(rows)

    # Write to XLSX
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Подрядчики"

    header_fill = PatternFill(start_color="1B4332", end_color="1B4332", fill_type="solid")
    header_font = Font(name="Arial", size=11, bold=True, color="FFFFFF")
    cell_font = Font(name="Arial", size=10)
    thin_border = Border(
        left=Side(style='thin', color='DDDDDD'),
        right=Side(style='thin', color='DDDDDD'),
        top=Side(style='thin', color='DDDDDD'),
        bottom=Side(style='thin', color='DDDDDD')
    )

    ws.append(header)
    for col_idx in range(1, len(header) + 1):
        cell = ws.cell(row=1, column=col_idx)
        cell.fill = header_fill
        cell.font = header_font
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)

    ws.row_dimensions[1].height = 28

    imsg_col_idx = imsg_idx + 1

    for row_idx, r in enumerate(rows, start=2):
        ws.append(r)
        ws.row_dimensions[row_idx].height = 110
        for col_idx, val in enumerate(r, start=1):
            cell = ws.cell(row=row_idx, column=col_idx)
            cell.font = cell_font
            cell.border = thin_border
            
            if col_idx == imsg_col_idx:
                cell.alignment = Alignment(horizontal="center", vertical="top")
                if val == "Да":
                    cell.font = Font(name="Arial", size=10, bold=True, color="007700")
                    cell.fill = PatternFill(start_color="E8F5E9", end_color="E8F5E9", fill_type="solid")
                elif "Нет" in str(val):
                    cell.font = Font(name="Arial", size=10, color="555555")
            elif col_idx == len(header) - 1:  # Штат
                cell.alignment = Alignment(horizontal="center", vertical="top")
            elif col_idx == len(header):  # Сообщение
                cell.alignment = Alignment(horizontal="left", vertical="top", wrap_text=True)
            elif col_idx in [3, 4, 5]:
                cell.alignment = Alignment(horizontal="center", vertical="top")
            else:
                cell.alignment = Alignment(horizontal="left", vertical="top")

    col_widths = {
        1: 32, 2: 25, 3: 10, 4: 12, 5: 12, 6: 28, 7: 20, 8: 18, 9: 18, 10: 35, 11: 10, 12: 75
    }
    for col_idx, width in col_widths.items():
        ws.column_dimensions[get_column_letter(col_idx)].width = width

    ws.freeze_panes = 'B2'
    wb.save(XLSX_PATH)
    print("All saved successfully!")

    # Summary
    print("\n=== Final iMessage Breakdown ===")
    counts = {}
    for r in rows:
        val = r[imsg_idx]
        counts[val] = counts.get(val, 0) + 1
    for k, v in sorted(counts.items()):
        print(f"  {k}: {v}")

if __name__ == '__main__':
    run_smooth_check(batch_size=12, sleep_between=0.8)
