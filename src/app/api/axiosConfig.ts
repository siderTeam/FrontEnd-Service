import axios from "axios";
import { getCookie, setCookie } from "public/lib/util";
import { rest } from "./rest";
import { getAccessToken, getNewRefreshToken, postUserSignOut } from "./api";

const getAuthorization = () => {
  console.log("getAuthorization");
  const accessToken = getCookie("accessToken");

  if (accessToken) {
    return `Bearer ${accessToken}`;
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
  const hasAccessToken = getCookie("accessToken");
  const cookie = getCookie(hasAccessToken ? "accessToken" : "refreshToken");

  if (cookie) {
    config.headers.Authorization = `Bearer ${cookie}`;
  }

  return config;
});

//AccessToken이 만료되었을 때 refreshToken으로 accessToken 재발급
API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    // 어세스토큰이 만료 되었고 리프레쉬토큰이 살아있을 때 리프레쉬를 이용해서 accessToken 을 발급 받는 로직 부재
    if (status === 401) {
      const response = await getAccessToken();

      if (response.data.choooooooo___Biiiiiiiiiii___Sang) {
        await getNewRefreshToken();
      }

      setCookie("accessToken", response.data.accessToken);
    }

    //리프레쉬 만료 코드
    if (status === 406) {
      postUserSignOut();
    }

    return Promise.reject(error);
  }
);
