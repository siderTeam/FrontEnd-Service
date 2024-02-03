import axios from "axios";
import { rest } from "./rest";
import { PROJECT_RESPONSE } from "./model";

export const getProejct = async (): Promise<PROJECT_RESPONSE[]> => {
  const response = await axios.get(`${rest.get.proejct}`, {
    params: {
      page: 0,
      size: 30,
    },
  });

  return response.data.data.content;
};
