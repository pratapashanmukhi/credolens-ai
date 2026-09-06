
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: { width: 1440, height: 900 }
  });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(__dirname, 'screenshot_overview.png') });
  console.log('1. Captured Overview');

  const navItems = ['Forensic Radar', 'Cashflow & GST', 'Stress Simulator', 'Policy & Compliance', 'Credit Memo (CAM)'];
  const fileNames = ['screenshot_forensic.png', 'screenshot_cashflow.png', 'screenshot_stress.png', 'screenshot_policy.png', 'screenshot_cam.png'];

  for (let i = 0; i < navItems.length; i++) {
    const item = navItems[i];
    const fileName = fileNames[i];
    
    await page.evaluate((navText) => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const target = buttons.find(b => b.textContent && b.textContent.includes(navText));
      if (target) target.click();
    }, item);

    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(__dirname, fileName) });
    console.log('Captured ' + item + ' -> ' + fileName);
  }

  await browser.close();
  console.log('Finished capturing all views!');
})();
