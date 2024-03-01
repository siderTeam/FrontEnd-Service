'use client';

import { color } from '@/styles/color';
import styled from '@emotion/styled';
import SearchHeader from '../requireJudge/components/SearchHeader/SearchHeader';
import DepositTable from './components/DepositTable/DepositTable';

const Page = () => {
  return (
    <Container>
      <span className="title">보증금 심사</span>
      <SearchHeader />
      <DepositTable />
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
