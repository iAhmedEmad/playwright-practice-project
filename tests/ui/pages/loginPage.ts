import { expect, type Locator, type Page } from "@playwright/test";  // locators (type Locator), Actions (type Page) & validations (expect)

export class LoginPage {
    //===================Locators===================
    readonly page: Page;
    readonly username_tb: Locator;
    readonly password_tb: Locator;
    readonly login_btn: Locator;
    //===================Variables==================
    // readonly url: string = "https://practice.expandtesting.com/login";
    //===================Constructors===============
    constructor(page: Page){
        this.page = page;
        this.username_tb = page.locator("//*[@id='username']");
        this.password_tb = page.locator("//*[@id='password']");
        this.login_btn = page.locator("//*[@type='submit']");
    }
    //===================Actions====================
    async oPenPortal(){
        await this.page.goto('./login');
    }

    async login(username: string, password: string){
        await this.username_tb.fill(username);
        await this.password_tb.fill(password);
        await this.login_btn.click();
    }
    //===================Validations================

}