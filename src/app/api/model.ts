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
  bankName:	string;
  bankNo:	string;
  bankUserName:	string;
  phone: string;
  jobCode: number;
  positionCode: number[];
};

export type RESUME_RESPONSE = {
  id: string;
  name: string;
  contents: string;
  skill: string;
  positionCodeValueList: number[];
};