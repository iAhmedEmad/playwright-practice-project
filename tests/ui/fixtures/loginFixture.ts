import { test as base } from '@playwright/test'; 
import { POManager } from '../pages/poManager.ts';
import { HomePage } from '../pages/homePage.ts';
type myFixtures = {
    poManager: POManager;
    homePage: HomePage;
}

export const test = base.extend<myFixtures>({
    poManager: async ({ page }, use) => {
        const poManager = new POManager(page);
        await poManager.getLoginPage().oPenPortal();
        use(poManager);
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        use(homePage);
    }

});
