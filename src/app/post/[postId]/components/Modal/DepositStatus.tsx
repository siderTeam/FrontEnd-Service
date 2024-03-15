'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Modal from '@/components/Modal/Modal';
import Profile from '@/components/Profile/Profile';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const DepositStatus = ({ visible, onClose }: ModalProps) => {
  return (
    <Modal
      style={{
        borderRadius: 24,
        width: 650,
        height: 526,
        background: `${color.gray.black}`,
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
        <div className="modal-title">보증금 현황</div>
        <div className="subtext">프로젝트 참여자의 보증금 납입현황을 확인합니다.</div>
        <div className="modal-content">
          <div className="content">
            <Profile />
            <div className="info">
              <div className="title">납부금액</div>
              <div className="pay">888,888원</div>
            </div>
            <div className="info">
              <div className="title">1인 보증금</div>
              <div className="pay">888,888원</div>
            </div>
            <span className="status">입금완료</span>
          </div>
        </div>
      </Container>
    </Modal>
  );
};

export default DepositStatus;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  box-sizing: border-box;
  padding: 60px 70px;
  color: ${color.gray.white};

  .modal-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .subtext {
    color: ${color.gray.gray6};
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 32px;
  }

  .modal-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;

    overflow-y: auto;

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .info {
      display: flex;
      flex-direction: column;
    }

    .title {
      color: ${color.gray.gray5};
      font-size: 12px;
      font-weight: 400;
    }

    .pay {
      font-size: 14px;
      font-weight: 700;
    }

    .status {
      color: ${color.brand.brandMain};
      font-size: 14px;
      font-weight: 700;
    }
  }
`;
