// @ts-check
const { test, expect } = require('@playwright/test');
// import { test, expect } from '@playwright/test';
// import playwrightConfig from '../playwright.config';

test.describe('testing for hubtel blog site', () => {

test('06 litrate through the news on clicking "Next"', async ({ page }) => {
    await page.goto('https://blog.hubtel.com/category/news/#');
  
    // Loop through pages from 1 to 13
    for (let pageIndex = 1; pageIndex <= 11; pageIndex++) {
      // Click the "Next" button to navigate to the next page
      await page.locator('.next').click();
  
      // Wait for the page to load
      await page.waitForLoadState('networkidle');
  
      // Construct the expected title for the current page
      const expectedTitle = `News Archives - Page ${pageIndex + 1} of 13 - Hubtel Blog`;
  
      // Verify that the title matches the expected title
      await expect(page).toHaveTitle(expectedTitle);
  
      // Log the title if the verification passes
      console.log(`Passed: ${expectedTitle}`);
    }
  });

});



