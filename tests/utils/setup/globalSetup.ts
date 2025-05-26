import { chromium , firefox, FullConfig } from "@playwright/test";
import { POManager } from "../../ui/pages/poManageer";
import testdata from "../../../testData/testUsers.ts";

async function globalSetup(config: FullConfig) {
    const {baseURL, storageState} = config.projects[0].use;
    
    const browser = await chromium.launch({headless: true, timeout: 10000});
    const page = await browser.newPage();

    const poManager = new POManager(page);

    // await poManager.getLoginPage().oPenPortal();
    await page.goto(baseURL!);
    
    await poManager.getLoginPage().login(testdata.username, testdata.correctpassword);

    // Save the storage state to a file
    await page.context().storageState({ path: storageState as string });
    await browser.close();

}   


export default globalSetup;