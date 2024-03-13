export type PAGINATION_RESPONSE = {
  page: number;
  perPage: number;
  totalCount: 15;
};

export type DEPOSIT_JUDGE_LIST = {
  id: number;
  name: string;
  depositStartDate: string;
  depositEndDate: string;
  memberCount: number;
  paidMemberCount: number;
  depositList: [
    {
      id: number;
      depositId: number;
      phone: string;
      depositPrice: number;
    },
  ];
};

export type DEPOSIT_JUDGE_LIST_RESPONSE = PAGINATION_RESPONSE & {
  dataList: DEPOSIT_JUDGE_LIST[];
};

export type DEPOSIT_JUDGE_LIST_REQUEST = {
  page: number;
  perPage: number;
  status: number | null;
  name: string;
};
