"use client";

import styled from "@emotion/styled";
import { color } from "@/Styles/color";
import Button from "@/component/Button_new/Button";
import SelectBox from "@/component/SelectBox_new/SelectBox";
import Input from "@/component/Input_new/Input";
import { useQuery } from "@tanstack/react-query";
import { getCode } from "@/api/api";
import { useState } from "react";

const ThirdContent = ({ onClick }) => {
  // //포지션 데이터
  // const positionData = useQuery({
  //   queryKey: ["position", jobId],
  //   queryFn: () => getCode(jobId, 2),
  // });

  return (
    <SignupContainer>
      <div className='complete-bar'>
        <div className='complete'></div>
      </div>
      <div className='text'>
        사이드고를 이용하는
        <br />
        당신의 능력에 대해 설명해주세요.
      </div>

      <div>
        {/* <SelectBox
          name='positionCode'
          value='dd'
          placeholder='포지션을 선택해주세요.'
        /> */}
        <Input placeholder='연차' name='year' />
      </div>

      <div className='complete-text'>거의 다 왔어요!</div>

      <div className='button-wrapper'>
        <Button mode='primary' onClick={onClick} style={{ width: "100%" }}>
          다음
        </Button>
      </div>
      <div className='mirror'></div>
    </SignupContainer>
  );
};

export default ThirdContent;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 624px;
  height: 785px;
  flex-shrink: 0;

  overflow: hidden;
  position: relative;

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
  }
  .complete-bar {
    width: 100px;
    height: 8px;
    flex-shrink: 0;

    background-color: ${color.gray.gray8};

    border-radius: 26px;

    margin-bottom: 56px;
    position: relative;

    .complete {
      width: 75%;
      height: 8px;
      flex-shrink: 0;

      background-color: ${color.brand.brandMain};

      border-radius: 26px 0 0 26px;
      position: absolute;
    }
  }
  .text {
    color: ${color.gray.gray3};

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-bottom: 32px;
  }
  .complete-text {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 165px;
    margin-bottom: 166px;

    color: ${color.gray.gray8};

    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .button-wrapper {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: end;
  }
`;
