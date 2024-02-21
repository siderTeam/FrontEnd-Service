"use client";

import styled from "@emotion/styled";
import Button from "@/component/Button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { USER_SIGNIN_REQUEST } from "../api/model";
import { useMutation } from "@tanstack/react-query";
import { getAccessToken, postUserSignIn } from "../api/api";
import { setCookie } from "public/lib/util";
import Input from "@/component/Input/Input";
import { color } from "../../Styles/CommonStyles";
import CheckBox from "@/component/CheckBox/CheckBox";

const Page = () => {
  const route = useRouter();
  const [isChecked, setIsChecked] = useState(false);
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
      } else {
        alert("로그인 실패하였습니다.\n다시 시도해주시기 바랍니다.");
      }
    },
    onError: () => {
      console.log("실패");
    },
  });

  //input onChange
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  //로그인 onClick
  const handleLogin = () => {
    if (form.username.trim() === "" || form.password.trim() === "") {
      alert("아이디/비밀번호를 입력해주세요.");
      return;
    }
    mutate(form);
  };

  //아이디 저장 체크박스
  const handleChecked = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <Container>
      <div className="backgroundImage"></div>
      <LoginContainer>
        <div className="title">로그인</div>
        <div className="inputWrap">
          <Input
            type="text"
            name="username"
            size="large"
            placeholder="아이디"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            size="large"
            placeholder="비밀번호"
            onChange={handleChange}
          />
        </div>
        <TextWrap>
          <CheckBox
            text="아이디 저장"
            isChecked={isChecked}
            onChange={handleChecked}
          />
          <Link href="" className="findInfo">
            계정정보 찾기
          </Link>
        </TextWrap>
        <div className="buttonWrap">
          <Button size="large" onClick={handleLogin}>
            로그인
          </Button>
          <Link href="/signUp">
            <Button size="large" mode="secondary">
              회원가입
            </Button>
          </Link>
        </div>
      </LoginContainer>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  position: relative;

  .backgroundImage {
    width: 1273px;
    height: 100vh;
    position: absolute;

    background: linear-gradient(
        90deg,
        #02060d 6.5%,
        rgba(0, 0, 0, 0) 52%,
        #02060d 92%
      ),
      linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),
      url("/images/testImage.png"), lightgray 50% / cover no-repeat;
  }
`;

const LoginContainer = styled.div`
  box-sizing: border-box;
  width: 480px;
  height: 640px;
  padding: 110px 58px;

  position: fixed;
  top: 220px;
  right: 429px;

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.67);
  background: linear-gradient(
      144deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    rgba(2, 6, 13, 0.5);
  backdrop-filter: blur(20px);

  .title {
    color: ${color.brandMain};
    text-align: center;
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
    margin-bottom: 8px;
  }

  .buttonWrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 51px;

  .findInfo {
    color: ${color.gray5};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
