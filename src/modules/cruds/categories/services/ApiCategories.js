import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api";

export const getCategoriesData = (token) => {
  return axios.get(`${apiUrl}/categories`, {
    headers: {
      Authorization: `Bearer ${token}` // Incluye el token en las cabeceras como Authorization
    }
  });
};
