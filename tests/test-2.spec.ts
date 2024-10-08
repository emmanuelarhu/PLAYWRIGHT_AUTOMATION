import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://hubtel.com/');
  await page.getByRole('heading', { name: 'or Login' }).getByRole('paragraph').click();
  await page.getByLabel('Country Code Selector').click();
  await expect(page.getByRole('listbox')).toContainText('Ghana (Gaana) +233');
  await page.getByLabel('Country Code Selector').click();
  await page.getByPlaceholder('Enter a phone number').click();
  await page.getByPlaceholder('Enter a phone number').fill('0248071613');
  await page.getByPlaceholder('Enter a phone number').click();
  await page.getByPlaceholder('Enter a phone number').fill('0248071613');
});