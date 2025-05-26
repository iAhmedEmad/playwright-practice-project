import {test} from '@playwright/test';
import { POManager } from '../pages/poManageer.ts';   
import jsonData from '../../../testData/testUsers.json';
import tsData from '../../../testData/testUsers.ts';
//===================Variables==================
let poManager: POManager;
// json format -> string -> parse to ts object
const parsedJsonData = JSON.parse(JSON.stringify(jsonData))
//===================Hooks=====================

// test.describe.configure({mode: 'serial'}); // run tests in serial mode

test.beforeAll('these actions run before all tests', async () => {
    console.log("this runs before all tests");
})

test.beforeEach('these actions run before each tests', async ({page}, testinfo) => {
    poManager = new POManager(page);
    await poManager.getLoginPage().oPenPortal();
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
        await poManager.getLoginPage().login(tsData.username, tsData.correctpassword);
        await page.pause();
        await poManager.getHomePage().verifyValidLoginMsg();
});

test('invalid login', async({page}) => {
    await poManager.getLoginPage().login(tsData.username, tsData.incorrectpassword);
    await page.pause();
    await poManager.getHomePage().verifyInvalidLoginMsg();
});

});