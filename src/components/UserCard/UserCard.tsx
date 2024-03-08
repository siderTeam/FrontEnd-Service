'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';

type props = {
  src: string;
  name: string;
  position: string;
  userid: string;
  varient?: 'primary' | 'success' | 'error';
  onClick: () => void;
};

const UserCard = ({ src, name, position, userid, varient = 'primary', onClick }: props) => {
  const iconPath = `/images/circle/circle_${varient === 'success' ? 'green' : varient === 'error' && 'red'}.svg`;

  return (
    <>
      <Container varient={varient} onClick={onClick}>
        {varient !== 'primary' && <CircleImage src={iconPath} alt="circle" width={8} height={8} />}
        <ProfileImage src={src} alt="profile" width={80} height={80} varient={varient} />
        <div>
          <div className="name">{name}</div>
          <div className="position">{position}</div>
          <div className="id">{userid}</div>
        </div>
        <div className="mirror"></div>
      </Container>
    </>
  );
};

export default UserCard;

const COLOR_TYPE = {
  ['primary']: 'var(--Stroke, rgba(255, 255, 255, 0.67))',
  ['success']: `${color.brand.brandMain}`,
  ['error']: `${color.secondary.error_1}`,
};

const Container = styled.div<{ varient: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px 0;

  width: 164px;
  height: 194px;

  border-radius: 8px;
  border: 1px solid ${({ varient }) => COLOR_TYPE[varient as 'primary']};
  background: var(--Fill, linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5));

  position: relative;
  overflow: hidden;
  cursor: pointer;

  .name {
    color: ${({ varient }) => (varient === 'error' ? color.gray.gray7 : color.gray.white)};
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .position {
    color: ${({ varient }) => (varient === 'error' ? color.gray.gray8 : color.gray.gray5)};
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .id {
    color: ${({ varient }) => (varient === 'error' ? color.gray.gray9 : color.gray.gray7)};
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .mirror {
    width: 152.132px;
    height: 94.016px;
    transform: rotate(-30deg);
    flex-shrink: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 100%);

    position: absolute;
    top: 0;
    left: -70px;
  }
`;

const CircleImage = styled(Image)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const ProfileImage = styled(Image)<{ varient: string }>`
  filter: ${({ varient }) => varient === 'error' && 'brightness(0.3)'};
`;
