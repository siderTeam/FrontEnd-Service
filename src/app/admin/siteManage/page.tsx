'use client';

import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';

const Page = () => {
  return (
    <Container>
      <Image src="/images/admin_logo.svg" width={133} height={37} alt="logo" style={{ marginBottom: '20px' }} />
      <Wrap>
        <div className="text">준비중입니다.</div>
      </Wrap>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrap = styled.div`
  width: 600px;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .text {
    color: ${color.gray.gray6};
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
