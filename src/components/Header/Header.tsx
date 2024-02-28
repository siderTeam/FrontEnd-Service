'use client';

import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import Profile from '../Profile/Profile';
import MyPageContainer from '../pages/myPageModal/MyPageContainer';
import { useState } from 'react';

const Header = () => {
  const [modal, setModal] = useState(false);

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <Container>
      <MyPageContainer visible={modal} onClose={handleCloseModal} />
      <Link href="/">
        <Image src={'/images/logo.svg'} alt="logo" width={170} height={47} />
      </Link>
      <div className="profileWrap">
        <Profile />
        <Image src={'/images/icons/person_white.svg'} alt="myPage" width={24} height={24} onClick={() => setModal(true)} style={{ cursor: 'pointer' }} />
        <Link href="/login">
          <Image src={'/images/icons/on_white.svg'} alt="myPage" width={24} height={24} />
        </Link>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;

  padding: 42px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .profileWrap {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;
