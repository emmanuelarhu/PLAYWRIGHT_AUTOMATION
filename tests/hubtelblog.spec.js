// @ts-check
// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('https://blog.hubtel.com/category/news/');
  
  console.log(await page.title());
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('News Archives - Hubtel Blog');
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test('has title1', async ({ page }) => {
//   await page.goto('https://blog.hubtel.com/category/news/');
    
//     // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle('News Archives - Hubtel Blog');
  
// });


// test('has title', async ({ page }) => {
//     await page.goto('https://blog.hubtel.com/category/news/');
    
//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle('News Archives - Hubtel Blog');
  
// });



// test('has title', async ({ page }) => {
//     await page.goto('https://blog.hubtel.com/category/news/');
    
//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle('News Archives - Hubtel Blog');
  
// });






// test('has title', async ({ page }) => {
//     await page.goto('https://blog.hubtel.com/category/news/');
    
//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle('News Archives - Hubtel Blog');
  
// });






// test('has title', async ({ page }) => {
//     await page.goto('https://blog.hubtel.com/category/news/');
    
//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle('News Archives - Hubtel Blog');
  
// });






// test('has title', async ({ page }) => {
//     await page.goto('https://blog.hubtel.com/category/news/');
    
//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle('News Archives - Hubtel Blog');
  
// });










// test('has title', async ({ page }) => {
//     await page.goto('https://blog.hubtel.com/category/news/');
    
//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle('News Archives - Hubtel Blog');
  
// });
