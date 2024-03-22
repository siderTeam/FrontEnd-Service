import { API } from '../axiosConfig';
import { rest } from '../rest';
import {
  APPLY_PROJECT_REQUEST,
  APPLY_PROJECT_USER_DETAIL_RESPONSE,
  APPLY_PROJECT_USER_RESPONSE,
  CHECK_JOIN_PROJECT,
  CREATE_PROJECT_REQUEST,
  JOIN_PROJECT_STATUS_REQUEST,
  PROJECT_DETAIL_RESPONSE,
  PROJECT_ORDER_BY_REQUEST,
  PROJECT_REQUEST,
  PROJECT_RESPONSE,
  RECRUIT_STATUS_LIST_RESPONSE,
  PROJECT_STATUS_REQUEST,
  REPLY_REQUEST,
} from './model';

//프로젝트 가져오기
export const postProject = async (params: PROJECT_REQUEST): Promise<PROJECT_RESPONSE[]> => {
  const response = await API.post(`${rest.post.project}`, params);

  return response.data.data.content;
};

//프로젝트 정렬
export const getProjectOrderBy = async ({ orderBy, size, sort }: PROJECT_ORDER_BY_REQUEST): Promise<PROJECT_RESPONSE[]> => {
  const response = await API.get(`${rest.get.projectOrderBy}?orderBy=${orderBy}&size=${size}&sort=${sort}`);

  return response.data.data;
};

//프로젝트 등록
export const postCreateProject = async (params: CREATE_PROJECT_REQUEST) => {
  const response = await API.post(`${rest.post.createProject}`, params);

  return response.data;
};

//프로젝트 삭제
export const deleteProject = async (projectId: number) => {
  const response = await API.delete(`${rest.delete.deleteProject}/${projectId}`);

  return response.data;
};

//프로젝트 상태 변경
export const updateProjectStatus = async (params: PROJECT_STATUS_REQUEST) => {
  const resposne = await API.put(`${rest.put.updateProjectStatus}`, params);

  return resposne.data;
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

//프로젝트 댓글 수정
export const updateReply = async (replyId: number, params: REPLY_REQUEST) => {
  const response = await API.put(`${rest.put.updateReply}/${replyId}`, params);

  return response.data;
};

//프로젝트 댓글 삭제
export const deleteReply = async (replyId: number) => {
  const response = await API.delete(`${rest.delete.deleteReply}/${replyId}`);

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

//프로젝트별 참가 신청 조회 상세
export const getApplyProjectUserDetail = async (joinId: number): Promise<APPLY_PROJECT_USER_DETAIL_RESPONSE> => {
  const response = await API.get(`${rest.get.applyProjectUserDetail}/${joinId}`);

  return response.data.data;
};

//프로젝트 참가 상태 수정
export const updateJoinProjectStatus = async (params: JOIN_PROJECT_STATUS_REQUEST) => {
  const response = await API.put(`${rest.put.updateJoinStatus}`, params);

  return response.data;
};

//프로젝트 지원여부(로그인 한 유저 대상)
export const getCheckJoinProject = async (projectId: number): Promise<CHECK_JOIN_PROJECT> => {
  const response = await API.get(`${rest.get.checkJoinProject}/${projectId}`);

  return response.data.data;
};

//프로젝트 지원 현황(내가 지원한 프로젝트 리스트)
export const getRecruitStatus = async (): Promise<RECRUIT_STATUS_LIST_RESPONSE[]> => {
  const response = await API.get(`${rest.get.recruitStatus}`);

  return response.data.data;
};

//프로젝트 지원 취소(내가 지원한 프로젝트 취소)
export const deleteRecruitment = async (projectId: number) => {
  const response = await API.delete(`${rest.delete.deleteRecruitment}/${projectId}`);

  return response.data;
};

