import axios from "axios";
import { getCookie, setCookie } from "public/lib/util";
import { rest } from "./rest";

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

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 50003) {
      if (error.response.data.message === "refresh expired.") {
        const originalRequest = config;
        const refreshToken = await getCookie("refreshToken");
        // token refresh 요청
        const { data } = await axios.post(
          `${rest.post.getAccessToken}`, // token refresh api
          {},
          { headers: { authorization: `Bearer ${refreshToken}` } }
        );
        // 새로운 토큰 저장
        setCookie("accessToken", data.data.accessToken); // 수정된 부분
        originalRequest.headers.authorization = `Bearer ${data.data.accessToken}`;
        // 419로 요청 실패했던 요청 새로운 토큰으로 재요청
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);
