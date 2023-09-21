import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  withCredentials: true,
});

api.interceptors.response.use(
  (resp) => resp,
  (error) => {
    if (error.response?.status == 401 && error.response?.data?.url)
      window.location.href = error.response.data.url;
    else return Promise.reject(error);
  }
);
