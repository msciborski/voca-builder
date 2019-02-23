// const env = process.env.NODE_ENV;
const env = 'development';
import { config } from "../config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: config.development.apiUrl,
});

export function postData(endpoint = ``, data = {}) {
  console.log(config.development.apiUrl);
  return axiosInstance.post(endpoint, data);
}

export function getData(endpoint = ``) {
  console.log(config.development.apiUrl);
  return axiosInstance.get(endpoint);
}