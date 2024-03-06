import { API } from '@/api/axiosConfig';
import { rest } from '@/api/rest';
import { AUDIT_LIST_REQUEST, AUDIT_LIST_RESPONSE } from './model';

export const getAuditList = async (params: AUDIT_LIST_REQUEST): Promise<AUDIT_LIST_RESPONSE> => {
  const response = await API.get(rest.get.auditList, { params: params });

  return response.data.data;
};
