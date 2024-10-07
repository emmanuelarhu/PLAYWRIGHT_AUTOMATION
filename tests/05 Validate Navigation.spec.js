// @ts-check
const { test, expect } = require('@playwright/test');
// import { test, expect } from '@playwright/test';
// import playwrightConfig from '../playwright.config';


test('05 Validate Navigation and Page Titles on Hubtel Blog', async ({ page }) => {
    await page.goto('https://blog.hubtel.com/category/news/#');

    
    await page.getByRole('link', { name: `For our communities;` }).click();

    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle('Pledge - Hubtel') 

  
    await page.getByRole('link', { name: 'Leadership & Team' }).click();
  
    // Wait for the search results page to load
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle('The Team - Hubtel')
  
    await page.getByRole('link', { name: 'Join the Team' }).click();
  
    // Wait for the search results page to load
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle('Hubtel Careers')
  
    await page.getByRole('link', { name: 'Our Stories' }).click();
  
    // Wait for the search results page to load
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle('The Official Hubtel Blog')
  
    await page.getByRole('link', { name: 'Legal' }).click();
  
    // Wait for the search results page to load
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle('General Terms of Service - Hubtel')
  
    await page.getByRole('link', { name: 'Premium Subscription Billing' }).click();
  
    // Wait for the search results page to load
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle('Premium Billing - Hubtel')
  
    await page.getByRole('link', { name: 'Connect to APIs' }).click();
    
    // Wait for the search results page to load
    // await page.waitForLoadState('domcontentloaded');
    // await page.waitForLoadState('networkidle');
    // await expect(page).toHaveTitle('Developer Portal')  // The Developer Portal instance opens a new page which will make this script fail
  
  });

