import axios from "axios";
import { rest } from "./rest";
import {
  CODE_POSITION_RESPONSE,
  PROJECT_RESPONSE,
  USER_SIGNIN_REQUEST,
  USER_SIGNUP_REQUEST,
} from "./model";

export const getProject = async (): Promise<PROJECT_RESPONSE[]> => {
  const response = await axios.get(`${rest.get.project}`, {
    params: {
      page: 0,
      size: 30,
    },
  });

  return response.data.data.content;
};

export const getCodePosition = async (): Promise<CODE_POSITION_RESPONSE[]> => {
  const response = await axios.get(`${rest.get.code}/10?depth=2`);

  return response.data.data;
};

export const postUserSignIn = async (params: USER_SIGNIN_REQUEST) => {
  const response = await axios.post(`${rest.post.userSignIn}`, params);

  return response.data;
};

export const postUserSignUp = async (params: USER_SIGNUP_REQUEST) => {
  const response = await axios.post(`${rest.post.userSignUp}`, {
    params: params,
  });

  return response.data;
};
