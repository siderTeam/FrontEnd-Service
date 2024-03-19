'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Modal from '@/components/Modal/Modal';
import TextArea from '@/components/TextArea/TextArea';
import Button from '@/components/Button/Button';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const CompanionReason = ({ visible, onClose }: ModalProps) => {
  return (
    <Modal
      style={{
        borderRadius: 24,
        width: 886,
        height: 274,
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
        <div className="modal-title">반려 사유 입력</div>
        <TextArea style={{ width: '100%', height: 60 }} />
        <div className="button">
          <Button variant="error">반려</Button>
        </div>
      </Container>
    </Modal>
  );
};

export default CompanionReason;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  box-sizing: border-box;
  padding: 60px 76px 32px 70px;
  color: ${color.gray.white};

  .modal-title {
    font-size: 24px;
    font-weight: 700;

    margin-bottom: 20px;
  }

  .button {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: end;
  }
`;
