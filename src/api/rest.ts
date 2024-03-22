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
    applyProjectUserDetail: '/join',
    checkJoinProject: '/join/check',
    projectOrderBy: '/project/order-by',
    recruitStatus: '/join',
    projectDepositDetail: '/deposit',
    projectMember: '/project_member/my',
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
    signOut: '/user/signOut',
  },
  put: {
    updateReply: '/reply',
    updateJoinStatus: '/join',
    updateUserInfo: '/user',
<<<<<<< HEAD
    changePassword: '/user/edit-password',
=======
    updateProjectStatus: '/project/status',
>>>>>>> b72609592d7efb97d09fc32ea0961e6dd4e23eee
  },
  delete: {
    deleteReply: '/reply',
    deleteProject: '/project',
    deleteRecruitment: '/join',
  },
  patch: {},
};
