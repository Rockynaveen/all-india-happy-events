import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://allhappyevents.jbservices.in/api",
  headers: {
    "Content-Type": "application/json",
  },
});


// Function to set token manually
export const setAuthToken = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

export default axiosInstance;