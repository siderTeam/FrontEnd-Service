"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import LabelInput from "@/component/LabelInput/LabelInput";
import Button from "@/component/Button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { USER_SIGNIN_REQUEST } from "../api/model";
import { useMutation } from "@tanstack/react-query";
import { getAccessToken, postUserSignIn } from "../api/api";
import { setCookie } from "public/lib/util";

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
        setCookie("RefreshToken", data.data);
        const response = await getAccessToken();
        setCookie("AccessToken", response.data);

        route.push("/home");
      }
    },
    onError: () => {
      console.log("실패");
    },
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <Container>
      <Logo>
        <Image src="images/logo.svg" alt="logo" width={121} height={68} />
        <div className="sub-title">우리들의 꿈을 잇다.</div>
      </Logo>
      <LoginCard>
        <div className="login-wrap">
          <LabelInput
            location="top"
            labelOption={{
              label: "아이디",
            }}
            inputOption={{
              type: "text",
              name: "username",
              size: "full",
              mode: "text",
              placeholder: "아이디를 입력해주세요.",
              onChange: handleChange,
            }}
          />
          <LabelInput
            location="top"
            labelOption={{
              label: "비밀번호",
            }}
            inputOption={{
              type: "password",
              name: "password",
              size: "full",
              mode: "text",
              placeholder: "비밀번호를 입력해주세요.",
              onChange: handleChange,
            }}
          />
        </div>
        <div className="button-wrap">
          <Button mode="primary_square" onClick={() => mutate(form)}>로그인</Button>
          <Button mode="square">회원가입</Button>
        </div>
        <div className="find-wrap">
          <Link href="">아이디 찾기</Link>
          <Link href="">비밀번호 찾기</Link>
        </div>
      </LoginCard>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  padding-top: 92px;
  display: flex;
  flex-direction: column;
  gap: 52px;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .sub-title {
    color: #0066ff;
    font-family: Pretendard;
    font-size: 26px;
    font-weight: 600;
  }
`;

const LoginCard = styled.div`
  box-sizing: border-box;
  width: 500px;
  padding: 52px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #ffffff;
  border-radius: 14px;

  display: flex;
  flex-direction: column;
  gap: 44px;

  .login-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 376px;
  }

  .button-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .find-wrap {
    display: flex;
    text-align: center;

    a {
      color: black;
      font-size: 16px;
      width: 198px;
    }

    a:first-child {
      border-right: 1px solid #b8b8b8;
    }
  }
`;
