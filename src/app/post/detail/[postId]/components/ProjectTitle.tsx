'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import Apply from './Modal/Apply';
import ApplyStatusContainer from './Modal/ApplyStatusModal/ApplyStatusContainer';
import { formatForUserAllStatus } from 'public/lib/formatForEnum';
import { CHECK_JOIN_PROJECT, PROJECT_DETAIL_RESPONSE } from '@/api/project/model';
import { getIsLogin, getUserInfo } from '@/store/auth.store';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { deleteProject, updateProjectStatus } from '@/api/project/api';
import { PROJECT_REQUIRE_JOIN_STATUS, PROJECT_REQUIRE_JUDGE_PROGRESS_STATUS, PROJECT_STATUS } from 'public/lib/enum';
import DepositStatus from './Modal/DepositStatus';
import SubmitOutput from './Modal/SubmitOutput';

const STATUS_RECRUITING = PROJECT_STATUS.RECRUITING;
const STATUS_RECRUITMENT_COMPLETED = PROJECT_STATUS.RECRUITMENT_COMPLETED;
const STATUS_REJECTED = PROJECT_REQUIRE_JUDGE_PROGRESS_STATUS.REJECTED;
const STATUS_WAITING = PROJECT_REQUIRE_JUDGE_PROGRESS_STATUS.WAITING;
const STATUS_DEPOSIT_WAITING = PROJECT_STATUS.DEPOSIT_WAITING;
const STATUS_WAITING_TO_START = PROJECT_STATUS.WAITING_TO_START;
const STATUS_IN_PROGRESS = PROJECT_STATUS.IN_PROGRESS;
const STATUS_PARTIAL_TERMINATION = PROJECT_STATUS.PARTIAL_TERMINATION;
const STATUS_ASSESSMENT_IN_PROGRESS = PROJECT_STATUS.ASSESSMENT_IN_PROGRESS;
const STATUS_SUBMISSION_COMPLETED = PROJECT_STATUS.SUBMISSION_COMPLETED;
const STATUS_ASSESSMENT_COMPLETED = PROJECT_STATUS.ASSESSMENT_COMPLETED;
const STATUS_DEPOSIT_PERIOD_EXPIRED = PROJECT_STATUS.DEPOSIT_PERIOD_EXPIRED;
const STATUS_PROJECT_END = PROJECT_STATUS.PROJECT_END;

const JOIN_STATUS_REJECTED = PROJECT_REQUIRE_JOIN_STATUS.REJECTED;

type Props = {
  element: any;
  data?: PROJECT_DETAIL_RESPONSE;
  postId: number;
  refetch: () => void;
  checkJoin?: CHECK_JOIN_PROJECT;
  checkJoinRefetch: () => void;
};

const ProjectTitle = ({ element, data, postId, refetch, checkJoin, checkJoinRefetch }: Props) => {
  const route = useRouter();
  const identification = getUserInfo().id === data?.createUser.id;
  const [applyModal, setApplyModal] = useState(false);
  const [applyStatusModal, setApplyStatusModal] = useState(false);
  const [depositStatusModal, setDepositStatusMoDal] = useState(false);
  const [submitOutpusModal, setSubmitOutpuMoDal] = useState(false);

  //모집글 삭제
  const { mutate: deleteProjectMutate } = useMutation({
    mutationFn: deleteProject,
    onSuccess: async (data) => {
      if (data.result === true) {
        alert('모집글이 삭제되었습니다.');

        route.push('/');
      } else {
        alert('모집글 삭제 실패');
      }
    },
    onError: () => {
      console.error('실패');
    },
  });

  //프로젝트 상태 변경
  const { mutate: projectStatusMutate } = useMutation({
    mutationFn: updateProjectStatus,
    onSuccess: async (data) => {
      if (data.result === true) {
        alert('성공');
      } else {
        alert('실패');
      }
      refetch();
    },
    onError: () => {
      console.error('실패');
    },
  });

  //지원하기 모달
  const handleCloseApplyModal = () => {
    setApplyModal(false);
  };

  //지원현황 모달
  const handleCloseApplyStatusModal = () => {
    setApplyStatusModal(false);
  };

  //보증금현황 모달
  const handleCloseDepositStatusModal = () => {
    setDepositStatusMoDal(false);
  };

  //산출물 제출 모달
  const handleCloseSubmitOutputModal = () => {
    setSubmitOutpuMoDal(false);
  };

  //모집마감
  const handleRecruitCompleted = () => {
    if (confirm('모집을 마감하시겠습니까?')) {
      projectStatusMutate({ projectId: postId, statusId: STATUS_RECRUITMENT_COMPLETED });
    }
  };

  //모집글 삭제
  const handleDeleteProject = () => {
    if (confirm('모집글을 삭제하시겠습니까?')) {
      deleteProjectMutate(postId);
    }
  };

  //지원하기
  const handleApply = () => {
    if (getIsLogin()) {
      setApplyModal(true);
    } else {
      if (confirm('로그인 후 이용하실 수 있습니다.\n로그인 페이지로 이동하시겠습니까?')) {
        route.push('/login');
      }
    }
  };

  //지원 취소
  const handleCancelApply = () => {
    if (confirm('해당 프로젝트 지원을 취소하시겠습니까?')) {
      console.log('취소');
    }
  };

  //요구사항 심사요청
  const handleRecruitAssessment = () => {
    if (
      confirm(
        '요구사항 심사를 진행하시겠습니까?\n(심사 결과는 영업일 기준 3일 이내로 완료됩니다.\n심사가 완료될때까지 프로젝트 정보 수정 및 삭제가 불가합니다.)',
      )
    ) {
      projectStatusMutate({ projectId: postId, statusId: STATUS_WAITING });
    }
  };

  //프로젝트 취소
  const handleProjectCancel = () => {
    if (confirm('프로젝트를 취소하시겠습니까?')) {
      projectStatusMutate({ projectId: postId, statusId: STATUS_PARTIAL_TERMINATION });
    }
  };

  //프로젝트 시작
  const handleProjectStart = () => {
    if (confirm('프로젝트 시작을 하시겠습니까?')) {
      projectStatusMutate({ projectId: postId, statusId: STATUS_IN_PROGRESS });
    }
  };

  //준공 심사 요청
  const handleAssessment = () => {
    if (confirm('준공 심사는 영업일기준 3일 내로 완료됩니다.\n산출물은 sidego96@gmail.com 메일로 보내주세요.')) {
      projectStatusMutate({ projectId: postId, statusId: STATUS_ASSESSMENT_IN_PROGRESS });
    }
  };

  //지원자 버튼
  const renderButton = useMemo(() => {
    //반려된 유저
    if (checkJoin?.isRequestJoined && checkJoin?.joinStatus === JOIN_STATUS_REJECTED) {
      return <Button variant="error">반려됨</Button>;
    }

    //모집중 + 지원여부
    if (data?.status === STATUS_RECRUITING) {
      if (checkJoin?.isRequestJoined) {
        return <Button onClick={handleCancelApply}>지원 취소</Button>;
      } else {
        return <Button onClick={handleApply}>지원하기</Button>;
      }
    }

    //승인된 유저 + (준공 심사 완료 or 모집 완료 / 요구사항 심사중 / 입금 대기중)
    if (checkJoin?.isRequestJoined && checkJoin?.isJoinedProject) {
      if (data?.status === STATUS_ASSESSMENT_COMPLETED) {
        return <Button onClick={() => console.log('환불 계좌 입력 클릭')}>환불 계좌 입력</Button>;
      }

      if (data?.status === STATUS_RECRUITMENT_COMPLETED || data?.status === STATUS_WAITING || data?.status === STATUS_DEPOSIT_WAITING) {
        return <Button onClick={handleCancelApply}>지원 취소</Button>;
      }
    }
  }, [data?.status, checkJoin?.isRequestJoined]);

  //모집자 버튼
  const renderCreateUserButton = useMemo(() => {
    //모집중
    if (data?.status === STATUS_RECRUITING) {
      return (
        <>
          <Button variant="secondary" onClick={() => setApplyStatusModal(true)}>
            지원현황
          </Button>
          <Button onClick={handleRecruitCompleted}>모집마감</Button>
        </>
      );
    }

    //모집완료
    if (data?.status === STATUS_RECRUITMENT_COMPLETED) {
      return <Button onClick={handleRecruitAssessment}>요구사항 심사요청</Button>;
    }

    //요구사항 심사중
    if (data?.status === STATUS_WAITING) {
      return <Button disabled={true}>심사 진행중</Button>;
    }

    //요구사항 반려
    if (data?.status === STATUS_REJECTED) {
      return <Button onClick={() => console.log('요구사항 수정')}>요구사항 수정</Button>;
    }

    //입금 대기중
    if (data?.status === STATUS_DEPOSIT_WAITING) {
      return <Button onClick={() => setDepositStatusMoDal(true)}>보증금 현황</Button>;
    }

    //입금 기간 초과
    if (data?.status === STATUS_DEPOSIT_PERIOD_EXPIRED) {
      return <Button onClick={handleProjectCancel}>프로젝트 취소</Button>;
    }

    //프로젝트 진행 대기
    if (data?.status === STATUS_WAITING_TO_START) {
      return <Button onClick={handleProjectStart}>프로젝트 시작</Button>;
    }

    //프로젝트 진행중
    if (data?.status === STATUS_IN_PROGRESS) {
      return <Button onClick={handleAssessment}>준공 심사 요청</Button>;
    }

    //준공 심사중
    if (data?.status === STATUS_ASSESSMENT_IN_PROGRESS) {
      return (
        <>
          <Button variant="secondary" onClick={() => setSubmitOutpuMoDal(true)}>
            산출물 제출
          </Button>
          <Button disabled={true}>심사 진행중</Button>
        </>
      );
    }

    //준공 완료
    if (data?.status === STATUS_ASSESSMENT_COMPLETED) {
      return <Button onClick={() => console.log('환불 계좌 입력 클릭')}>환불 계좌 입력</Button>;
    }
  }, [data?.status]);

  return (
    <>
      <Apply visible={applyModal} onClose={handleCloseApplyModal} postId={postId} checkJoinRefetch={checkJoinRefetch} />
      {applyStatusModal && <ApplyStatusContainer postId={postId} visible={applyStatusModal} onClose={handleCloseApplyStatusModal} />}
      {depositStatusModal && <DepositStatus postId={postId} visible={depositStatusModal} onClose={handleCloseDepositStatusModal} />}
      {submitOutpusModal && <SubmitOutput visible={submitOutpusModal} onClose={handleCloseSubmitOutputModal} />}
      <Container ref={element}>
        <div className="header">
          <div className="before" onClick={() => route.back()}>
            <Image src={'/images/arrow/arrow_left_gray6.svg'} alt="arrow" width={5} height={9} />
            <span>이전 페이지로</span>
          </div>
          {identification && (
            <div className="edit">
              {(data.status === STATUS_RECRUITING || data.status === STATUS_RECRUITMENT_COMPLETED) && (
                <StyledImage src={'/images/edit/edit_gray6.svg'} alt="edit" width={22} height={22} />
              )}
              {(data.status === STATUS_RECRUITING ||
                data.status === STATUS_RECRUITMENT_COMPLETED ||
                data.status === STATUS_REJECTED ||
                data.status === STATUS_DEPOSIT_WAITING ||
                data.status === STATUS_DEPOSIT_PERIOD_EXPIRED) && (
                <StyledImage src={'/images/trash/trash_gray6.svg'} alt="trash" width={20} height={22} onClick={handleDeleteProject} />
              )}
            </div>
          )}
        </div>
        <div className="title-wrap top">
          <div className="info">
            <span>{data?.createUser.nickname}</span>
            <span>{data?.createdDate?.replace(/-/g, '.').slice(0, 10)}</span>
            <span className="status">{data && formatForUserAllStatus(data?.status as number)}</span>
          </div>
          <div className="seen">
            <Image src={'/images/security/security_gray5.svg'} alt="security" width={12} height={7} />
            <span>{data?.view}</span>
          </div>
        </div>
        <div className="title-wrap">
          <h1 className="project-title">{data?.name}</h1>
          <div className="button">{identification ? <>{renderCreateUserButton}</> : <>{renderButton}</>}</div>
        </div>
      </Container>
    </>
  );
};

export default ProjectTitle;

const Container = styled.div`
  border-bottom: 1px solid ${color.gray.gray7};
  box-sizing: border-box;
  padding: 32px 0 40px 0;
  background: ${color.gray.black};
  z-index: 1;

  position: sticky;
  top: 0;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  .before {
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
      color: ${color.gray.gray6};
      font-size: 14px;
      font-weight: 400;

      margin-left: 8px;
    }
  }

  .edit {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .top {
    margin-bottom: 10px;
  }

  .title-wrap {
    display: flex;
    justify-content: space-between;
    gap: 48px;

    .info {
      display: flex;
      align-items: center;
      gap: 16px;

      color: ${color.gray.gray5};
      font-size: 18px;
      font-weight: 400;

      .status {
        color: ${color.brand.brandMain};
        font-weight: 700;
      }

      span:not(:last-child) {
        box-sizing: border-box;
        padding-right: 16px;
        border-right: 1px solid ${color.gray.white};
      }
    }

    .seen {
      display: flex;
      align-items: center;

      span {
        color: ${color.gray.gray5};
        text-align: center;
        font-size: 12px;
        font-weight: 400;

        margin-left: 4px;
      }
    }

    .project-title {
      flex: 1;
      font-size: 26px;
      font-weight: 700;
    }

    .button {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

const StyledImage = styled(Image)`
  cursor: pointer;
`;
