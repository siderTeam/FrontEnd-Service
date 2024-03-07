import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

const Info = () => {
  return (
    <InfoWrap>
      <div className="info-title">모집 인원</div>
      <div className="info-content">888명</div>

      <span className="info-title">연락방법</span>
      <span className="info-content">
        카카오톡 오픈채팅 <Image src="/images/etc/link.svg" width={16} height={16} alt="link" />
      </span>

      <div className="info-title" style={{ marginBottom: '48px' }}>
        모집 포지션
      </div>
      <div className="info-content">프론트엔드, 백엔드, 기획, 디자이너</div>

      <span className="info-title">스킬</span>
      <span className="info-content">
        Figma, Java, Html, CSS, JavaScript, Oracle, MySQL, 이게뭐어디까지길어질지는 모르겠는데 최대한 스킬은 모두 노출하는걸로 합시다. 윗줄이랑 간격 8px만
        유지해주셈영
      </span>

      <div className="info-title">모집 마감일</div>
      <div className="info-content">8888.88.88</div>

      <span className="info-title">진행 기간</span>
      <span className="info-content">88개월 (888일)</span>

      <div className="info-title">보증금 (1인)</div>
      <div className="info-content">888,888,888원</div>
    </InfoWrap>
  );
};

export default Info;

const InfoWrap = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr 160px 1fr;
  gap: 8px;
  padding: 40px 32px 0 32px;

  .info-title {
    color: ${color.gray.gray5};
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
  }
  .info-content {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
  }
`;
