import axios from "axios";
import { toast } from "react-toastify";

const createAxiosInstance = (baseURL) => {
  const api = axios.create({
    baseURL: baseURL,
  });

  api.interceptors.request.use(
    (config) => {
      const sessionData = localStorage.getItem("userData");
      const userDetails = sessionData ? JSON.parse(sessionData) : null;
      console.log(userDetails.result, "userData ");
      if (userDetails.result?.token) {
        config.headers["Authorization"] = `Bearer ${userDetails.token}`;
      } else {
        console.warn("⚠️ No token found in sessionData");
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        toast.error("Network error. Please check your connection.");
        return Promise.reject(error);
      }

      const { data, status } = error.response;
      if (status === 401) {
        toast.error("Unauthorized! Please log in again.");
        localStorage.removeItem("sessionData");
        window.location.href = "/login";
      }

      return Promise.reject(error);
    }
  );
  return api;
};
const apiurl = createAxiosInstance("http://localhost:5000/api");

export { apiurl };
