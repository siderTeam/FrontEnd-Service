export const rest = {
  get: {
    code: '/code',
    resume: '/resume',
    userId: '/user/id',
    userInfo: '/user',

    auditList: '/admin/project/audit',
    completionList: '/admin/project',
    depositJudgeList: '/deposit',
    projectDetail: '/project/detail',
    increaseProjectView: '/project/view',
    applyProjectUser: '/join/project',
  },
  post: {
    userSignIn: '/user/signIn',
    userSignOut: '/user/signOut',
    userSignUp: '/user/signUp',
    getAccessToken: '/user/newAc',
    getChoBiSangToken: '/user/newRf',
    createProject: '/project',
    createReply: '/reply/project',
    applyProject: '/join',
    project: '/project/list',
  },
  put: {},
  delete: {},
  patch: {},
};
