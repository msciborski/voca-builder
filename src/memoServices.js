const API_URL = 'http://localhost:3000/';

export const memoServices = {
    addMemo
}

function addMemo(userId, memo){
    return postData(`/user/${userId}/memo`, { sourceWord: memo })
}


/**
 * Helpers
 */

function postData(endpoint = ``, data = {}) {
    return request(endpoint, data, 'POST')
}

function getData(endpoint = ``, data = {}) {
    return request(endpoint, data)
}

function request(endpoint = ``, data = {}, method = 'GET'){
    return fetch( API_URL + endpoint, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json());
}