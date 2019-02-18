const API_URL = 'http://localhost:3000/';

export const memoServices = {
    addMemo
}

function addMemo(userId, memo){
    return postData(`/user/${userId}/memo`, { sourceWord: memo })
}

function postData(endpoint = ``, data = {}) {
    return fetch( API_URL + endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
}