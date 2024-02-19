"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import LabelInput from "@/component/LabelInput/LabelInput";
import Button from "@/component/Button/Button";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { USER_SIGNUP_REQUEST } from "../api/model";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCode, getIdCheck, postUserSignUp } from "../api/api";
import { rest } from "../api/rest";
import SelectBox from "@/component/SelectBox/SelectBox";
import Label from "@/component/Label/Label";
import Input from "@/component/Input/Input";

const USERNAME_REGEX = /^[a-zA-Z0-9]{4,12}$/;
const PWD_REGEX = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
const NAME_REGEX = /^[a-zA-Z가-힣]{2,10}$/;
const EMAIL_REGEX =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

const Page = () => {
  const route = useRouter();
  const [selectJob, setSelectJob] = useState("");
  const [selectPosition, setSelectPosition] = useState("");
  const [jobId, setJobId] = useState(0);
  const [username, setUsername] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
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
  //유효성 검사
  const [idValidate, setIdValidate] = useState(false);
  const [idDuplicate, setIdDuplicate] = useState(false);
  const [pwValidate, setPwValidate] = useState(false);
  const [pwCheckValidate, setPwCheckValidate] = useState(false);
  const [nameValidate, setNameValidate] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);
  //메시지 출력
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwCheckMessage, setPwCheckMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  //form input onChange
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "username") {
      onChangeId(value);
    } else if (name === "password") {
      onChangePassword(value);
    } else if (name === "name") {
      onChangeName(value);
    } else if (name === "email") {
      onChangeEmail(value);
    }
  };

  //id 중복확인
  const idCheckData = useQuery({
    queryKey: [rest.get.getIdCheck, username],
    queryFn: () => getIdCheck(username),
    enabled: !!username, //id값이 존재하지 않을 경우 false를 변경해줌으로써 자동 실행을 막을 수 있음
  });

  useEffect(() => {
    if (idCheckData.isSuccess) {
      if (idCheckData.data?.result === true) {
        setIdMessage("사용 가능한 아이디입니다.");
        setIdDuplicate(true);
      } else {
        setIdMessage("중복된 아이디입니다.");
        setIdDuplicate(false);
      }
    }
  }, [idCheckData.data, idCheckData.isSuccess]);

  //id onChange
  const onChangeId = useCallback((value: string) => {
    if (USERNAME_REGEX.test(value)) {
      setIdMessage("올바른 아이디 형식입니다.");
      setIdValidate(true);
    } else {
      setIdMessage("4~12자, 영문과 숫자로만 입력해주세요.");
      setIdValidate(false);
    }
  }, []);

  //비밀번호 onChange
  const onChangePassword = useCallback((value: string) => {
    if (value === "") {
      setPwMessage("");
      setPwValidate(false);
      setPwCheckMessage("비밀번호가 일치하지 않습니다");
      setPwCheckValidate(false);
      return;
    }

    if (PWD_REGEX.test(value)) {
      setPwMessage("올바른 비밀번호 형식입니다.");
      setPwValidate(true);
    } else {
      setPwMessage("8~20자, 영문/숫자/특수문자를 모두 포함해주세요.");
      setPwValidate(false);
    }
  }, []);

  //비밀번호 확인 onchange
  const handlePasswordChange = (e: any) => {
    setPasswordCheck(e.target.value);

    if (e.target.value === "") {
      setPwCheckMessage("");
      setPwCheckValidate(false);
      return;
    }

    if (form.password === e.target.value) {
      setPwCheckMessage("비밀번호가 일치합니다.");
      setPwCheckValidate(true);
    } else {
      setPwCheckMessage("비밀번호가 일치하지 않습니다.");
      setPwCheckValidate(false);
    }
  };

  //이름 onChange
  const onChangeName = useCallback((value: string) => {
    if (NAME_REGEX.test(value)) {
      setNameMessage("올바른 이름 형식입니다.");
      setNameValidate(true);
    } else {
      setNameMessage("2~10자, 한글, 영문으로 입력해주세요.");
      setNameValidate(false);
    }
  }, []);

  //이메일 onChange
  const onChangeEmail = useCallback((value: string) => {
    if (EMAIL_REGEX.test(value)) {
      setEmailMessage("올바른 이메일 형식입니다.");
      setEmailValidate(true);
    } else {
      setEmailMessage("올바르지 않은 이메일 형식입니다.");
      setEmailValidate(false);
    }
  }, []);

  //전화번호 onKeyDown
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // 입력된 키가 숫자가 아니면 이벤트를 취소
    if (!/\d/.test(e.key)) {
      e.preventDefault();
    }
  };

  //직군 데이터
  const jobData = useQuery({
    queryKey: [rest.get.code],
    queryFn: () => getCode(10, 2),
  });

  //직군 onChange
  const handleJobSelectChange = (name: string, value: string) => {
    setSelectPosition(""); //포지션 초기화

    setSelectJob(value);
    setForm({ ...form, [name]: Number(value) });
    setJobId(Number(value));
  };

  //포지션 데이터
  const positionData = useQuery({
    queryKey: ["position", jobId],
    queryFn: () => getCode(jobId, 2),
  });

  //포지션 onChange
  const handlePositionSelectChange = (name: string, value: string) => {
    setSelectPosition(value);
    setForm({ ...form, [name]: [Number(value)] });
  };

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

  return (
    <Container>
      <Logo>
        <Image src="images/logo.svg" alt="logo" width={121} height={68} />
        <div className="sub-title">우리들의 꿈을 잇다.</div>
      </Logo>
      <SignUpCard>
        <div className="login-wrap">
          <Label
            label="아이디"
            require="*"
            confirmText={idDuplicate ? idMessage : undefined}
            errorText={!idDuplicate ? idMessage : undefined}
          />
          <InputButton>
            <Input
              type="text"
              name="username"
              size="full"
              mode="text"
              placeholder="아이디를 입력해주세요."
              onChange={handleChange}
            />
            <Button
              disabled={!idValidate ? true : false}
              onClick={() => setUsername(form.username)}
            >
              중복 확인
            </Button>
          </InputButton>
          <LabelInput
            location="top"
            labelOption={{
              label: "비밀번호",
              require: "*",
              confirmText: pwValidate ? pwMessage : undefined,
              errorText: !pwValidate ? pwMessage : undefined,
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
          <LabelInput
            location="top"
            labelOption={{
              label: "비밀번호 확인",
              require: "*",
              confirmText: pwCheckValidate ? pwCheckMessage : undefined,
              errorText: !pwCheckValidate ? pwCheckMessage : undefined,
            }}
            inputOption={{
              type: "password",
              name: "passwordCheck",
              value: passwordCheck,
              size: "full",
              mode: "text",
              placeholder: "비밀번호를 다시 입력해주세요.",
              onChange: handlePasswordChange,
            }}
          />
          <LabelInput
            location="top"
            labelOption={{
              label: "이름",
              require: "*",
              confirmText: nameValidate ? nameMessage : undefined,
              errorText: !nameValidate ? nameMessage : undefined,
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
              confirmText: emailValidate ? emailMessage : undefined,
              errorText: !emailValidate ? emailMessage : undefined,
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
              placeholder: "전화번호를 입력해주세요. (숫자만 입력 가능)",
              onChange: handleChange,
              onKeyPress: handleKeyDown,
              maxLength: 11,
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
        <Button
          onClick={() => mutate(form)}
          disabled={
            !(
              idValidate &&
              idDuplicate &&
              pwValidate &&
              pwCheckValidate &&
              nameValidate &&
              emailValidate &&
              form.nickname &&
              form.phone.length === 11 &&
              selectJob &&
              selectPosition
            )
          }
        >
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
