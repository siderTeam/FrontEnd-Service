'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';

const RecruitInfo = () => {
  return (
    <Container>
      <div className="title">모집 인원</div>
      <div className="content">888명</div>
      <div className="title">연락방법</div>
      <div className="content">
        <div className="link">
          카카오톡 오픈채팅
          <Image src={'/images/link/link_white.svg'} alt="link" width={14} height={14} />
        </div>
      </div>
      <div className="title">모집 포지션</div>
      <div className="content">프론트엔드, 백엔드, 기획, 디자이너</div>
      <div className="title">스킬</div>
      <div className="content">
        Figma, Java, Html, CSS, JavaScript, Oracle, MySQL, Figma, Java, Html, CSS, JavaScript, Oracle, MySQL, Figma, Java, Html, CSS, JavaScript, Oracle, MySQL
      </div>
      <div className="title">모집 마감일</div>
      <div className="content">8888.88.88</div>
      <div className="title">진행 기간</div>
      <div className="content">88개월 (888일)</div>
      <div className="title">보증금 (1인)</div>
      <div className="content">888,888,888원</div>
    </Container>
  );
};

export default RecruitInfo;

const Container = styled.div`
  border-bottom: 1px solid ${color.gray.gray7};
  box-sizing: border-box;
  padding: 32px 0 40px 0;

  display: grid;
  grid-template-columns: 160px 1fr 160px 1fr;
  grid-row-gap: 8px;

  .title {
    color: ${color.gray.gray5};
    font-size: 16px;
    font-weight: 400;
  }

  .content {
    font-size: 16px;
    font-weight: 500;

    .link {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;
