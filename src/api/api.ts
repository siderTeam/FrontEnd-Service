import {
  PROJECT_RESPONSE,
  CODE_RESPONSE,
  USER_SIGNIN_REQUEST,
  USER_SIGNUP_REQUEST,
  USER_RESUME_RESPONSE,
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

//로그아웃
export const userSignOut = async () => {
  const response = await API.get(`${rest.post.userSignOut}`);

  return response.data;
};

//엑세스 토큰 발급
export const getAccessToken = async () => {
  const response = await API.post(`${rest.post.getAccessToken}`);

  return response.data;
};

//초비상 리프레쉬 토큰 발급
export const getNewRefreshToken = async () => {
  const response = await API.post(`${rest.post.getChoBiSangToken}`);

  return response.data;
};

//회원가입
export const postUserSignUp = async (params: USER_SIGNUP_REQUEST) => {
  const response = await API.post(`${rest.post.userSignUp}`, params);

  return response.data;
};

//유저 아이디 가져오기 (아이디 중복 확인)
export const getUserId = async (username: string) => {
  const response = await API.get(`${rest.get.userId}?id=${username}`);

  return response.data;
};

//이력서 목록 가져오기
export const getResume = async (): Promise<USER_RESUME_RESPONSE[]> => {
  const response = await API.get(`${rest.get.resume}`, {
    params: {
      page: 1,
      per: 50,
    },
  });

  return response.data.data;
};
