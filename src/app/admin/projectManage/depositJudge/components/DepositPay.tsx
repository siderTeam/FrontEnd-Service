import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import { color } from '@/styles/color';
import { ModalPageProps } from '@/types/types';
import styled from '@emotion/styled';
import { useState } from 'react';

// 보증금 납입처리 모달
const DepositPay = ({ visible, onClose }: ModalPageProps) => {
  const [moreVisibleIndex, setMoreVisibleIndex] = useState<number | null>(null);
  const [visibleInputIndex, setVisibleInputIndex] = useState<number | null>(null);

  const data = [
    {
      no: 1,
      username: 'sidego',
      name: '사이드',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      project: '프로젝트명',
    },
    {
      no: 1,
      username: 'sidego',
      name: '사이드',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      project: '프로젝트명',
    },
    {
      no: 1,
      username: 'sidego',
      name: '사이드',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      project: '프로젝트명',
    },
    {
      no: 1,
      username: 'sidego',
      name: '사이드',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      project: '프로젝트명',
    },
    {
      no: 1,
      username: 'sidego',
      name: '사이드',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      project: '프로젝트명',
    },
    {
      no: 1,
      username: 'sidego',
      name: '사이드',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      project: '프로젝트명',
    },
    {
      no: 1,
      username: 'sidego',
      name: '사이드',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      project: '프로젝트명',
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
          <div className="title">보증금 납입처리</div>

          <div className="search-length">검색결과: 22건</div>

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

export default DepositPay;

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
