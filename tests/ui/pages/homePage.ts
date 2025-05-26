import { expect, type Locator, type Page } from "@playwright/test";  // locators (type Locator), Actions (type Page) & validations (expect)

export class Homepage {
    //===================Locators===================
    readonly page: Page;
    readonly msgAfterLogin: Locator;
    //===================Variables==================
    readonly validLoginMsg: string = "You logged into a secure area!";
    readonly invalidLoginMsg: string = "Your password is invalid!";
    //===================Constructors===============
    constructor(page: Page){
        this.page = page;
        this.msgAfterLogin = page.locator("//*[@id='flash']");
    }
    //===================Actions====================
    //===================Validations================
    async verifyValidLoginMsg(){
        await expect(this.msgAfterLogin).toHaveText(this.validLoginMsg);
    }
    async verifyInvalidLoginMsg(){
        await expect(this.msgAfterLogin).toHaveText(this.invalidLoginMsg);
    }

}