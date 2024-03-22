import { DEPOSIT_STATUS, POSITION_CODE, PROJECT_REQUIRE_JOIN_STATUS, PROJECT_STATUS, USER_ALL_STATUS } from './enum';

/**
 * [프로젝트 상태]
 * 모집중 19,
 * 모집완료 20,
 * 입금 대기중 22,
 * 진행 대기 23,
 * 진행중 24,
 * 중도 종결 25,
 * 준공 심사중 26,
 * 제출완료 27,
 * 준공 심사완료 28,
 * 입금 기간 초과 41,
 * 프로젝트 종료 21,
 */
export const formatForProjectStatus = (status: PROJECT_STATUS): string => {
  const returnStatus = new Map([
    [PROJECT_STATUS.RECRUITING, '모집중'],
    [PROJECT_STATUS.RECRUITMENT_COMPLETED, '모집완료'],
    [PROJECT_STATUS.DEPOSIT_WAITING, '입금 대기중'],
    [PROJECT_STATUS.WAITING_TO_START, '진행 대기'],
    [PROJECT_STATUS.IN_PROGRESS, '진행중'],
    [PROJECT_STATUS.PARTIAL_TERMINATION, '중도 종결'],
    [PROJECT_STATUS.ASSESSMENT_IN_PROGRESS, '준공 심사중'],
    [PROJECT_STATUS.SUBMISSION_COMPLETED, '제출완료'],
    [PROJECT_STATUS.ASSESSMENT_COMPLETED, '준공 심사완료'],
    [PROJECT_STATUS.DEPOSIT_PERIOD_EXPIRED, '입금 기간 초과'],
    [PROJECT_STATUS.PROJECT_END, '프로젝트 종료'],
  ]);

  return returnStatus.get(status) ?? '';
};

/**
 * [포지션 코드]
 *  디자인: DESIGN 30,
 *  프론트: FRONT 14,
 *  백엔드: BACKEND 15,
 *  서버/인프라: SERVER 16,
 *  기타: ETC 64,
 */

export const formatForPositionCode = (status: POSITION_CODE): string => {
  const returnStatus = new Map([
    [POSITION_CODE.DESIGN, '디자인'],
    [POSITION_CODE.FRONT, '프론트'],
    [POSITION_CODE.BACKEND, '백엔드'],
    [POSITION_CODE.SERVER, '서버/인프라'],
    [POSITION_CODE.ETC, '기타'],
  ]);

  return returnStatus.get(status) ?? '';
};

/**
 * [프로젝트 가입 신청 승인 상태]
 * 대기 37,
 * 반려 38,
 * 승인 39,
 * 취소 40,
 */

export const formatForProjectJoinStatus = (status: PROJECT_REQUIRE_JOIN_STATUS): string => {
  const returnStatus = new Map([
    [PROJECT_REQUIRE_JOIN_STATUS.WAITING, '대기'],
    [PROJECT_REQUIRE_JOIN_STATUS.REJECTED, '반려'],
    [PROJECT_REQUIRE_JOIN_STATUS.APPROVED, '승인'],
    [PROJECT_REQUIRE_JOIN_STATUS.CANCELED, '취소'],
  ]);

  return returnStatus.get(status) ?? '';
};

/**
 * [입금 상태]
 * 대기 43,
 * 기간 초과 44,
 * 입금 확인 45,
 * 환급 대기 46,
 * 환급 완료 47,
 */

export const formatForDepositStatus = (status: DEPOSIT_STATUS): string => {
  const returnStatus = new Map([
    [DEPOSIT_STATUS.WAITING, '대기'],
    [DEPOSIT_STATUS.EXPIRED_PERIOD, '기간 초과'],
    [DEPOSIT_STATUS.DEPOSIT_CONFIRMED, '입금 확인'],
    [DEPOSIT_STATUS.REFUND_WAITING, '환급 대기'],
    [DEPOSIT_STATUS.REFUND_COMPLETED, '환급 완료'],
  ]);

  return returnStatus.get(status) ?? '';
};

/**
 * [프로젝트 상태 ~ 요구사항 심사 상태]
 * 모집중 19,
 * 모집완료 20,
 * 요구사항 정의 중 32,
 * 요구사항 심사중 33,
 * 요구사항 심사 반려 34,
 * 요구사항 심사 승인 35
 * 입금 대기중  22,
 * 입금 기간 초과 41,
 * 진행 대기 23,
 * 진행중 24,
 * 중도 종결 25,
 * 제출완료 27,
 * 준공 심사중 26,
 * 준공 심사완료 28,
 * 프로젝트 종료 21,
 */
export const formatForUserAllStatus = (status: USER_ALL_STATUS) => {
  const returnStatus = new Map([
    [USER_ALL_STATUS.RECRUITING, '모집중'],
    [USER_ALL_STATUS.RECRUITMENT_COMPLETED, '모집완료'],
    [USER_ALL_STATUS.DEPOSIT_WAITING, '입금 대기중'],
    [USER_ALL_STATUS.WAITING_TO_START, '진행 대기'],
    [USER_ALL_STATUS.IN_PROGRESS, '진행중'],
    [USER_ALL_STATUS.PARTIAL_TERMINATION, '중도 종결'],
    [USER_ALL_STATUS.ASSESSMENT_IN_PROGRESS, '준공 심사중'],
    [USER_ALL_STATUS.SUBMISSION_COMPLETED, '제출완료'],
    [USER_ALL_STATUS.ASSESSMENT_COMPLETED, '준공 심사완료'],
    [USER_ALL_STATUS.DEPOSIT_PERIOD_EXPIRED, '입금 기간 초과'],
    [USER_ALL_STATUS.PROJECT_END, '프로젝트 종료'],
    [USER_ALL_STATUS.REQUIREMENT_DEFINITION_IN_PROGRESS, '요구사항 정의 중'],
    [USER_ALL_STATUS.WAITING, '요구사항 심사중'],
    [USER_ALL_STATUS.REJECTED, '요구사항 심사 반려'],
    [USER_ALL_STATUS.APPROVED, '요구사항 심사 승인'],
  ]);

  return returnStatus.get(status) ?? '';
};
