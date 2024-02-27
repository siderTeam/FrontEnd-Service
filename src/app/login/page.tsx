'use client';

import styled from '@emotion/styled';
import { color } from '@/Styles/color';
import Checkbox from '@/components/Checkbox/Checkbox';
import { useState } from 'react';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Link from 'next/link';

import Cube from '@/components/Cube/Cube';
import { USER_SIGNIN_REQUEST } from '@/api/model';
import { getAccessToken, getResume, postUserSignIn } from '@/api/api';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'public/lib/util';
import { useRouter } from 'next/navigation';

const Page = () => {
  const route = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [usernameColor, setUsernameColor] = useState('placeholder');
  const [passwordColor, setPasswordColor] = useState('placeholder');
  const [form, setForm] = useState<USER_SIGNIN_REQUEST>({
    username: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === 'username') {
      setUsernameColor(value.length !== 0 ? 'filled' : 'placeholder');
    } else if (name === 'password') {
      setPasswordColor(value.length !== 0 ? 'filled' : 'placeholder');
    }
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  const { mutate } = useMutation({
    mutationFn: postUserSignIn,
    onSuccess: async (data) => {
      if (data.result === true) {
        await getAccessToken()
          .then((res) => {
            setCookie('accessToken', res.data.accessToken);
          })
          .then(() => {
            route.push('/');
          });
      } else if (data.result === false) {
        setUsernameColor('failed');
        setPasswordColor('failed');
      }
    },
    onError: () => {
      console.log('실패');
    },
  });

  const test = async () => {
    const response = await getResume();
    console.log('response', response);
  };

  return (
    <Container>
      <div className="backgroundImg">{/* <Cube /> */}</div>
      <LoginContainer>
        <div className="title">로그인</div>
        <div className="inputWrap">
          {usernameColor === 'failed' ? <span className="error-text">응가</span> : ''}
          <Input size="large" color={usernameColor} placeholder="아이디" name="username" onChange={handleChange} />
          <Input size="large" color={passwordColor} placeholder="비밀번호" name="password" onChange={handleChange} type="password" />
        </div>
        <div className="wrap">
          <Checkbox type={isChecked ? 'checked' : 'unchecked'} className="checkbox" text="아이디 저장" isChecked={isChecked} onClick={handleChecked} />
          <div className="find">계정정보 찾기</div>
        </div>
        <div className="buttonWrap">
          <Button size="large" mode="primary" onClick={() => mutate(form)}>
            로그인
          </Button>
          <Link href="/signUp">
            <Button size="large" mode="secondary">
              회원가입
            </Button>
          </Link>
        </div>
        <div className="mirror"></div>
      </LoginContainer>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  width: 1920px;
  height: 100vh;
  position: relative;

  .backgroundImg {
    width: 1273px;
    height: 100vh;
    flex-shrink: 0;
    position: absolute;

    /* background: linear-gradient(
        90deg,
        #02060d 6.5%,
        rgba(0, 0, 0, 0) 52%,
        #02060d 92%
      ),
      linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),
      lightgray 50% / cover no-repeat; */
  }

  .title {
    color: ${color.brand.brandMain};
    text-align: center;

    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-bottom: 47px;
    box-sizing: border-box;
  }

  .inputWrap {
    display: flex;
    flex-direction: column;

    gap: 10px;

    margin-bottom: 8.5px;
    box-sizing: border-box;
    position: relative;

    .error-text {
      color: ${color.secondary.error_1};

      font-size: 14px;

      font-weight: 300;

      position: absolute;
      top: -25px;
    }
  }
`;

const LoginContainer = styled.div`
  width: 480px;
  height: 640px;
  flex-shrink: 0;

  padding: 110px 58px;

  box-sizing: border-box;

  margin-top: 220px;
  margin-left: 1011px;

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.67);
  background: linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5);
  backdrop-filter: blur(20px);

  position: relative;
  overflow: hidden;
  z-index: 1;

  .mirror {
    width: 580.619px;
    height: 551.634px;
    transform: rotate(-30deg);
    flex-shrink: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 100%);

    position: absolute;
    top: -10px;
    left: -200px;

    z-index: -3;
  }

  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    margin-bottom: 50.5px;
  }
  .find {
    color: ${color.gray.gray5};
    text-align: right;

    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .buttonWrap {
    display: flex;
    flex-direction: column;

    gap: 8px;
  }
`;
