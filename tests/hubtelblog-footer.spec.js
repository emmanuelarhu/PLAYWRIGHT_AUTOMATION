// // @ts-check
// const { test, expect } = require('@playwright/test');
// // import { test, expect } from '@playwright/test';
// // import playwrightConfig from '../playwright.config';

// test.describe('testing for hubtel blog site', () => {
//   test('01 Validate Title', async ({page}) => {
//     await page.goto('https://blog.hubtel.com/category/news/');
//     await expect(page).toHaveTitle('News Archives - Hubtel Blog')

//   });

//   test("02 search with keyword", async ({page}) => {
//     await page.goto('https://blog.hubtel.com/category/news/');
//     // await page.getByPlaceholder('#navbarDropdownMenuLink').hover();
//     await page.getByRole('button').click();
//     await page.getByPlaceholder('search').click();
//     await page.getByPlaceholder('search').fill('Hubtel Turns 19 Years');

//     // await page.getByRole('button', {name: 'fa fa-search'}).click();
//     // await page.getByRole('button', {name: 'd-flex align-items-center justify-content-center text-white btn btn-primary'}).click();
//     await page.click('[aria-describedby="basic-addon2"]');

//     // Wait for the search results page to load
//     await page.waitForLoadState('networkidle');

//     const searchResultText = await page.textContent('body');
//     expect(searchResultText).toContain('Hubtel Turns 19 Years');

//   });

//   test('03 Validate Social media links ', async ({ page }) => {
//   // Navigate to the page containing social media links
//   await page.goto('https://blog.hubtel.com/category/news/');

//   // Test Instagram link
//   const instagramLink = await page.locator('a[href="https://www.instagram.com/hubtel/?hl=en"]');
//   await expect(instagramLink).toBeVisible();

//   await expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/hubtel/?hl=en');

//   // Test Twitter (X) link
//   const xlink = await page.locator('a[href="https://twitter.com/hubtel"]'); // update with the correct X (Twitter) link
//   await expect(xlink).toBeVisible();
//   await expect(xlink).toHaveAttribute('href', 'https://twitter.com/hubtel'); // maintain if intentional, update if oversight 

//   // Test LinkedIn link
//   const linkedinLink = await page.locator('a[href="https://www.linkedin.com/company/hubtel/mycompany/"]'); // replace with correct LinkedIn link
//   await expect(linkedinLink).toBeVisible();
//   await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/hubtel/mycompany/');

//   // Test Facebook link
//   const facebookLink = await page.locator('a[href="https://web.facebook.com/hubtelghana/"]'); // replace with correct Facebook link
//   await expect(facebookLink).toBeVisible();
//   await expect(facebookLink).toHaveAttribute('href', 'https://web.facebook.com/hubtelghana/');
//   });

//   test('04 Validate Mobile App Download Links', async ({ page }) => {

//   // Navigate to the page containing social media links
//   await page.goto('https://blog.hubtel.com/category/news/');

//   await page.locator('.col-5 > div > .d-flex > li > a').first().click();


//   await page.goto('https://blog.hubtel.com/category/news/');
//   await page.locator('.d-none > .d-flex > li:nth-child(2) > a').click();


//   await page.goto('https://blog.hubtel.com/category/news/');
//   await page.locator('.d-none > .d-flex > li:nth-child(2) > a').click();


//   await page.goto('https://appgallery.huawei.com/app/C101763075');
//   await page.goto('https://blog.hubtel.com/category/news/');
//   await page.locator('.blog-card-image-container > .text-decoration-none').first().click();

//   });
  

//   test('05 Validate Navigation and Page Titles on Hubtel Blog', async ({ page }) => {
//     await page.goto('https://blog.hubtel.com/category/news/#');

    
//     await page.getByRole('link', { name: `For our communities;` }).click();

//     await page.waitForLoadState('networkidle');
//     await expect(page).toHaveTitle('Pledge - Hubtel') 

  
//     await page.getByRole('link', { name: 'Leadership & Team' }).click();
  
//     // Wait for the search results page to load
//     await page.waitForLoadState('networkidle');
//     await expect(page).toHaveTitle('The Team - Hubtel')
  
//     await page.getByRole('link', { name: 'Join the Team' }).click();
  
//     // Wait for the search results page to load
//     await page.waitForLoadState('networkidle');
//     await expect(page).toHaveTitle('Hubtel Careers')
  
//     await page.getByRole('link', { name: 'Our Stories' }).click();
  
//     // Wait for the search results page to load
//     await page.waitForLoadState('networkidle');
//     await expect(page).toHaveTitle('The Official Hubtel Blog')
  
//     await page.getByRole('link', { name: 'Legal' }).click();
  
//     // Wait for the search results page to load
//     await page.waitForLoadState('networkidle');
//     await expect(page).toHaveTitle('General Terms of Service - Hubtel')
  
//     await page.getByRole('link', { name: 'Premium Subscription Billing' }).click();
  
//     // Wait for the search results page to load
//     await page.waitForLoadState('networkidle');
//     await expect(page).toHaveTitle('Premium Billing - Hubtel')
  
//     await page.getByRole('link', { name: 'Connect to APIs' }).click();
    
//     // Wait for the search results page to load
//     await page.waitForLoadState('domcontentloaded');
//     await page.waitForLoadState('networkidle');
//     await expect(page).toHaveTitle('Developer Portal')  // The Developer Portal instance opens a new page which will make this script fail
  
//   });

// });

// //   test('testydh ', async ({ page }) => {
// //   // Navigate to the page containing social media links
// //   await page.goto('https://github.com/login');
// //   const signinbtn = await page.getByRole('button',{name: 'Sign in'});
// //   await signinbtn.click()
// // });

// // for (let lager = 0; lager < 10; lager++) {

// //     test('has title' + lager, async ({ page }) => {
// //         await page.goto('https://blog.hubtel.com/category/news/');
      
        
// //         console.log(await page.title());
        
// //         // Expect a title "to contain" a substring.
// //         await expect(page).toHaveTitle('News Archives - Hubtel Blog');
// //       });
      
// // }