import { API } from '../axiosConfig';
import { rest } from '../rest';
import { PROJECT_DETAIL_RESPONSE, REPLY_REQUEST } from './model';

//프로젝트 단건 조회
export const getProjectDetail = async (projectId: number): Promise<PROJECT_DETAIL_RESPONSE> => {
  const response = await API.get(`${rest.get.projectDetail}/${projectId}`);

  return response.data.data;
};

//프로젝트 조회수 올리기
export const increaseProjectView = async (projectId: number) => {
  const response = await API.get(`${rest.get.increaseProjectView}/${projectId}`);

  return response.data.data;
};

//프로젝트 댓글 작성
export const createRely = async (projectId: number, params: REPLY_REQUEST) => {
  const response = await API.post(`${rest.post.createReply}/${projectId}`, params);

  return response.data;
};
