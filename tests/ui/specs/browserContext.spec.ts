import { test, webkit } from '@playwright/test';


test('test title', async() => {

  const browser = await webkit.launch();
   // Create a new incognito browser context.
  const context = await browser.newContext();
  
  const page = await context.newPage();
  
//   context.close();
//   browser.close();

  await page.goto('https://practice.expandtesting.com/login');
  await page.pause();

})