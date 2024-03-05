'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const router = [
  {
    path: '/dashBoard',
    label: '대시보드',
    iconPath: 'home',
    activeIconPath: 'home_green',
  },
  {
    path: '/siteManage',
    label: '사이트 관리',
    iconPath: 'setting',
    activeIconPath: 'setting_green',
  },
  {
    path: '/memberManage',
    label: '회원관리',
    iconPath: 'people',
    activeIconPath: '/people_green',
    subMenu: [
      {
        path: '/memberList',
        label: '회원 목록',
      },
    ],
    height: 20,
  },
  {
    path: '/projectManage',
    label: '프로젝트 관리',
    iconPath: 'monitor',
    activeIconPath: 'monitor_green',
    subMenu: [
      {
        path: '/requireJudge',
        label: '요구사항 심사',
      },
      {
        path: '/depositJudge',
        label: '보증금 심사',
      },
      {
        path: '/projectCompletion',
        label: '프로젝트 준공 심사',
      },
    ],
    height: 100,
  },
];

const AdminSidebar = () => {
  const path = usePathname();
  const [activeMenu, setActiveMenu] = useState(path);
  const [openMenu, setOpenMenu] = useState(path);

  const handleClickMenu = (path: string) => {
    setActiveMenu(path);
    setOpenMenu('');
  };

  const handleClickOpen = (path: string) => {
    setOpenMenu(path);
  };

  return (
    <Container>
      <div className="wrap">
        <Link href={'/admin/dashboard'}>
          <Image className="logo" src={'/images/logo.svg'} alt="logo" width={133} height={46} />
        </Link>

        <MenuContainer>
          {router.map((item) => {
            const { subMenu } = item;
            const isActive = path.includes(item.path);
            const openSub = openMenu.includes(item.path);
            const iconPath = `/images/etc/${isActive ? item.activeIconPath : item.iconPath}.svg`;
            const arrowPath = `/images/arrow/${isActive ? (openSub ? 'arrow_up' : 'arrow_down') : openSub ? 'arrow_up' : 'arrow_down'}.svg`;

            return (
              <li
                className={isActive ? 'menu active' : 'menu'}
                key={item.path}
                onClick={subMenu ? () => handleClickOpen(item.path) : () => handleClickMenu(item.path)}
              >
                <MenuWrap>
                  <Image src={iconPath} alt={item.label} width={16} height={16} style={{ marginRight: '8px' }} />
                  {subMenu ? (
                    <>
                      <span className="menuLabel">{item.label}</span>
                      <Image src={arrowPath} alt={'arrow'} width={16} height={16} />
                    </>
                  ) : (
                    <Link href={'/admin' + item.path}>
                      <span>{item.label}</span>
                    </Link>
                  )}
                </MenuWrap>

                {subMenu && (
                  <StyledMenu height={item.height} openSub={openSub}>
                    {subMenu?.map((subMenu) => {
                      const isSubActive = path.includes(subMenu.path);

                      return (
                        <Link href={'/admin' + item.path + subMenu.path} key={subMenu.path}>
                          <li className={isSubActive ? 'active' : ''}>{subMenu.label}</li>
                        </Link>
                      );
                    })}
                  </StyledMenu>
                )}
              </li>
            );
          })}
        </MenuContainer>
      </div>
      <div className="logout">
        <Image src={'/images/etc/on_green.svg'} alt="logout" width={16} height={16} />
        <span>로그아웃</span>
      </div>
      <Effect />
    </Container>
  );
};

export default AdminSidebar;

const Container = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 264px;
  height: 95vh;
  box-sizing: border-box;
  padding: 60px 41px 30px 41px;
  margin: 20px 40px 20px 20px;

  border-radius: 16px;
  border: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  background: var(--Fill, linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5));

  .wrap {
    flex: 1;
    z-index: 1;
  }

  .logo {
    margin-left: 23px;
  }

  .logout {
    display: flex;
    align-items: center;
    margin-left: 36px;
    cursor: pointer;

    span {
      color: ${color.brand.brandMain};
      font-size: 16px;
      font-weight: 400;
      margin-left: 16px;
    }
  }
`;

const MenuContainer = styled.ul`
  /* position: fixed;
  top: 190px; */
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 30px;

  margin-top: 61px;

  .menu {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }

  .active {
    color: ${color.brand.brandMain};
    font-weight: 700;
  }
`;

const MenuWrap = styled.div`
  display: flex;
  align-items: center;

  .menuLabel {
    flex: 1;
  }
`;

const StyledMenu = styled.ul<{ openSub: boolean; height: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;

  height: ${({ height, openSub }) => (openSub ? height + 13 : 0)}px;
  overflow: hidden;
  transition: height 0.2s ease-in;
  transition-property: display 0.2s ease-in;

  li {
    color: ${color.gray.gray5};
    font-size: 14px;
    font-weight: 400;

    box-sizing: border-box;
    padding-left: 24px;
  }
`;

const Effect = styled.div`
  position: absolute;
  top: 30px;
  left: -220px;

  width: 405.797px;
  height: 268.688px;
  transform: rotate(-30deg);
  flex-shrink: 0;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
`;
