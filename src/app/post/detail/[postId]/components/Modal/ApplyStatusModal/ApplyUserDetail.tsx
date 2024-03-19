'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';
import TextArea from '@/components/TextArea/TextArea';
import Button from '@/components/Button/Button';
import CompanionReason from './CompanionReason';
import { Fragment, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { rest } from '@/api/rest';
import { getApplyProjectUserDetail, updateJoinProjectStatus } from '@/api/project/api';
import { formatForProjectJoinStatus } from 'public/lib/formatForEnum';
import { PROJECT_REQUIRE_JOIN_STATUS } from 'public/lib/enum';

type props = {
  joinId: number;
  onClick: () => void;
};

const STATUS_WAITING = PROJECT_REQUIRE_JOIN_STATUS.WAITING;
const STATUS_REJECTED = PROJECT_REQUIRE_JOIN_STATUS.REJECTED;
const STATUS_APPROVED = PROJECT_REQUIRE_JOIN_STATUS.APPROVED;

const ApplyUserDetail = ({ joinId, onClick }: props) => {
  const [Modal, setModal] = useState(false);

  const { data, refetch } = useQuery({
    queryKey: [rest.get.applyProjectUserDetail],
    queryFn: () => getApplyProjectUserDetail(joinId),
  });

  const { mutate } = useMutation({
    mutationFn: updateJoinProjectStatus,
    onSuccess: async (data) => {
      if (data.result === true) {
        alert('성공!');
      } else {
        alert('실패');
      }
      refetch();
    },
    onError: () => {
      console.error('실패');
    },
  });

  const handleModal = () => {
    setModal(false);
  };

  //프로젝트 참가 상태 수정
  const handleUpdateJoinStatus = (text: string, status: PROJECT_REQUIRE_JOIN_STATUS) => {
    if (confirm(`${text} 하시겠습니까?`)) {
      mutate({ projectJoinId: joinId, statusCode: status });
    }
  };

  return (
    <>
      <CompanionReason visible={Modal} onClose={handleModal} joinId={joinId} refetch={refetch} />
      <Container>
        <div className="back" onClick={onClick}>
          <Image src={'/images/arrow/arrow_left_gray6.svg'} alt="arrow" width={12} height={12} />
          <span>뒤로가기</span>
        </div>
        <div className="modal-title">지원자 정보</div>
        <InfoWrap>
          <div className="profile">
            <Image src="/images/profile_dummy.svg" alt="user" width={120} height={120} />
            <span
              className="status"
              style={{
                color: data?.status === STATUS_REJECTED ? color.secondary.error_1 : data?.status === STATUS_APPROVED ? color.brand.brandMain : color.gray.white,
              }}
            >
              {data && formatForProjectJoinStatus(data?.status)}
            </span>
          </div>
          <div className="info">
            <div className="title">닉네임</div>
            <div className="content">{data?.createUser.nickname}</div>
            <div className="title">포지션</div>
            <div className="content">{data?.createUser.position.name}</div>
            <div className="title">연차</div>
            <div className="content">{data?.createUser.career}년차</div>
            <div className="title">스킬</div>
            <div className="content">
              {data?.createUser.memberSkillList.map((item, index) => (
                <Fragment key={item.skillCode}>
                  {index > 0 && ', '}
                  {item.name}
                </Fragment>
              ))}
            </div>
          </div>
        </InfoWrap>
        <div>
          <div className="info-title">지원 사유</div>
          <TextArea value={data?.resumeSelectResult.contents} disabled style={{ width: '100%', height: 187 }} />
        </div>
        <div className="button">
          {data?.status === STATUS_WAITING && (
            <>
              <Button variant="error" onClick={() => setModal(true)}>
                반려
              </Button>
              <Button onClick={() => handleUpdateJoinStatus('승인', STATUS_APPROVED)}>승인</Button>
            </>
          )}
          {data?.status === STATUS_REJECTED && (
            <Button variant="error_secondary" onClick={() => handleUpdateJoinStatus('반려취소', STATUS_WAITING)}>
              반려취소
            </Button>
          )}
          {data?.status === STATUS_APPROVED && (
            <Button variant="secondary" onClick={() => handleUpdateJoinStatus('승인취소', STATUS_WAITING)}>
              승인취소
            </Button>
          )}
        </div>
      </Container>
    </>
  );
};

export default ApplyUserDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  height: 100%;
  box-sizing: border-box;
  padding: 60px 76px 32px 70px;
  color: ${color.gray.white};

  .back {
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
    top: 40px;

    cursor: pointer;
    color: ${color.gray.gray6};
  }

  .modal-title {
    font-size: 24px;
    font-weight: 700;
  }

  .info-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  gap: 40px;

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    .status {
      font-size: 14px;
      font-weight: 700;
    }
  }

  .info {
    display: grid;
    grid-template-columns: 90px 1fr;
    grid-row-gap: 8px;
  }
`;
