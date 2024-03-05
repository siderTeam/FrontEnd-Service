import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import { useState } from 'react';
import { ModalPageProps } from '@/types/types';

// 보증금 납입처리 모달
const PayStatus = ({ visible, onClose }: ModalPageProps) => {
  const [moreVisibleIndex, setMoreVisibleIndex] = useState<number | null>(null);
  const [visibleInputIndex, setVisibleInputIndex] = useState<number | null>(null);

  const data = [
    {
      name: '사이드',
      member: '리더',
      position: '프론트엔드 개발자',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      payStatus: '완납',
    },
    {
      name: '사이드',
      member: '멤버',
      position: '백엔드 개발자',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      payStatus: '일부 납부',
    },
    {
      name: '사이드',
      member: '멤버',
      position: '기획자',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      payStatus: '미납부',
    },
    {
      name: '사이드',
      member: '멤버',
      position: '디자이너',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      payStatus: '미납부',
    },
    {
      name: '사이드',
      member: '멤버',
      position: '프론트엔드 개발자',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      payStatus: '일부 납부',
    },
    {
      name: '사이드',
      member: '멤버',
      position: '백엔드 개발자',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      payStatus: '완납',
    },
  ];

  const handleMoreToggle = (index: number) => {
    setMoreVisibleIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleInputToggle = (index: number) => {
    setVisibleInputIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleCloseModal = () => {
    setVisibleInputIndex(null);
  };

  const colors = data.map((item) => {
    const status = item.payStatus;
    let statusColor = null;

    if (status === '완납') {
      statusColor = color.brand.brandMain;
    } else if (status === '일부 납부') {
      statusColor = color.brand.brandSub;
    } else {
      statusColor = color.secondary.error_1;
    }

    return statusColor;
  });

  return (
    <>
      <Modal
        style={{
          borderRadius: 24,
          width: 1080,
          height: 679,
          background: 'black',
          zIndex: 9999,
          overflow: 'hidden',
          padding: 0,
          border: '1px solid rgba(255, 255, 255, 0.60)',
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.40)',
        }}
        visible={visible}
        onClose={onClose}
      >
        <Container>
          <div className="title">납부 현황</div>
          <div className="header">
            <div className="header-title" style={{ padding: '0 26px' }}>
              프로젝트 명
            </div>
            <div className="text" style={{ width: '360px' }}>
              프로젝트 이름입니다.
            </div>
            <div className="header-title" style={{ padding: '0 32px', borderLeft: '1px solid var(--Stroke, rgba(255, 255, 255, 0.67))' }}>
              구성 인원
            </div>
            <div className="text">88명</div>
          </div>

          <div className="button-wrap">
            <Button size="small" variant="secondary">
              이전
            </Button>
            <Button size="small" variant="primary">
              저장
            </Button>
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default PayStatus;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 39px 40px 32px 40px;
  height: 679px;
  box-sizing: border-box;
  .title {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 22px;
  }

  .header {
    display: flex;
    height: 40px;

    padding-right: 10px;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
    background: var(--Fill, linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5));

    color: ${color.gray.white};
    font-size: 14px;
    font-weight: 400;

    box-sizing: border-box;

    margin-bottom: 32px;
  }
  .header-title {
    display: flex;
    height: 40px;

    justify-content: center;
    align-items: center;
    border-right: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  }

  .search-length {
    color: ${color.gray.gray6};
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 2px;
    margin-top: 32px;
  }
  .button-wrap {
    display: flex;
    flex: 1;
    align-items: end;
    justify-content: center;
    gap: 4px;
  }
`;

const TableHeader = styled.div`
  display: flex;
`;

const TableData = styled.div`
  display: flex;

  &:hover {
    background-color: ${color.gray.gray8};
    transition: 0.1s;
  }
`;
