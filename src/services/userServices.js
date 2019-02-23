import { getData, postData } from "../helpers/helperRequest";

export function getUser(userId) {
  alert(userId);
  return getData(`/user/${userId}`);
}

export function addUser(userId) {
  return postData('user', { _id: userId });
}