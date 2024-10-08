import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://blog.hubtel.com/');
  await page.locator('.col-12 > div > div > .text-decoration-none').first().click();
  await page.getByRole('heading', { name: 'Press Releases' }).click();
  await page.locator('div').filter({ hasText: 'Press Releases Correction of' }).nth(2).click();
  await page.getByRole('main').locator('div').filter({ hasText: '- 12 of 65 records 1 2 3 … 6' }).nth(2).click();
  await page.goto('https://blog.hubtel.com/');
  await page.locator('div:nth-child(2) > div > div > div > .text-decoration-none').first().click();
  await page.goto('https://blog.hubtel.com/category/news/');
  await page.getByRole('heading', { name: 'News' }).click();
  await page.locator('div:nth-child(3) > div > div > div > .text-decoration-none').first().click();
  await page.getByRole('heading', { name: 'Customer Stories' }).click();
  await page.locator('div:nth-child(4) > div > div > div > .text-decoration-none').first().click();
  await page.getByRole('heading', { name: 'Product Updates' }).click();
  await page.locator('div:nth-child(5) > div > div > div > .text-decoration-none').first().click();
  await page.getByRole('heading', { name: 'Guides' }).click();
  await page.locator('div:nth-child(6) > div > div > div > .text-decoration-none').first().click();
  await page.getByRole('heading', { name: 'Inside Hubtel' }).click();
  await page.locator('div:nth-child(6) > div > div > div > .text-decoration-none').first().click();
  await page.getByRole('heading', { name: 'Inside Hubtel' }).click();
  await page.locator('div:nth-child(7) > div > div > div > .text-decoration-none').first().click();
  await page.getByRole('heading', { name: 'Pledge' }).click();
  await page.getByRole('main').locator('div').filter({ hasText: 'Press Releases Stay informed' }).first().click();
});