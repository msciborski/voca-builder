import { getData, postData } from "../helpers/helperRequest";

export const memoServices = {
    addMemo,
    getMemos,
    getLastMemos
}

function addMemo(userId, memo) {
    return postData(`/user/${userId}/memo`, { sourceWord: memo })
}

function getMemos(userId) {
    return getData(`/user/${userId}/memo`)
}

function getLastMemos(userId) {
    return getData(`/user/${userId}/memo`)
}