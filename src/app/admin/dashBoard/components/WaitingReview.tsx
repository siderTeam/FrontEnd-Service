import Profile from '@/components/Profile/Profile';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import React, { useState } from 'react';

const WaitingReview = () => {
  const [page, setPage] = useState(1);
  const items = 12;
  const resumeData = [
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집중',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집중',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집완료',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집중',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집완료',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집완료',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집중',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집완료',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',
      deposit: '88만원',
      status: '모집중',
    },
  ];
  return (
    <Container>
      <span className="title">심사 대기 프로젝트</span>
      <TableHeader>
        <div className="number">No.</div>
        <div className="project">프로젝트 명</div>
        <div className="member">신청자</div>
        <div className="deposit">보증금</div>
        <div className="status">상태</div>
      </TableHeader>
      <TableContent>
        {resumeData?.slice(items * (page - 1), items * (page - 1) + items).map((content, index) => (
          <ul>
            {/* <li className='number'>{(page - 1) * items + index + 1}</li> */}
            <li className="number">{content.number}</li>
            <li className="project">{content.name}</li>
            <li className="member">
              <Profile />
            </li>
            <li className="deposit">{content.deposit}</li>
            <li className="status">{content.status}</li>
          </ul>
        ))}
      </TableContent>
    </Container>
  );
};

export default WaitingReview;

const Container = styled.div`
  .title {
    color: ${color.gray.white};
    font-size: 20px;
    font-weight: 500;
    line-height: 140%; /* 28px */
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 220px 140px 130px;

  height: 40px;
  background: none;
  border-bottom: 1px solid ${color.gray.gray7};

  margin-top: 32px;

  .number,
  .project,
  .member,
  .deposit,
  .status {
    color: ${color.gray.gray5};
    font-size: 16px;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    display: flex;
    align-items: center;
  }
  .number {
    justify-content: center;
  }
`;

const TableContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  ul {
    display: grid;
    grid-template-columns: 100px 1fr 220px 140px 130px;

    height: 48px;

    border-bottom: 1px solid ${color.gray.gray7};

    .number {
      color: ${color.gray.gray3};
      text-align: center;
      font-size: 16px;
      font-weight: 400;

      display: flex;
      align-items: center;
      justify-content: center;
    }
    .project {
      display: -webkit-box;
      width: 261px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;

      overflow: hidden;
      color: ${color.gray.gray3};
      text-overflow: ellipsis;
      font-size: 16px;
      font-weight: 400;

      display: flex;
      align-items: center;
    }
    .member,
    .deposit,
    .status {
      color: ${color.gray.gray3};
      font-size: 16px;
      font-weight: 400;

      display: flex;
      align-items: center;
    }
  }
`;
