import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://allhappyevents.jbservices.in/api",
  headers: {
    "Content-Type": "application/json"
  }
});

//  Token interceptor
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;