// @ts-check
// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test.describe('testing for hubtel blog site', () => {
  test.only('has title', async ({page}) => {
    await page.goto('https://blog.hubtel.com/category/news/');
    await expect(page).toHaveTitle('News Archives - Hubtel Blog')

  })
})













// for (let lager = 0; lager < 10; lager++) {

//     test('has title' + lager, async ({ page }) => {
//         await page.goto('https://blog.hubtel.com/category/news/');
      
        
//         console.log(await page.title());
        
//         // Expect a title "to contain" a substring.
//         await expect(page).toHaveTitle('News Archives - Hubtel Blog');
//       });
      
// }

