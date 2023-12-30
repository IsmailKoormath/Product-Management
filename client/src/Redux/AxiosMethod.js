import axios from "axios";

export const BASICURL = "http://localhost:4000";

export const axiosApi = axios.create({
  baseURL: BASICURL,
  withCredentials: true,
});

axiosApi.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers["Authorization"] =
      "Bearer " + localStorage.getItem("token");
  } else {
    console.log("error");
  }

  return config;
});
