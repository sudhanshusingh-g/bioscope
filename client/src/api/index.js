import axios from "axios";

const token=localStorage.getItem("token");

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

