export const rest = {
  get: {
    project: '/project/list',
    code: '/code',
    resume: '/resume',
    userId: '/user/id',

    auditList: '/admin/project/audit',
    completionList: '/admin/project',
    depositJudgeList: '/deposit',
  },
  post: {
    userSignIn: '/user/signIn',
    userSignOut: '/user/signOut',
    userSignUp: '/user/signUp',
    getAccessToken: '/user/newAc',
    getChoBiSangToken: '/user/newRf',
    createProject: '/project',
  },
  put: {},
  delete: {},
  patch: {},
};
