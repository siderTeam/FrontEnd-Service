"use client";

import styled from "@emotion/styled";
import { IoClose } from "react-icons/io5";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: any;
  style?: React.CSSProperties;
};

const Modal = ({ visible, onClose, children, style }: Props) => {
  return (
    <Container visible={visible} onClick={onClose}>
      <Content style={style} onClick={(e) => e.stopPropagation()}>
        <div onClick={onClose} className='close'>
          <IoClose />
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
  display: ${({ visible }) => (visible ? "flex" : "none")};
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: white;
  border-radius: 14px;
  padding: 10px 20px;
  .close {
    display: flex;
    cursor: pointer;
    justify-content: flex-end;
  }
`;
