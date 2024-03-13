export type PAGINATION_RESPONSE = {
  page: number;
  perPage: number;
  totalCount: 15;
};

export type COMPLETION_LIST = {
  id: number;
  startDate: string;
  endDate: string;
  createdDate: string;
  submitDate: string;
  name: string;
  username: string;
  status: number;
  requiredList: [
    {
      id: number;
      contents: string;
      point: number;
    },
    {
      id: number;
      contents: string;
      point: number;
    },
    {
      id: number;
      contents: string;
      point: number;
    },
    {
      id: number;
      contents: string;
      point: number;
    },
  ];
};

export type COMPLETION_LIST_RESPONSE = PAGINATION_RESPONSE & {
  dataList: COMPLETION_LIST[];
};

export type COMPLETION_LIST_REQUEST = {
  page: number;
  perPage: number;
  status: number | null;
  name: string;
};
