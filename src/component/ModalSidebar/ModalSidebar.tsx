"use client";

import styled from "@emotion/styled";
import * as CS from "../Styles/CommonStyles";
import Image from "next/image";

const Sidebar = () => {
  return (
    <>
      <Container>
        <div className="title">
          <Image
            src={"/images/icons/person_white.svg"}
            alt="mypage"
            width={16}
            height={16}
          />
          <span>마이페이지</span>
        </div>
        <div className="title">
          <Image
            src={"/images/icons/document_white.svg"}
            alt="mypage"
            width={16}
            height={16}
          />
          <span>내 지원서</span>
        </div>
        <div className="title">
          <Image
            src={"/images/icons/checkCircle_white.svg"}
            alt="mypage"
            width={16}
            height={16}
          />
          <span>결제 내역</span>
        </div>
        <div className="title">
          <Image
            src={"/images/icons/moniter_white.svg"}
            alt="mypage"
            width={16}
            height={16}
          />
          <span>프로젝트</span>
        </div>
      </Container>
      <Effect />
    </>
  );
};

export default Sidebar;

const Container = styled.div`
  box-sizing: border-box;
  padding: 90px 0 0 50px;
  width: 220px;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px 0 0 20px;

  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 45px;

  .title {
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${CS.color.white};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const Effect = styled.div`
  position: absolute;
  left: -95px;
  top: -15px;

  width: 294px;
  height: 254px;
  transform: rotate(-30deg);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;
