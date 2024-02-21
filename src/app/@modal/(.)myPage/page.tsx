"use client";

import styled from "@emotion/styled";
import { color } from "../../../Styles/CommonStyles";
import Modal from "@/component/Modal/Modal";
import Image from "next/image";
import { useState } from "react";
import Label from "@/component/Label/Label";
import Input from "@/component/Input/Input";
import TextArea from "@/component/TextArea/TextArea";
import Button from "@/component/Button/Button";

const Page = () => {
  const [textCount, setTextCount] = useState(0);
  const [inputTextarea, setInputTextarea] = useState("");

  //textarea onChange
  const handleTextChange = (e: any) => {
    if (e.target.maxLength) {
      handleTextCount(e);
    }
    setInputTextarea(e.target.value);
  };

  //textarea 글자 수 카운트
  const handleTextCount = (e: any) => {
    const { value, maxLength } = e.target;

    if (value.length > maxLength) {
      e.target.value = value.slice(0, maxLength);
    }
    setTextCount(e.target.value.length);
  };

  const handleOnChange = (e: any) => {};

  return (
    <Modal>
      <Container>
        <ProfileWrap>
          <Image
            src={"/images/home/profile.svg"}
            alt="profile"
            width={80}
            height={80}
          />
          <div className="profileInfo">
            <div className="name">박봉팔</div>
            <div className="info">88년차 프론트엔드</div>
          </div>
        </ProfileWrap>
        <InputWrap>
          <Label location="top" label="이름" require="*">
            <Input
              type="text"
              name="name"
              value={"박봉팔"}
              onChange={handleOnChange}
              disabled
            />
          </Label>
          <Label location="top" label="연차" require="*">
            <Input
              type="text"
              name="deposit"
              value={"88"}
              onChange={handleOnChange}
            />
          </Label>
          <Label location="top" label="닉네임" require="*">
            <Input
              type="text"
              name="nickname"
              value={"닉네임"}
              onChange={handleOnChange}
            />
          </Label>
          <Label location="top" label="포지션" require="*">
            <Input
              type="text"
              name="position"
              value={"프론트엔드"}
              onChange={handleOnChange}
            />
          </Label>
          <Label location="top" label="포지션" require="*">
            <TextArea
              style={{ width: "702px", height: "112px" }}
              value={inputTextarea}
              onChange={handleTextChange}
              textCount={textCount}
              maxLength={100}
            />
          </Label>
        </InputWrap>
        <StyledButton>저장</StyledButton>
      </Container>
    </Modal>
  );
};

export default Page;

const Container = styled.div`
  box-sizing: border-box;
  padding: 2px 30px;
`;

const ProfileWrap = styled.div`
  display: flex;
  gap: 24px;

  .profileInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
  }

  .name {
    color: ${color.gray3};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .info {
    color: ${color.gray4};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const InputWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 40px;
  margin: 40px 0 150px 0;

  .wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

const StyledButton = styled(Button)`
  margin: 0 auto;
`;
