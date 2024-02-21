"use client";

import styled from "@emotion/styled";
import { color } from "../../../Styles/CommonStyles";
import Button from "@/component/Button/Button";
import SelectBox from "@/component/SelectBox/SelectBox";
import Input from "@/component/Input/Input";
import { useState } from "react";
import { USER_SIGNUP_REQUEST } from "@/app/api/model";
import { SignUpProps } from "@/type/types";

const ThirdContent = ({ onNext }: SignUpProps) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [selectPosition, setSelectPosition] = useState("");
  const [form, setForm] = useState<USER_SIGNUP_REQUEST>({
    username: "",
    name: "",
    password: "",
    email: "",
    nickname: "",
    bankName: "",
    bankNo: "",
    bankUserName: "",
    phone: "",
    jobCode: 0,
    positionCode: [],
  });

  //포지션 onChange
  const handlePositionSelectChange = (name: string, value: string) => {
    setSelectPosition(value);
    setForm({ ...form, [name]: [Number(value)] });
  };

  //form input onChange
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  //연차 onKeyDown
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // 입력된 키가 숫자, 방향키, backspace, delete가 아니면 이벤트 취소
    if (
      !/\d/.test(e.key) &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight" &&
      e.key !== "Backspace" &&
      e.key !== "Delete"
    ) {
      e.preventDefault();
    }
  };

  return (
    <>
      <Progressbar></Progressbar>
      <SubTitle>
        사이드고를 이용하는
        <br />
        당신의 능력에 대해 설명해주세요.
      </SubTitle>
      <Wrap>
        <SelectBox
          options={[
            { label: "테스트 포지션1", value: "1" },
            { label: "테스트 포지션2", value: "2" },
            { label: "테스트 포지션3", value: "3" },
            { label: "테스트 포지션4", value: "4" },
            { label: "테스트 포지션5", value: "5" },
          ]}
          value={selectPosition}
          name="position"
          onChange={handlePositionSelectChange}
          placeholder="포지션"
        />
        <Input
          type="text"
          name="year"
          size="large"
          placeholder="연차"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          maxLength={2}
        />
      </Wrap>
      <Text>거의 다 왔어요!</Text>
      <Button size="large" onClick={onNext}>
        다음
      </Button>
    </>
  );
};

export default ThirdContent;

const Progressbar = styled.div`
  width: 100px;
  height: 8px;
  margin-bottom: 56px;
  background-image: url("/images/progressbar/step3.svg");
`;

const SubTitle = styled.div`
  margin-bottom: 32px;
  color: ${color.gray3};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Text = styled.div`
  color: ${color.gray8};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  flex: 1;
  margin-top: 147px;
  text-align: center;
`;
