import { rest } from "./rest";
import {
  CODE_POSITION_RESPONSE,
  PROJECT_RESPONSE,
  USER_SIGNIN_REQUEST,
  USER_SIGNUP_REQUEST,
} from "./model";
import { API } from "./axiosConfig";
import axios from "axios";

// 프로젝트들 가져오기
export const getProject = async (): Promise<PROJECT_RESPONSE[]> => {
  const response = await API.get(`${rest.get.project}`, {
    params: {
      page: 0,
      size: 30,
    },
  });

  return response.data.data.content;
};


// 포지션 코드 가져오기
export const getCodePosition = async (): Promise<CODE_POSITION_RESPONSE[]> => {
  const response = await API.get(`${rest.get.code}/10?depth=2`);

  return response.data.data;
};

// 로그인
export const postUserSignIn = async (params: USER_SIGNIN_REQUEST) => {
  const response = await API.post(`${rest.post.userSignIn}`, params);

  return response.data;
};

// 어세스 토큰 발급
export const getAcceessToken = async () => {
  const response = await API.post(`${rest.post.getAcceessToken}`);

  return response.data;
};

// 회원가입
export const postUserSignUp = async (params: USER_SIGNUP_REQUEST) => {
  const response = await API.post(`${rest.post.userSignUp}`, {
    params: params,
  });

  return response.data;
};
