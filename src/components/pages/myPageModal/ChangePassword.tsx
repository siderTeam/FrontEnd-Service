import { changePassword } from '@/api/auth/api';
import { getPasswordCheckValidateMessage, getPasswordValidateMessage } from '@/app/util/auth';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { InputSubMessageProps } from '@/components/Input/InputSubMessage';
import Label from '@/components/Label/Label';
import useInfoMessage, { INFO_MESSAGE } from '@/components/hooks/useInfoMessage';
import useChangeInputs from '@/hook/useChangeInputs';
import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const initialInputs = {
  beforePw: '',
  newPw: '',
  passwordCheck: '',
};

interface INFO_MESSAGE_TYPE {
  newPw: InputSubMessageProps;
  passwordCheck: InputSubMessageProps;
}

const initialInfoMessages: INFO_MESSAGE<INFO_MESSAGE_TYPE> = {
  newPw: {
    children: '',
    status: 'error',
    validate: getPasswordValidateMessage as any,
  }, // 비밀번호 변경
  passwordCheck: {
    children: '',
    status: 'error',
    validate: (value, params) => getPasswordCheckValidateMessage(value, params, 'newPw') as any,
  }, // 비밀번호 재확인
};

const ChangePassword = () => {
  const { inputs, setInputs, onChange } = useChangeInputs(initialInputs);
  const { infoMessages, onChangeInfoMessage } = useInfoMessage(initialInfoMessages);
  const [disabled, setDisabled] = useState(true);

  const { mutate } = useMutation({
    mutationFn: changePassword,
    onSuccess: async (data) => {
      if (data.result === true) {
        alert('비밀번호가 변경되었습니다.');
        setInputs(initialInputs);
      } else if (data.message === '비밀번호가 일치하지 않습니다.') {
        alert('기존 비밀번호가 일치하지 않습니다.');
      }
    },
  });

  useEffect(() => {
    if (
      !!inputs.newPw.length === true &&
      !!inputs.passwordCheck.length === true &&
      !!infoMessages.newPw.status === true &&
      !!infoMessages.passwordCheck.status === true
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [infoMessages, inputs]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === 'newPw' || name === 'passwordCheck') {
      onChangeInfoMessage(value, name, inputs);
    }

    if (name === 'beforePw') {
      setInputs({
        ...inputs,
        beforePw: value,
      });
      return;
    }

    onChange(e);
  };

  return (
    <>
      <Container>
        <div>
          <Label label="현재 비밀번호" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Input
              style={{ width: 512 }}
              placeholder="기존 비밀번호를 입력하세요."
              onChange={handleChange}
              name="beforePw"
              value={inputs.beforePw}
              type="password"
            />
          </Label>
        </div>
        <div>
          <Label label="변경 비밀번호" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Input
              style={{ width: 512, marginBottom: 8 }}
              placeholder="10~20자 영문 숫자 조합, 특수문자 사용 가능"
              onChange={handleChange}
              name="newPw"
              subText={infoMessages.newPw.children}
              status={infoMessages.newPw.status}
              value={inputs.newPw}
              type="password"
            />
            <Input
              style={{ width: 512 }}
              placeholder="비밀번호를 한번 더 입력하세요."
              onChange={handleChange}
              name="passwordCheck"
              subText={infoMessages.passwordCheck.children}
              status={infoMessages.passwordCheck.status}
              value={inputs.passwordCheck}
              type="password"
            />
          </Label>
        </div>
        <Button size="large" style={{ width: 512 }} onClick={() => mutate(inputs)} disabled={disabled}>
          비밀번호 변경
        </Button>
      </Container>
    </>
  );
};

export default ChangePassword;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-top: 104px;

  gap: 48px;
`;
