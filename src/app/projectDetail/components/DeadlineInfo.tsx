'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const DeadlineInfo = ({element}:any) => {
  return (
    <Container ref={element}>
      <div className="subtitle">
        <Image src={'/images/calendar/calendar_gray5.svg'} alt="calendar" width={20} height={20} />
        <span>프로젝트 모집마감</span>
      </div>
      <div className="deadline-wrap">
        <div className="count-wrap">
          <span>남은기간</span>
          <span className="count">88일</span>
        </div>
        <div>
          <div className="date-wrap">
            <span className="date">시작일</span>
            <span>8888.88.88 88:88</span>
          </div>
          <div className="date-wrap green">
            <span className="date">마감일</span>
            <span>8888.88.88 88:88</span>
          </div>
        </div>
        <Button>지원하기</Button>
      </div>
    </Container>
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
