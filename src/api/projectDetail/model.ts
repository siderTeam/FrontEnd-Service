import { PROJECT_STATUS } from "public/lib/enum";

export type PROJECT_DETAIL_RESPONSE = {
  id: number;
  name: string;
  recruitStartDate: string;
  recruitEndDate: string;
  deposit: number;
  count: number;
  connect: string;
  skillCodeList: [
    {
      skillCode: number;
      name: string;
      imageName: string;
    },
  ];
  content: string;
  positionCodeList: [
    {
      codeGroup: {
        id: number;
        name: string;
      };
      name: string;
    },
  ];
  audit: {
    project: {
      id: number;
      name: string;
      recruitStartDate: string;
      recruitEndDate: string;
      deposit: number;
      count: number;
    };
    detailList: [
      {
        point: number;
        contents: string;
      },
    ];
    week: number;
    reason: string;
  };
  createUser: {
    nickname: string;
    position: {
      id: number;
      name: string;
    };
    career: number;
    memberSkillList: [
      {
        skillCode: number;
        name: string;
        imageName: string;
      },
    ];
    introduction: string;
  };
  projectReplies: [
    {
      content: string;
      reReplyList: [
        {
          content: string;
          member: {
            nickname: string;
            position: {
              id: number;
              name: string;
            };
            career: number;
            memberSkillList: [
              {
                skillCode: number;
                name: string;
                imageName: string;
              },
            ];
            introduction: string;
          };
          createdDate: string;
        },
      ];
      member: {
        nickname: string;
        position: {
          id: number;
          name: string;
        };
        career: number;
        memberSkillList: [
          {
            skillCode: number;
            name: string;
            imageName: string;
          },
        ];
        introduction: string;
      };
      createdDate: string;
    },
  ];
  status: PROJECT_STATUS;
  createdDate: string;
  view: number;
};

export type REPLY_REQUEST = {
  content: string;
};

export type APPLY_PROJECT_REQUEST = {
  projectId: number;
  content: string;
};
