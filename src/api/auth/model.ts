import { POSITION_CODE } from 'public/lib/enum';

export interface SIGN_UP_REQUEST {
  username: string;
  name: string;
  password: string;
  nickname: string;
  career: number;
  phone: string;
  positionCode: POSITION_CODE | null;
}

export type PROJECT_RESPONSE = {
  id: number;
  name: string;
  recruitStartDate: string;
  recruitEndDate: string;
  content: string;
  deposit: number;
  count: number;
};

export type CODE_RESPONSE = {
  id: number;
  name: string;
};

export type USER_SIGNIN_REQUEST = {
  username: string;
  password: string;
};

export type USER_SIGNUP_REQUEST = {
  username: string;
  name: string;
  password: string;
  email: string;
  nickname: string;
  bankName: string;
  bankNo: string;
  bankUserName: string;
  phone: string;
  jobCode: number;
  positionCode: number[];
};

// export type NEWAC_REQUEST = {
//   data: string;
// };

export type USER_RESUME_RESPONSE = {
  id: number;
  name: string;
  contents: string;
  skill: string;
  positionCodeValueList: number[];
};

export type USER_ID_RESPONSE = {
  id: string;
};

export type USER_INFO_RESPONSE = {
  id: number;
  username: string;
  user: boolean;
  name: string;
  nickname: string;
  career: number;
  introduction: string;
  phone: string;
  positionCode: number;
};
