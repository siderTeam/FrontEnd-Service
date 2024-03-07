'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { useState } from 'react';
import { USER_SIGNUP_REQUEST } from '@/api/model';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUserId, postUserSignUp } from '@/api/api';
import { useRouter } from 'next/navigation';
import { rest } from '@/api/rest';

const SecondContent = ({ onClick }) => {
  const route = useRouter();
  const [form, setForm] = useState<USER_SIGNUP_REQUEST>({
    username: '',
    password: '',
    name: '',
    email: '',
    nickname: '',
    bankName: '',
    bankNo: '',
    bankUserName: '',
    phone: '',
    jobCode: 0,
    positionCode: [],
  });

  const [passwordConfirm, setPasswordConfirm] = useState('');

  //아이디 중복 데이터
  const idCheckData = useQuery({
    queryKey: [rest.get.userId, form.username],
    queryFn: () => getUserId(form.username),
    enabled: !!form.username, //id값이 존재하지 않을 경우 false를 변경해줌으로써 자동 실행을 막을 수 있음
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  //비밀번호 확인 onChange
  const handlePwConfirmChange = (e: any) => {
    setPasswordConfirm(e.target.value);
  };

  const { mutate } = useMutation({
    mutationFn: postUserSignUp,
    onSuccess: async (data) => {
      if (data.result === true) {
        alert('회원가입이 완료되었습니다.\n로그인 페이지로 이동합니다.');

        route.push('/login');
      } else {
        alert('회원가입 불가');
      }
    },
    onError: () => {
      console.log('실패');
    },
  });

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
        <Input placeholder="아이디" name="username" errorText="dd" buttonText="중복확인" style={{ width: '100%' }} />
        <Input placeholder="비밀번호" name="password" type="password" style={{ width: '100%' }} />
        <Input placeholder="비밀번호 확인" name="passwordConfirm" type="password" style={{ width: '100%' }} />
        <Input placeholder="이름" name="name" style={{ width: '100%' }} />
        <Input placeholder="닉네임" name="nickname" style={{ width: '100%' }} />
        <Input placeholder="전화번호" name="phone" style={{ width: '100%' }} />
      </div>

      <div className="button-wrapper">
        <Button mode="primary" onClick={onClick} style={{ width: '100%' }}>
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
    /* overflow: hidden; */
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
