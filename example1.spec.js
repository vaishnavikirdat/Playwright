const{ test,expect}= require('@playwright/test');
test('Test case 1: Page title contains w3school',async({page})=>{
    await page.goto('https://www.w3schools.com/');
    await expect(page).toHaveTitle(/w3schools/i);
});
test('Test case 2: Verify the "Learn HTML" button is visible and clickable',async({page})=>{
    await page.goto('https://www.w3schools.com/');
    const learnHtmlButton=page.locator('a.w3-button.ga-fp.tut-button:has-text("Learn HTML")');
    await expect(learnHtmlButton).toBeVisible();
    await learnHtmlButton.click();
    await expect(page).toHaveURL(/html/);
});
test("Test case 3: Search box",async({page})=>{
    await page.goto("https://www.w3schools.com/");
    await expect(page.getByLabel("Search")).toBeTruthy()
});