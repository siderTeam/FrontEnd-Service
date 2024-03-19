import { API } from '../axiosConfig';
import { rest } from '../rest';
import { SIGN_UP_REQUEST, USER_INFO_RESPONSE, USER_INFO_UPDATE_REQUEST } from './model';

//회원가입
export const postUserSignUp = async (params: SIGN_UP_REQUEST) => {
  const response = await API.post(`${rest.post.userSignUp}`, params);

  return response.data;
};

//회원 정보 가져오기 (마이페이지)
export const getUserInfo = async (): Promise<USER_INFO_RESPONSE> => {
  const response = await API.get(rest.get.userInfo);

  return response.data.data;
};

//회원 정보 수정
export const updateUserInfo = async (params: USER_INFO_UPDATE_REQUEST) => {
  const response = await API.put(`${rest.put.updateUserInfo}`, params);

  return response.data;
};

// 로그아웃
export const signOut = async (): Promise<USER_INFO_RESPONSE> => {
  const response = await API.post(rest.post.signOut);

  return response.data.data;
};
