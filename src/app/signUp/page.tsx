"use client";

import { getCode, postUserSignUp } from "@/api/api";
import { USER_SIGNUP_REQUEST } from "@/api/model";
import { rest } from "@/api/rest";
import Button from "@/component/Button_new/Button";
import LabelInput from "@/component/LabelInput_new/LabelInput";
import LabelSelect from "@/component/LabelSelect/LabelSelect";

import styled from "@emotion/styled";
import { useMutation, useQuery } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const [selectJob, setSelectJob] = useState("직군 선택");
  const [selectPosition, setSelectPosition] = useState("포지션 선택");
  const [jobId, setJobId] = useState(0);
  const route = useRouter();
  const [form, setForm] = useState<USER_SIGNUP_REQUEST>({
    username: "",
    password: "",
    name: "",
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

  //포지션 데이터
  const positionData = useQuery({
    queryKey: ["position", jobId],
    queryFn: () => getCode(jobId, 2),
  });

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
      <div className='header'>
        <img src='/images/Logo.svg' />
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
                onChange: handleChange,
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
                onChange: handleChange,
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
                onChange: handleChange,
              }}
            />
          </div>

          <div className='bankName'>
            <LabelInput
              location='top'
              labelOption={{
                label: "은행명",
              }}
              inputOption={{
                name: "bankName",
                size: "primary",
                text: "primary",
                placeholder: "은행명을 입력해주세요.",
                onChange: handleChange,
              }}
            />
          </div>

          <div className='bankNo'>
            <LabelInput
              location='top'
              labelOption={{
                label: "계좌번호",
              }}
              inputOption={{
                name: "bankNo",
                size: "primary",
                text: "primary",
                placeholder: "계좌번호를 입력해주세요.",
                onChange: handleChange,
              }}
            />
          </div>

          <div className='bankUserName'>
            <LabelInput
              location='top'
              labelOption={{
                label: "예금주",
              }}
              inputOption={{
                name: "bankUserName",
                size: "primary",
                text: "primary",
                placeholder: "예금주명을 입력해주세요.",
                onChange: handleChange,
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
                onChange: handleChange,
              }}
            />
          </div>

          <div className='job'>
            <LabelSelect
              location='top'
              labelOption={{
                label: "직군",
              }}
              selectOption={{
                name: "jobCode",
                text: "primary",
                selectedType: "primary",
                optionType: "primary",
                options:
                  jobData.data?.map(({ id, name }) => {
                    return {
                      label: name,
                      value: id as unknown as string,
                    };
                  }) || [],
                onChange: handleJobSelectChange,
                value: selectJob,
                placeholder: "직군을 선택해주세요.",
              }}
            />
          </div>

          <div className='position'>
            <LabelSelect
              location='top'
              labelOption={{
                label: "포지션",
              }}
              selectOption={{
                name: "positionCode",
                text: "primary",
                selectedType: "primary",
                optionType: "primary",
                options:
                  positionData.data?.map(({ id, name }) => {
                    return {
                      label: name,
                      value: id as unknown as string,
                    };
                  }) || [],
                onChange: handlePositionSelectChange,
                value: selectPosition,
                placeholder: "포지션을 선택해주세요.",
              }}
            />
          </div>
        </div>
        <div className='bottom'>
          <div className='button-wrap'>
            <Button size='primary' mode='primary' onClick={() => mutate(form)}>
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
