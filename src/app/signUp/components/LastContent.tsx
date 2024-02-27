'use client';

import styled from '@emotion/styled';
import { color } from '../../../styles/CommonStyles';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import Link from 'next/link';

const LastContent = () => {
  return (
    <>
      <Progressbar></Progressbar>
      <SubTitle>
        회원가입 완료!
        <br />
        이제 사이드고를 이용할 수 있어요.
      </SubTitle>
      <StyledImage>
        <Image src={'/images/testImage.png'} alt="image" width={339} height={339} />
      </StyledImage>
      <Link href={'/login'}>
        <Button size="large">고고</Button>
      </Link>
    </>
  );
};

export default LastContent;

const Progressbar = styled.div`
  width: 100px;
  height: 8px;
  margin-bottom: 56px;
  background-image: url('/images/progressbar/step4.svg');
`;

const SubTitle = styled.div`
  margin-bottom: 56px;
  color: ${color.gray3};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
