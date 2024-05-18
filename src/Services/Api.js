import axios from "axios";
axios.defaults.baseURL = "https://identiytoolkit.googleapis.com/v1";
const API_KEY = "AIzaSyBgkh5bF0VeEGMdIuExzaM8K_-Case1PA";
const REGISRTER_URL = `/accouts:signUp?key=${API_KEY}`;

export const RegisterApi = (storeValues) => {
  let data = {
    displayName: storeValues.name,
    email: storeValues.email,
    pass: storeValues.pass,
  };
  return axios.post(REGISRTER_URL, { data: data });
};
