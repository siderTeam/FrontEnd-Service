import {
  PROJECT_RESPONSE,
  CODE_RESPONSE,
  USER_SIGNIN_REQUEST,
  USER_SIGNUP_REQUEST,
  RESUME_RESPONSE,
} from "./model";
import { rest } from "./rest";
import { API } from "./axiosConfig";

//프로젝트 가져오기
export const getProject = async (): Promise<PROJECT_RESPONSE[]> => {
  const response = await API.get(`${rest.get.project}`, {
    params: {
      page: 0,
      size: 20,
    },
  });

  return response.data.data.content;
};

//코드 가져오기
export const getCode = async (
  groupId: number,
  depth: number
): Promise<CODE_RESPONSE[]> => {
  const response = await API.get(`${rest.get.code}/${groupId}?depth=${depth}`);

  return response.data.data;
};

//로그인
export const postUserSignIn = async (params: USER_SIGNIN_REQUEST) => {
  const response = await API.post(`${rest.post.userSignIn}`, params);

  return response.data;
};

//엑세스 토큰 발급
export const getAccessToken = async () => {
  const response = await API.post(`${rest.post.getAccessToken}`);

  return response.data;
};

//회원가입
export const postUserSignUp = async (params: USER_SIGNUP_REQUEST) => {
  const response = await API.post(`${rest.post.userSignUp}`, params);

  return response.data;
};

//지원서 목록 가져오기
export const getResumeList = async (
  page: number,
  perPage: number
): Promise<RESUME_RESPONSE[]> => {
  const response = await API.get(`${rest.get.getResumeList}`, {
    params: {
      page: page,
      perPage: perPage,
    },
  });
  
  return response.data.data;
};
