'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';
import Button from '@/components/Button/Button';
import TextArea from '@/components/TextArea/TextArea';
import Input from '@/components/Input/Input';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const Apply = ({ visible, onClose }: ModalProps) => {
  return (
    <Modal
      style={{
        width: 420,
        height: 562,
      }}
      visible={visible}
      onClose={onClose}
    >
      <Container>
        <div className="modal-title">지원하기</div>
        <div className="modal-content">
          <div>
            <span className="subtitle">포지션</span>
            <Input value={'프론트엔드 개발자'} name="position" disabled style={{ width: '100%', height: 32 }} />
          </div>
          <div>
            <span className="subtitle">스킬</span>
            <Input value={'HTML, CSS, Javascript ...'} name="skill" disabled style={{ width: '100%', height: 32 }} />
          </div>
          <div>
            <span className="subtitle">지원 사유</span>
            <TextArea placeholder="지원 사유를 입력하세요." style={{ width: '100%', height: 180 }} />
          </div>
        </div>
        <div className="button">
          <Button>제출</Button>
        </div>
      </Container>
    </Modal>
  );
};

export default Apply;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  box-sizing: border-box;
  padding: 60px 70px 32px 70px;
  color: ${color.white};

  .modal-title {
    font-size: 24px;
    font-weight: 700;

    margin-bottom: 20px;
  }

  .modal-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .subtitle {
      font-size: 16px;
      font-weight: 500;

      margin-bottom: 4px;
    }
  }

  .button {
    display: flex;
    justify-content: center;
  }
`;
