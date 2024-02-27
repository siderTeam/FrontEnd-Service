'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import { ModalProps } from '@/types/types';
import Image from 'next/image';

const Modal = ({ visible, onClose, children, style }: ModalProps) => {
  return (
    <Container visible={visible} onClick={onClose}>
      <ModalContainer style={style} onClick={(e) => e.stopPropagation()}>
        <div className="close" onClick={onClose}>
          <Image src="/images/icons/X_white.svg" alt="close" width={14} height={14} />
        </div>
        {children}
      </ModalContainer>
    </Container>
  );
};

export default Modal;

const Container = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: rgba(2, 6, 13, 0.4);
  backdrop-filter: blur(25px);
`;

const ModalContainer = styled.div`
  position: relative;

  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: ${color.black};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);

  .close {
    cursor: pointer;
    position: absolute;
    display: flex;
    top: 40px;
    right: 40px;
  }
`;
