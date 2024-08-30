const { test, expect } = require('@playwright/test');

test.describe('W3Schools Homepage Tests', () => {
 
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.w3schools.com');
  });
   test('should have a search input field', async ({ page }) => {
     const searchInput = page.locator('input#search2');
   await expect(searchInput).toBeVisible();
   });

test('should wait for the link to become visible', async ({ page }) => {
    await page.goto('https://www.w3schools.com');
   
    // Automatically waits for the link to be visible
    const link = page.locator('a[href="/html/"]');
    await expect(link).toBeVisible();
  });

  test('should wait for specific content to appear', async ({ page }) => {
    await page.goto('https://www.w3schools.com');
   
    // Wait for the HTML tutorial link to be visible
    await page.waitForSelector('a[href="/html/"]', { state: 'visible' });
   
    // Verify that the link is visible
    const link = page.locator('a[href="/html/"]');
    await expect(link).toBeVisible();
  });
});
   