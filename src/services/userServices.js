import { getData, postData, updateData } from "../helpers/helperRequest";
export const userService = {
  getUser,
  addUser,
  updateUser,
};

function getUser(userId) {
  alert(userId);
  return getData(`/user/${userId}`);
}

function addUser(userId) {
  return postData('/user', { _id: userId });
}

function updateUser(userId, data) {
  return updateData(`/user/${userId}`, data);
}