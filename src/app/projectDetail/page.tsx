'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import ProjectTitle from './components/ProjectTitle';
import RecruitInfo from './components/RecruitInfo';
import ProjectInfo from './components/ProjectInfo';
import FunctionInfo from './components/FunctionInfo';
import DeadlineInfo from './components/DeadlineInfo';
import LeaderInfo from './components/LeaderInfo';
import CommentWrite from './components/CommentWrite';
import Comment from './components/Comment';
import Image from 'next/image';
import { useState } from 'react';
import { useObserver } from '@/hook/useObserver';

const Page = () => {
  const [isFocused, setIsfocused] = useState('first');
  const router = [
    {
      path: 'first',
      label: '프로젝트\n모집내용',
      iconPath: '/notice/notice_gray6',
      activeIconPath: '/notice/notice_white',
      observe: useObserver('first', setIsfocused),
    },
    {
      path: 'second',
      label: '기능\n요구사항',
      iconPath: '/checkCircle/checkCircle_gray6',
      activeIconPath: '/checkCircle/checkCircle_white',
      observe: useObserver('second', setIsfocused),
    },
    {
      path: 'third',
      label: '프로젝트\n모집마감',
      iconPath: '/calendar/calendar_gray6',
      activeIconPath: '/calendar/calendar_white',
      observe: useObserver('third', setIsfocused),
    },
    {
      path: 'last',
      label: '프로젝트\n리더정보',
      iconPath: '/person/person_gray6',
      activeIconPath: '/person/person_white',
      observe: useObserver('last', setIsfocused),
    },
  ];

  const onScroll = (refcurrent: React.RefObject<HTMLDivElement>, name: string) => {
    if (refcurrent.current) {
      refcurrent.current.scrollIntoView({ behavior: 'smooth' });
      //setIsfocused(name);
    }
  };

  return (
    <Container>
      <div className="side-menu">
        <SdieMenu>
          {router.map((item) => {
            const isActive = isFocused === item.path;
            const iconPath = `/images/${isActive ? item.activeIconPath : item.iconPath}.svg`;

            return (
              <div className={isActive ? 'menu-box active' : 'menu-box'} key={item.label} ref={item.observe} onClick={() => onScroll(item.observe, item.path)}>
                {isActive && <div className="bar" />}
                <div className="menu">
                  <Image src={iconPath} alt={item.label} width={20} height={20} />
                  <div className="label">{item.label}</div>
                </div>
              </div>
            );
          })}
        </SdieMenu>
      </div>
      <div className="project-container">
        <ProjectTitle element={router[0].observe} />
        <RecruitInfo />
        <ProjectInfo />
        <FunctionInfo element={router[1].observe} />
        <DeadlineInfo element={router[2].observe} />
        <LeaderInfo element={router[3].observe} />
        <CommentWrite />
        <Comment />
      </div>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;

  display: flex;

  color: ${color.gray.white};

  .project-container {
    box-sizing: border-box;
    padding: 0 32px 32px 32px;
    width: 1180px;

    border: 1px solid ${color.gray.gray9};

    .subtitle {
      display: flex;
      align-items: center;
      margin-bottom: 16px;

      span {
        color: ${color.gray.gray5};
        font-size: 22px;
        font-weight: 700;

        margin-left: 10px;
      }
    }
  }

  .side-menu {
    margin-top: 40px;
  }
`;

const SdieMenu = styled.div`
  position: sticky;
  top: 40px;

  .menu-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 9px;

    width: 100px;
    height: 50px;
    box-sizing: border-box;
    padding-right: 14px;

    border-top: 1px solid ${color.gray.gray9};
    border-left: 1px solid ${color.gray.gray9};
    color: ${color.gray.gray6};

    cursor: pointer;

    .bar {
      width: 4px;
      height: 50px;
      background: ${color.brand.brandMain};
    }

    .menu {
      display: flex;
      align-items: center;
      gap: 8px;

      text-align: center;
      font-size: 12px;
      font-weight: 400;
    }

    .label {
      white-space: pre;
    }
  }

  .menu-box:last-child {
    border-bottom: 1px solid ${color.gray.gray9};
  }

  .active {
    color: ${color.gray.white};
  }
`;
