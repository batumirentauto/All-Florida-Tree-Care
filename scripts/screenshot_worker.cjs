/**
 * scripts/screenshot_worker.js
 * High-fidelity mobile screenshot engine using Playwright.
 * Accurately measures the hero section bottom to capture all desktop first-screen elements
 * (Header, Headline, CTAs, Trust Badges, and Bento Photos) in clean mobile format.
 */

const path = require('path');
const fs = require('fs');

// Locate playwright
let playwright;
try {
  playwright = require('playwright');
} catch (e) {
  // Try pnpm path
  const pnpmPath = path.resolve(__dirname, '../node_modules/.pnpm/playwright@1.58.2/node_modules/playwright');
  if (fs.existsSync(pnpmPath)) {
    playwright = require(pnpmPath);
  } else {
    throw new Error('Playwright not found: ' + e.message);
  }
}

async function capture() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error('Usage: node screenshot_worker.js <url> <outputPath> [mode=hero|viewport|full] [width=390] [waitMs=1200]');
    process.exit(1);
  }

  const [url, outputPath, mode = 'hero', widthStr = '390', waitMsStr = '1200'] = args;
  const width = parseInt(widthStr, 10) || 390;
  const waitMs = parseInt(waitMsStr, 10) || 1200;

  const browser = await playwright.chromium.launch();
  try {
    const page = await browser.newPage({
      viewport: { width, height: 2000 },
      deviceScaleFactor: 2 // Ultra-sharp Retina quality for client previews
    });

    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    
    // Wait for hero images and animations to settle
    if (waitMs > 0) {
      await page.waitForTimeout(waitMs);
    }

    if (mode === 'hero') {
      // Dynamically measure the bottom of the hero section
      const heroBottom = await page.evaluate(() => {
        const hero = document.querySelector('section#hero') || document.querySelector('main > section:first-of-type');
        if (!hero) return 1450;
        const rect = hero.getBoundingClientRect();
        return Math.ceil(rect.bottom + window.scrollY);
      });

      await page.screenshot({
        path: outputPath,
        clip: { x: 0, y: 0, width, height: heroBottom }
      });
    } else if (mode === 'viewport') {
      // Standard iPhone 14/15 844px single viewport
      await page.setViewportSize({ width, height: 844 });
      await page.screenshot({
        path: outputPath
      });
    } else if (mode === 'full') {
      await page.screenshot({
        path: outputPath,
        fullPage: true
      });
    }

    console.log(`OK:${outputPath}`);
  } finally {
    await browser.close();
  }
}

capture().catch((err) => {
  console.error('ERROR:', err.message);
  process.exit(1);
});
