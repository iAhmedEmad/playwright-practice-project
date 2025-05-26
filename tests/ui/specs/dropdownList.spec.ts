import{ test, expect } from '@playwright/test'; 

test.describe('Dropdown List Tests', () => {
    test('Dropdown List', async({page}) => {
        await page.goto('https://practice.expandtesting.com/dropdown');
        // 1- label
        // await page.locator("#country").selectOption({label: 'Egypt'});
        // 2- displayed text
        // await page.locator("#country").selectOption('Egypt');
        // 3- value (the value in DOM)
        // await page.locator("#country").selectOption('EG');
        // 4 -index 
        // await page.locator("#country").selectOption({index: 1});
        // 5- another way
        // await page.selectOption('#country',{index: 1});
        // await page.selectOption('#country',{label: 'Egypt'});
        // await page.selectOption('#country','EG');

        // assertions
        // 1- list count approach 1
        // const options = page.locator("#country").locator("option");
        // await expect(options).toHaveCount(252);

        // 2- list count approach 2
        // const optionsCount = await page.$$("#country  option");
        // // await expect(optionsCount).toHaveLength(252);
        // await expect(optionsCount.length).toBe(252);

        // 3- content approach 1
        // const textContent = await page.locator("#country").textContent();
        // await expect(textContent).toContain('Egypt');
        const textContent2 = await page.locator("#country").innerText();
        await expect(textContent2?.includes('Egypt')).toBeTruthy();




    });

});