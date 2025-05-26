import {test, expect} from '@playwright/test';

test.beforeAll('these actions run before all tests', async () => {
    console.log("this runs before all tests");
})

test.beforeEach('these actions run before each tests', async ({page}, testinfo) => {
    await page.goto('https://practice.expandtesting.com/login');
    console.log('starting test: ' + testinfo.title);
})

test.afterAll('these actions run after all tests', async () => {
    console.log("this runs after all tests");
})

test.afterEach('these actions run after each tests', async ({}, testinfo) => {
    console.log('End test: ' + testinfo.title);
})

test.describe('login tests',  () => {
test('valid login', async ({page}) =>  {
        await page.locator("//*[@id='username']").fill('practice');
        await page.locator("//*[@id='password']").fill('SuperSecretPassword!');
        await page.locator("//*[@type='submit']").click();
        await expect(page.locator("//*[@id='flash']")).toContainText('You logged into a secure area!');
});

test('invalid login', async({page}) => {
    await page.locator("//*[@id='username']").fill('practice');
    await page.locator("//*[@id='password']").fill('wrongpassword');
    await page.locator("//*[@type='submit']").click();
    await expect.soft(page.locator("//*[@id='flash']")).toContainText('Your password is invalid!');

});

});