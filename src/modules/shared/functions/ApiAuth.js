import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api";

export const auth = (formData) => {
  return axios.post(`${apiUrl}/login`, formData);
};

export const register = (formData) => {
  return axios.post(`${apiUrl}/register`, formData);
};
