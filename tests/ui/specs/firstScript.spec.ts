import {test, expect} from '@playwright/test';

test.describe('login tests @ft',  () => {

test('valid login',{
    tag : ['@ui', '@smoke'],
    annotation: {
         type: 'somke test',
         description: 'smoke test for valide login',
    }
}, async ({page}) =>  {
        await page.goto('https://practice.expandtesting.com/login');
        await page.locator("//*[@id='username']").fill('practice');
        await page.locator("//*[@id='password']").fill('SuperSecretPassword!');
        await page.locator("//*[@type='submit']").click();
        await expect(page.locator("//*[@id='flash']")).toContainText('You logged into a secure area!');
});

test('@ui invalid login', async({page}) => {
    await page.goto('https://practice.expandtesting.com/login');
    await page.locator("//*[@id='username']").fill('practice');
    await page.locator("//*[@id='password']").fill('wrongpassword');
    await page.locator("//*[@type='submit']").click();
    await expect.soft(page.locator("//*[@id='flash']")).toContainText('Your password is invalid!', {timeout: 4000});
    console.log("test completed");
});

});

