"use client";

import { getCode, getUserId, postUserSignUp } from "@/api/api";
import { USER_SIGNUP_REQUEST } from "@/api/model";
import { rest } from "@/api/rest";
import Button from "@/component/Button_new/Button";
import LabelInput from "@/component/LabelInput_new/LabelInput";
import LabelSelect from "@/component/LabelSelect/LabelSelect";
import { usePasswordConfirmValidation } from "@/component/hooks/usePasswordConfirmValidation";
import { useEmailValidation } from "@/component/hooks/useEmailValidation";
import { useIdValidation } from "@/component/hooks/useIdValidation";
import { useNameValidation } from "@/component/hooks/useNameValidation";
import { useNicknameValidation } from "@/component/hooks/useNicknameValidation";
import { usePasswordValidation } from "@/component/hooks/usePasswordValidation";
import { usePhoneValidation } from "@/component/hooks/usePhoneValidation";

import styled from "@emotion/styled";
import { useMutation, useQuery } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const Page = () => {
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
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [jobCodeConfirmText, setJobCodeConfirmText] = useState("");
  const [positionCodeConfirmText, setPositionCodeConfirmText] = useState("");

  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const nicknameInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const jobCodeSelectRef = useRef(null);
  const positionSelectRef = useRef(null);

  //useQuery

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

  //아이디 중복 데이터
  const idCheckData = useQuery({
    queryKey: [rest.get.userId, form.username],
    queryFn: () => getUserId(form.username),
    enabled: !!form.username, //id값이 존재하지 않을 경우 false를 변경해줌으로써 자동 실행을 막을 수 있음
  });

  //아이디 중복 커스텀 hook
  const idConfirmText = useIdValidation(idCheckData, form.username);

  //비밀번호 유효성 검사 커스텀 hook
  const passwordConfirmText = usePasswordValidation(form.password);

  //비밀번호 확인 커스텀 hook
  const confirmPasswordConfirmText = usePasswordConfirmValidation(
    form.password,
    passwordConfirm
  );

  //이름 유효성 검사 커스텀 hook
  const nameConfirmText = useNameValidation(form.name);

  //이메일 유효성 검사 커스텀 hook
  const emailConfirmText = useEmailValidation(form.email);

  //닉네임 유효성 검사 커스텀 hook
  const nicknameConfirmText = useNicknameValidation(form.nickname);

  //핸드폰번호 유효성 검사 커스텀 hook
  const phoneConfirmText = usePhoneValidation(form.phone);

  //input onChange
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  //비밀번호 확인 onChange
  const handlePwConfirmChange = (e: any) => {
    setPasswordConfirm(e.target.value);
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

  const { mutate } = useMutation({
    mutationFn: postUserSignUp,
    onSuccess: async (data) => {
      // if (!isIdValid) {
      //   setIdConfirmText("아이디 형식이 올바르지 않습니다.");
      //   return;
      // } else if (!isPwdValid) {
      //   setPasswordConfirmText(
      //     "영문, 숫자, 특수기호 포함 8자리 이상 입력해주세요."
      //   );
      //   return;
      // } else if (!isConfirmPwd) {
      //   setConfirmPasswordConfirmText("비밀번호가 일치하지 않습니다.");
      //   return;
      // } else if (!isNameValid) {
      //   setNameConfirmText("이름을 1글자 이상 20글자 미만으로 입력해주세요.");
      //   return;
      // } else if (!isEmailValid) {
      //   setEmailConfirmText("이메일 형식이 올바르지 않습니다.");
      //   return;
      // } else if (!isNicknameValid) {
      //   setNicknameConfirmText(
      //     "닉네임을 1글자 이상 20글자 미만으로 입력해주세요."
      //   );
      //   return;
      // } else if (!isPhoneNumberValid) {
      //   setPhoneConfirmText("전화번호 형식이 올바르지 않습니다.");
      //   return;
      // } else if (form.jobCode === 0) {
      //   setJobCodeConfirmText("직군을 선택해주세요.");
      //   return;
      // } else if (form.positionCode.length === 0) {
      //   setPositionCodeConfirmText("포지션을 선택해주세요.");
      //   return;
      // }
      if (data.result === true) {
        alert("회원가입이 완료되었습니다.\n로그인 페이지로 이동합니다.");

        route.push("/login");
      } else {
        alert("회원가입 불가");
      }
    },
    onError: () => {
      console.log("실패");
    },
  });

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
                require: "*",
                subText: idConfirmText,
                isValid: idConfirmText === "사용 가능한 아이디입니다.",
              }}
              inputOption={{
                name: "username",
                size: "primary",
                text: "primary",
                placeholder: "아이디를 입력해주세요.",
                ref: usernameInputRef,
                onChange: handleChange,
                isValid: idConfirmText === "사용 가능한 아이디입니다.",
              }}
            />
          </div>

          <div className='password'>
            <LabelInput
              location='top'
              labelOption={{
                label: "비밀번호",
                require: "*",
                subText: passwordConfirmText,
              }}
              inputOption={{
                name: "password",
                size: "primary",
                text: "primary",
                placeholder: "비밀번호를 입력해주세요.",
                type: "password",
                ref: passwordInputRef,
                onChange: handleChange,
              }}
            />
          </div>

          <div className='passwordConfirm'>
            <LabelInput
              location='top'
              labelOption={{
                label: "비밀번호 확인",
                require: "*",
                subText: confirmPasswordConfirmText,
                isValid:
                  confirmPasswordConfirmText === "비밀번호가 일치합니다.",
              }}
              inputOption={{
                name: "passwordConfirm",
                size: "primary",
                text: "primary",
                placeholder: "비밀번호를 입력해주세요.",
                type: "password",
                ref: confirmPasswordInputRef,
                onChange: handlePwConfirmChange,
              }}
            />
          </div>

          <div className='name'>
            <LabelInput
              location='top'
              labelOption={{
                label: "이름",
                require: "*",
                subText: nameConfirmText,
              }}
              inputOption={{
                name: "name",
                size: "primary",
                text: "primary",
                placeholder: "이름을 입력해주세요.",
                ref: nameInputRef,
                onChange: handleChange,
              }}
            />
          </div>

          <div className='email'>
            <LabelInput
              location='top'
              labelOption={{
                label: "이메일",
                require: "*",
                subText: emailConfirmText,
              }}
              inputOption={{
                name: "email",
                size: "primary",
                text: "primary",
                placeholder: "이메일을 입력해주세요.",
                ref: emailInputRef,
                onChange: handleChange,
              }}
            />
          </div>

          <div className='nickname'>
            <LabelInput
              location='top'
              labelOption={{
                label: "닉네임",
                require: "*",
                subText: nicknameConfirmText,
              }}
              inputOption={{
                name: "nickname",
                size: "primary",
                text: "primary",
                placeholder: "닉네임을 입력해주세요.",
                ref: nicknameInputRef,
                onChange: handleChange,
              }}
            />
          </div>

          <div className='bankName'>
            <LabelInput
              location='top'
              labelOption={{
                label: "은행명",
                require: "*",
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
                require: "*",
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
                require: "*",
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
                require: "*",
                subText: phoneConfirmText,
              }}
              inputOption={{
                name: "phone",
                size: "primary",
                text: "primary",
                placeholder: "핸드폰번호를 입력해주세요.",
                ref: phoneInputRef,
                onChange: handleChange,
              }}
            />
          </div>

          <div className='job'>
            <LabelSelect
              location='top'
              labelOption={{
                label: "직군",
                require: "*",
                subText: jobCodeConfirmText,
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
                require: "*",
                subText: positionCodeConfirmText,
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
