import {test, expect} from '@playwright/test'
import userRequest from '../endPoints/usersEndPoints'
//================Varaibles=========================
let response;
let responseJson;
let responseHeaders;

//====================Tests=========================
test.describe('users API tests @api' , async() => {
    //===================get 200=========================
    test('check get users api success response', async({request})=>{

        response = await userRequest.getUsers({request});
        
        // print response headers
        responseHeaders = await response.headers();
        console.log(responseHeaders);

        // print response json body
        responseJson = await response.json();
        // console.log(jsonResponse);

        // assert on status code
        expect(response.status()).toBe(200);
        // assert on list length
        expect(responseJson.length).toBe(100);
        // expect(jsonResponse).toHaveLength(100);

        // assert on response header
        expect(responseHeaders.connection).toBe("keep-alive");


        //===================SUMMARY=========================
        // 1. response ==> response object  ==> to assert on status code
        // 2. responseHeaders = response.headers(); ==> to assert on response headers
        // 3. responseJson = response.json(); ==> to assert on response body
    })
    //===================get with query param 200 =========================
    test('check get users response for specific user', async({request})=>{
        response = await userRequest.getUser2({request});
        responseJson = await response.json();
        console.log(responseJson);
        // assert on response body 
        expect(responseJson[0].title).toBe("qui est esse");
    })
        //===================post 201 =========================
    test('check post user response, status code & body', async({request})=>{
        response = await userRequest.createUser({request});
        responseJson = await response.json();
        console.log(responseJson);
        // assert on response body
        expect(responseJson.id).toBe(101);
    })  
});
