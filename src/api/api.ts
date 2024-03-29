import { rest } from './rest';
import { API } from './axiosConfig';
import { USER_RESUME_RESPONSE, USER_SIGNIN_REQUEST, USER_SIGNUP_REQUEST, CODE_RESPONSE, USER_INFO_UPDATE_REQUEST } from './auth/model';

//코드 가져오기
export const getCode = async (groupId: number, depth: number): Promise<CODE_RESPONSE[]> => {
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
export const getAccessToken = async (refreshToken?: string) => {
  const response = await API.post(`${rest.post.getAccessToken}`, undefined, {
    headers: {
      Authorization: refreshToken ? `Bearer ${refreshToken}` : undefined,
    },
  });

  return response.data;
};

//초비상 리프레쉬 토큰 발급
export const getNewRefreshToken = async () => {
  const response = await API.post(`${rest.post.getChoBiSangToken}`);

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
      perPage: 50,
    },
  });

  return response.data.data;
};
