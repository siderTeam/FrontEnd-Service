'use client';

import styled from '@emotion/styled';
import Profile from '../Profile/Profile';
import MyPageContainer from '../pages/myPageModal/MyPageContainer';
import { useState } from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import { useRouter } from 'next/navigation';

const Header = () => {
  const route = useRouter();
  const [modal, setModal] = useState(false);

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleClickCreatePost = () => {
    route.push('/project');
  };
  return (
    <StyledHeader>
      <MyPageContainer visible={modal} onClose={handleCloseModal} />
      <Image src="/images/Logo.svg" alt="로고" className="logo" width={167} height={58} onClick={() => route.push('/')} style={{ cursor: 'pointer' }} />
      <div className="profile-wrap">
        <Button leftIcon="/images/etc/editor_black.svg" size="medium" variant="primary" onClick={handleClickCreatePost}>
          모집글 작성
        </Button>
        <Profile />
        <Image src="/images/icons/Person_white.svg" alt="myPage" width={24} height={24} onClick={() => setModal(true)} style={{ cursor: 'pointer' }} />
        <Image src="/images/icons/On_white.svg" alt="logout" width={24} height={24} style={{ cursor: 'pointer' }} />
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
