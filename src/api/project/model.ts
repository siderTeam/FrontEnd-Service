import { DEPOSIT_STATUS, POSITION_CODE, PROJECT_REQUIRE_JUDGE_PROGRESS_STATUS } from 'public/lib/enum';
import { PROJECT_REQUIRE_JOIN_STATUS, PROJECT_STATUS } from 'public/lib/enum';

export type CREATE_PROJECT_REQUEST = {
  count: number;
  connect: string;
  positionCodeList: POSITION_CODE[] | null;
  skillCodeList: number[];
  recruitEndDate: string;
  week: number;
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
  connect: string;
  skillCodeList: {
    skillCode: number;
    name: string;
    imageName: string;
  }[];
  content: string;
  positionCodeList: {
    codeGroup: {
      id: number;
      name: string;
    };
    name: string;
  }[];
  audit: {
    project: {
      id: number;
      name: string;
      recruitStartDate: string;
      recruitEndDate: string;
      deposit: number;
      count: number;
      view: number;
      createdDate: string;
    };
    detailList: PROJECT_DETAIL_LIST[];
    week: number;
    reason: string;
  };
  createUser: {
    id: number;
    loginId: string;
    nickname: string;
    position: {
      id: number;
      name: string;
    };
    career: number;
    memberSkillList: {
      skillCode: number;
      name: string;
      imageName: string;
    }[];
    introduction: string;
  };
  projectReplies: [];
  status: number;
  view: number;
  createdDate: string;
};

export type PROJECT_DETAIL_LIST = {
  point: number;
  contents: string;
};

export type PROJECT_REQUEST = {
  keyword: string;
  positionCode: number[];
  skillCode: number[];
  status: number | null;
};

export type PROJECT_DETAIL_RESPONSE = {
  id: number;
  name: string;
  recruitStartDate: string;
  recruitEndDate: string;
  deposit: number;
  count: number;
  connect: string;
  skillCodeList: {
    skillCode: number;
    name: string;
    imageName: string;
  }[];
  content: string;
  positionCodeList: {
    codeGroup: {
      id: number;
      name: string;
    };
    name: string;
  }[];
  audit: {
    project: {
      id: number;
      name: string;
      recruitStartDate: string;
      recruitEndDate: string;
      deposit: number;
      count: number;
    };
    detailList: {
      id: number;
      point: number;
      contents: string;
    }[];
    week: number;
    reason: string;
  };
  createUser: PROJECT_DETAIL_CREATE_USER;
  projectReplies: {
    id: number;
    content: string;
    reReplyList: {
      content: string;
      member: {
        nickname: string;
        position: {
          id: number;
          name: string;
        };
        career: number;
        memberSkillList: {
          skillCode: number;
          name: string;
          imageName: string;
        }[];

        introduction: string;
      };
      createdDate: string;
    }[];

    member: {
      id: number;
      nickname: string;
      position: {
        id: number;
        name: string;
      };
      career: number;
      memberSkillList: {
        skillCode: number;
        name: string;
        imageName: string;
      }[];

      introduction: string;
    };
    createdDate: string;
  }[];

  status: PROJECT_STATUS | PROJECT_REQUIRE_JUDGE_PROGRESS_STATUS;
  createdDate: string;
  view: number;
};

export type PROJECT_DETAIL_CREATE_USER = {
  id: number;
  nickname: string;
  position: {
    id: number;
    name: string;
  };
  career: number;
  memberSkillList: {
    skillCode: number;
    name: string;
    imageName: string;
  }[];
  introduction: string;
};

export type REPLY_REQUEST = {
  content: string;
};

export type APPLY_PROJECT_REQUEST = {
  projectId: number;
  content: string;
};

export type APPLY_PROJECT_USER_RESPONSE = [
  {
    id: number;
    resumeSelectResult: {
      id: number;
      contents: string;
      career: number;
      skillCodeList: {
        skillCode: number;
        name: string;
        imageName: string;
      }[];
      positionCode: number;
    };
    status: PROJECT_REQUIRE_JOIN_STATUS;
    createUser: {
      nickname: string;
      loginId: string;
      position: {
        id: number;
        name: string;
      };
      career: number;
      memberSkillList: {
        skillCode: number;
        name: string;
        imageName: string;
      }[];
      introduction: string;
    };
  },
];

export type APPLY_PROJECT_USER_DETAIL_RESPONSE = {
  id: number;
  resumeSelectResult: {
    id: number;
    contents: string;
    career: number;
    skillCodeList: {
      skillCode: number;
      name: string;
      imageName: string;
    }[];
    positionCode: number;
  };
  status: PROJECT_REQUIRE_JOIN_STATUS;
  createUser: {
    nickname: string;
    position: {
      id: number;
      name: string;
    };
    career: number;
    memberSkillList: {
      skillCode: number;
      name: string;
      imageName: string;
    }[];
    introduction: string;
  };
};

export type JOIN_PROJECT_STATUS_REQUEST = {
  projectJoinId: number;
  statusCode: PROJECT_REQUIRE_JOIN_STATUS;
  rejectReason?: string;
};

export type CHECK_JOIN_PROJECT = {
  isRequestJoined: boolean; //프로젝트 지원 여부
  isJoinedProject: boolean; //프로젝트 맴버 여부
  joinStatus: PROJECT_REQUIRE_JOIN_STATUS;
};

export type PROJECT_ORDER_BY_REQUEST = {
  orderBy: string;
  size: number;
  sort: number;
};

export type RECRUIT_STATUS_LIST_RESPONSE = {
  id: number;
  createdDate: string;
  project: {
    id: number;
    name: string;
    status: number;
  };
  status: number;
};

export type PROJECT_STATUS_REQUEST = {
  projectId: number;
  statusId: PROJECT_STATUS | PROJECT_REQUIRE_JUDGE_PROGRESS_STATUS;
};

export type PROJECT_DEPOSIT_DETAIL_RESPONSE = {
  rowNum: number;
  id: number;
  name: string;
  depositStartDate: string;
  depositEndDate: string;
  memberCount: number;
  paidMemberCount: number;
  depositList: {
    phone: string;
    deposit: {
      id: number;
      status: DEPOSIT_STATUS;
      bankName: string;
      bankNo: string;
      bankUserName: string;
      amount: number;
      member: {
        id: number;
        loginId: string;
        nickname: string;
        position: {
          id: number;
          name: string;
        };
        career: number;
        memberSkillList: {
          skillCode: POSITION_CODE;
          name: string;
          imageName: string;
        }[];
        introduction: string;
      };
      isIssuer: boolean;
    };
    depositPrice: number;
  }[];
};

export type PARTICIPATING_PROJECT_LIST_RESPONSE = {
  status: PROJECT_STATUS;
  banned: boolean;
  project: {
    id: number;
    name: string;
    recruitStartDate: string;
    recruitEndDate: string;
    startDate: string | null;
    endDate: string | null;
    deposit: number;
    count: number;
    view: number;
    createdDate: string;
    status: number;
  };
  member: {
    id: number;
    loginId: string;
    nickname: string;
    position: {
      id: number;
      name: string;
    };
    career: number;
    memberSkillList: [];
    introduction: string;
  };
  deposit: { amount: number; bankName: null; bankNo: null; bankUserName: null; id: number; status: number } | null;
  issuer: true;
};

export type UPDATE_PROJECT_REQUEST = {
  projectId: number;
  name: string;
  recruitEndDate: string;
  content: string;
  count: number;
  deposit: number;
  connect: string;
  week: number;
  positionCodeList: POSITION_CODE[] | null;
  skillCodeList: number[];
  requestedContentsEditPayloads: {
    content: string;
    point: number;
    projectDetailId: number;
  }[];
  editStatus: PROJECT_STATUS | PROJECT_REQUIRE_JUDGE_PROGRESS_STATUS;
};