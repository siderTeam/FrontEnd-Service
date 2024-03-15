'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import UserCard from '@/components/UserCard/UserCard';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { rest } from '@/api/rest';
import { getApplyProjectUser } from '@/api/projectDetail/api';
import { PROJECT_REQUIRE_JOIN_STATUS } from 'public/lib/enum';

type props = {
  onClick: () => void;
};

const STATUS_APPROVED = PROJECT_REQUIRE_JOIN_STATUS.APPROVED;
const STATUS_REJECTED = PROJECT_REQUIRE_JOIN_STATUS.REJECTED;

const ApplyStatus = ({ onClick }: props) => {
  const [selectMenu, setSelectMenu] = useState<string>('all');

  const { data } = useQuery({
    queryKey: [rest.get.applyProjectUser],
    queryFn: () => getApplyProjectUser(67), //수정필요
  });
  console.log(data);

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
        <span className={selectMenu === 'disapprove' ? 'active' : ''} onClick={() => handleMenuClick('disapprove')}>
          미승인된 유저만 보기
        </span>
        <span className={selectMenu === 'approve' ? 'active' : ''} onClick={() => handleMenuClick('approve')}>
          승인된 유저만 보기
        </span>
      </div>
      <div className="modal-content">
        {data?.map((item) => (
          <UserCard
            key={item.id}
            src="/images/user_profile_dummy.svg"
            name="박봉팔"
            position="Front-end Developer"
            userid="test88"
            onClick={onClick}
            varient={item.status === STATUS_APPROVED ? 'success' : item.status === STATUS_REJECTED ? 'error' : 'primary'}
          />
        ))}
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
