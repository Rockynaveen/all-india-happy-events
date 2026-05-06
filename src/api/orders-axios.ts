import axios from "axios";

const axiosWeb = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // ← make sure /api is here
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// ✅ Interceptor — auto-attaches token to every request
axiosWeb.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // ← change key if needed
    console.log("AXIOS INTERCEPTOR TOKEN:", token); // verify in console

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor — logs 401s clearly
axiosWeb.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      console.error("401 Unauthenticated — token may be missing or expired");
      console.error("Request headers sent:", error.config?.headers);
    }
    return Promise.reject(error);
  }
);

export default axiosWeb;