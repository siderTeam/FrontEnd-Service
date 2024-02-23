"use client";

import styled from "@emotion/styled";
import { color } from "@/Styles/color";
import Modal from "@/component/Modal_new/Modal";
import { useState } from "react";
import Input from "@/component/Input_new/Input";
import Label from "@/component/Label_new/Label";
import TextArea from "@/components/TextArea/TextArea";
import Sidebar from "../components/Sidebar";
import MyProfile from "@/component/MyProfile/MyProfile";
import Button from "@/component/Button_new/Button";

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
            <MyProfile style={{ marginTop: "60px", marginBottom: "40px" }} />
            <div className='input-wrap'>
              <Label label='이름' require='*'>
                <Input size='medium' style={{ marginTop: "4px" }} />
              </Label>
              <Label label='연차' require='*'>
                <Input size='medium' style={{ marginTop: "4px" }} />
              </Label>
              <Label label='닉네임' require='*'>
                <Input size='medium' style={{ marginTop: "4px" }} />
              </Label>
              <Label label='포지션' require='*'>
                <Input size='medium' style={{ marginTop: "4px" }} />
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
            <div className='button-wrap'>
              <Button size='medium' mode='primary'>
                저장
              </Button>
            </div>
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

  .right-section {
    display: flex;
    flex-direction: column;
    width: 842px;
    height: 100%;
    flex-shrink: 0;
    box-sizing: border-box;

    border-radius: 0 24px 24px 0;

    padding-top: 22px;
    padding-right: 126px;
    padding-left: 136px;

    background: ${color.gray.black};
  }

  .input-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 16px 40px;
  }
  .button-wrap {
    display: flex;
    justify-content: center;
    align-items: end;
    flex: 1;
    gap: 4px;
    margin-bottom: 32px;
  }
`;
