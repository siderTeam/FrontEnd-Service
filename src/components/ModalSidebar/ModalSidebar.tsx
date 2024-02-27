'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

const router = [
  {
    path: '/myPage',
    label: '마이페이지',
    iconPath: 'person_white',
    activeIconPath: 'person_green',
  },
  {
    path: '/resume',
    label: '내 지원서',
    iconPath: 'document_white',
    activeIconPath: 'document_green',
    subMenu: [
      {
        path: '/resume/resumeList',
        label: '지원서 관리',
      },
      {
        path: '/resume/resumeCreate',
        label: '지원서 작성',
      },
    ],
  },
  {
    path: '/payment',
    label: '결제 내역',
    iconPath: 'checkCircle_white',
    activeIconPath: 'checkCircle_green',
  },
  {
    path: '/project',
    label: '프로젝트',
    iconPath: 'moniter_white',
    activeIconPath: 'moniter_green',
    subMenu: [
      {
        path: '/project/myProject',
        label: '내 프로젝트',
      },
      {
        path: '/project/supportStatus',
        label: '지원 현황',
      },
      {
        path: '/project/recruitStatus',
        label: '모집 현황',
      },
    ],
  },
];

const Sidebar = () => {
  const path = usePathname();
  const [activeMenu, setActiveMenu] = useState('');

  const handleClick = (path: string) => {
    setActiveMenu((prevPath) => (prevPath === path ? '' : path));
  };

  return (
    <>
      <Container>
        {router.map((route) => (
          <div key={route.path}>
            <div className={`menu ${path.includes(route.path) && 'active'}`}>
              <Image
                src={path.includes(route.path) ? `/images/icons/${route.activeIconPath}.svg` : `/images/icons/${route.iconPath}.svg`}
                width={16}
                height={16}
                alt={route.label}
              />
              {route.subMenu ? (
                <span onClick={() => handleClick(route.path)}>{route.label}</span>
              ) : (
                <Link href={route.path} scroll={false}>
                  <span>{route.label}</span>
                </Link>
              )}
            </div>
            {(route.path === activeMenu || path.includes(route.path)) && (
              <div className="subMenu">
                {route.subMenu?.map((item) => (
                  <Link href={item.path} key={item.path} scroll={false}>
                    <span className={`${path === item.path && 'active'}`}>{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </Container>
      <Effect />
    </>
  );
};

export default Sidebar;

const Container = styled.div`
  box-sizing: border-box;
  padding: 90px 0 0 50px;
  width: 220px;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px 0 0 20px;

  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 45px;

  .menu {
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${color.white};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }

  .active {
    color: ${color.brandMain};
  }

  .subMenu {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 16px 0 0 24px;

    color: ${color.gray5};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
