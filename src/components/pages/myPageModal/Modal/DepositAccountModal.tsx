import Modal from '@/components/Modal/Modal';

import { color } from '@/styles/color';
import styled from '@emotion/styled';
import React from 'react';

type Props = {
  visible: boolean;
  onClose: () => void;
  projectName?: string;
  username?: string;
  deposit?: number;
};

const DepositAccountModal = ({ visible, onClose, projectName, username, deposit }: Props) => {
  return (
    <Modal
      style={{
        borderRadius: 24,
        width: 670,
        height: 400,
        background: 'black',
        zIndex: 9999,
        overflow: 'hidden',
        padding: 0,
        border: '1px solid rgba(255, 255, 255, 0.60)',
      }}
      visible={visible}
      onClose={onClose}
    >
      <Container>
        <div className="title">보증금 입금 안내</div>

        <div className="wrap">
          <div style={{ fontSize: 16, fontWeight: 700, color: color.brand.brandMain }}>
            {projectName} / {username}
          </div>
          <div>보증금을 입금하고자 하는 프로젝트와 본인의 아이디가 맞습니까?</div>
          <div style={{ display: 'flex', gap: 4 }}>
            <div>맞다면</div>
            <div style={{ fontWeight: 700, color: color.brand.brandMain }}>(카카오뱅크) 123-333-4444-555</div>
            <div>로 보증금 </div> <div style={{ fontWeight: 700, color: color.brand.brandMain }}>{deposit?.toLocaleString()}</div>{' '}
            <div>원 을 입금 해주세요.</div>
          </div>
        </div>
        <div className="wrap">
          <div style={{ display: 'flex', gap: 4 }}>
            <div>입금 시 입금자 명에</div> <div style={{ fontWeight: 700, color: color.brand.brandMain }}>가입시 기재한 성함 + 아이디</div>
            <div>를 기재해 주세요.</div>
          </div>
          <div>ex) 김영섭 + yskim</div>
        </div>
        <div className="wrap warning">
          <div>1. 입금 기한은 입금 대기 시점 부터 3일 입니다.</div>
          <div>2. 입금 지연시 프로젝트 진행이 취소되니 입금 기간을 준수해주세요.</div>
          <div>3. 보증금 입금 계좌 불일치로 인한 책임은 본인에게 있습니다.</div>
        </div>
      </Container>
    </Modal>
  );
};

export default DepositAccountModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  height: 100%;
  box-sizing: border-box;
  padding: 60px 70px 32px 70px;
  color: ${color.gray.white};

  gap: 24px;

  .title {
    color: ${color.gray.white};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .wrap {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .warning {
    color: ${color.gray.gray6};
  }
`;
