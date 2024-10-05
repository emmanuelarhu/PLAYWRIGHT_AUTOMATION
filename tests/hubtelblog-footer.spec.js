// @ts-check
// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('https://blog.hubtel.com/category/news/');

  
  console.log(await page.title());
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('News Archives - Hubtel Blog');
});
