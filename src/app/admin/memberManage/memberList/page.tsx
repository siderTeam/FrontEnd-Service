'use client';

import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import SelectBox from '@/components/SelectBox/SelectBox';

import { color } from '@/styles/color';
import styled from '@emotion/styled';
import { useState } from 'react';
import MemberTable from './components/MemberTable/MemberTable';
import SearchHeader from './components/SearchHeader/SearchHeader';

const Page = () => {
  return (
    <Container>
      <span className="title">회원 목록</span>
      <SearchHeader />
      <MemberTable />
    </Container>
  );
};

export default Page;

const Container = styled.div`
  margin-top: 40px;

  .title {
    color: ${color.brand.brandMain};
    font-size: 24px;
    font-weight: 700;
  }
`;
