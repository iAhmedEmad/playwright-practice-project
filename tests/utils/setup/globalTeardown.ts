import { chromium , firefox, FullConfig } from "@playwright/test";

async function globalTeardown(config: FullConfig) {
    const {baseURL} = config.projects[0].use;
    const browser = await chromium.launch({headless: false, timeout: 10000});
    const page = await browser.newPage();

    await page.goto(baseURL!);
    await page.pause();
    await browser.close();
}   


export default globalTeardown;