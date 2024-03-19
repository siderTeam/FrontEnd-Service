'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Modal from '@/components/Modal/Modal';
import TextArea from '@/components/TextArea/TextArea';
import Button from '@/components/Button/Button';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { updateJoinProjectStatus } from '@/api/project/api';
import { PROJECT_REQUIRE_JOIN_STATUS } from 'public/lib/enum';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  joinId: number;
  refetch: () => void;
};

const CompanionReason = ({ visible, onClose, joinId, refetch }: ModalProps) => {
  const [inputTextarea, setInputTextarea] = useState('');

  const { mutate } = useMutation({
    mutationFn: updateJoinProjectStatus,
    onSuccess: async (data) => {
      if (data.result === true) {
        alert('반려처리가 완료됐습니다.');
      } else {
        alert('실패');
      }
      setInputTextarea('');
      onClose();
      refetch();
    },
    onError: () => {
      console.error('실패');
    },
  });

  const handleTextareaChange = (e: any) => {
    setInputTextarea(e.target.value);
  };

  const handleClick = () => {
    if (inputTextarea.length <= 0) {
      alert('반려사유를 입력해주세요.');
      return;
    }

    if (confirm('반려하시겠습니까?')) {
      mutate({ projectJoinId: joinId, statusCode: PROJECT_REQUIRE_JOIN_STATUS.REJECTED });
    }
  };

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
        <TextArea style={{ width: '100%', height: 60 }} value={inputTextarea} onChange={handleTextareaChange} placeholder="반려사유를 입력하세요." />
        <div className="button">
          <Button variant="error" onClick={handleClick}>
            반려
          </Button>
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
