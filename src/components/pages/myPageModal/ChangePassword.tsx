import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import Label from '@/components/Label/Label';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

const ChangePassword = () => {
  return (
    <>
      <Container>
        <div>
          <Label label="현재 비밀번호" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Input style={{ width: 512 }} placeholder="기존 비밀번호를 입력하세요." />
          </Label>
        </div>
        <div>
          <Label label="벼경 비밀번호" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Input style={{ width: 512, marginBottom: 8 }} placeholder="10~20자 영문 숫자 조합, 특수문자 사용 가능" />
            <Input style={{ width: 512 }} placeholder="비밀번호를 한번 더 입력하세요." />
          </Label>
        </div>
        <Button size="large" style={{ width: 512 }}>
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
