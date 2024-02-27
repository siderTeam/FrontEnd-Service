'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import MyPage from './MyPage';
import Payment from './Payment';

const router = [
  {
    path: 'MyPage',
    label: '마이페이지',
    iconPath: 'person_white',
    activeIconPath: 'person_green',
  },
  {
    path: 'Resume',
    label: '내 지원서',
    iconPath: 'document_white',
    activeIconPath: 'document_green',
    subMenu: [
      {
        path: 'ResumeList',
        label: '지원서 관리',
      },
      {
        path: 'ResumeCreate',
        label: '지원서 작성',
      },
    ],
    height: 50,
  },
  {
    path: 'Payment',
    label: '결제 내역',
    iconPath: 'checkCircle_white',
    activeIconPath: 'checkCircle_green',
  },
  {
    path: 'Project',
    label: '프로젝트',
    iconPath: 'moniter_white',
    activeIconPath: 'moniter_green',
    subMenu: [
      {
        path: 'MyProject',
        label: '내 프로젝트',
      },
      {
        path: 'ProjectSupport',
        label: '지원 현황',
      },
      {
        path: 'ProjectRecruit',
        label: '모집 현황',
      },
    ],
    height: 80,
  },
];

type MyPageProps = {
  visible: boolean;
  onClose: () => void;
};

type Route = 'MyPage' | 'ResumeList' | 'Payment' | 'Project';

const MyPageContainer = ({ visible, onClose }: MyPageProps) => {
  const [activeMenu, setActiveMenu] = useState<Route>('MyPage');

  const handleClick = (path: Route) => {
    setActiveMenu(path);
  };

  return (
    <Modal
      style={{
        width: 1062,
        height: 720,
        overflow: 'hidden',
        display: 'flex',
      }}
      visible={visible}
      onClose={onClose}
    >
      <Sidebar>
        {router.map((item) => {
          const { subMenu } = item;
          const isActive = item.path === activeMenu;
          const iconPath = `/images/icons/${isActive ? item.activeIconPath : item.iconPath}.svg`;

          return (
            <li className={isActive ? 'menu active' : 'menu'} key={item.path} onClick={() => handleClick(item.path as Route)}>
              <Image src={iconPath} alt={item.label} width={16} height={16} />
              <span>{item.label}</span>

              {subMenu && (
                <StyledMenu height={item.height} isActive={isActive}>
                  {subMenu?.map((subMenu) => (
                    <li key={subMenu.path}>{subMenu.label}</li>
                  ))}
                </StyledMenu>
              )}
            </li>
          );
        })}
      </Sidebar>
      <Content>
        {activeMenu === 'MyPage' && <MyPage />}
        {activeMenu === 'Payment' && <Payment />}
      </Content>
      <Effect />
    </Modal>
  );
};

export default MyPageContainer;

const Sidebar = styled.ul`
  box-sizing: border-box;
  padding: 90px 0 0 50px;
  width: 220px;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px 0 0 20px;

  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 45px;

  .menu {
    color: ${color.white};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;

    img {
      margin-right: 8px;
    }
  }

  .active {
    color: ${color.brandMain};
  }
`;

const StyledMenu = styled.ul<{ isActive: boolean; height: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  gap: 10px;
  height: ${({ height, isActive }) => (isActive ? height + 13 : 0)}px;
  overflow: hidden;
  transition: height 0.2s ease-in;
  transition-property: display 0.2s ease-in;

  li {
    color: ${color.gray5};
    font-size: 14px;
    font-weight: 400;
    padding-left: 24px;
    box-sizing: border-box;
  }
`;

const Effect = styled.div`
  position: absolute;
  left: -95px;
  top: -15px;

  width: 294px;
  height: 254px;
  transform: rotate(-30deg);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
`;

const Content = styled.div``;
