'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';

type Props = {
  content: string;
};

const ProjectInfo = ({ content }: Props) => {
  return (
    <Container>
      <div className="subtitle">
        <Image src={'/images/notice/notice_gray5.svg'} alt="notice" width={20} height={18} />
        <span>프로젝트 소개</span>
      </div>
      <div className="introduction" dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
};

export default ProjectInfo;

const Container = styled.div`
  border-bottom: 1px solid ${color.gray.gray7};
  box-sizing: border-box;
  padding: 44px 0 44px 0;

  .introduction {
    margin: 0 12px 0 11px;

    font-size: 18px;
    font-weight: 500;
  }
`;
