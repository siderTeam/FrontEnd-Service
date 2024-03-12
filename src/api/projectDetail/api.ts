import { API } from "../axiosConfig";
import { rest } from "../rest";
import { PROJECT_DETAIL_RESPONSE } from "./model";

//프로젝트 단건 조회
export const getProjectDetail = async (projectId: number): Promise<PROJECT_DETAIL_RESPONSE> => {
  const response = await API.get(`${rest.get.projectDetail}/${projectId}`);

  return response.data.data;
};
