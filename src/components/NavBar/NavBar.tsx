'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Button from '../Button/Button';
import { useState } from 'react';

const router = [
  {
    path: '/home',
    label: 'Home',
    iconPath: 'Home_gray',
    activeIconPath: 'Home_blue',
  },
  {
    path: '/myPage',
    label: '마이페이지',
    iconPath: 'Calendar_gray',
    activeIconPath: 'Calendar_blue',
  },
  {
    path: '/myApplication',
    label: '내 지원서',
    iconPath: 'Group_gray',
    activeIconPath: 'Group_black',
    subMenu: [
      { path: '/myApplication/applications', label: '지원서 관리' },
      { path: '/myApplication/applicationsCreate', label: '지원서 작성' },
    ],
  },
  {
    path: '/payment',
    label: '결제 내역',
    iconPath: 'Calendar_gray',
    activeIconPath: 'Calendar_blue',
  },
  {
    path: '/myProject',
    label: '프로젝트',
    iconPath: 'Bookmark_gray',
    activeIconPath: 'Bookmark_black',
    subMenu: [{ path: '/myProject/myProjectList', label: '내 프로젝트' }],
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

  return (
    <Container>
      <div className="top">
        <Link href="/home">
          <Image className="logo" src="/images/logo.svg" alt="logo" width={60} height={34} />
        </Link>
        <RouteWrapper>
          {router.map((route) => (
            <div className={route.subMenu && activeMenu === route.path && arcodian ? 'route_box' : 'route_box_nosub'} key={route.path}>
              <div className="wrap">
                {!route.subMenu && (
                  <>
                    <Image
                      src={path === route.path ? `/images/home/${route.activeIconPath}.svg` : `/images/home/${route.iconPath}.svg`}
                      width={24}
                      height={24}
                      style={{ marginRight: '8px' }}
                      alt="route_path"
                    />
                    <Link href={route.path}>
                      <span onClick={handleClickOther}>{route.label}</span>
                    </Link>
                  </>
                )}

                {path === route.path && !route.subMenu && (
                  <div className="arrow_icon">
                    <Image src="images/home/arrow_gray.svg" alt="more" width={24} height={24} />
                  </div>
                )}

                <div className={(route.subMenu && arcodian && activeMenu === route.path ? 'subMenu-wrap' : 'subMenu-hidden') || ''}>
                  {route.subMenu && (
                    <div className="subMenu-title">
                      <Image
                        src={activeMenu === route.path && arcodian === true ? `/images/home/${route.activeIconPath}.svg` : `/images/home/${route.iconPath}.svg`}
                        width={24}
                        height={24}
                        alt="route_path"
                        style={{ marginRight: '8px' }}
                      />
                      <span onClick={() => handleClick(route.path)}>{route.label}</span>
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
      <div className="bottom">
        <ProfileWrapper>
          {/* <Image
            src={"/images/home/Ellipse.svg"}
            width={94}
            height={94}
            alt='profile'
          />
          <span className='name'>닉네임</span>
          <span>10년차 디자이너</span>
          <Button
            size='nav'
            rightIcon='/images/home/arrow_white.svg'
            style={{ marginTop: 10 }}
          >
            마이페이지
          </Button> */}
          <Link href="/login">
            <Button rightIcon="/images/home/user_white.svg" iconStyle={{ width: 16, height: 16 }}>
              로그인
            </Button>
          </Link>
        </ProfileWrapper>
      </div>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 246px;
  border-radius: 15px;
  background: white;
  z-index: 3;

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bottom {
    position: absolute;
    bottom: 0px;
    width: 146px;
    left: 50px;
    bottom: 50px;
  }

  .logo {
    margin-top: 50px;
    margin-bottom: 100px;
  }
`;

const RouteWrapper = styled.div`
  /* position: fixed;
  top: 190px; */
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 30px;

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
