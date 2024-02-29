'use client';

import { color } from '@/styles/color';
import styled from '@emotion/styled';
import ProjectTable from './components/ProjectTable/ProjectTable';
import SearchHeader from './components/SearchHeader/SearchHeader';

const Page = () => {
  return (
    <Container>
      <span className="title">요구사항 심사</span>
      <SearchHeader />
      <ProjectTable />
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
