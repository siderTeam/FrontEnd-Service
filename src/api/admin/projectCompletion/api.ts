import { API } from '@/api/axiosConfig';
import { rest } from '@/api/rest';
import { COMPLETION_LIST_REQUEST, COMPLETION_LIST_RESPONSE } from './model';

export const getCompletionList = async (params: COMPLETION_LIST_REQUEST): Promise<COMPLETION_LIST_RESPONSE> => {
  const response = await API.get(rest.get.completionList, { params: params });

  return response.data.data;
};
