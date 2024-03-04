'use client';

import Modal from '@/components/Modal/Modal';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import MyPage from './MyPage';
import MyApply from './MyApply';
import Payment from './Payment';
import Project from './Proejct';

interface MyPageProps {
  visible: boolean;
  onClose: () => void;
}

const router = [
  {
    path: 'MyPage',
    label: '마이페이지',
    iconPath: 'person',
    activeIconPath: 'person_green',
  },
  {
    path: 'MyApply',
    label: '내 지원서',
    iconPath: 'paper',
    activeIconPath: 'paper_green',
    subMenu: [
      { path: 'MyApplyList', label: '지원서 관리' },
      { path: 'myapplication/createapp', label: '지원서 작성' },
    ],
    height: 38,
  },
  {
    path: 'Payment',
    label: '결제 내역',
    iconPath: 'paper',
    activeIconPath: 'paper_green',
  },
  {
    path: 'Project',
    label: '프로젝트',
    iconPath: 'monitor',
    activeIconPath: 'monitor_green',
    subMenu: [
      { path: 'project/myproject', label: '내 프로젝트' },
      { path: 'project/applicationStatus', label: '지원 현황' },
      { path: 'project/recruitmentStatus', label: '모집 현황' },
    ],
    height: 62,
  },
];

type Route = 'MyPage' | 'MyApply' | 'Payment' | 'Project';

const MyPageContainer = ({ visible, onClose }: MyPageProps) => {
  const [activePath, setActivePath] = useState<Route>('MyPage');

  // const { data, isLoading } = useQuery({
  //   queryKey: [rest.get.project],
  //   queryFn: getProject,
  // });

  const handleClickNav = (nav: Route) => {
    setActivePath(nav);
  };

  return (
    <Modal
      style={{
        borderRadius: 24,
        width: 1062,
        height: 720,
        background: 'black',
        zIndex: 9999,
        overflow: 'hidden',
        padding: 0,
        border: '1px solid rgba(255, 255, 255, 0.60)',
      }}
      containerStyle={{ backdropFilter: 'blur(25px)' }}
      visible={visible}
      onClose={onClose}
    >
      <div style={{ display: 'flex', height: '100%' }}>
        <SiderBar>
          {router.map((item) => {
            const { subMenu } = item;
            const isActive = item.path === activePath;
            const icoPath = `/images/etc/${isActive ? item.activeIconPath : item.iconPath}.svg`;
            return (
              <li className={isActive ? 'menu active' : 'menu'} key={item.path} onClick={() => handleClickNav(item.path as Route)}>
                <Image src={icoPath} alt={item.label} width={16} height={16} />
                <span>{item.label}</span>

                {subMenu ? (
                  <StyledSubMenu height={item.height} isActive={isActive}>
                    {subMenu?.map((subMenu) => (
                      <li key={subMenu.path}>{subMenu.label}</li>
                    ))}
                  </StyledSubMenu>
                ) : (
                  <></>
                )}
              </li>
            );
          })}
        </SiderBar>
        <Container>
          {activePath === 'MyPage' && <MyPage />}
          {activePath === 'MyApply' && <MyApply />}
          {activePath === 'Payment' && <Payment />}
          {activePath === 'Project' && <Project />}
        </Container>
      </div>
    </Modal>
  );
};

export default MyPageContainer;

const Container = styled.div`
  background: black;
  flex: 1;
  color: white;

  backdrop-filter: blur(25px);

  & > div {
    padding: 60px 70px;
    box-sizing: border-box;
  }
`;

const SiderBar = styled.ul`
  width: 220px;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  padding-left: 50px;
  padding-top: 90px;
  display: flex;
  gap: 37px;
  flex-direction: column;
  box-sizing: border-box;

  .menu {
    cursor: pointer;
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 700;

    img {
      margin-right: 8px;
    }
  }

  .active {
    color: ${color.brand.brandMain};
  }
`;

const StyledSubMenu = styled.ul<{ isActive: boolean; height: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  gap: 10px;
  height: ${({ height, isActive }) => (isActive ? height + 13 : 0)}px;
  overflow: hidden;
  transition: height 0.2s ease-in;
  transition-property: display 0.2s ease-in;

  li {
    font-size: 14px;
    font-weight: 400;
    padding-left: 24px;
    box-sizing: border-box;
    color: white;
  }
`;
