"use client";

import styled from "@emotion/styled";
import * as CS from "../../component/Styles/CommonStyles";
import Checkbox from "@/component/Checkbox_new/Checkbox";
import { useState } from "react";
import Input from "@/component/Input_new/Input";
import Button from "@/component/Button_new/Button";

const page = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <div className='backgroundImg'></div>
      <LoginContainer>
        <div className='title'>로그인</div>
        <div className='inputWrap'>
          <Input size='full' text='primary' placeholder='아이디' />
          <Input size='full' text='primary' placeholder='비밀번호' />
        </div>
        <div className='wrap'>
          <Checkbox
            type={isChecked ? "checked" : "unchecked"}
            className='checkbox'
            text='아이디 저장'
            isChecked={isChecked}
            onClick={handleChecked}
          />
          <div className='find'>계정정보 찾기</div>
        </div>
        <div className='buttonWrap'>
          <Button>로그인</Button>
          <Button mode='primary-reverse'>회원가입</Button>
        </div>
      </LoginContainer>
    </Container>
  );
};

export default page;

const Container = styled.div`
  width: 1920px;
  height: 100vh;
  position: relative;

  .backgroundImg {
    width: 1273px;
    height: 100vh;
    flex-shrink: 0;
    position: absolute;

    background: linear-gradient(
        90deg,
        #02060d 6.5%,
        rgba(0, 0, 0, 0) 52%,
        #02060d 92%
      ),
      linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),
      url("/images/dummy.jpg"), lightgray 50% / cover no-repeat;
  }

  .title {
    color: ${CS.color.brandMain};
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-bottom: 44px;
    box-sizing: border-box;
  }

  .inputWrap {
    display: flex;
    flex-direction: column;

    gap: 10px;

    margin-bottom: 8.5px;
    box-sizing: border-box;
  }
`;

const LoginContainer = styled.div`
  width: 480px;
  height: 640px;
  flex-shrink: 0;

  padding: 110px 58px;

  box-sizing: border-box;

  position: fixed;
  top: 220px;
  right: 429px;
  z-index: 3;

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.67);
  background: linear-gradient(
      144deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    rgba(2, 6, 13, 0.5);
  backdrop-filter: blur(20px);

  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    margin-bottom: 50.5px;
  }
  .find {
    color: ${CS.color.gray5};
    text-align: right;
    font-family: "Spoqa Han Sans Neo";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .buttonWrap {
    display: flex;
    flex-direction: column;

    gap: 8px;
  }
`;
