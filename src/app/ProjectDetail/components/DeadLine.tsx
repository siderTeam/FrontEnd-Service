import Button from '@/components/Button/Button';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import ApplyModal from './ApplyModal';

const DeadLine = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <DeadLineWrap>
      <div className="deadline-title">
        <Image src="/images/etc/calender_gray5.svg" width={22} height={22} alt="calender" />
        <span>프로젝트 모집마감</span>
      </div>

      <ContentWrap>
        <div className="deadline-wrap">
          <span style={{ color: color.gray.white, fontSize: '16px', fontWeight: 400 }}>남은기간</span>
          <span style={{ color: color.brand.brandMain, fontSize: '40px', fontWeight: 700 }}>88일 88:88:88</span>
        </div>
        <div className="date-wrap">
          <div style={{ display: 'flex', alignItems: 'center', gap: '29px' }}>
            <div className="start">시작일</div>
            <span style={{ color: color.gray.white, fontSize: '14px', fontWeight: 400 }}>8888.88.88 88:88</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '29px' }}>
            <div className="end">마감일</div>
            <span style={{ color: color.brand.brandMain, fontSize: '14px', fontWeight: 400 }}>8888.88.88 88:88</span>
          </div>
        </div>
        <Button mode="primary" size="medium" onClick={handleModal}>
          지원하기
        </Button>
      </ContentWrap>
      <ApplyModal visible={modal} onClose={handleCloseModal} />
    </DeadLineWrap>
  );
};

export default DeadLine;

const DeadLineWrap = styled.div`
  padding: 40px 32px 0 32px;

  .deadline-title {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${color.gray.gray5};
    font-size: 22px;
    font-weight: 700;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 200px;
  margin-top: 16px;

  .deadline-wrap {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  .date-wrap {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .start,
  .end {
    display: flex;
    padding: 4px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 68px;
    font-size: 12px;
    font-weight: 400;
  }
  .start {
    border: 1px solid ${color.gray.white};
    color: ${color.gray.white};
  }
  .end {
    border: 1px solid ${color.brand.brandMain};
    color: ${color.brand.brandMain};
  }
`;
