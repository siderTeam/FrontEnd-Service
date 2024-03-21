'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';
import Button from '@/components/Button/Button';
import TextArea from '@/components/TextArea/TextArea';
import Input from '@/components/Input/Input';
import { useMutation } from '@tanstack/react-query';
import { applyProject } from '@/api/project/api';
import { APPLY_PROJECT_REQUEST } from '@/api/project/model';
import { getUserInfo } from '@/store/auth.store';
import { formatForPositionCode } from 'public/lib/formatForEnum';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  postId: number;
  checkJoinRefetch: () => void;
};

const Apply = ({ visible, onClose, postId, checkJoinRefetch }: ModalProps) => {
  const [disabled, setDisabled] = useState(true);
  const [form, setForm] = useState<APPLY_PROJECT_REQUEST>({
    projectId: postId,
    content: '',
  });

  const { mutate } = useMutation({
    mutationFn: applyProject,
    onSuccess: async (data) => {
      if (data.result === true) {
        alert('프로젝트에 지원하였습니다.');
      } else {
        alert('지원 실패');
      }
      onClose();
      checkJoinRefetch();
    },
    onError: () => {
      console.error('실패');
    },
  });

  const handleChange = (e: any) => {
    const { value } = e.target;

    setForm({
      projectId: Number(postId),
      content: value,
    });

    //제출 버튼 active
    if (value.trim().length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <Modal
      style={{
        borderRadius: 24,
        width: 420,
        height: 562,
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
        <div className="modal-title">지원하기</div>
        <div className="modal-content">
          <div>
            <span className="subtitle">포지션</span>
            <Input value={formatForPositionCode(getUserInfo().positionCode)} name="position" disabled style={{ width: '100%', height: 32 }} />
          </div>
          <div>
            <span className="subtitle">스킬</span>
            <Input value={'HTML, CSS, Javascript ...'} name="skill" disabled style={{ width: '100%', height: 32 }} />
          </div>
          <div>
            <span className="subtitle">지원 사유</span>
            <TextArea value={form.content} onChange={handleChange} placeholder="지원 사유를 입력하세요." style={{ width: '100%', height: 180 }} />
          </div>
        </div>
        <div className="button">
          <Button disabled={disabled} onClick={() => mutate(form)}>
            제출
          </Button>
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
  color: ${color.gray.white};

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
