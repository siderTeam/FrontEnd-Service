export type USER_LIST_REQUEST = {
  page: number;
  size: number;
  username: string;
  name: string;
  nickname: string;
};

export type USER_LIST_RESPONSE = {
  id: number;
  username: string;
  name: string;
  email: string;
  nickname: string;
  bankName: string;
  bankNo: string;
  bankUserName: string;
  career: number;
  introduction: string;
};
