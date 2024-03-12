import { POSITION_CODE } from "public/enum";

export interface SIGN_UP_REQUEST {
  username: string;
  name: string;
  password: string;
  nickname: string;
  career: number;
  phone: string;
  positionCode: POSITION_CODE | null;
}

