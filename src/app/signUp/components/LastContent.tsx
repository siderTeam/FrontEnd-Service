'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Button from '@/components/Button/Button';
import SelectBox from '@/components/SelectBox/SelectBox';
import Input from '@/components/Input/Input';
import { useQuery } from '@tanstack/react-query';
import { getCode } from '@/api/api';
import { useState } from 'react';
import Link from 'next/link';

const LastContent = () => {
  return (
    <SignupContainer>
      <div className="complete-bar">
        <div className="complete"></div>
      </div>
      <div className="text">
        회원가입 완료!
        <br />
        이제 사이드고를 이용할 수 있어요.
      </div>

      <img src="/images/다운로드.jpg" alt="이미지" className="image" />

      <div className="button-wrapper">
        <Link href="/" style={{ width: '100%' }}>
          <Button style={{ width: '100%' }}>시작하기</Button>
        </Link>
      </div>
      <div className="mirror"></div>
    </SignupContainer>
  );
};

export default LastContent;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 624px;
  height: 785px;
  flex-shrink: 0;

  overflow: hidden;

  padding: 56px;

  box-sizing: border-box;

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.67);
  background: linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5);
  backdrop-filter: blur(20px);

  .mirror {
    width: 702.513px;
    height: 551.634px;
    transform: rotate(-30deg);
    flex-shrink: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 100%);

    position: absolute;
    /* overflow: hidden; */
    right: 120px;
    top: -50px;
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
      width: 100%;
      height: 8px;
      flex-shrink: 0;

      background-color: ${color.brand.brandMain};

      border-radius: 26px;
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
  .image {
    display: flex;

    margin-top: 56px;
    margin-left: 88px;
    margin-bottom: 56px;

    width: 339px;
    height: 339px;
    flex-shrink: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;
  }

  .button-wrapper {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: end;
  }
`;
