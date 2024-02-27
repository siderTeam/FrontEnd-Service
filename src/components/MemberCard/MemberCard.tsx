'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Image from 'next/image';

const MemberCard = () => {
  return (
    <>
      <Container>
        <Image src={'/images/home/profile.svg'} alt="profile" width={80} height={80} />
        <div>
          <div className="name">박봉팔</div>
          <div className="position">Frontend Developer</div>
          <div className="id">samsunglions</div>
        </div>
        <Effect />
      </Container>
    </>
  );
};

export default MemberCard;

const Container = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px 10px;

  width: 164px;
  height: 194px;

  border-radius: 8px;
  border: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  background: var(--Fill, linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5));

  .name {
    color: ${color.white};
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .position {
    color: ${color.gray5};
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .id {
    color: ${color.gray7};
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Effect = styled.div`
  width: 152.132px;
  height: 94.016px;
  transform: rotate(-30deg);
  flex-shrink: 0;

  position: absolute;
  top: -5px;
  left: -70px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
`;
