'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { useEffect, useState } from 'react';
import { getUserId } from '@/api/api';
import { SIGN_UP_REQUEST } from '@/api/auth/model';
import useChangeInputs from '@/hook/useChangeInputs';
import { InputSubMessageProps } from '@/components/Input/InputSubMessage';
import useInfoMessage, { INFO_MESSAGE } from '@/components/hooks/useInfoMessage';
import { getPasswordCheckValidateMessage, getPasswordValidateMessage, getUserIDValidateMessage } from '@/app/util/auth';
import { autoHyphen } from 'public/lib/util';

type Callback = Omit<SIGN_UP_REQUEST, 'positionCode' | 'introduction' | 'career'>;

interface Props {
  onClick: (params: Callback) => void;
}

const initialInputs = {
  username: '',
  password: '',
  passwordCheck: '',
  name: '',
  nickname: '',
  phone: '',
};

interface INFO_MESSAGE_TYPE {
  username: InputSubMessageProps;
  password: InputSubMessageProps;
  passwordCheck: InputSubMessageProps;
}

const initialInfoMessages: INFO_MESSAGE<INFO_MESSAGE_TYPE> = {
  username: {
    children: '',
    status: 'error',
    validate: getUserIDValidateMessage as any,
  }, // 유저 아이디
  password: {
    children: '',
    status: 'error',
    validate: getPasswordValidateMessage as any,
  }, // 비밀번호 변경
  passwordCheck: {
    children: '',
    status: 'error',
    validate: (value, params) => getPasswordCheckValidateMessage(value, params, 'password') as any,
  }, // 비밀번호 재확인
};

const SecondContent = ({ onClick }: Props) => {
  const { inputs, onChange, setInputs } = useChangeInputs(initialInputs);
  const { infoMessages, setInfoMessages, onChangeInfoMessage } = useInfoMessage(initialInfoMessages);
  const [duplicateCheck, setDuplicateCheck] = useState({
    name: '',
    status: false,
  });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      !!inputs.username.length === true &&
      !!inputs.password.length === true &&
      !!inputs.passwordCheck.length === true &&
      !!inputs.name.length === true &&
      !!inputs.nickname.length === true &&
      !!inputs.phone.length === true &&
      !!infoMessages.password.status === true &&
      !!infoMessages.passwordCheck.status === true &&
      !!infoMessages.username.status === true
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [infoMessages, inputs]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === 'username' || name === 'password' || name === 'passwordCheck') {
      onChangeInfoMessage(value, name, inputs);
    }

    if (name === 'phone') {
      setInputs({
        ...inputs,
        phone: autoHyphen(e.target),
      });
      return;
    }

    onChange(e);
  };
  1;
  //아이디 중복 데이터
  const handleClickDuplicate = async () => {
    const response = await getUserId(inputs.username);

    setDuplicateCheck({
      name: inputs.username,
      status: response.data,
    });
    setInfoMessages({
      ...infoMessages,
      username: {
        ...infoMessages.username,
        children: '사용 가능한 아이디입니다.',
        status: 'success',
      },
    });
  };

  const [duplicateTextStatus, setDuplicateCheckTextStatus] = useState(false);

  useEffect(() => {
    if (duplicateCheck.status && inputs.username === duplicateCheck.name) {
      setDuplicateCheckTextStatus(true);
    } else {
      setDuplicateCheckTextStatus(false);
    }
  }, [duplicateCheck, inputs.username]);

  return (
    <SignupContainer>
      <div className="complete-bar">
        <div className="complete"></div>
      </div>
      <div className="text">
        사이드고 서비스를 이용할
        <br />
        계정 정보를 작성해 주세요.
      </div>

      <div className="input-wrap">
        <Input
          subText={duplicateTextStatus ? infoMessages.username.children : ''}
          status={infoMessages.username.status}
          suffix={
            <Button onClick={handleClickDuplicate} size="in_input">
              중복확인
            </Button>
          }
          onChange={handleChange}
          size="full"
          placeholder="아이디"
          value={inputs.username}
          name="username"
          buttonText="중복확인"
        />
        <Input
          subText={infoMessages.password.children}
          status={infoMessages.password.status}
          onChange={handleChange}
          size="full"
          placeholder="비밀번호"
          value={inputs.password}
          name="password"
          type="password"
        />
        <Input
          subText={infoMessages.passwordCheck.children}
          status={infoMessages.passwordCheck.status}
          onChange={handleChange}
          size="full"
          placeholder="비밀번호 확인"
          value={inputs.passwordCheck}
          name="passwordCheck"
          type="password"
        />
        <Input onChange={handleChange} size="full" placeholder="이름" value={inputs.name} name="name" />
        <Input onChange={handleChange} size="full" placeholder="닉네임" value={inputs.nickname} name="nickname" />
        <Input onChange={handleChange} size="full" placeholder="전화번호" value={inputs.phone} name="phone" />
      </div>

      <div className="button-wrapper">
        <Button disabled={disabled} variant="primary" onClick={() => onClick(inputs)} style={{ width: '100%' }}>
          다음
        </Button>
      </div>
      <div className="mirror"></div>
    </SignupContainer>
  );
};

export default SecondContent;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 624px;
  height: 785px;
  flex-shrink: 0;
  padding: 56px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.67);
  background: linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5);
  backdrop-filter: blur(20px);
  overflow: hidden;
  position: relative;

  .mirror {
    width: 702.513px;
    height: 551.634px;
    transform: rotate(-30deg);
    flex-shrink: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
    position: absolute;
    right: 120px;
    top: -50px;

    z-index: -1;
  }
  .complete-bar {
    width: 100px;
    height: 8px;
    flex-shrink: 0;
    background-color: ${color.gray.gray8};
    border-radius: 26px;
    margin-bottom: 56px;
    position: relative;

    .complete {
      width: 50%;
      height: 8px;
      flex-shrink: 0;
      background-color: ${color.brand.brandMain};
      border-radius: 26px 0 0 26px;
      position: absolute;
    }
  }
  .text {
    color: ${color.gray.gray3};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 32px;
  }

  .input-wrap {
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
    box-sizing: border-box;
  }

  .button {
    position: absolute;
    top: 3px;
    right: 3px;
  }

  .button-wrapper {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: end;
  }
`;
