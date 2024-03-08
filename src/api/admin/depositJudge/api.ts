import { API } from "@/api/axiosConfig"
import { rest } from "@/api/rest"
import { DEPOSIT_LIST_REQUEST, DEPOSIT_LIST_RESPONSE } from "./model";

export const getDepositList = async (params: DEPOSIT_LIST_REQUEST):Promise<DEPOSIT_LIST_RESPONSE> => {
  const response = await API.get(rest.get.depositList, { params: params });

  console.log(response.data.data);
  return response.data.data;
};