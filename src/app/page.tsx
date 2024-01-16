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

type InputProps = {
  name: string;
  password: string;
};

type CheckBoxProps = {
  first: boolean;
  second: boolean;
};

type SelectProps = {
  first: string;
  second: string;
  third: string;
};

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState<InputProps>({
    name: "",
    password: "",
  });

  const [isChecked, setIsChecked] = useState<CheckBoxProps>({
    first: false,
    second: false,
  });

  const [selectedOption, setSelectedOption] = useState<SelectProps>({
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

  const handleSelectChange = (e: any) => {
    const { value, name } = e.target;

    setSelectedOption({
      ...selectedOption,
      [name]: value,
    });
  };

  return (
    <main>
      내가 메인
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
      <div>
        <Button size='small-box' mode={"primary-box"}>
          중복 확인
        </Button>
        <Button size='medium-box' mode={"primary-box"}>
          미디움 프라이머리
        </Button>
        <Button size='large-box' mode={"error-box"}>
          라지 에러
        </Button>

        <Button size='small-text' mode='primary-text'>
          글자 버튼 스몰
        </Button>

        <Button size='medium-text' mode='disabled-text'>
          글자 버튼 미디움 비활성화
        </Button>

        <Button
          onClick={() => setVisible(true)}
          size='large-text'
          mode={"point-text"}
        >
          글자 버튼 라지 포인트
        </Button>

        <Button size='round-box' mode='point-box'>
          +
        </Button>

        <Button size='large-box' mode='error-box' isDisabled>
          dd
        </Button>
      </div>
      <div>
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
      </div>
      <Modal
        onClose={() => setVisible(false)}
        style={{ width: 300, height: 200 }}
        visible={visible}
      >
        내가 모달이야!
      </Modal>
      <Input
        value={inputValue.name}
        onChange={handleinputChange}
        name='name'
        placeholder='이름을 입력해주세요.'
        size='large'
        mode='primary'
      />
      <div>
        <CheckBox
          text='이용 약관'
          isChecked={isChecked.first}
          name='first'
          onChange={handleCheckBoxChange}
          requireText='(필수)'
        />
        <CheckBox
          text='알림 수신 동의'
          isChecked={isChecked.second}
          name='second'
          onChange={handleCheckBoxChange}
        />
      </div>
      <SelectContainer>
        <Label label='승인 유무 small' style={{ marginRight: 5 }}>
          <SelectBox
            options={["미승인", "승인", "반려"]}
            value={selectedOption.first}
            name='first'
            onChange={handleSelectChange}
            size='small'
          />
        </Label>

        <Label label='승인 유무 medium' style={{ marginRight: 5 }}>
          <SelectBox
            options={["미승인", "승인", "반려"]}
            value={selectedOption.second}
            name='second'
            onChange={handleSelectChange}
          ></SelectBox>
        </Label>
        <div className='row'>
          <Label label='승인 유무 large' style={{ marginRight: 5 }}>
            <SelectBox
              options={["미승인", "승인", "반려"]}
              value={selectedOption.third}
              name='third'
              onChange={handleSelectChange}
              size='large'
            ></SelectBox>
          </Label>
        </div>
      </SelectContainer>
    </main>
  );
}

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;

  .row {
    display: flex;
  }
`;
