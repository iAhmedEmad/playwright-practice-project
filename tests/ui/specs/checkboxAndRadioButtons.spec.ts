import {test, expect} from '@playwright/test';

test.describe('checkbox And RadioButton Tests', ()=>{

    test('checkboxs', async({page}) => {
        await page.goto('https://practice.expandtesting.com/checkboxes');

        // using click
        // await page.locator("//input[@id='checkbox1']").click();
        // await page.locator("//input[@id='checkbox2']").click();

        // using check
        // await page.locator("//input[@id='checkbox1']").check({force:true});
        // await page.locator("//input[@id='checkbox2']").uncheck();

        // // assertions
        // await expect(page.locator("//input[@id='checkbox1']")).toBeChecked();
        // await expect(page.locator("//input[@id='checkbox2']")).not.toBeChecked();

        const checkboxLocators = [
            page.locator("//input[@id='checkbox1']"),
            page.locator("//input[@id='checkbox2']")
        ]
        for (const checkbox of checkboxLocators) {
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        } 
    } )

    test('radioButtons', async({page}) => {
        await page.goto('https://practice.expandtesting.com/radio-buttons');
        // using  click
        await page.locator("id=red").click({force:true});
        await page.getByLabel("Black").check();

        //assertions
        await expect(page.locator("id=red")).not.toBeChecked;
        await expect(page.getByLabel("Black")).toBeChecked;
        } );


});