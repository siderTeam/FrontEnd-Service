"use client";

import styled from "@emotion/styled";
import { color } from "../../Styles/CommonStyles";
import { ModalProps } from "@/type/types";
import Sidebar from "../ModalSidebar/ModalSidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Modal = ({ children, style }: ModalProps) => {
  const router = useRouter();

  return (
    <Container>
      <ModalContainer style={style} onClick={(e) => e.stopPropagation()}>
        <Sidebar />
        <Content>
          <div className="close" onClick={() => router.back()}>
            <Image
              src="/images/icons/X_white.svg"
              alt="close"
              width={24}
              height={24}
            />
          </div>
          {children}
        </Content>
      </ModalContainer>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(2, 6, 13, 0.4);
  backdrop-filter: blur(25px);
`;

const ModalContainer = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  width: 1062px;
  height: 720px;
  justify-content: center;

  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: ${color.black};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 842px;
  height: 100%;
  padding: 40px;

  .close {
    cursor: pointer;
    text-align: right;
  }
`;
