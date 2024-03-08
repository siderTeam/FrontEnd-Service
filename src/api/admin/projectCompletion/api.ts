import { API } from '@/api/axiosConfig';
import { rest } from '@/api/rest';
import { COMPLETION_LIST_RESPONSE, PROJECT_COMPLETION_LIST_REQUEST } from './model';

export const getProjectCompletionList = async (params: PROJECT_COMPLETION_LIST_REQUEST): Promise<COMPLETION_LIST_RESPONSE> => {
  const response = await API.get(rest.get.projectCompletionList, { params: params });
  
  console.log(response.data.data);
  return response.data.data;
};
