// @ts-check
const { test, expect } = require('@playwright/test');
// import { test, expect } from '@playwright/test';
// import playwrightConfig from '../playwright.config';


test("02 search with keyword", async ({page}) => {
    await page.goto('https://blog.hubtel.com/category/news/');
    // await page.getByPlaceholder('#navbarDropdownMenuLink').hover();
    await page.getByRole('button').click();
    await page.getByPlaceholder('search').click();
    await page.getByPlaceholder('search').fill('Hubtel Turns 19 Years');

    // await page.getByRole('button', {name: 'fa fa-search'}).click();
    // await page.getByRole('button', {name: 'd-flex align-items-center justify-content-center text-white btn btn-primary'}).click();
    await page.click('[aria-describedby="basic-addon2"]');

    // Wait for the search results page to load
    await page.waitForLoadState('networkidle');

    const searchResultText = await page.textContent('body');
    expect(searchResultText).toContain('Hubtel Turns 19 Years');

  });
