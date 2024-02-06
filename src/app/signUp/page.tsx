"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import LabelInput from "@/component/LabelInput/LabelInput";
import Button from "@/component/Button/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { USER_SIGNUP_REQUEST } from "../api/model";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCode, postUserSignUp } from "../api/api";
import { rest } from "../api/rest";
import SelectBox from "@/component/SelectBox/SelectBox";

const Page = () => {
  const route = useRouter();
  const [selectJob, setSelectJob] = useState("선택");
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

  //직군 데이터
  const jobData = useQuery({
    queryKey: [rest.get.code],
    queryFn: () => getCode(10, 2),
  });
  //console.log(jobData.data);

  const { mutate } = useMutation({
    mutationFn: postUserSignUp,
    onSuccess: async (data) => {
      if (data.result === true) {
        alert("회원가입이 완료되었습니다.\n로그인 페이지로 이동합니다.");

        route.push("/login");
      }
    },
    onError: () => {
      console.log("실패");
    },
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleJobSelectChange = (name: string, id: number, value: string) => {
    setSelectJob(value);
    setForm({ ...form, [name]: Number(id) });
  };

  console.log(form);

  return (
    <Container>
      <Logo>
        <Image src="images/logo.svg" alt="logo" width={121} height={68} />
        <div className="sub-title">우리들의 꿈을 잇다.</div>
      </Logo>
      <SignUpCard>
        <div className="login-wrap">
          <LabelInput
            location="top"
            labelOption={{
              label: "아이디",
              require: "*",
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
              require: "*",
            }}
            inputOption={{
              type: "password",
              name: "passwordCheck",
              size: "full",
              mode: "text",
              placeholder: "비밀번호를 입력해주세요.",
              onChange: handleChange,
            }}
          />
          <LabelInput
            location="top"
            labelOption={{
              label: "비밀번호 확인",
              require: "*",
            }}
            inputOption={{
              type: "password",
              name: "password",
              size: "full",
              mode: "text",
              placeholder: "비밀번호를 다시 입력해주세요.",
              onChange: handleChange,
            }}
          />
          <LabelInput
            location="top"
            labelOption={{
              label: "이름",
              require: "*",
            }}
            inputOption={{
              type: "text",
              name: "name",
              size: "full",
              mode: "text",
              placeholder: "이름을 입력해주세요.",
              onChange: handleChange,
            }}
          />
          <LabelInput
            location="top"
            labelOption={{
              label: "이메일",
              require: "*",
            }}
            inputOption={{
              type: "email",
              name: "email",
              size: "full",
              mode: "text",
              placeholder: "이메일을 입력해주세요.",
              onChange: handleChange,
            }}
          />
          <LabelInput
            location="top"
            labelOption={{
              label: "닉네임",
              require: "*",
            }}
            inputOption={{
              type: "text",
              name: "nickname",
              size: "full",
              mode: "text",
              placeholder: "닉네임을 입력해주세요.",
              onChange: handleChange,
            }}
          />
          <LabelInput
            location="top"
            labelOption={{
              label: "전화번호",
              require: "*",
            }}
            inputOption={{
              type: "text",
              name: "phone",
              size: "full",
              mode: "text",
              placeholder: "전화번호를 입력해주세요.",
              onChange: handleChange,
            }}
          />
          <SelectBox
            options={jobData.data || []}
            value={selectJob}
            name="jobCode"
            onChange={handleJobSelectChange}
          />
          {/* <LabelInput
            location="top"
            labelOption={{
              label: "직군",
              require: "*",
            }}
            inputOption={{
              type: "text",
              name: "jobCode",
              size: "full",
              mode: "text",
              placeholder: "직군을 입력해주세요.",
              onChange: handleChangeNumber,
            }}
          />
          <LabelInput
            location="top"
            labelOption={{
              label: "포지션",
              require: "*",
            }}
            inputOption={{
              type: "text",
              name: "positionCode",
              size: "full",
              mode: "text",
              placeholder: "포지션을 입력해주세요.",
              onChange: handleChangePosition,
            }}
          /> */}
        </div>
        <Button mode="primary_square" onClick={() => mutate(form)}>
          회원가입
        </Button>
      </SignUpCard>
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

const SignUpCard = styled.div`
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
`;
