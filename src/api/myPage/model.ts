export type USER_RESUME_RESPONSE = {
  number: number;
  numberOfElement: number;
  size: number;
  totalElement: number;
  totalPages: number;
  content: USER_RESUME[];
};

export type USER_RESUME = {
  id: number;
  name: string;
  recruitStartDate: string;
  recruitEndDate: string;
  content: string;
  deposit: number;
  count: number;
}
