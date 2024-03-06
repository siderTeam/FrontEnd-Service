'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import ProjectTitle from './components/ProjectTitle';
import RecruitInfo from './components/RecruitInfo';
import ProjectInfo from './components/ProjectInfo';
import FunctionInfo from './components/FunctionInfo';
import DeadlineInfo from './components/DeadlineInfo';
import LeaderInfo from './components/LeaderInfo';
import CommentWrite from './components/CommentWrite';
import Comment from './components/Comment';
import Image from 'next/image';

const router = [
  {
    path: '',
    label: '프로젝트\n모집내용',
    iconPath: 'notice_gray6',
    activeIconPath: 'notice_white',
  },
  {
    path: '',
    label: '기능\n요구사항',
    iconPath: 'checkCircle_gray6',
    activeIconPath: 'checkCircle_white',
  },
  {
    path: '',
    label: '프로젝트\n모집마감',
    iconPath: 'calendar_gray6',
    activeIconPath: 'calendar_white',
  },
  {
    path: '',
    label: '프로젝트\n리더정보',
    iconPath: 'person_gray6',
    activeIconPath: 'person_white',
  },
];

const Page = () => {
  return (
    <Container>
      <div className="side-menu">
        <SdieMenu>
          {router.map((item) => {
            const isActive = true;
            const iconPath = `/images/icons/${isActive ? item.activeIconPath : item.iconPath}.svg`;

            return (
              <div className={isActive ? 'menu-box active' : 'menu-box'} key={item.label}>
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
        <ProjectTitle />
        <RecruitInfo />
        <ProjectInfo />
        <FunctionInfo />
        <DeadlineInfo />
        <LeaderInfo />
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

  color: ${color.white};

  .project-container {
    box-sizing: border-box;
    padding: 0 32px 32px 32px;
    width: 1180px;

    border: 1px solid ${color.gray9};

    .subtitle {
      display: flex;
      align-items: center;
      margin-bottom: 16px;

      span {
        color: ${color.gray5};
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

    border-top: 1px solid ${color.gray9};
    border-left: 1px solid ${color.gray9};
    color: ${color.gray6};

    cursor: pointer;

    .bar {
      width: 4px;
      height: 50px;
      background: ${color.brandMain};
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
    border-bottom: 1px solid ${color.gray9};
  }

  .active {
    color: ${color.white};
  }
`;
