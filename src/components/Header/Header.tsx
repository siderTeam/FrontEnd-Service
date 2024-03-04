'use client';

import styled from '@emotion/styled';
import Profile from '../Profile/Profile';
import MyPageContainer from '../MyPageModal/MyPageContainer';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { rest } from '@/api/rest';
import { getProject } from '@/api/api';

const Header = () => {
  const [modal, setModal] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: [rest.get.project],
    queryFn: getProject,
  });


  useEffect(() => {
    setModal(true)
  }, [])

  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <StyledHeader>
      <MyPageContainer visible={modal} onClose={handleCloseModal} />
      <Image src="/images/Logo.svg" alt="로고" className="logo" width={167} height={58} />
      <Profile />
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
    width: 60px;
    height: 33.623px;
    flex-shrink: 0;
  }
`;
