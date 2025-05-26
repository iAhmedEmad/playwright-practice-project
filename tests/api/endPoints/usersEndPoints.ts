
//====================Requests Objects====================
// const baseUrl = "https://jsonplaceholder.typicode.com";
const usersEndPoint = '/posts';
const userParam = {
    "id": 2
}
const requestBody = {
    "title": "foo",
    "body": "bar",
    "userId": 102
}
const requestHeaders = {
    "Content-Type": "application/json"
}
//====================Requests====================
//====================GET 200====================
async function getUsers({request}){
    const response = await request.get(usersEndPoint);
    return response;
}
//====================GET with param 200====================
async function getUser2({request}){
    const response = request.get(usersEndPoint, {
            params: userParam
        })
    return response;
}
//====================post 201====================
async function createUser({request}){
    const response = request.post(usersEndPoint, {
        // Headers : requestHeaders,    
        body: requestBody
        })
    return response;
}

export default {getUsers, getUser2, createUser};