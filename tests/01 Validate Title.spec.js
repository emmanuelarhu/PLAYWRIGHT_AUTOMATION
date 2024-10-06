// @ts-check
const { test, expect } = require('@playwright/test');
// import { test, expect } from '@playwright/test';
// import playwrightConfig from '../playwright.config';

test.describe('testing for hubtel blog site', () => {
  test('01 Validate Title', async ({page}) => {
    await page.goto('https://blog.hubtel.com/category/news/');
    await expect(page).toHaveTitle('News Archives - Hubtel Blog')

  });
});