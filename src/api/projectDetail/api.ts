import { API } from '../axiosConfig';
import { rest } from '../rest';
import { PROJECT_DETAIL_RESPONSE } from './model';

//프로젝트 단건 조회
export const getProjectDetail = async (projectId: number): Promise<PROJECT_DETAIL_RESPONSE> => {
  const response = await API.get(`${rest.get.projectDetail}/${projectId}`);

  return response.data.data;
};

//프로젝트 조회수 올리기
export const IncreaseProjectView = async (projectId: number) => {
  const response = await API.get(`${rest.get.IncreaseProjectView}/${projectId}`);

  return response.data.data;
};
