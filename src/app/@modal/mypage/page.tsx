"use client";

import styled from "@emotion/styled";
import * as CS from "../../../Styles/CommonStyles";
import Modal from "@/component/Modal_new/Modal";
import { useState } from "react";
import Input from "@/component/Input_new/Input";
import Label from "@/component/Label_new/Label";
import TextArea from "@/components/TextArea/TextArea";
import Sidebar from "../components/Sidebar";

const Page = () => {
  const [textareaCount, setTextareaCount] = useState(0);

  const onTextareaHandler = (e: any) => {
    const { value, maxLength } = e.target;

    if (value.length > maxLength) {
      e.target.value = value.slice(0, maxLength);
    }
    setTextareaCount(e.target.value.length);
  };

  return (
    <>
      <Modal style={{ width: "1062px" }}>
        <Container>
          <Sidebar />
          <div className='right-section'>
            <Profile>
              <img
                src='/images/profile_dummy2.svg'
                style={{ width: 80, boxSizing: "border-box" }}
                className='img'
              />
              <div className='profile-text'>
                <div className='name'>박봉팔</div>
                <div className='position'>88년차 포지션</div>
              </div>
            </Profile>

            <div className='input-wrap'>
              <Label label='이름' require='*'>
                <Input size='small' style={{ marginTop: "4px" }} />
              </Label>
              <Label label='연차' require='*'>
                <Input size='small' style={{ marginTop: "4px" }} />
              </Label>
              <Label label='닉네임' require='*'>
                <Input size='small' style={{ marginTop: "4px" }} />
              </Label>
              <Label label='포지션' require='*'>
                <Input size='small' style={{ marginTop: "4px" }} />
              </Label>
            </div>

            <Label
              label='한 줄 소개'
              style={{ width: "100%", marginTop: "16px" }}
            >
              <TextArea
                size='full'
                color='primary'
                style={{ marginTop: "4px" }}
                onChange={onTextareaHandler}
                maxLength={100}
                textareaCount={textareaCount}
              />
            </Label>
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default Page;

const Container = styled.div`
  display: flex;
  width: 842px;
  height: 720px;
  flex-shrink: 0;
  box-sizing: border-box;

  .nav {
  }
  .right-section {
    width: 842px;
    height: 100%;
    flex-shrink: 0;
    box-sizing: border-box;

    padding-top: 22px;
    padding-right: 126px;
    padding-left: 136px;

    background: ${CS.color.black};
  }

  .input-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 16px 40px;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 66px;
  margin-bottom: 46px;

  .img {
    margin-right: 24px;
  }

  .profile-text {
    display: flex;
    flex-direction: column;
  }

  .name {
    color: ${CS.color.gray3};

    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .position {
    color: ${CS.color.gray4};

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
