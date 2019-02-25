// const env = process.env.NODE_ENV;
const env = 'development';
import { config } from "../config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: config.development.apiUrl,
});

export function postData(endpoint = ``, data = {}) {
  return axiosInstance.post(endpoint, data);
}

export function getData(endpoint = ``) {
  return axiosInstance.get(endpoint);
}