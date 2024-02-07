import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api";

export const getData = (params, token) => {
  const config = {
    params: params, // Aquí puedes incluir cualquier otro parámetro que necesites
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return axios.get(`${apiUrl}/statuses`, config);
};

export const sendData = (formData, token) => {
  return axios.postForm(`${apiUrl}/statuses`, formData, {
    headers: {
      Authorization: `Bearer ${token}` // Incluye el token en las cabeceras como Authorization
    }
  });
};

export const updateStatusesData = (id, formData, token) => {
  return axios.postForm(`${apiUrl}/statuses/${id}?_method=PUT`, formData, {
    headers: {
      Authorization: `Bearer ${token}` // Incluye el token en las cabeceras como Authorization
    }
  });
};

export const deleteData = (id, token) => {
  return axios.delete(`${apiUrl}/statuses/${id}`, {
    headers: {
      Authorization: `Bearer ${token}` // Incluye el token en las cabeceras como Authorization
    }
  });
};
