'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import UserCard from '@/components/UserCard/UserCard';
import { useState } from 'react';

type props = {
  onClick: () => void;
};

const ApplyStatus = ({ onClick }: props) => {
  const [selectMenu, setSelectMenu] = useState<string>('all');

  //포지션 필터 onClick
  const handleMenuClick = (value: string) => {
    setSelectMenu(value);
  };

  return (
    <Container>
      <div className="modal-title">지원현황</div>
      <div className="menu-wrap">
        <span className={selectMenu === 'all' ? 'active' : ''} onClick={() => handleMenuClick('all')}>
          전체보기
        </span>
        <span className={selectMenu === 'sucess' ? 'active' : ''} onClick={() => handleMenuClick('sucess')}>
          미승인된 유저만 보기
        </span>
        <span className={selectMenu === 'error' ? 'active' : ''} onClick={() => handleMenuClick('error')}>
          승인된 유저만 보기
        </span>
      </div>
      <div className="modal-content">
        <UserCard src="/images/user_profile_dummy.svg" name="박봉팔" position="Front-end Developer" userid="test88" onClick={onClick} />
      </div>
    </Container>
  );
};

export default ApplyStatus;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  height: 100%;
  box-sizing: border-box;
  padding: 60px 70px;
  color: ${color.gray.white};

  .modal-title {
    font-size: 24px;
    font-weight: 700;
  }

  .menu-wrap {
    display: flex;
    align-items: center;
    gap: 18px;

    color: ${color.gray.gray5};
    font-size: 16px;
    font-weight: 400;

    span {
      cursor: pointer;
    }

    .active {
      color: ${color.brand.brandMain};
      font-weight: 700;
    }
  }

  .modal-content {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 26px;
    box-sizing: border-box;
    padding-bottom: 5px;

    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 12px; /* 스크롤바의 너비 */
    }
    &::-webkit-scrollbar-thumb {
      background: ${color.gray.gray5}; /* 스크롤바의 색상 */
      border-radius: 28px;

      background-clip: padding-box;
      border: 4px solid transparent;
    }
  }
`;
