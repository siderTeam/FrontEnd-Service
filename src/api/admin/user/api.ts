import { rest } from '@/api/rest';
import { USER_LIST_REQUEST, USER_LIST_RESPONSE } from './model';
import { API } from '@/api/axiosConfig';

// 유저 리스트 가져오기
export const getUserList = async (params: USER_LIST_REQUEST): Promise<USER_LIST_RESPONSE[]> => {
  const response = await API.get(`${rest.get.adminUserList}`, { params: params });

  return response.data.data.content;
};
