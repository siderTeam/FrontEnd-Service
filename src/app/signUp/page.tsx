'use client';

import styled from '@emotion/styled';
import { useState } from 'react';
import SecondContent from './components/SecondContent';
import FirstContent from './components/FirstContent';
import ThirdContent from './components/ThirdContent';
import LastContent from './components/LastContent';
import Image from 'next/image';

const Page = () => {
  const [currentContent, setCurrentContent] = useState('first');

  const handleNextButtonClick = () => {
    switch (currentContent) {
      case 'first':
        setCurrentContent('second');
        break;
      case 'second':
        setCurrentContent('third');
        break;
      case 'third':
        setCurrentContent('last');
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Image src="/images/Logo_signup.svg" alt="로고" className="logo" width={204} height={56} />
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
