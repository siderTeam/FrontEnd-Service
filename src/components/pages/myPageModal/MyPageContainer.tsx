import Modal from '@/components/Modal/Modal';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import MyPage from './MyPage';
import MyApply from './MyApply';
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
    label: '지원현황',
    iconPath: 'paper',
    activeIconPath: 'paper_green',
  },
  {
    path: 'Project',
    label: '프로젝트',
    iconPath: 'monitor',
    activeIconPath: 'monitor_green',
  },
];

type Route = 'MyPage' | 'MyApply' | 'Project';

const MyPageContainer = ({ visible, onClose }: MyPageProps) => {
  const [activeMenu, setActiveMenu] = useState<Route>('MyPage');
  const [openMenu, setOpenMenu] = useState('');

  const handleClickMenu = (path: Route) => {
    setActiveMenu(path);
    setOpenMenu('');
  };

  const handleClickOpen = (path: Route) => {
    setOpenMenu(path);
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
      visible={visible}
      onClose={onClose}
    >
      <div style={{ display: 'flex', height: '100%' }}>
        <SiderBar>
          {router.map((item) => {
            const isActive = activeMenu.includes(item.path);
            const openSub = item.path === openMenu;
            const iconPath = `/images/etc/${isActive ? item.activeIconPath : item.iconPath}.svg`;

            return (
              <li className={isActive ? 'menu active' : 'menu'} key={item.path} onClick={() => handleClickMenu(item.path as Route)}>
                <Image src={iconPath} alt={item.label} width={16} height={16} />
                <span>{item.label}</span>
              </li>
            );
          })}

          <div className="mirror" />
        </SiderBar>
        <Container>
          {activeMenu === 'MyPage' && <MyPage />}
          {activeMenu === 'MyApply' && <MyApply onClose={onClose} />}
          {activeMenu === 'Project' && <Project />}
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

  .mirror {
    width: 293.614px;
    height: 254.156px;
    transform: rotate(-30deg);
    flex-shrink: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 100%);

    position: absolute;
    top: 0;
    left: -100px;

    z-index: -1;
  }
`;

const StyledSubMenu = styled.ul<{ openSub: boolean; height: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  gap: 10px;
  height: ${({ height, openSub }) => (openSub ? height + 13 : 0)}px;
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
