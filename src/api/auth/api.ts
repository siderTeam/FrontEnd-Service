import { API } from '../axiosConfig';
import { rest } from '../rest';
import { SIGN_UP_REQUEST } from './model';

//회원가입
export const postUserSignUp = async (params: SIGN_UP_REQUEST) => {
  const response = await API.post(`${rest.post.userSignUp}`, params);

  return response.data;
};
