'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Image from 'next/image';

const ProjectInfo = () => {
  return (
    <Container>
      <div className="subtitle">
        <Image src={'/images/icons/notice_gray5.svg'} alt="notice" width={20} height={18} />
        <span>프로젝트 소개</span>
      </div>
      <div className="introduction">
        [고구마말랭이 기깔나게 만드실 분 모집]
        <br />
        <br />
        스터디 주제: 기가막힌 고구마를 위해 기막히고 코막히고 목막히는 프로젝트
        <br />
        <br />
        스터디 목표: 평생 내 손으로 기깔나는 군고구마는 한 번 만들어봐야하지 않겠습니까?
        <br />
        <br />
        예상 스터디 일정: 군고구마가 땡긴다면 언제든지 가능쌉가능
      </div>
    </Container>
  );
};

export default ProjectInfo;

const Container = styled.div`
  border-bottom: 1px solid ${color.gray7};
  box-sizing: border-box;
  padding: 44px 0 44px 0;

  .introduction {
    white-space: pre-wrap;
    margin: 0 12px 0 11px;

    font-size: 18px;
    font-weight: 500;
  }
`;
