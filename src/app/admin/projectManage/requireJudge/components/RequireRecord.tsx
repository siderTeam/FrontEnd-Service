import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import Table from '@/components/Table/Table';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import RejectReason from './RejectReason';
import { ModalPageProps } from '@/types/types';

//요구사항 열람 모달
const RequireRecord = ({ visible, onClose }: ModalPageProps) => {
  const [modal, setModal] = useState(false);
  const data = [
    {
      username: 'sidego',
      name: '사이드',
      position: '프론트엔드 개발자',
      phone: '010-8888-8888',
      member: '리더',
    },
    {
      username: 'sidego',
      name: '사이드',
      position: '백엔드 개발자',
      phone: '010-8888-8888',
      member: '멤버',
    },
    {
      username: 'sidego',
      name: '사이드',
      position: '기획자',
      phone: '010-8888-8888',
      member: '멤버',
    },
    {
      username: 'sidego',
      name: '사이드',
      position: '디자이너',
      phone: '010-8888-8888',
      member: '멤버',
    },
    {
      username: 'sidego',
      name: '사이드',
      position: '프론트엔드 개발자',
      phone: '010-8888-8888',
      member: '멤버',
    },
    {
      username: 'sidego',
      name: '사이드',
      position: '백엔드 개발자',
      phone: '010-8888-8888',
      member: '멤버',
    },
  ];

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <Modal
        style={{
          borderRadius: 24,
          width: 1080,
          height: 714,
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
          <div className="title">요구사항 상세</div>

          <div className="button-wrap">
            <Button size="small" variant="secondary" onClick={handleOpenModal}>
              이전
            </Button>
            <Button size="small" variant="primary">
              저장
            </Button>
          </div>
        </Container>
      </Modal>
      <RejectReason visible={modal} onClose={handleCloseModal} />
    </>
  );
};

export default RequireRecord;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 39px 40px 32px 40px;
  height: 714px;

  box-sizing: border-box;

  .title {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 400;
  }
  .table-wrap {
    display: flex;
    gap: 40px;
  }
  .button-wrap {
    display: flex;
    justify-content: center;
    flex: 1;
    align-items: flex-end;
    gap: 4px;
  }
`;

const LeftTable = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;

  width: 460px;

  margin-top: 22px;

  .header {
    display: flex;
    height: auto;
    min-height: 40px;
    align-items: auto;
    border: 1px solid ${color.gray.gray6};
    background: ${color.gray.gray9};
    padding: 11px 0 11px 10px;

    box-sizing: border-box;

    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 500;
  }

  .content {
    display: flex;

    height: auto;
    padding: 10px;
    align-items: center;

    border: 1px solid ${color.gray.gray6};

    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 500;
  }
  .introduce {
    display: flex;
    align-items: flex-start;
    height: 120px;
  }
  .score-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

const RightTable = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  border: 1px solid ${color.gray.gray6};

  .right-header-wrap {
    display: flex;
  }

  .right-content-wrap {
    display: flex;
  }
`;
