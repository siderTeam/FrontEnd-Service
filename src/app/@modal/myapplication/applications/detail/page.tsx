"use client";

import styled from "@emotion/styled";
import { color } from "@/Styles/color";
import Modal from "@/component/Modal_new/Modal";
import Sidebar from "@/app/@modal/components/Sidebar";
import Input from "@/component/Input_new/Input";
import TextArea from "@/components/TextArea/TextArea";
import Button from "@/component/Button_new/Button";
import Label from "@/component/Label_new/Label";

const Page = () => {
  return (
    <Modal style={{ width: "1062px" }}>
      <Container>
        <Sidebar />
        <div className='right-section'>
          <div className='wrap'>
            <Label label='지원서 이름'>
              <Input style={{ marginTop: "4px" }} />
            </Label>

            <Label label='자기 소개'>
              <TextArea style={{ marginTop: "4px" }} />
            </Label>

            <Label label='스킬'>
              <TextArea style={{ marginTop: "4px" }} />
            </Label>
          </div>
          <div className='delete'>지원서 삭제하기</div>
          <div className='button-wrap'>
            <Button size='medium' mode='secondary'>
              이전
            </Button>
            <Button size='medium' mode='primary'>
              수정
            </Button>
          </div>
        </div>
      </Container>
    </Modal>
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

    padding-right: 70px;
    padding-left: 70px;

    background: ${color.gray.black};
  }

  .wrap {
    display: flex;
    flex-direction: column;
    gap: 16px;

    margin-top: 60px;
  }

  .delete {
    color: ${color.secondary.error_1};
    text-align: right;
    font-size: 12px;
    font-weight: 400;
    margin-top: 10px;

    cursor: pointer;
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
