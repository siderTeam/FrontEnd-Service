'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Modal from '@/components/Modal/Modal';
import MemberCard from '@/components/MemberCard/MemberCard';
import { useState } from 'react';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const ApplyStatus = ({ visible, onClose }: ModalProps) => {
  const [selectMenu, setSelectMenu] = useState<string>('all');

  //포지션 필터 onClick
  const handleMenuClick = (value: string) => {
    setSelectMenu(value);
  };

  return (
    <Modal
      style={{
        width: 886,
        height: 676,
      }}
      visible={visible}
      onClose={onClose}
    >
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
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" varient="success" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" varient="error" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" varient="success" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" varient="error" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" varient="success" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" varient="error" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" varient="success" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" varient="error" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" varient="success" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" varient="error" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" varient="success" />
          <MemberCard src="/images/home/profile.svg" name="박봉팔" position="Front-end Developer" userid="test88" varient="error" />
        </div>
      </Container>
    </Modal>
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
  color: ${color.white};

  .modal-title {
    font-size: 24px;
    font-weight: 700;
  }

  .menu-wrap {
    display: flex;
    align-items: center;
    gap: 18px;

    color: ${color.gray5};
    font-size: 16px;
    font-weight: 400;

    span {
      cursor: pointer;
    }

    .active {
      color: ${color.brandMain};
      font-weight: 700;
    }
  }

  .modal-content {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 26px;

    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 12px; /* 스크롤바의 너비 */
    }
    &::-webkit-scrollbar-thumb {
      background: ${color.gray5}; /* 스크롤바의 색상 */
      border-radius: 28px;

      background-clip: padding-box;
      border: 4px solid transparent;
    }
  }
`;
