'use client';

import styled from '@emotion/styled';
import Profile from '../Profile/Profile';
import MyPageContainer from '../pages/myPageModal/MyPageContainer';
import { useState } from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getIsLogin, handleSignOut } from '@/store/auth.store';
import { useQuery } from '@tanstack/react-query';
import { rest } from '@/api/rest';
import { getUserInfo } from '@/api/auth/api';
import { formatForPositionCode } from 'public/lib/formatForEnum';

const Header = () => {
  const route = useRouter();
  const [modal, setModal] = useState(false);

  const handleCloseModal = () => {
    setModal(false);
  };

  const isLogin = getIsLogin();

  const handleClickLogout = async () => {
    await handleSignOut();
    route.push('/');
  };

  const { data } = useQuery({
    queryKey: [rest.get.userInfo],
    queryFn: () => getUserInfo(),
  });

  return (
    <StyledHeader>
      <Image src="/images/Logo.svg" alt="로고" className="logo" width={167} height={58} onClick={() => route.push('/')} style={{ cursor: 'pointer' }} />
      <div className="profile-wrap">
        {isLogin && (
          <Link href="/post">
            <Button leftIcon="/images/etc/editor_black.svg" size="medium" variant="primary">
              모집글 작성
            </Button>
          </Link>
        )}

        <Profile
          onClick={() => setModal(true)}
          career={data?.career as unknown as number}
          positionName={formatForPositionCode(data?.positionCode as unknown as number)}
          name={data?.name as unknown as string}
        />

        {modal && <MyPageContainer visible={modal} onClose={handleCloseModal} />}
        <Image src="/images/icons/Person_white.svg" alt="myPage" width={24} height={24} onClick={() => setModal(true)} style={{ cursor: 'pointer' }} />

        <Image onClick={handleClickLogout} src="/images/icons/On_white.svg" alt="logout" width={24} height={24} style={{ cursor: 'pointer' }} />
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
