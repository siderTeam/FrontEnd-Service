"use client";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";
import TextArea from "@/components/TextArea/TextArea";
import Label from "@/components/Label/Label";
import { useState } from "react";
import CheckBox from "@/components/CheckBox/CheckBox";
import SelectBox from "@/components/SelectBox/SelectBox";

import styled from "@emotion/styled";
import LabelInput from "@/components/LabelInput/LabelInput";
import LabelTextArea from "@/components/LabelTextArea/LabelTextArea";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    password: "",
  });

  const [isChecked, setIsChecked] = useState({
    first: false,
    second: false,
  });

  const [selected, setSelected] = useState({
    first: "미승인",
    second: "승인",
    third: "반려",
  });

  const handleinputChange = (e: any) => {
    const { value, name } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleCheckBoxChange = (e: any) => {
    const { name, checked } = e.target;

    setIsChecked({
      ...isChecked,
      [name]: checked,
    });
  };

  const handleSelectChange = (value: string, name: string) => {
    setSelected({
      ...selected,
      [name]: value,
    });
  };

  const [textCount, setTextCount] = useState(0);
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleTextAreaChange = (e: any) => {
    if (e.target.maxLength) {
      handleTextCount(e);
    }
    setTextAreaValue(e.target.value);
  };
  
  const handleTextCount = (e: any) => {
    const { value, maxLength } = e.target;

    if (value.length > maxLength) {
      e.target.value = value.slice(0, maxLength);
    }
    setTextCount(e.target.value.length);
  };

return (
  <main>
    내가 메인
    <LabelTextArea
      label="라벨명"
      location="top"
      rows={10}
      value={textAreaValue}
      name="textarea"
      onChange={handleTextAreaChange}
      maxLength={10}
    />
    <span>{textCount}</span>
    <span> / 10</span>
    {/* <div>
        <Label label='라벨명1' style={{ fontSize: 20 }}>
          <TextArea />
        </Label>
        <Label label='라벨명2' location='top'>
          <TextArea />
        </Label>
        <Label label='라벨명' require='*'>
          <TextArea />
        </Label>
        <Label label='라벨명' require='*' location='top'>
          <TextArea />
        </Label>
        <Label label='라벨명' require='*' subText='서브텍스트입니다.'>
          <TextArea />
        </Label>
        <Label
          label='라벨명'
          require='*'
          subText='서브텍스트입니다.'
          location='top'
        >
          <TextArea />
        </Label>
      </div> */}
    {/* <div>
        <Button size='small' mode={"primary"}>
          중복 확인
        </Button>
        <Button size='medium' mode={"primary"}>
          미디움 프라이머리
        </Button>
        <Button size='large' mode={"error"}>
          라지 에러
        </Button>
      </div> */}
    {/* <div>
        <Input
          value={inputValue.password}
          onChange={handleinputChange}
          type='password'
          name='password'
          size='small'
          mode={"primary"}
          errorText='특수문자 포함 8글자 이상 입력해주세요.'
        />
        <Input
          value={"read only"}
          readOnly
          name='id'
          size='medium'
          mode={"disabled"}
        />
        <Input
          value={inputValue.name}
          onChange={handleinputChange}
          name='name'
          placeholder='이름을 입력해주세요.'
          size='large'
          mode='primary'
        />
      </div> */}
    <Modal
      onClose={() => setVisible(false)}
      style={{ width: 300, height: 200 }}
      visible={visible}
    >
      내가 모달이야!
    </Modal>
    <div>
      <CheckBox
        text="이용 약관"
        isChecked={isChecked.first}
        name="first"
        onChange={handleCheckBoxChange}
        requireText="(필수)"
        requireStyle={{ fontSize: 20 }}
      />
      <CheckBox
        text="알림 수신 동의"
        isChecked={isChecked.second}
        name="second"
        onChange={handleCheckBoxChange}
      />
    </div>
    {/* <SelectContainer>
        <Label label='승인 유무 small' style={{ marginRight: 5 }}>
          <SelectBox
            options={["미승인", "승인", "반려"]}
            value={selected.first}
            name='first'
            onChange={handleSelectChange}
            size='small'
          />
        </Label>

        <Label label='승인 유무 medium' style={{ marginRight: 5 }}>
          <SelectBox
            options={["미승인", "승인", "반려"]}
            value={selected.second}
            name='second'
            onChange={handleSelectChange}
          ></SelectBox>
        </Label>

        <Label
          label='승인 유무 large'
          style={{ marginRight: 5 }}
          location='left'
        >
          <SelectBox
            options={["미승인", "승인", "반려"]}
            value={selected.third}
            name='third'
            onChange={handleSelectChange}
            size='large'
          ></SelectBox>
        </Label>
      </SelectContainer> */}
    <LabelInput
      location="left"
      labelOption={{
        label: "dd",
        require: "*",
        subText: "서브",
      }}
      inputOption={{
        name: "dd",
        style: { border: "1px solid red" },
        size: "small",
        mode: "disabled",
      }}
    />
    <LabelInput
      location="top"
      labelOption={{
        label: "dd",
        require: "*",
        subText: "서브",
      }}
      inputOption={{
        name: "dd",
        style: { border: "1px solid red" },
        size: "small",
        mode: "disabled",
      }}
    />
  </main>
);
}

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
