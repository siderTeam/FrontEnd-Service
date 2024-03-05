'use client';

import styled from '@emotion/styled';
import ProjectTable from './components/ProjectTable/ProjectTable';
import SearchHeader from '../requireJudge/components/SearchHeader/SearchHeader';
import { color } from '@/styles/color';

const Page = () => {
  return (
    <Container>
      <h1 className="title">보증금 반환</h1>
      <SearchHeader />
      <ProjectTable />
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

    color: ${color.brand.brandMain};
    font-size: 24px;
    font-weight: 700;
  }
`;
