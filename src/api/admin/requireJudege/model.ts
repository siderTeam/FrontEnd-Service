export type PAGINATION_RESPONSE = {
  page: number;
  perPage: number;
  totalCount: 15;
};

export type AUDIT_LIST = {
  id: number;
  name: string;
  week: number;
  status: number;
  createdDate: string;
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

export type AUDIT_LIST_RESPONSE = PAGINATION_RESPONSE & {
  dataList: AUDIT_LIST[];
};

export type AUDIT_LIST_REQUEST = {
  page: number;
  perPage: number;
  status: number | null;
  name: string;
};
