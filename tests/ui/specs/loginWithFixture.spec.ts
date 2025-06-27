import {test} from '../fixtures/loginFixture';
import tsData from '../../../testData/testUsers.ts';
//===================Variables==================
//===================Hooks=====================

//===================Tests=====================
test('valid login', async ({poManager}) =>  {
        await poManager.getLoginPage().login(tsData.username, tsData.correctpassword);
        await poManager.getHomePage().verifyValidLoginMsg();
});

test('invalid login', async({poManager, homePage}) => {
    await poManager.getLoginPage().login(tsData.username, tsData.incorrectpassword);
    await homePage.verifyInvalidLoginMsg();
});

