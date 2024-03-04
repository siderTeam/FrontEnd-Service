import { API } from "../axiosConfig";
import { rest } from "../rest";
import { USER_RESUME_RESPONSE } from "./model";

//이력서 목록 가져오기
export const getResume = async (): Promise<USER_RESUME_RESPONSE> => {
    const response = await API.get(`${rest.get.resume}`, {
      params: {
        page: 1,
        perPage: 50,
      },
    });
  
    return response.data.data;
  };