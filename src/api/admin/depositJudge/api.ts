import { API } from '@/api/axiosConfig';
import { rest } from '@/api/rest';
import { DEPOSIT_JUDGE_LIST_REQUEST, DEPOSIT_JUDGE_LIST_RESPONSE } from './model';

export const getDepositJudgeList = async (params: DEPOSIT_JUDGE_LIST_REQUEST): Promise<DEPOSIT_JUDGE_LIST_RESPONSE> => {
  const response = await API.get(rest.get.depositJudgeList, { params: params });

  return response.data.data;
};
