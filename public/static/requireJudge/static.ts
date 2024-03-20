import { DEPOSIT_STATUS, POSITION_CODE, PROJECT_REQUIRE_JOIN_STATUS, PROJECT_REQUIRE_JUDGE_PROGRESS_STATUS, PROJECT_STATUS } from 'public/lib/enum';

export const PROJECT_REQUIRE_JUDGE_OPTION = [
  {
    label: '전체',
    value: null,
  },
  {
    label: '요구사항 정의 중',
    value: 32,
  },
  {
    label: '대기',
    value: 33,
  },
  {
    label: '반려',
    value: 34,
  },
  {
    label: '승인',
    value: 35,
  },
];

/**
 * [포지션 코드]
 */
export const POSITION_CODE_ARRAY = [
  {
    value: POSITION_CODE.DESIGN,
    label: '디자인',
  },
  {
    value: POSITION_CODE.FRONT,
    label: '프론트',
  },
  {
    value: POSITION_CODE.BACKEND,
    label: '백엔드',
  },
  {
    value: POSITION_CODE.SERVER,
    label: '서버/인프라',
  },
  {
    value: POSITION_CODE.ETC,
    label: '기타',
  },
];

/**
 * [프로젝트 상태]
 */
export const PROJECT_STATUS_ARRAY = [
  {
    value: PROJECT_STATUS.RECRUITING,
    label: '모집중',
  },
  {
    value: PROJECT_STATUS.RECRUITMENT_COMPLETED,
    label: '모집완료',
  },
  {
    value: PROJECT_STATUS.REQUIREMENT_ASSESSMENT_IN_PROGRESS,
    label: '요구사항 심사중',
  },
  {
    value: PROJECT_STATUS.DEPOSIT_WAITING,
    label: '입금 대기중',
  },
  {
    value: PROJECT_STATUS.WAITING_TO_START,
    label: '진행 대기',
  },
  {
    value: PROJECT_STATUS.IN_PROGRESS,
    label: '진행중',
  },
  {
    value: PROJECT_STATUS.PARTIAL_TERMINATION,
    label: '중도 종결',
  },
  {
    value: PROJECT_STATUS.ASSESSMENT_IN_PROGRESS,
    label: '준공 심사중',
  },
  {
    value: PROJECT_STATUS.SUBMISSION_COMPLETED,
    label: '제출완료',
  },
  {
    value: PROJECT_STATUS.ASSESSMENT_COMPLETED,
    label: '준공 심사완료',
  },
  {
    value: PROJECT_STATUS.DEPOSIT_PERIOD_EXPIRED,
    label: '입금 기간 초과',
  },
];

/**
 * [프로젝트 요구사항 심사 진행 상태]
 */
export const PROJECT_REQUIRE_JUDGE_PROGRESS_STATUS_ARRAY = [
  {
    value: PROJECT_REQUIRE_JUDGE_PROGRESS_STATUS.REQUIREMENT_DEFINITION_IN_PROGRESS,
    label: '요구사항 정의 중',
  },
  {
    value: PROJECT_REQUIRE_JUDGE_PROGRESS_STATUS.WAITING,
    label: '요구사항 심사중',
  },
  {
    value: PROJECT_REQUIRE_JUDGE_PROGRESS_STATUS.REJECTED,
    label: '요구사항 심사 반려',
  },
  {
    value: PROJECT_REQUIRE_JUDGE_PROGRESS_STATUS.APPROVED,
    label: '요구사항 심사 승인 / 보증금 입금 대기',
  },
];

/**
 * [프로젝트 가입 신청 승인 상태]
 */
export const PROJECT_REQUIRE_JOIN_STATUS_ARRAY = [
  {
    value: PROJECT_REQUIRE_JOIN_STATUS.WAITING,
    label: '대기',
  },
  {
    value: PROJECT_REQUIRE_JOIN_STATUS.REJECTED,
    label: '반려',
  },
  {
    value: PROJECT_REQUIRE_JOIN_STATUS.APPROVED,
    label: '승인',
  },
  {
    value: PROJECT_REQUIRE_JOIN_STATUS.CANCELED,
    label: '취소',
  },
];

/**
 * [입금 상태]
 */
export const DEPOSIT_STATUS_ARRAY = [
  {
    value: DEPOSIT_STATUS.WAITING,
    label: '대기',
  },
  {
    value: DEPOSIT_STATUS.EXPIRED_PERIOD,
    label: '기간 초과',
  },
  {
    value: DEPOSIT_STATUS.DEPOSIT_CONFIRMED,
    label: '입금 확인',
  },
  {
    value: DEPOSIT_STATUS.REFUND_WAITING,
    label: '환급 대기',
  },
  {
    value: DEPOSIT_STATUS.REFUND_COMPLETED,
    label: '환급 완료',
  },
];

/**
 * [개월]
 */
export const MONTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
  return {
    label: `${item}개월`,
    value: item,
  };
});
