import { POSITION_CODE } from 'public/lib/enum';

export type CREATE_PROJECT_REQUEST = {
  count: number;
  connect: string;
  positionCodeList: POSITION_CODE[] | null;
  skillCodeList: number[];
  recruitEndDate: string;
  month: number;
  deposit: number;
  requiredContentsList: {
    content: string;
    point: number;
  }[];
  name: string;
  content: string;
};

export type PROJECT_RESPONSE = {
  id: number;
  name: string;
  recruitStartDate: string;
  recruitEndDate: string;
  deposit: number;
  count: number;
  view: number;
  createdDate: string;
};

export type PROJECT_REQUEST = {
  keyword: string;
  positionCode: number[];
  skillCode: number[];
  status: number;
  page: number;
  size: number;
};
