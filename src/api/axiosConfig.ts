import axios from 'axios';
import { getCookie, setCookie } from 'public/lib/util';
import { getAccessToken, getNewRefreshToken, userSignOut } from './api';

const getAuthorization = () => {
  const hasAccessToken = getCookie('accessToken');
  const cookie = getCookie(hasAccessToken ? 'accessToken' : 'refreshToken');

  if (cookie) {
    return `Bearer ${cookie}`;
  } else {
    return undefined;
    
  }
};

export const API = axios.create({
  headers: {
    'Content-type': 'application/json',
    Authorization: getAuthorization(),
  },
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const accessToken = getCookie('accessToken');

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

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

      setCookie('accessToken', response.data.accessToken); // 수정된 부분
    }

    // 리프레쉬 만료 코드
    if (status === 406) {
      userSignOut();
    }

    return Promise.reject(error);
  },
);
