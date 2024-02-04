import axios from "axios";
import { PROJECT_RESPONSE, POSITION_CODE_RESPONSE } from "./model";
import { rest } from "./rest";

export const getProject = async (): Promise<PROJECT_RESPONSE[]> => {
  const response = await axios.get(`${rest.get.project}`, {
    params: {
      page: 0,
      size: 20,
    },
  });

  return response.data.data.content;
}

export const getPositionCode = async (): Promise<POSITION_CODE_RESPONSE[]> => {
  const response = await axios.get(`${rest.get.code}/10?depth=2`);

  return response.data.data;
};