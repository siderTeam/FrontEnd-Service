"use client";

import styled from "@emotion/styled";
import { color } from "@/Styles/color";
import Image from "next/image";

const UserCard = () => {
  return (
    <Container>
      <div className='image'>
        <Image
          src='/images/user_profile_dummy.svg'
          alt='유저 프로필'
          width={80}
          height={80}
        />
      </div>
      <div className='text-wrap'>
        <div className='name'>박봉팔</div>
        <div className='position'>Front-end Developer</div>
        <div className='username'>samsunglions</div>
      </div>

      <div className='mirror'></div>
    </Container>
  );
};

export default UserCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  width: 164px;
  height: 194px;

  box-sizing: border-box;

  border-radius: 8px;
  border: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  background: var(
    --Fill,
    linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%),
    rgba(2, 6, 13, 0.5)
  );

  position: relative;
  overflow: hidden;

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 21px;
  }

  .text-wrap {
    display: flex;
    flex-direction: column;
  }
  .name {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 700;
  }

  .position {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color.gray.gray5};
    text-align: center;
    font-size: 14px;
    font-weight: 400;
  }

  .username {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color.gray.gray7};
    text-align: center;
    font-size: 12px;
    font-weight: 400;
  }

  .mirror {
    width: 152.132px;
    height: 94.016px;
    transform: rotate(-30deg);
    flex-shrink: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    position: absolute;
    top: 0;
    left: -80px;
    z-index: -1;
  }
`;
