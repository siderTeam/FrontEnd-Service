import { API } from '../axiosConfig';
import { rest } from '../rest';
import { CREATE_PROJECT_REQUEST } from './model';

export const postCreateProject = async (params: CREATE_PROJECT_REQUEST) => {
  const response = await API.post(`${rest.post.createProject}`, params);

  return response.data;
};
