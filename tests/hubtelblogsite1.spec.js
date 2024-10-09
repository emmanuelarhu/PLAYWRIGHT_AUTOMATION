const { test, expect } = require('@playwright/test');

test.describe('Hubtel Blog Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://blog.hubtel.com/');
  });

  test('Navigation and Header Elements Visibility', async ({ page }) => {
    // Test navigation links
    const navLinks = [
      { role: 'link', name: 'Blog' },
      { role: 'link', name: 'News' },
      { role: 'link', name: 'Customer Stories' },
      { role: 'link', name: 'Product Updates' },
      { role: 'link', name: 'Guides' },
      { role: 'link', name: 'Inside Hubtel' }
    ];
    
    await expect(page.getByRole('link', { name: 'Press Releases', exact: true })).toBeVisible();
      
    for (const link of navLinks) {
      await expect(page.getByRole(link.role, { name: link.name })).toBeVisible();
    }

    // Test header elements
    await expect(page.getByText('Blog News Press Releases')).toBeVisible();
    await expect(page.locator('#navbarDropdownMenuLink')).toBeVisible();
    // await expect(page.getByLabel('', { exact: true }).locator('div').first()).toBeVisible();
  });


  test('Featured Content Visibility', async ({ page }) => {
    // Test featured articles
    await expect(page.getByRole('link', { 
      name: 'Correction of False Claims About ECG Commercial Agreement', exact: true })).toBeVisible();
  });

  test('Blog Cards Visibility', async ({ page }) => {
    // Test blog card containers

    await expect(page.getByRole ('link', {name: 'Correction of False Claims About ECG Commercial Agreement', exact: true})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Hubtel Opens Ghana’s First'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Hubtel Ranked Ghana\'s Fastest'})).toBeVisible();
    await expect(page.locator('p').filter({ hasText: 'Hubtel Announces Completion'})).toBeVisible();
    

    await expect(page.locator('.blog-card-image-container > .text-decoration-none').first()).toBeVisible();
    await page.getByRole('link', { name: 'Correction of False Claims About ECG Commercial Agreement', exact: true })

  });

  test('Category Sections Visibility', async ({ page }) => {
    // Test category headers and descriptions
    const categories = [
      { heading: 'Press Releases', description: 'Stay informed about Hubtel' },
      { heading: 'News', description: 'Catch all the latest' },
      { heading: 'Customer Stories', description: 'Stories about our customers' },
      { heading: 'Product Updates', description: 'Discover the latest product' },
      { heading: 'Guides', description: 'Learn the ins and outs of' },
      { heading: 'Inside Hubtel', description: 'Stories about our people,' }
    ];

    for (const category of categories) {
      await expect(page.getByRole('heading', { name: category.heading })).toBeVisible();
      await expect(page.getByText(category.description)).toBeVisible();
    }
  });

  test('Footer Content', async ({ page }) => {
    await expect(page.getByText('©2005 - 2024 Hubtel Our')).toBeVisible();
  });
});  



