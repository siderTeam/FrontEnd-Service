'use client';

import { color } from '@/styles/color';
import styled from '@emotion/styled';

const Page = () => {
  return (
    <Container>
      <span className="title">회원 목록</span>
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
