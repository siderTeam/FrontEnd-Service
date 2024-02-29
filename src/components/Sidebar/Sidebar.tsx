'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const router = [
  {
    path: '/admin/dashBoard',
    label: '대시보드',
    iconPath: 'home',
    activeIconPath: 'home_green',
  },
  {
    path: '/admin/siteManage',
    label: '사이트 관리',
    iconPath: 'setting',
    activeIconPath: 'setting_green',
  },
  {
    path: '/admin/memberManage',
    label: '회원 관리',
    iconPath: 'people',
    activeIconPath: 'people_green',
    subMenu: [{ path: '/admin/memberManage/memberList', label: '회원 목록' }],
  },
  {
    path: '/admin/projectManage',
    label: '프로젝트',
    iconPath: 'monitor',
    activeIconPath: 'monitor_green',
    subMenu: [
      { path: '/admin/projectManage/requireJudge', label: '요구사항 심사' },
      { path: '/admin/projectManage/depositJudge', label: '보증금 심사' },
      { path: '/admin/projectManage/projectJudge', label: '프로젝트 준공 심사' },
    ],
    height: 62,
  },
];

const Sidebar = () => {
  const path = usePathname();
  const [arcodian, setArcodian] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const handleClick = (path: string) => {
    if (activeMenu === path) {
      setArcodian(!arcodian);
    } else {
      setArcodian(true);
    }
    setActiveMenu(path);
  };

  const handleClickOther = () => {
    setArcodian(false);
  };

  console.log(arcodian);

  return (
    <SidebarContainer>
      <div className="top">
        <Image className="logo" src="/images/logo.svg" alt="logo" width={133} height={46} />

        <RouteWrapper>
          {router.map((route) => (
            <div className={route.subMenu && activeMenu === route.path && arcodian ? 'route_box' : 'route_box_nosub'} key={route.path}>
              <div className="wrap">
                {!route.subMenu && (
                  <>
                    <Image
                      src={path === route.path ? `/images/etc/${route.activeIconPath}.svg` : `/images/etc/${route.iconPath}.svg`}
                      width={16}
                      height={16}
                      style={{ marginRight: '8px' }}
                      alt="route_path"
                    />
                    <Link href={route.path}>
                      <span className={path === route.path ? 'choice' : 'common'} onClick={handleClickOther}>
                        {route.label}
                      </span>
                    </Link>
                  </>
                )}

                <div className={(route.subMenu && arcodian && activeMenu === route.path ? 'subMenu-wrap' : 'subMenu-hidden') || ''}>
                  {route.subMenu && (
                    <div className="subMenu-title">
                      <Image
                        src={activeMenu === route.path && arcodian === true ? `/images/etc/${route.activeIconPath}.svg` : `/images/etc/${route.iconPath}.svg`}
                        width={16}
                        height={16}
                        alt="route_path"
                        style={{ marginRight: '8px' }}
                      />
                      <span className={activeMenu === route.path ? 'choice' : 'common'} onClick={() => handleClick(route.path)}>
                        {route.label}
                      </span>
                    </div>
                  )}
                  <div className="subMenu">
                    {arcodian &&
                      activeMenu === route.path &&
                      route.subMenu?.map((item) => (
                        <Link href={item.path} key={item.path}>
                          <span className={(path === item.path && 'choice') || ''}>{item.label}</span>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </RouteWrapper>
      </div>
      <div className="bottom"></div>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 264px;
  height: 95vh;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  background: var(--Fill, linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5));

  margin: 20px 40px 20px 20px;

  .logo {
    margin-left: 64px;
    margin-top: 60px;
    margin-bottom: 61px;
  }
  .label {
    color: var(--GRAY-WHITE, #fff);
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 16px;

    cursor: pointer;
  }
`;

const RouteWrapper = styled.div`
  /* position: fixed;
  top: 190px; */
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 30px;

  .choice {
    color: ${color.brand.brandMain};
    font-size: 16px;
    font-weight: 700;
  }

  .common {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 400;
  }

  .route_box {
    width: 214px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    /* color: #0066ff; */
    background: #e2f1ff;
    border-radius: 12px;

    .wrap {
      width: 150px;
      display: flex;
      align-items: center;
    }
    .arrow_icon {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
    }
  }

  .route_box_nosub {
    width: 214px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    /* color: #0066ff; */

    .wrap {
      width: 150px;
      display: flex;
      align-items: center;
    }
    .arrow_icon {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
    }
  }
  .subMenu-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    width: 200px;
    padding: 20px 0;

    transition: 0.5s;
  }

  .subMenu-hidden {
    transition: 0.5s;
  }

  .subMenu-title {
    display: flex;
    /* justify-content: center; */

    align-items: center;
    cursor: pointer;
  }

  .subMenu {
    display: flex;
    flex-direction: column;
    justify-content: right;
    gap: 40px;
    color: black;

    .choice {
      color: #06f;
    }

    a {
      display: flex;
      justify-content: center;
    }
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  span {
    /* color: #0066ff; */
    font-size: 14px;
  }

  .name {
    font-size: 16px;
  }

  button {
    margin-top: 10px;
  }
`;
