import { getData, postData, updateData } from "../helpers/helperRequest";
import { createGenerateClassName } from "jss";
export const userService = {
  getUser,
  addUser,
  updateUser,
};

function getUser(userId) {
  return getData(`/user/${userId}`);
}

function addUser(userId) {
  return postData('/user', { _id: userId });
}

function updateUser(userId, data) {
  updateLocalStorage(data);
  return updateData(`/user/${userId}`, data);
}

function updateLocalStorage(data) {
  var updateKeys = Object.keys(data);
  var user = JSON.parse(localStorage.getItem('user'));
  updateKeys.forEach(value => user[value] = data[value]);
  localStorage.setItem('user', JSON.stringify(user));
}