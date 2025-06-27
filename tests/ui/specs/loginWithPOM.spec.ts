import {test} from '@playwright/test';
import { LoginPage } from '../pages/loginPage.ts';
import { HomePage } from '../pages/homePage.ts'; 
import jsonData from '../../../testData/testUsers.json';
import tsData from '../../../testData/testUsers.ts';
//===================Variables==================
let loginPage: LoginPage;
let homePage: HomePage;

// json format -> string -> parse to ts object
const parsedJsonData = JSON.parse(JSON.stringify(jsonData))
//===================Hooks=====================

// test.describe.configure({mode: 'serial'}); // run tests in serial mode

test.beforeAll('these actions run before all tests', async () => {
    console.log("this runs before all tests");
})

test.beforeEach('these actions run before each tests', async ({page}, testinfo) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.oPenPortal();
    console.log('starting test: ' + testinfo.title);
})

test.afterAll('these actions run after all tests', async () => {
    console.log("this runs after all tests");
})

test.afterEach('these actions run after each tests', async ({}, testinfo) => {
    console.log('End test: ' + testinfo.title);
})

test.describe('login tests',  () => {

test('valid login', async ({page}) =>  {
        await loginPage.login(tsData.username, tsData.correctpassword);
        await homePage.verifyValidLoginMsg();
});

test('invalid login', async({page}) => {
    await loginPage.login(tsData.username, tsData.incorrectpassword);
    await homePage.verifyInvalidLoginMsg();
});

});