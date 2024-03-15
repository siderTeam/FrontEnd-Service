import { POSITION_CODE, PROJECT_STATUS } from './enum';

/**
 * [프로젝트 상태]
 * 모집중 19,
 * 모집완료 20,
 * 요구사항 심사중 21,
 * 요구사항 반려 22,
 * 진행 대기 23,
 * 진행중 24,
 * 중도 종결 25,
 * 제출완료 26,
 * 심사중 27,
 * 심사완료 28,
 * 입금 기간 초과 41,
 */
export const formatForProjectStatus = (status: PROJECT_STATUS): string => {
  const returnStatus = new Map([
    [PROJECT_STATUS.RECRUITING, '모집중'],
    [PROJECT_STATUS.RECRUITMENT_COMPLETED, '모집완료'],
    [PROJECT_STATUS.REQUIREMENT_ASSESSMENT_IN_PROGRESS, '요구사항 심사중'],
    [PROJECT_STATUS.REQUIREMENT_ASSESSMENT_REJECTED, '요구사항 반려'],
    [PROJECT_STATUS.WAITING_TO_START, '진행 대기'],
    [PROJECT_STATUS.IN_PROGRESS, '진행중'],
    [PROJECT_STATUS.PARTIAL_TERMINATION, '중도 종결'],
    [PROJECT_STATUS.SUBMISSION_COMPLETED, '제출완료'],
    [PROJECT_STATUS.ASSESSMENT_IN_PROGRESS, '심사중'],
    [PROJECT_STATUS.ASSESSMENT_COMPLETED, '심사완료'],
    [PROJECT_STATUS.DEPOSIT_PERIOD_EXPIRED, '입금 기간 초과'],
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
    [POSITION_CODE.DESIGN, '디자이너'],
    [POSITION_CODE.FRONT, '프론트엔드'],
    [POSITION_CODE.BACKEND, '백엔드'],
    [POSITION_CODE.SERVER, '서버/인프라'],
    [POSITION_CODE.ETC, '기타'],
  ]);

  return returnStatus.get(status) ?? '';
};
