import { getData, postData } from "../helpers/helperRequest";

export const utilsService = {
  getLanguages,
};

function getLanguages() {
  return getData('language');
}