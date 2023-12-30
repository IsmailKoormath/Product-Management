import axios from "axios";

export const BASICURL = "http://localhost:5000";

export const axiosApi = axios.create({
  baseURL: BASICURL,
  withCredentials: true,
});

axiosApi.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers["Authorization"] =
      "Token " + localStorage.getItem("token");
  } else {
    console.log("error");
  }

  return config;
});
