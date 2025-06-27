import { test as base } from '@playwright/test'; 
import { POManager } from '../pages/poManageer.ts';
import { Homepage } from '../pages/homePage.ts';

type myFixtures = {
    poManager: POManager;
    homePage: Homepage;
}

export const test = base.extend<myFixtures>({
    poManager: async ({ page }, use) => {
        const poManager = new POManager(page);
        await poManager.getLoginPage().oPenPortal();
        use(poManager);
    },

    homePage: async ({ page }, use) => {
        const homePage = new Homepage(page);
        use(homePage);
    }

});
