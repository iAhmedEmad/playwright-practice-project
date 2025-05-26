import {test, expect} from '@playwright/test';

test('visual compersion', async({page}) => {

    await page.goto('https://qa-practice.netlify.app/auth_ecommerce');
    await expect(page).toHaveScreenshot({maxDiffPixels : 0});
})

test('visual compersion for dynamic elements', async({page}) => {

    await page.goto('https://qa-practice.netlify.app/visual');
    await expect(page).toHaveScreenshot({maxDiffPixels : 0});
})

// by practice I found that if the baseline screenshot is taken in headeless mode,
// then the test should run in headeless mode to pass otherwise It will fail.
// and wiseversa 