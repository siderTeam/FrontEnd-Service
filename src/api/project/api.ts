import { API } from '../axiosConfig';
import { rest } from '../rest';
import { CREATE_PROJECT_REQUEST, PROJECT_REQUEST, PROJECT_RESPONSE } from './model';

//프로젝트 가져오기
export const getProject = async (params: PROJECT_REQUEST): Promise<PROJECT_RESPONSE[]> => {
  const response = await API.get(`${rest.get.project}`, { params });

  return response.data.data.content;
};

//모집글 등록
export const postCreateProject = async (params: CREATE_PROJECT_REQUEST) => {
  const response = await API.post(`${rest.post.createProject}`, params);

  return response.data;
};
