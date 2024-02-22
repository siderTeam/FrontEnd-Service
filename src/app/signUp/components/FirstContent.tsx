"use client";

import styled from "@emotion/styled";
import * as CS from "../../../Styles/CommonStyles";
import Radio from "@/component/RadioButton/Radio";
import { useEffect, useState } from "react";
import Button from "@/component/Button_new/Button";

const FirstContent = ({ onClick }) => {
  const [checkForm, setCheckForm] = useState({
    all: false,
    first: false,
    second: false,
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleRadioChecked = (name) => {
    setCheckForm((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  useEffect(() => {
    const { all, first, second } = checkForm;
    const allChecked = first && second;
    setCheckForm((prev) => ({
      ...prev,
      all: allChecked,
    }));
    setIsButtonDisabled(!(first && second));
  }, [checkForm.first, checkForm.second]);

  const handleAllChecked = () => {
    const newValue = !checkForm.all;
    setCheckForm({
      all: newValue,
      first: newValue,
      second: newValue,
    });
  };

  return (
    <SignupContainer>
      <div className='complete-bar'>
        <div className='complete'></div>
      </div>
      <div className='text'>
        사이드고 서비스 이용약관에
        <br />
        동의해 주세요.
      </div>

      <div className='radio1'>
        <Radio
          type={checkForm.all ? "checked_Big" : "unchecked_Big"}
          className='radio'
          text='모두 동의합니다.'
          isChecked={checkForm.all}
          onClick={handleAllChecked}
          style={{ width: "20px", height: "20px" }}
        />
      </div>

      <div className='radio2'>
        <Radio
          type={checkForm.first ? "checked_Big" : "unchecked_Big"}
          className='radio'
          text='이용약관 동의'
          isChecked={checkForm.first}
          onClick={() => handleRadioChecked("first")}
          requireText='(필수)'
          style={{ width: "20px", height: "20px" }}
        />
        <div className='terms'>약관 내용</div>
      </div>

      <div className='radio3'>
        <Radio
          type={checkForm.second ? "checked_Big" : "unchecked_Big"}
          className='radio'
          text='개인정보 이용약관 동의'
          isChecked={checkForm.second}
          onClick={() => handleRadioChecked("second")}
          requireText='(선택)'
          style={{ width: "20px", height: "20px" }}
        />
        <div className='terms'>약관 내용</div>
      </div>

      <Button
        mode='primary'
        onClick={onClick}
        style={{ width: "100%" }}
        disabled={isButtonDisabled}
      >
        다음
      </Button>
      <div className='mirror'></div>
    </SignupContainer>
  );
};

export default FirstContent;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 624px;
  height: 785px;
  flex-shrink: 0;

  padding: 56px;

  box-sizing: border-box;

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.67);
  background: linear-gradient(
      144deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    rgba(2, 6, 13, 0.5);
  backdrop-filter: blur(20px);

  overflow: hidden;
  position: relative;

  .mirror {
    width: 702.513px;
    height: 551.634px;
    transform: rotate(-30deg);
    flex-shrink: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    position: absolute;
    /* overflow: hidden; */
    right: 120px;
    top: -50px;
    z-index: -1;
  }

  .complete-bar {
    width: 100px;
    height: 8px;
    flex-shrink: 0;

    background-color: ${CS.color.gray8};

    border-radius: 26px;

    margin-bottom: 56px;
    position: relative;

    .complete {
      width: 25%;
      height: 8px;
      flex-shrink: 0;

      background-color: ${CS.color.brandMain};

      border-radius: 26px 0 0 26px;
      position: absolute;
    }
  }

  .text {
    color: ${CS.color.gray3};

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-bottom: 32px;
  }

  .terms {
    width: 480px;
    height: 140px;
    flex-shrink: 0;

    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid ${CS.color.gray7};

    padding: 10px 20px 18px 20px;
    margin-top: 10px;
    margin-left: 24px;

    overflow-y: auto;

    color: ${CS.color.gray4};

    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::-webkit-scrollbar {
      width: 12px; /* 스크롤바의 너비 */
    }
    &::-webkit-scrollbar-thumb {
      background: ${CS.color.gray5}; /* 스크롤바의 색상 */
      border-radius: 28px;

      background-clip: padding-box;
      border: 4px solid transparent;
    }
  }

  .radio1,
  .radio2 {
    margin-bottom: 24px;
  }

  .radio3 {
    margin-bottom: 44px;
  }
`;
