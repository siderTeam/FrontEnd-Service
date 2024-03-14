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
  content: string;
  deposit: number;
  count: number;
};
