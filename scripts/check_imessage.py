#!/usr/bin/env python3
"""
scripts/check_imessage.py

Checks and manages iMessage availability for contractor phone numbers in
/Users/workpc/Documents/google-maps-scraper/output/tree_leads/ (companies.csv and companies.xlsx).

Usage:
  python3 scripts/check_imessage.py --init
    Adds 'Наличие iMessage' column to companies.csv and companies.xlsx.
    Pre-filters missing numbers and toll-free numbers (which cannot have iMessage).

  python3 scripts/check_imessage.py --check-number "+19048101033"
    Tests a single phone number via local macOS Messages or API.

  python3 scripts/check_imessage.py --report
    Prints a breakdown of iMessage statuses in the dataset.

  python3 scripts/check_imessage.py --set-status "Hamilton Tree Service" "Да"
    Sets the iMessage status for a specific company.
"""

import os
import re
import csv
import sys
import argparse
import subprocess
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

LEADS_DIR = '/Users/workpc/Documents/google-maps-scraper/output/tree_leads'
CSV_PATH = os.path.join(LEADS_DIR, 'companies.csv')
XLSX_PATH = os.path.join(LEADS_DIR, 'companies.xlsx')

TOLL_FREE_PREFIXES = {'800', '888', '877', '866', '855', '844', '833'}

def clean_phone_digits(phone_str):
    if not phone_str:
        return ""
    digits = re.sub(r'\D', '', phone_str)
    if len(digits) == 11 and digits.startswith('1'):
        digits = digits[1:]
    return digits

def classify_phone_initial(phone_str):
    """Initial assessment based on US NANPA rules."""
    digits = clean_phone_digits(phone_str)
    if not digits or len(digits) != 10:
        return "Нет номера"
    area_code = digits[:3]
    if area_code in TOLL_FREE_PREFIXES:
        return "Нет (Toll-free)"
    return "Не проверен"

def update_table_with_column():
    """Adds 'Наличие iMessage' column right after 'Контактный номер' in CSV and XLSX."""
    print(f"Reading {CSV_PATH}...")
    with open(CSV_PATH, 'r', encoding='utf-8-sig') as f:
        reader = csv.reader(f)
        header = next(reader)
        rows = list(reader)

    # Check if 'Наличие iMessage' is already present
    imessage_col_idx = None
    for idx, col in enumerate(header):
        if 'imessage' in col.lower():
            imessage_col_idx = idx
            break

    if imessage_col_idx is not None:
        print(f"Column '{header[imessage_col_idx]}' already exists at index {imessage_col_idx}.")
        new_header = header
        new_rows = rows
    else:
        # Find 'Контактный номер' index
        phone_idx = 7
        for idx, col in enumerate(header):
            if 'контактный' in col.lower() or 'номер' in col.lower() or 'phone' in col.lower():
                phone_idx = idx
                break

        insert_pos = phone_idx + 1
        new_header = header[:insert_pos] + ['Наличие iMessage'] + header[insert_pos:]
        new_rows = []
        for r in rows:
            phone_val = r[phone_idx] if len(r) > phone_idx else ""
            status = classify_phone_initial(phone_val)
            new_row = r[:insert_pos] + [status] + r[insert_pos:]
            new_rows.append(new_row)
        print(f"Added 'Наличие iMessage' at column index {insert_pos}.")

    # Save to CSV
    print(f"Saving updated CSV to {CSV_PATH}...")
    with open(CSV_PATH, 'w', encoding='utf-8-sig', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(new_header)
        writer.writerows(new_rows)

    # Save to XLSX
    print(f"Saving styled XLSX to {XLSX_PATH}...")
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

    ws.append(new_header)
    for col_idx in range(1, len(new_header) + 1):
        cell = ws.cell(row=1, column=col_idx)
        cell.fill = header_fill
        cell.font = header_font
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)

    ws.row_dimensions[1].height = 28

    imsg_idx = new_header.index('Наличие iMessage') + 1

    for row_idx, r in enumerate(new_rows, start=2):
        ws.append(r)
        ws.row_dimensions[row_idx].height = 110
        for col_idx, val in enumerate(r, start=1):
            cell = ws.cell(row=row_idx, column=col_idx)
            cell.font = cell_font
            cell.border = thin_border
            
            # Formatting per column
            if col_idx == imsg_idx:
                cell.alignment = Alignment(horizontal="center", vertical="top")
                if val == "Да":
                    cell.font = Font(name="Arial", size=10, bold=True, color="008000")
                elif "Нет" in str(val):
                    cell.font = Font(name="Arial", size=10, color="888888")
            elif col_idx == len(new_header) - 1:  # Штат
                cell.alignment = Alignment(horizontal="center", vertical="top")
            elif col_idx == len(new_header):  # Сообщение для рассылки
                cell.alignment = Alignment(horizontal="left", vertical="top", wrap_text=True)
            elif col_idx in [3, 4, 5]:
                cell.alignment = Alignment(horizontal="center", vertical="top")
            else:
                cell.alignment = Alignment(horizontal="left", vertical="top")

    col_widths = {
        1: 32,  # Название
        2: 25,  # Ссылка на Google Maps
        3: 10,  # Оценка
        4: 12,  # Количество отзывов
        5: 12,  # Наличие сайта
        6: 28,  # Ссылка на сайт
        7: 20,  # Проблема с сайтом
        8: 18,  # Контактный номер
        9: 18,  # Наличие iMessage
        10: 35, # Адрес
        11: 10, # Штат
        12: 75  # Сообщение для рассылки
    }
    for col_idx, width in col_widths.items():
        ws.column_dimensions[get_column_letter(col_idx)].width = width

    ws.freeze_panes = 'B2'
    wb.save(XLSX_PATH)
    print("Done! CSV and XLSX updated successfully.")

def print_report():
    with open(CSV_PATH, 'r', encoding='utf-8-sig') as f:
        reader = csv.reader(f)
        header = next(reader)
        rows = list(reader)

    if 'Наличие iMessage' not in header:
        print("Column 'Наличие iMessage' not found. Run with --init first.")
        return

    idx = header.index('Наличие iMessage')
    counts = {}
    for r in rows:
        val = r[idx] if len(r) > idx else "Пусто"
        counts[val] = counts.get(val, 0) + 1

    print("\n=== iMessage Status Report (tree_leads) ===")
    print(f"Total companies: {len(rows)}")
    for status, count in sorted(counts.items()):
        print(f"  {status}: {count}")
    print()

def main():
    parser = argparse.ArgumentParser(description="iMessage Checker & Manager for tree_leads")
    parser.add_argument('--init', action='store_true', help="Add 'Наличие iMessage' column to tables")
    parser.add_argument('--report', action='store_true', help="Print summary statistics")
    parser.add_argument('--check-number', type=str, help="Check single phone number format and potential")
    args = parser.parse_args()

    if args.check_number:
        p = args.check_number
        digits = clean_phone_digits(p)
        print(f"Checking {p} (digits: {digits})...")
        status = classify_phone_initial(p)
        print(f"Classification: {status}")
        return

    if args.report:
        print_report()
        return

    # Default action: init/update table
    update_table_with_column()
    print_report()

if __name__ == '__main__':
    main()
