// @ts-check
const { test, expect } = require('@playwright/test');
// import { test, expect } from '@playwright/test';
// import playwrightConfig from '../playwright.config';

test('03 Validate Social media links ', async ({ page }) => {
    // Navigate to the page containing social media links
    await page.goto('https://blog.hubtel.com/category/news/');
  
    // Test Instagram link
    const instagramLink = await page.locator('a[href="https://www.instagram.com/hubtel/?hl=en"]');
    await expect(instagramLink).toBeVisible();
  
    await expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/hubtel/?hl=en');
  
    // Test Twitter (X) link
    const xlink = await page.locator('a[href="https://twitter.com/hubtel"]'); // update with the correct X (Twitter) link
    await expect(xlink).toBeVisible();
    await expect(xlink).toHaveAttribute('href', 'https://twitter.com/hubtel'); // maintain if intentional, update if oversight 
  
    // Test LinkedIn link
    const linkedinLink = await page.locator('a[href="https://www.linkedin.com/company/hubtel/mycompany/"]'); // replace with correct LinkedIn link
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/hubtel/mycompany/');
  
    // Test Facebook link
    const facebookLink = await page.locator('a[href="https://web.facebook.com/hubtelghana/"]'); // replace with correct Facebook link
    await expect(facebookLink).toBeVisible();
    await expect(facebookLink).toHaveAttribute('href', 'https://web.facebook.com/hubtelghana/');
    });