import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api";

export const getData = (params, token) => {
  const config = {
    params: params, // Incluir cualquier otro parámetro que necesite
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return axios.get(`${apiUrl}/levels`, config);
};

export const sendData = (formData, token) => {
  return axios.postForm(`${apiUrl}/levels`, formData, {
    headers: {
      Authorization: `Bearer ${token}` // Incluye el token en las cabeceras como Authorization
    }
  });
};

export const updateData = (id, formData, token) => {
  return axios.postForm(`${apiUrl}/levels/${id}?_method=PUT`, formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const deleteData = (id, token) => {
  return axios.delete(`${apiUrl}/levels/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
