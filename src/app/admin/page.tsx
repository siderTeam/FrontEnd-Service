'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';
import Input from '@/components/Input/Input';
import Checkbox from '@/components/Checkbox/Checkbox';
import Button from '@/components/Button/Button';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { getAccessToken, postUserSignIn } from '@/api/api';
import { setCookie } from 'public/lib/util';
import { useRouter } from 'next/navigation';

const page = () => {
  const route = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [usernameColor, setUsernameColor] = useState('placeholder');
  const [passwordColor, setPasswordColor] = useState('placeholder');
  const [form, setForm] = useState({
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
            route.push('/admin/dashBoard');
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

  return (
    <Container>
      <Image src="/images/admin_logo.svg" width={133} height={37} alt="logo" />
      <div className="inputWrap">
        <Input size="large" color={usernameColor} placeholder="아이디" name="username" onChange={handleChange} />
        <Input size="large" color={passwordColor} placeholder="비밀번호" name="password" onChange={handleChange} type="password" />
        <div className="save">
          <Checkbox type={isChecked ? 'checked' : 'unchecked'} className="checkbox" text="아이디 저장" checked={isChecked} onClick={handleChecked} />
        </div>
      </div>

      <div className="buttonWrap">
        <Button size="large" mode="primary" onClick={() => mutate(form)}>
          로그인
        </Button>
      </div>
    </Container>
  );
};

export default page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-left: 374px;

  min-height: 100vh;

  gap: 50px;

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
  .save {
    width: 100%;
    display: flex;
    justify-content: start;
  }
  .buttonWrap {
    display: flex;
    flex-direction: column;

    gap: 8px;
  }
`;
