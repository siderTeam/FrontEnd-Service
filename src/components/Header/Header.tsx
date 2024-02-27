'use client';

import styled from '@emotion/styled';
import Profile from '../Profile/Profile';
import MyPageContainer from '../pages/myPageModal/MyPageContainer';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [modal, setModal] = useState(true);

  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <StyledHeader>
      <MyPageContainer visible={modal} onClose={handleCloseModal} />
      <Image src="/images/Logo.svg" alt="로고" className="logo" width={167} height={58} />
      <div className="profile-wrap">
        <Profile />
        <Image src="/images/icons/Person_white.svg" alt="mypage" width={24} height={24} />
        <Image src="/images/icons/On_white.svg" alt="logout" width={24} height={24} />
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  height: 124px;
  padding: 42px 0px;
  justify-content: space-between;
  box-sizing: border-box;

  .logo {
    flex-shrink: 0;
  }

  .profile-wrap {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;
