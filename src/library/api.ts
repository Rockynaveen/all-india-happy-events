import axios from "axios";

const Api = axios.create({
  baseURL: "https://allhappyevents.jbservices.in/api",
  headers: {
    "Content-Type": "application/json",
  },
});

Api.interceptors.response.use(
  (res) => res,
  (error) => {
    const message =
      error?.response?.data?.message || "Something went wrong";
    return Promise.reject(new Error(message));
  }
);

export default Api;