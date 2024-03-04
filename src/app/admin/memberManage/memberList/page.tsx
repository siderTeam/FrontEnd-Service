'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import MemberTable from '../components/MemberTable/MemberTable';

const Page = () => {
  return (
    <Container>
      <h1 className="title">회원목록</h1>
      <SearchHeader />
      <MemberTable />
    </Container>
  );
};

export default Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px;

  .title {
    margin-bottom: 15px;

    color: ${color.brandMain};
    font-size: 24px;
    font-weight: 700;
  }
`;
