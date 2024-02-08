"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import LabelInput from "@/component/LabelInput/LabelInput";
import Button from "@/component/Button/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { USER_SIGNUP_REQUEST } from "../api/model";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCode, getIdCheck, postUserSignUp } from "../api/api";
import { rest } from "../api/rest";
import SelectBox from "@/component/SelectBox/SelectBox";
import Label from "@/component/Label/Label";
import Input from "@/component/Input/Input";

const Page = () => {
  const route = useRouter();
  const [selectJob, setSelectJob] = useState("직군 선택");
  const [selectPosition, setSelectPosition] = useState("포지션 선택");
  const [jobId, setJobId] = useState(0);
  const [userId, setUserId] = useState("");
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

  //id 중복확인
  const idCheckData = useQuery({
    queryKey: [rest.get.getIdCheck, userId],
    queryFn: () => getIdCheck(userId),
    enabled: !!userId, //id값이 존재하지 않을 경우 false를 변경해줌으로써 자동 실행을 막을 수 있음
  });

  //직군 데이터
  const jobData = useQuery({
    queryKey: [rest.get.code],
    queryFn: () => getCode(10, 2),
  });

  //포지션 데이터
  const positionData = useQuery({
    queryKey: ["position", jobId],
    queryFn: () => getCode(jobId, 2),
  });

  //회원가입
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

  //직군 onChange
  const handleJobSelectChange = (name: string, value: string) => {
    setSelectJob(value);
    setForm({ ...form, [name]: Number(value) });
    setJobId(Number(value));
  };

  //포지션 onChange
  const handlePositionSelectChange = (name: string, value: string) => {
    setSelectPosition(value);
    setForm({ ...form, [name]: [Number(value)] });
  };

  return (
    <Container>
      <Logo>
        <Image src="images/logo.svg" alt="logo" width={121} height={68} />
        <div className="sub-title">우리들의 꿈을 잇다.</div>
      </Logo>
      <SignUpCard>
        <div className="login-wrap">
          <Label label="아이디" require="*" />
          <InputButton>
            <Input
              type="text"
              name="username"
              size="full"
              mode="text"
              placeholder="아이디를 입력해주세요."
              onChange={handleChange}
            />
            <Button onClick={() => setUserId(form.username)}>중복 확인</Button>
          </InputButton>
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
          <Label label="직군" require="*" />
          <SelectBox
            options={
              jobData.data?.map(({ id, name }) => {
                return {
                  label: name,
                  value: id as unknown as string,
                };
              }) || []
            }
            value={selectJob}
            name="jobCode"
            onChange={handleJobSelectChange}
            placeholder="직군 선택"
          />
          <Label label="포지션" require="*" />
          <SelectBox
            options={
              positionData.data?.map(({ id, name }) => {
                return {
                  label: name,
                  value: id as unknown as string,
                };
              }) || []
            }
            value={selectPosition}
            name="positionCode"
            onChange={handlePositionSelectChange}
            placeholder="포지션 선택"
          />
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

const InputButton = styled.div`
  display: flex;
  gap: 5px;
`;
