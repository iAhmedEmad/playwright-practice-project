import { expect, type Locator, type Page } from "@playwright/test"; 
import { LoginPage } from "./loginPage";
import { HomePage } from "./homePage";

export class POManager {
    private readonly page: Page;
    private readonly loginPage: LoginPage;
    private readonly homePage: HomePage;
    //===================Constructors===============
    constructor(page: Page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.homePage = new HomePage(this.page);
    }
    //===================Actions====================
    getLoginPage(){
        return this.loginPage;
    }
    getHomePage(){
        return this.homePage;
    }
}