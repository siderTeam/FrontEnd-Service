/**
 * [포지션 코드]
 *  디자인: DESIGN 30,
 *  프론트: FRONT 14,
 *  백엔드: BACKEND 15,
 *  서버/인프라: SERVER 16,
 *  기타: ETC 64,
 */
export enum POSITION_CODE {
    DESIGN = 30,
    FRONT = 14,
    BACKEND = 15,
    SERVER = 16,
    ETC = 64,
  }
  
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
  export enum PROJECT_STATUS {
    RECRUITING = 19,
    RECRUITMENT_COMPLETED = 20,
    REQUIREMENT_ASSESSMENT_IN_PROGRESS = 21,
    REQUIREMENT_ASSESSMENT_REJECTED = 22,
    WAITING_TO_START = 23,
    IN_PROGRESS = 24,
    PARTIAL_TERMINATION = 25,
    SUBMISSION_COMPLETED = 26,
    ASSESSMENT_IN_PROGRESS = 27,
    ASSESSMENT_COMPLETED = 28,
    DEPOSIT_PERIOD_EXPIRED = 41,
  }
  
  /**
   * [프로젝트 요구사항 심사 진행 상태]
   * 요구사항 정의 중 32,
   * 대기 33,
   * 반려 34,
   * 승인 35,
   */
  export enum PROJECT_REQUIRE_JUDGE_PROGRESS_STATUS {
    REQUIREMENT_DEFINITION_IN_PROGRESS = 32,
    WAITING = 33,
    REJECTED = 34,
    APPROVED = 35,
  }
  
  /**
   * [프로젝트 가입 신청 승인 상태]
   * 대기 37,
   * 반려 38,
   * 승인 39,
   * 취소 40,
   */
  export enum PROJECT_REQUIRE_JOIN_STATUS {
    WAITING = 37,
    REJECTED = 38,
    APPROVED = 39,
    CANCELED = 40,
  }
  
  /**
   * [입금 상태]
   * 대기 43,
   * 기간 초과 44,
   * 입금 확인 45,
   * 환급 대기 46,
   * 환급 완료 47,
   */
  export enum DEPOSIT_STATUS {
    WAITING = 43,
    EXPIRED_PERIOD = 44,
    DEPOSIT_CONFIRMED = 45,
    REFUND_WAITING = 46,
    REFUND_COMPLETED = 47,
  }
  