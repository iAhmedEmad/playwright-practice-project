import {test, expect} from '@playwright/test';

test.describe('handling web elements by index and filter', () => {

    test('get element by index and filter', async({page}) => {
        await page.goto("https://practice.expandtesting.com/");
        // 1- index
        // normal way to select element with index 
        await page.locator("(//div[@class='card-body'])[2]").click;
        // playwright way 
        await page.locator("//div[@class='card-body']").locator('nth=1').click();
        // the benefit of playwright way is you will need to create only one locator for the parent element and then you can select any child element using nth
        const baseLocator = page.locator("//div[@class='card-body']");
        // to select first element ('nth=0')
        await baseLocator.locator('nth=0').click();
        // to select last element ('nth=-1')
        await baseLocator.locator('nth=-1').click();

        // 2- filter
        await baseLocator.filter({hasText: 'Test Login Page'}).click();    
        await baseLocator.filter({has: page.locator("//p[contains(text(),'Test Login Page for Automation Testing Practice, a')]")}).click();    


    });


});

