"use client";

import Button from "@/component/Button_new/Button";
import LabelInput from "@/component/LabelInput_new/LabelInput";

import styled from "@emotion/styled";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    nickname: "",
    phone: "",
    job: "",
    position: "",
  });

  return (
    <Container>
      <div className='header'>
        <img src='images/Logo.svg' />
        <p className='sub-title'>우리들의 꿈을 잇다.</p>
      </div>
      <LoginContainer>
        <div className='top'>
          <div className='username'>
            <LabelInput
              location='top'
              labelOption={{
                label: "아이디",
              }}
              inputOption={{
                name: "username",
                size: "primary",
                text: "primary",
                placeholder: "아이디를 입력해주세요.",
              }}
            />
          </div>

          <div className='password'>
            <LabelInput
              location='top'
              labelOption={{
                label: "비밀번호",
              }}
              inputOption={{
                name: "password",
                size: "primary",
                text: "primary",
                placeholder: "비밀번호를 입력해주세요.",
                type: "password",
              }}
            />
          </div>

          <div className='name'>
            <LabelInput
              location='top'
              labelOption={{
                label: "이름",
              }}
              inputOption={{
                name: "name",
                size: "primary",
                text: "primary",
                placeholder: "이름을 입력해주세요.",
              }}
            />
          </div>

          <div className='email'>
            <LabelInput
              location='top'
              labelOption={{
                label: "이메일",
              }}
              inputOption={{
                name: "email",
                size: "primary",
                text: "primary",
                placeholder: "이메일을 입력해주세요.",
              }}
            />
          </div>

          <div className='nickname'>
            <LabelInput
              location='top'
              labelOption={{
                label: "닉네임",
              }}
              inputOption={{
                name: "nickname",
                size: "primary",
                text: "primary",
                placeholder: "닉네임을 입력해주세요.",
              }}
            />
          </div>

          <div className='phone'>
            <LabelInput
              location='top'
              labelOption={{
                label: "핸드폰번호",
              }}
              inputOption={{
                name: "phone",
                size: "primary",
                text: "primary",
                placeholder: "핸드폰번호를 입력해주세요.",
              }}
            />
          </div>

          <div className='job'>
            <LabelInput
              location='top'
              labelOption={{
                label: "직군",
              }}
              inputOption={{
                name: "job",
                size: "primary",
                text: "primary",
              }}
            />
          </div>

          <div className='position'>
            <LabelInput
              location='top'
              labelOption={{
                label: "포지션",
              }}
              inputOption={{
                name: "position",
                size: "primary",
                text: "primary",
              }}
            />
          </div>
        </div>
        <div className='bottom'>
          <div className='button-wrap'>
            {/* <Button size='primary'>로그인</Button> */}

            <Button size='primary' mode='reverse-primary'>
              회원 가입
            </Button>
          </div>
          {/* <div className='txt-button-wrap'>
            <p className='find-id'>아이디 찾기</p>
            <p className='find-password'>비밀번호 찾기</p>
          </div> */}
        </div>
      </LoginContainer>
    </Container>
  );
};

export default page;

const Container = styled.div`
  padding: 52px 0;

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 52px;
  }

  img {
    width: 121px;
    height: 68px;
    margin-bottom: 10px;
  }

  .sub-title {
    font-size: 26px;
    color: #0066ff;
  }
`;

const LoginContainer = styled.div`
  width: 500px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 14px;
  padding: 52px;
  gap: 44px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  .top {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .button-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .txt-button-wrap {
    display: flex;
    flex: 1;

    p {
      font-size: 16px;
      font-weight: 500;

      cursor: pointer;
    }

    .find-id {
      border-right: 1px solid #b8b8b8;
      width: 198px;
      text-align: center;
    }
    .find-password {
      width: 198px;
      text-align: center;
    }
  }
`;
