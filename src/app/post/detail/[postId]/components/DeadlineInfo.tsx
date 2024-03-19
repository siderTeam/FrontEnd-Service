'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import Apply from './Modal/Apply';
import { useState } from 'react';
import { PROJECT_DETAIL_RESPONSE } from '@/api/project/model';
import { getUserInfo } from '@/store/auth.store';
import ApplyStatusContainer from './Modal/ApplyStatusModal/ApplyStatusContainer';

type Props = {
  element: any;
  data: PROJECT_DETAIL_RESPONSE | undefined;
  postId: number;
};

const DeadlineInfo = ({ element, data, postId }: Props) => {
  const identification = getUserInfo().id === data?.createUser.id;
  const [applyModal, setApplyModal] = useState(false);
  //남은기간 계산
  const today = new Date();
  const endDate = new Date(data?.recruitEndDate || '');
  let period = endDate.getTime() - today.getTime();
  period = period < 0 ? 0 : Math.ceil(period / (1000 * 60 * 60 * 24));

  //지원하기 / 지원현황 모달
  const handleCloseApplyModal = () => {
    setApplyModal(false);
  };

  return (
    <>
      <Apply visible={applyModal} onClose={handleCloseApplyModal} postId={postId} />
      {identification && applyModal && <ApplyStatusContainer postId={postId} visible={applyModal} onClose={handleCloseApplyModal} />}
      <Container ref={element}>
        <div className="subtitle">
          <Image src={'/images/calendar/calendar_gray5.svg'} alt="calendar" width={20} height={20} />
          <span>프로젝트 모집마감</span>
        </div>
        <div className="deadline-wrap">
          <div className="count-wrap">
            <span>남은기간</span>
            <span className="count">{period}일</span>
          </div>
          <div>
            <div className="date-wrap">
              <span className="date">시작일</span>
              <span>{data?.recruitStartDate.replace(/-/g, '.')}</span>
            </div>
            <div className="date-wrap green">
              <span className="date">마감일</span>
              <span>{data?.recruitEndDate.replace(/-/g, '.')}</span>
            </div>
          </div>
          {identification ? (
            <Button variant="secondary" onClick={() => setApplyModal(true)}>
              지원현황
            </Button>
          ) : (
            <Button onClick={() => setApplyModal(true)}>지원하기</Button>
          )}
        </div>
      </Container>
    </>
  );
};

export default DeadlineInfo;

const Container = styled.div`
  border-bottom: 1px solid ${color.gray.gray7};
  box-sizing: border-box;
  padding: 44px 0 44px 0;

  .deadline-wrap {
    margin: 0 38px 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .count-wrap {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .count {
    color: ${color.brand.brandMain};
    font-size: 40px;
    font-weight: 700;
  }

  .date-wrap {
    display: flex;
    align-items: center;
  }

  .date {
    box-sizing: border-box;
    padding: 4px 16px;
    margin-right: 29px;

    border-radius: 68px;
    border: 1px solid ${color.gray.white};

    font-size: 12px;
    font-weight: 400;
  }

  .green {
    margin-top: 4px;
    color: ${color.brand.brandMain};

    .date {
      border: 1px solid ${color.brand.brandMain};
    }
  }
`;
