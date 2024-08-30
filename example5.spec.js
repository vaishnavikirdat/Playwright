// @ts-check
const { test, expect } = require('@playwright/test');
test('cloud that', async ({page}) => {
    await page.goto("https://testprep.cloudthat.com/login/index.php");
    await page.getByPlaceholder("Username or email").fill('xyz@gmail.com');
    await page.getByPlaceholder("Password").fill("123");
   
    await page.locator("#loginbtn").click()
   
    // T&C
    // checkbox
    // await page.getByLabel("I agree to the terms & conditions").check()
   
    // radio btn
    // await expect(page.getByLabel("I agree to the terms & conditions")).toBeChecked()
  });
   
  