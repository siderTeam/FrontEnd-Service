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
import { Fragment, useRef, useState } from 'react';
import { useObserver } from '@/hook/useObserver';
import { useQuery } from '@tanstack/react-query';
import { rest } from '@/api/rest';
import { useParams } from 'next/navigation';
import { getCheckJoinProject, getProjectDetail, increaseProjectView } from '@/api/project/api';
import { getIsLogin, getUserInfo } from '@/store/auth.store';

const Page = () => {
  const { postId } = useParams();
  const titleRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsfocused] = useState('first');

  //프로젝트 조회수 올리기(조회수 증가 로직 구현 필요)
  const projectView = useQuery({
    queryKey: [rest.get.increaseProjectView],
    queryFn: () => increaseProjectView(postId as unknown as number),
  });

  //프로젝트 단건 조회
  const { data, refetch, isSuccess } = useQuery({
    queryKey: [rest.get.projectDetail, postId, postId],
    queryFn: () => getProjectDetail(postId as unknown as number),
  });

  //프로젝트 지원 여부(로그인 한 경우 + 모집글 작성자가 아닌 경우)
  const { data: checkJoinProject, refetch: checkJoinRefetch } = useQuery({
    queryKey: [rest.get.checkJoinProject],
    queryFn: () => getCheckJoinProject(postId as unknown as number),
    enabled: isSuccess && getIsLogin() && getUserInfo().id !== data.createUser.id,
  });

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
      const currentTop = refcurrent.current.offsetTop;
      const titleHeight = titleRef.current?.offsetHeight || 0;
      const top = name === 'first' ? 0 : currentTop - titleHeight;

      window.scrollTo({ top: top, behavior: 'smooth' });
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
        <div ref={router[0].observe} />
        <ProjectTitle
          element={titleRef}
          data={data}
          postId={postId as unknown as number}
          refetch={refetch}
          checkJoin={checkJoinProject}
          checkJoinRefetch={checkJoinRefetch}
        />
        <RecruitInfo data={data} checkJoin={checkJoinProject} />
        <ProjectInfo content={data?.content || ''} />
        <FunctionInfo element={router[1].observe} data={data} />
        <DeadlineInfo
          element={router[2].observe}
          data={data}
          postId={postId as unknown as number}
          checkJoin={checkJoinProject}
          checkJoinRefetch={checkJoinRefetch}
        />
        <LeaderInfo element={router[3].observe} data={data} />
        <CommentWrite refetch={refetch} replyCount={data?.projectReplies.length || 0} projectId={data?.id || 0} />
        {data?.projectReplies.map((reply) => (
          <Fragment key={reply.id}>
            <Comment data={reply} refetch={refetch} />
          </Fragment>
        ))}
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
