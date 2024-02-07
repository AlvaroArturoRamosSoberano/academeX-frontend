import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api";

export const getCoursesData = (token) => {
  return axios.get(`${apiUrl}/courses`, {
    headers: {
      Authorization: `Bearer ${token}` // Incluye el token en las cabeceras como Authorization
    }
  });
};
