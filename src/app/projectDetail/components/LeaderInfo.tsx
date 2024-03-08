'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';

const LeaderInfo = () => {
  return (
    <Container>
      <div className="subtitle">
        <Image src={'/images/person/person_gray5.svg'} alt="person" width={20} height={20} />
        <span>프로젝트 리더정보</span>
      </div>
      <div className="leader-wrap">
        <Image src={'/images/user_profile_dummy.svg'} alt="profile" width={140} height={140} />
        <div className="leader-info">
          <div className="title">닉네임</div>
          <div className="content">홍길동</div>
          <div className="title">포지션</div>
          <div className="content">디자이너</div>
          <div className="title">연차</div>
          <div className="content">88년차</div>
          <div className="title">스킬</div>
          <div className="content">
            Figma, Java, Html, CSS, JavaScript, Oracle, MySQL, Figma, Java, Html, CSS, JavaScript, Oracle, MySQL, Figma, Java, Html, CSS, JavaScript, Oracle,
            MySQL
          </div>
          <div className="title">자기소개</div>
          <div className="content">홍길동의 자기소개입니다.</div>
        </div>
      </div>
    </Container>
  );
};

export default LeaderInfo;

const Container = styled.div`
  border-bottom: 1px solid ${color.gray.gray7};
  box-sizing: border-box;
  padding: 44px 0 44px 0;

  .leader-wrap {
    margin-left: 12px;
    display: flex;
    gap: 80px;
  }

  .leader-info {
    display: grid;
    grid-template-columns: 159px 1fr;
    grid-row-gap: 8px;

    .title {
      color: ${color.gray.gray5};
      font-size: 16px;
      font-weight: 400;
    }

    .content {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
