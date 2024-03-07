import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

const LeaderInfo = () => {
  return (
    <LeaderInfoWrap>
      <div className="leader-info-title">
        <Image src="/images/etc/person_gray5.svg" width={22} height={22} alt="person" />
        <span>프로젝트 리더정보</span>
      </div>
      <div className="leader-info-content">
        <Image src="/images/ㅋㅋ.svg" width={140} height={140} alt="리더 프로필 사진" style={{ marginLeft: '12px' }} />
        <div className="leader-info-grid">
          <span className="title">닉네임</span>
          <span className="content">프로젝트 리더 닉네임</span>
          <span className="title">포지션</span>
          <span className="content">프론트엔드 개발자</span>
          <span className="title">연차</span>
          <span className="content">88년차</span>
          <span className="title">스킬</span>
          <span className="content">
            Figma, Java, Html, CSS, JavaScript, Oracle, MySQL, 이게뭐어디까지길어질지는 모르겠는데 최대한 스킬은 모두 노출하는걸로 합시다. 윗줄이랑 간격 8px만
            유지해주셈영
          </span>
          <span className="title">자기소개</span>
          <span className="content">
            포토샵, 일러스트레이터, 블렌더, 애프터이펙트, 클립스튜디오를 섭렵한 눈물의 디자이너... 바쁘다바빠 우끼끼 우꺆꺆꺄우끾끾끼끼끼
          </span>
        </div>
      </div>
    </LeaderInfoWrap>
  );
};

export default LeaderInfo;

const LeaderInfoWrap = styled.div`
  padding: 40px 32px 0 32px;
  .leader-info-title {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${color.gray.gray5};
    font-size: 22px;
    font-weight: 700;
  }
  .leader-info-content {
    display: flex;
    gap: 80px;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
  }
  .leader-info-grid {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 8px;
  }
  .title {
    color: ${color.gray.gray5};
    font-size: 16px;
    font-weight: 400;
  }
  .content {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
  }
`;
