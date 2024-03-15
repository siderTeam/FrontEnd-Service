'use client';

import styled from '@emotion/styled';
import { ModalProps } from '@/types/types';
import Image from 'next/image';

const Modal = ({ visible, onClose, children, style }: ModalProps) => {
  return (
    <Container visible={visible}>
      <Content style={style} onClick={(e) => e.stopPropagation()}>
        <div onClick={onClose} className="close">
          <Image width={14} height={14} src="/images/x/x_white.svg" alt="close" />
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
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  width: 100vw;
  height: 100vh;
  background: rgba(2, 6, 13, 0.4);
  backdrop-filter: blur(25px);
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Content = styled.div`
  position: relative;
  background: white;
  border-radius: 14px;
  padding: 10px 20px;
  .close {
    position: absolute;
    top: 40px;
    right: 40px;
    display: flex;
    cursor: pointer;
    justify-content: flex-end;
  }
`;
