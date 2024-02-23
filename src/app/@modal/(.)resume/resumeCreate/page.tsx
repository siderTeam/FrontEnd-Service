"use client";

import styled from "@emotion/styled";
import { color } from "@/Styles/CommonStyles";
import Modal from "@/component/Modal/Modal";
import Label from "@/component/Label/Label";
import Input from "@/component/Input/Input";
import TextArea from "@/component/TextArea/TextArea";
import Button from "@/component/Button/Button";

const Page = () => {
  return (
    <Modal>
      <Container>
        <div className="contentWrap">
          <Label location="top" label="지원서 이름" require="*">
            <Input type="text" name="name" placeholder="지원서 이름" />
          </Label>
          <Label location="top" label="자기소개" require="*">
            <TextArea
              placeholder="자기소개"
              style={{ width: "702px", height: "240px" }}
            />
          </Label>
          <Label location="top" label="스킬" require="*">
            <TextArea
              placeholder="스킬"
              style={{ width: "702px", height: "80px", fontSize: "16px" }}
            />
          </Label>
        </div>
        <div className="button">
          <Button>저장</Button>
        </div>
      </Container>
    </Modal>
  );
};

export default Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;

  .contentWrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 103px;
  }

  .button {
    margin: 0 auto;
  }
`;
