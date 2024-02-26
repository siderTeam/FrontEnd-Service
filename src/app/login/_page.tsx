"use client";

import { getAccessToken, postUserSignIn } from "@/api/api";
import { USER_SIGNIN_REQUEST } from "@/api/model";
import Button from "@/component/Button_new/Button";
import LabelInput from "@/component/LabelInput_new/LabelInput";

import styled from "@emotion/styled";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCookie } from "public/lib/util";
import { useState } from "react";

const Page = () => {
  const route = useRouter();
  const [form, setForm] = useState<USER_SIGNIN_REQUEST>({
    username: "",
    password: "",
  });

  const { mutate } = useMutation({
    mutationFn: postUserSignIn,
    onSuccess: async (data) => {
      if (data.result === true) {
        setCookie("refreshToken", data.data);
        const response = await getAccessToken();
        setCookie("accessToken", response.data);

        route.push("/home");
      }
      console.log("dd", data.data);
    },
    onError: () => {
      console.log("실패");
    },
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  console.log("form:", form);

  return (
    <Container>
      <div className='header'>
        <img src='/images/Logo.svg' />
        <p className='sub-title'>우리들의 꿈을 잇다.</p>
      </div>
      <LoginContainer>
        <div className='top'>
          <div className='id'>
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
                onChange: handleChange,
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
                onChange: handleChange,
              }}
            />
          </div>
        </div>
        <div className='bottom'>
          <div className='button-wrap'>
            <Button size='primary' onClick={() => mutate(form)}>
              로그인
            </Button>
            <Link href='/signUp'>
              <Button size='primary' mode='reverse-primary'>
                회원 가입
              </Button>
            </Link>
          </div>
          <div className='txt-button-wrap'>
            <span className='find-id'>아이디 찾기</span>
            <span className='find-password'>비밀번호 찾기</span>
          </div>
        </div>
      </LoginContainer>
    </Container>
  );
};

export default Page;

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

    span {
      font-size: 16px;
      font-weight: 500;
      width: 198px;
      text-align: center;
      cursor: pointer;
    }

    span:first-child {
      border-right: 1px solid #b8b8b8;
    }
  }
`;
