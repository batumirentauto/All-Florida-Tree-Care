const path = require('path');
const pnpmPath = path.resolve(__dirname, '../node_modules/.pnpm/playwright@1.58.2/node_modules/playwright');
const { chromium } = require(pnpmPath);

const TEST_URL = "http://127.0.0.1:5055/dialer_anastasia.html";

async function main() {
  console.log(`Starting dialer validation at ${TEST_URL}...`);
  const errors = [];

  const browser = await chromium.launch({ headless: true });
  
  // Test 1: Desktop Viewport
  console.log("\n--- Testing Desktop (1440x900) ---");
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  page.on('pageerror', err => {
    console.error(`[Browser Page Error] ${err.message}`);
    errors.push(`Page error: ${err.message}`);
  });

  await page.goto(TEST_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const title = await page.title();
  console.log(`Page title: ${title}`);

  const optCount = await page.evaluate(() => document.getElementById('leadSelect').options.length);
  console.log(`Total options in dropdown: ${optCount}`);
  if (optCount !== 70) {
    errors.push(`Expected 70 dropdown options, found ${optCount}`);
  }

  // Check clocks
  const cypTime = await page.evaluate(() => document.getElementById('clockCyprus').innerText);
  const geoTime = await page.evaluate(() => document.getElementById('clockGeorgia').innerText);
  const usTime = await page.evaluate(() => document.getElementById('clockCompanyTime').innerText);
  console.log(`Clocks -> Cyprus: ${cypTime}, Georgia: ${geoTime}, US: ${usTime}`);

  if (!cypTime || cypTime === '--:--') errors.push("Cyprus clock is not rendering time");
  if (!geoTime || geoTime === '--:--') errors.push("Georgia clock is not rendering time");

  // Check Lead #1 (ET)
  const lead1Name = await page.evaluate(() => document.getElementById('leadName').innerText);
  const lead1Tz = await page.evaluate(() => document.getElementById('leadTzBadge').innerText);
  const lead1UsWin = await page.evaluate(() => document.getElementById('usWindowText').innerText);
  const lead1CypWin = await page.evaluate(() => document.getElementById('cyprusWindowText').innerText);
  const lead1CallLink = await page.evaluate(() => document.getElementById('btnCallPhone').href);
  const lead1SmsLink = await page.evaluate(() => document.getElementById('btnSmsPhone').href);
  const lead1PageLink = await page.evaluate(() => document.getElementById('linkShowcasePage').href);

  console.log(`Lead #1: ${lead1Name} | ${lead1Tz}`);
  console.log(`Calling Windows -> US: ${lead1UsWin} | Cyprus: ${lead1CypWin}`);
  console.log(`Links -> Call: ${lead1CallLink} | Page: ${lead1PageLink}`);

  if (!lead1PageLink.includes('zonus.co')) errors.push(`Showcase link not zonus.co: ${lead1PageLink}`);
  if (!lead1SmsLink.includes('zonus.co')) errors.push(`SMS link missing zonus.co: ${lead1SmsLink}`);
  if (!lead1Tz.includes('ET')) errors.push(`Expected ET for Lead #1, got: ${lead1Tz}`);

  // Check Screenshot rendering
  const ssNaturalW = await page.evaluate(() => document.getElementById('leadScreenshotImg').naturalWidth);
  console.log(`Screenshot natural width: ${ssNaturalW}`);
  if (ssNaturalW === 0) {
    errors.push("Lead #1 screenshot failed to load (naturalWidth == 0)");
  }

  // Test Tab Switching
  await page.click('#tabCall2Btn');
  await page.waitForTimeout(300);
  const c2Vis = await page.isVisible('#tabCall2Content');
  console.log(`Tab Call 2 visible: ${c2Vis}`);
  if (!c2Vis) errors.push("Call 2 tab failed to open");

  await page.click('#tabFaqBtn');
  await page.waitForTimeout(300);
  const faqVis = await page.isVisible('#tabFaqContent');
  console.log(`Tab FAQ visible: ${faqVis}`);
  if (!faqVis) errors.push("FAQ tab failed to open");

  // Test Timezone Cohort Filters
  console.log("\n--- Testing Timezone Cohort Filters ---");
  await page.click('#tzBtnCT');
  await page.waitForTimeout(300);
  const ctLeadTz = await page.evaluate(() => document.getElementById('leadTzBadge').innerText);
  console.log(`After clicking CT filter: Lead TZ is ${ctLeadTz}`);
  if (!ctLeadTz.includes('CT')) errors.push(`Expected CT lead, got ${ctLeadTz}`);

  await page.click('#tzBtnPT');
  await page.waitForTimeout(300);
  const ptLeadTz = await page.evaluate(() => document.getElementById('leadTzBadge').innerText);
  console.log(`After clicking PT filter: Lead TZ is ${ptLeadTz}`);
  if (!ptLeadTz.includes('PT')) errors.push(`Expected PT lead, got ${ptLeadTz}`);

  await page.click('#tzBtnALL');
  await page.waitForTimeout(300);

  // Test 2: Mobile Viewport (iPhone 390x844)
  console.log("\n--- Testing Mobile Viewport (390x844) ---");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(500);

  const overflowData = await page.evaluate(() => {
    const docEl = document.documentElement;
    return {
      scrollWidth: docEl.scrollWidth,
      clientWidth: docEl.clientWidth,
      hasOverflow: docEl.scrollWidth > docEl.clientWidth
    };
  });
  console.log(`Mobile overflow: scrollWidth=${overflowData.scrollWidth}, clientWidth=${overflowData.clientWidth}`);
  if (overflowData.hasOverflow) {
    errors.push(`Mobile layout overflow: scrollWidth=${overflowData.scrollWidth} > clientWidth=${overflowData.clientWidth}`);
  }

  // Next Lead test on mobile
  await page.evaluate(() => nextLead());
  await page.waitForTimeout(300);
  const nextLeadName = await page.evaluate(() => document.getElementById('leadName').innerText);
  console.log(`Next lead after navigation: ${nextLeadName}`);

  await browser.close();

  console.log("\n" + "=".repeat(50));
  if (errors.length > 0) {
    console.error(`FAILED with ${errors.length} errors:`);
    errors.forEach(e => console.error(`  ❌ ${e}`));
    process.exit(1);
  } else {
    console.log("ALL TESTS PASSED WITH 100% SUCCESS!");
    console.log("=".repeat(50));
  }
}

main().catch(err => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
