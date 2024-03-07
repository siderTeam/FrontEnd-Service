'use client';

import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';
import Title from '../ProjectDetail/components/Title';
import Info from '../ProjectDetail/components/Info';
import Introduce from '../ProjectDetail/components/Introduce';
import DeadLine from '../ProjectDetail/components/DeadLine';
import LeaderInfo from '../ProjectDetail/components/LeaderInfo';
import Comment from '../ProjectDetail/components/Comment';
import Require from '../ProjectDetail/components/Require';

const router = [
  {
    label: '프로젝트 모집내용',
    iconPath: 'notice_gray6',
    activeIconPath: 'notice',
  },
  {
    label: '기능 요구사항',
    iconPath: 'checkCircle_gray6',
    activeIconPath: 'checkCircle',
  },
  {
    label: '프로젝트 모집마감',
    iconPath: 'calender_gray6',
    activeIconPath: 'calender',
  },
  {
    label: '프로젝트 리더정보',
    iconPath: 'person_gray6',
    activeIconPath: 'person',
  },
];

const Page = () => {
  return (
    <Container>
      <SideMenu>
        {router.map((route) => (
          <div className="menu">
            <Image src={`/images/etc/${route.iconPath}.svg`} width={20} height={20} alt="icon" style={{ marginRight: '8px' }} />
            <div className="label">{route.label}</div>
          </div>
        ))}
      </SideMenu>
      <ProjectContainer>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', height: '18px', padding: '32px 0 0 32px' }}>
          <Image src="/images/arrow/arrow_left_gray6.svg" width={16} height={16} alt="arrow" />
          <span style={{ color: color.gray.gray6, fontSize: '14px', fontWeight: 400 }}>이전 페이지로</span>
        </div>
        <Title /> {/* 글 제목 */}
        <Line />
        <Info /> {/* 프로젝트 정보 */}
        <Line />
        <Introduce /> {/* 프로젝트 소개 */}
        <Line />
        <Require /> {/* 기능 요구사항 */}
        <Line />
        <DeadLine /> {/* 프로젝트 모집마감 */}
        <Line />
        <LeaderInfo /> {/* 프로젝트 리더정보 */}
        <Line />
        <Comment /> {/* 댓글 */}
      </ProjectContainer>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 1180px;
  height: 2416px;

  border: 1px solid ${color.gray.gray9};

  box-sizing: border-box;
`;

const Line = styled.div`
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 40px;
  width: 1116px;
  height: 1px;
  background: ${color.gray.gray7};

  box-sizing: border-box;
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  .menu {
    display: inline-flex;
    height: 50px;
    padding: 10px 14px 10px 14px;
    align-items: center;

    border-top: 1px solid ${color.gray.gray9};
    border-bottom: 1px solid ${color.gray.gray9};
    border-left: 1px solid ${color.gray.gray9};
  }
  .label {
    width: 45px;

    color: ${color.gray.gray6};
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    word-break: keep-all;
  }
`;
