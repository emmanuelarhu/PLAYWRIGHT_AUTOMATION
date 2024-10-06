// @ts-check
const { test, expect } = require('@playwright/test');
// import { test, expect } from '@playwright/test';
// import playwrightConfig from '../playwright.config';

test('04 Validate Mobile App Download Links', async ({ page }) => {

    // Navigate to the page containing social media links
    await page.goto('https://blog.hubtel.com/category/news/');
  
    await page.locator('.col-5 > div > .d-flex > li > a').first().click();
  
  
    await page.goto('https://blog.hubtel.com/category/news/');
    await page.locator('.d-none > .d-flex > li:nth-child(2) > a').click();
  
  
    await page.goto('https://blog.hubtel.com/category/news/');
    await page.locator('.d-none > .d-flex > li:nth-child(2) > a').click();
  
  
    await page.goto('https://appgallery.huawei.com/app/C101763075');
    await page.goto('https://blog.hubtel.com/category/news/');
    await page.locator('.blog-card-image-container > .text-decoration-none').first().click();
  
    });
    