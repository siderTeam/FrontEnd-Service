'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Modal from '@/components/Modal/Modal';
import TextArea from '@/components/TextArea/TextArea';
import Button from '@/components/Button/Button';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const RejectReason = ({ visible, onClose }: ModalProps) => {
  return (
    <Modal
      style={{
        width: 560,
        height: 400,
        overflow: 'hidden',
        display: 'flex',
      }}
      visible={visible}
      onClose={onClose}
    >
      <Container>
        <div className="modal-title">반려사유 기입</div>
        <TextArea style={{ width: 480, height: 212 }} />

        <div className="button">
          <Button mode="secondary" onClick={onClose}>
            닫기
          </Button>
          <Button>저장</Button>
        </div>
      </Container>
    </Modal>
  );
};

export default RejectReason;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 39px 40px;

  .modal-title {
    color: ${color.white};
    font-size: 16px;
    font-weight: 400;

    margin-bottom: 22px;
  }

  .button {
    flex: 1;
    align-items: flex-end;

    display: flex;
    justify-content: center;
    gap: 4px;
  }
`;
