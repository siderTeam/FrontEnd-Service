'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';

import { ModalProps } from '@/types/types';
import { useRouter } from 'next/navigation';

const Modal = ({ visible, onClose, children, style }: ModalProps) => {
  const router = useRouter();
  return (
    <Container visible={visible} onClick={onClose}>
      <Content style={style} onClick={(e) => e.stopPropagation()}>
        <div onClick={() => router.replace('/')} className="close">
          <img src="/images/icons/X_white.svg" />
        </div>
        {children}
      </Content>
    </Container>
  );
};

export default Modal;

const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: rgba(2, 6, 13, 0.4);
  backdrop-filter: blur(25px);
  border-radius: 24px;
`;

const Content = styled.div`
  background: ${color.gray.black};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 24px;
  position: relative;

  .close {
    position: absolute;
    display: inline-flex;
    cursor: pointer;
    /* justify-content: flex-end; */
    /* margin-top: 40px;
    margin-right: 40px; */
    top: 40px;
    right: 40px;
  }
`;
