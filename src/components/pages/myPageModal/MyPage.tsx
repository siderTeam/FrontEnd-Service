'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';
import Input from '@/components/Input/Input';
import Label from '@/components/Label/Label';
import TextArea from '@/components/TextArea/TextArea';
import MyProfile from '@/components/MyProfile/MyProfile';
import Button from '@/components/Button/Button';
import { useQuery } from '@tanstack/react-query';
import { rest } from '@/api/rest';
import { getCode, getProject } from '@/api/api';

const MyPage = () => {
  const [textareaCount, setTextareaCount] = useState(0);

  const onTextareaHandler = (e: any) => {
    const { value, maxLength } = e.target;

    if (value.length > maxLength) {
      e.target.value = value.slice(0, maxLength);
    }
    setTextareaCount(e.target.value.length);
  };

  return (
    <Container>
      <MyProfile style={{ marginBottom: '40px' }} />
      <div className="input-wrap">
        <Label label="이름" require="*">
          <Input size="medium" style={{ marginTop: '4px' }} />
        </Label>
        <Label label="연차" require="*">
          <Input size="medium" style={{ marginTop: '4px' }} />
        </Label>
        <Label label="닉네임" require="*">
          <Input size="medium" style={{ marginTop: '4px' }} />
        </Label>
        <Label label="포지션" require="*">
          <Input size="medium" style={{ marginTop: '4px' }} />
        </Label>
      </div>

      <Label label="한 줄 소개" style={{ width: '100%', marginTop: '16px' }}>
        <TextArea size="full" color="primary" style={{ marginTop: '4px' }} onChange={onTextareaHandler} maxLength={100} textareaCount={textareaCount} />
      </Label>
      <div className="button-wrap">
        <Button size="medium" variant="primary">
          저장
        </Button>
      </div>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 842px;
  height: 100%;
  flex-shrink: 0;
  box-sizing: border-box;

  border-radius: 0 24px 24px 0;

  padding-top: 60px;
  padding-right: 70px;
  padding-left: 70px;
  padding-bottom: 32px;

  background: ${color.gray.black};

  .input-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 16px 40px;
  }
  .button-wrap {
    display: flex;
    justify-content: center;
    align-items: end;
    flex: 1;
  }
`;
