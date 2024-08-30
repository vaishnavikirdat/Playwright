// @ts-check
const { test, expect } = require('@playwright/test');
 
test("githubme", async ({page}) => {
  await page.goto("https://github.com/aryan1403");
 
  await expect(page).toHaveTitle(/aryan1403/)
})
 
 test("btnclick", async ({page}) => {
  await page.goto("https://www.google.co.in/");
 
  await expect(page.getByLabel("Search")).toBeTruthy()
}) 

test('get started link', async ({page}) => {
  await page.goto("https://playwright.dev/");
 
  await page.getByRole('link', {name: 'Get started'}).click()
 
  await expect(page.getByRole('heading', {name: "Installation"})).toBeVisible();
});
