'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Modal from '@/components/Modal/Modal';
import Table from '@/components/Table/Table';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import RejectReason from './RejectReason';
import { useState } from 'react';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const RequireDetail = ({ visible, onClose }: ModalProps) => {
  const [modal, setModal] = useState(false);

  //반려사유 기입 모달
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <Modal
      style={{
        width: 1080,
        height: 714,
        overflow: 'hidden',
        display: 'flex',
      }}
      visible={visible}
      onClose={onClose}
    >
      <Container>
        <div className="modal-title">요구사항 상세</div>
        <div className="table-wrap">
          <LeftTable>
            <div className="header">프로젝트 명</div>
            <div className="content">고구마 프로젝트</div>
            <div className="header">프로젝트 기간</div>
            <div className="content">test88</div>
            <div className="header align">프로젝트 소개</div>
            <div className="content align">군고구마파는 아저씨 트럭에 GPS를 심어 어디에서나 앱으로 군고구마트럭을 스토킹 할 수 있는 어플리케이션 제작</div>
            <div className="header align">기능 요구사항 및 배점</div>
            <div className="content align">[10점] 고구마고구마고구마고구마고구마고구마</div>
            <div className="header">1인 보증금</div>
            <div className="content">888,888원</div>
          </LeftTable>

          <RightTable>
            <div className="table">
              <Table type="headerLeft" style={{ width: 140 }}>
                아이디
              </Table>
              <Table type="headerLeft" style={{ width: 100 }}>
                이름
              </Table>
              <Table type="headerLeft" style={{ width: 140 }}>
                포지션
              </Table>
              <Table type="headerLeft" style={{ width: 120 }}>
                전화번호
              </Table>
            </div>

            <div className="table">
              <Table style={{ width: 140 }}>test88</Table>
              <Table style={{ width: 100 }}>
                홍길동
                <Image src={'/images/icons/star_fill_green.svg'} alt="star" width={12} height={12} style={{ marginLeft: '8px' }} />
              </Table>
              <Table style={{ width: 140 }}>프론트엔드 개발자</Table>
              <Table style={{ width: 120 }}>010-8888-8888</Table>
            </div>
          </RightTable>
        </div>

        <div className="button">
          <Button mode="secondary" onClick={() => setModal(true)}>
            반려
          </Button>
          <Button>승인</Button>
        </div>
      </Container>
      <RejectReason visible={modal} onClose={handleCloseModal} />
    </Modal>
  );
};

export default RequireDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 39px 40px;

  color: ${color.white};
  font-size: 16px;
  font-weight: 500;

  .modal-title {
    font-weight: 400;

    margin-bottom: 22px;
  }

  .table-wrap {
    display: flex;
    gap: 40px;
    flex: 1;
  }

  .button {
    display: flex;
    justify-content: center;
    gap: 4px;
  }
`;

const LeftTable = styled.div`
  display: grid;
  grid-template-columns: 120px 340px;
  grid-template-rows: 40px 40px 120px 286px 40px;

  .header {
    display: flex;
    box-sizing: border-box;
    padding: 9px 10px;
    align-items: center;

    border: 1px solid ${color.gray6};
    background: ${color.gray9};
  }

  .content {
    display: inline-flex;
    box-sizing: border-box;
    padding: 9px 10px;
    align-items: center;

    border: 1px solid ${color.gray6};
  }

  .align {
    align-items: baseline;
  }
`;

const RightTable = styled.div`
  height: 526px;
  border: 1px solid ${color.gray6};

  .table {
    display: flex;
  }
`;
