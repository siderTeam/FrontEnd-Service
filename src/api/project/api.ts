import { API } from '../axiosConfig';
import { rest } from '../rest';
<<<<<<< HEAD
import { CREATE_PROJECT_REQUEST, PROJECT_REQUEST, PROJECT_RESPONSE } from './model';
=======
import { APPLY_PROJECT_REQUEST, APPLY_PROJECT_USER_RESPONSE, CREATE_PROJECT_REQUEST, PROJECT_DETAIL_RESPONSE, PROJECT_RESPONSE, REPLY_REQUEST } from './model';
>>>>>>> 0fed47f95efcbae0c76a3bfba63a274253f48265

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
export const createReply = async (projectId: number, params: REPLY_REQUEST) => {
  const response = await API.post(`${rest.post.createReply}/${projectId}`, params);

  return response.data;
};

//프로젝트 지원
export const applyProject = async (params: APPLY_PROJECT_REQUEST) => {
  const response = await API.post(`${rest.post.applyProject}`, params);

  return response.data;
};

//프로젝트별 전체 참가 신청 조회
export const getApplyProjectUser = async (projectId: number): Promise<APPLY_PROJECT_USER_RESPONSE> => {
  const response = await API.get(`${rest.get.applyProjectUser}/${projectId}`);

  return response.data.data;
};
