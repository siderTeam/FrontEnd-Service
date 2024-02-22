import axios from "axios";
import { getCookie } from "public/lib/util";

const getAuthorization = () => {
  const hasAccessToken = getCookie("AccessToken");
  const cookie = getCookie(hasAccessToken ? "AccessToken" : "RefreshToken");
  if (cookie) {
    return `Bearer ${cookie}`;
  } else {
    return undefined;
  }
};

export const API = axios.create({
  headers: {
    "Content-type": "application/json",
    Authorization: getAuthorization(),
  },
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const token = getCookie("AccessToken");
  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});
