'use client';

import styled from '@emotion/styled';
import { useState } from 'react';
import SecondContent from './components/SecondContent';
import FirstContent from './components/FirstContent';
import ThirdContent from './components/ThirdContent';
import LastContent from './components/LastContent';
import Image from 'next/image';
import { SIGN_UP_REQUEST } from '@/api/auth/model';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { postUserSignUp } from '@/api/auth/api';

const initialParams: SIGN_UP_REQUEST = {
  username: '',
  name: '',
  password: '',
  nickname: '',
  career: 0,
  phone: '',
  positionCode: null,
};

const Page = () => {
  const route = useRouter();
  const [currentContent, setCurrentContent] = useState('first');
  const [params, setParams] = useState(initialParams);

  const { mutate } = useMutation({
    mutationFn: postUserSignUp,
    onSuccess: async (data) => {
      if (data.result === true) {
        setCurrentContent('last');
      } else {
        alert('회원가입 불가');
      }
    },
    onError: () => {
      console.log('실패');
    },
  });

  const handleNextButtonClick = (callback?: any) => {
    switch (currentContent) {
      case 'first':
        setCurrentContent('second');
        break;
      case 'second':
        setCurrentContent('third');
        setParams({
          ...params,
          ...callback,
        } as unknown as SIGN_UP_REQUEST);
        break;
      case 'third':
        mutate({
          ...params,
          ...callback,
        });
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Image src="/images/Logo.svg" alt="로고" className="logo" width={204} height={56} />
      {currentContent === 'first' && <FirstContent onClick={handleNextButtonClick} />}
      {currentContent === 'second' && <SecondContent onClick={handleNextButtonClick} />}
      {currentContent === 'third' && <ThirdContent onClick={handleNextButtonClick} />}
      {currentContent === 'last' && <LastContent />}
    </Container>
  );
};

export default Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 96px 0;

  .logo {
    margin-bottom: 48px;
  }
`;
