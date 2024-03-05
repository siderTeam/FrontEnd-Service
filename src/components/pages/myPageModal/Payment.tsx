'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';

import Modal from '@/components/Modal/Modal';
import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { rest } from '@/api/rest';
import { getResume } from '@/api/api';

const Payment = () => {
  const [page, setPage] = useState(1);
  const items = 12;

  // const resumeData = useQuery({
  //   queryKey: [rest.get.resume],
  //   queryFn: getResume,
  // });

  const resumeData = [
    {
      number: 1,
      project: '프로젝트 이름이시다.',
      date: '8888.88.88',
      pay: '8,888,888',
    },
    {
      number: 1,
      project: '프로젝트 이름이시다.',
      date: '8888.88.88',
      pay: '8,888,888',
    },
    {
      number: 1,
      project: '프로젝트 이름이시다.',
      date: '8888.88.88',
      pay: '8,888,888',
    },
    {
      number: 1,
      project: '프로젝트 이름이시다.',
      date: '8888.88.88',
      pay: '8,888,888',
    },
    {
      number: 1,
      project: '프로젝트 이름이시다.',
      date: '8888.88.88',
      pay: '8,888,888',
    },
    {
      number: 1,
      project: '프로젝트 이름이시다.',
      date: '8888.88.88',
      pay: '8,888,888',
    },
    {
      number: 1,
      project: '프로젝트 이름이시다.',
      date: '8888.88.88',
      pay: '8,888,888',
    },
  ];

  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <Container>
      <TableHeader>
        <div className="number">No.</div>
        <div className="project">프로젝트 명</div>
        <div className="date">결제 일자</div>
        <div className="pay">결제 금액</div>
      </TableHeader>
      <TableContent>
        {resumeData?.slice(items * (page - 1), items * (page - 1) + items).map((content, index) => (
          <ul>
            {/* <li className='number'>{(page - 1) * items + index + 1}</li> */}
            <li className="number">{content.number}</li>
            <li className="project">{content.project}</li>
            <li className="date">{content.date}</li>
            <li className="pay">{content.pay}</li>
          </ul>
        ))}
      </TableContent>
    </Container>
  );
};

export default Payment;

const Container = styled.div`
  width: 842px;

  flex-shrink: 0;
  box-sizing: border-box;

  border-radius: 0 24px 24px 0;

  padding-right: 70px;
  padding-left: 70px;

  background: ${color.gray.black};
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 120px 120px;

  height: 40px;
  background: none;
  border-bottom: 1px solid ${color.gray.white};

  margin-top: 60px;
  margin-bottom: 20px;

  color: ${color.gray.white};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  box-sizing: border-box;
  .number,
  .project,
  .date,
  .pay {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TableContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;

  ul {
    display: grid;
    grid-template-columns: 120px 1fr 120px 120px;

    height: 52px;
    border-radius: 8px;
    border: 1px solid ${color.gray.gray8};
    background: rgba(2, 6, 13, 0.5);

    color: ${color.gray.white};

    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    /* Transition for smooth hover effect */
    transition: background-position 0.5s ease; /* 애니메이션 추가 */

    &:hover {
      border-radius: 8px;
      border: 1px solid ${color.gray.white};
      background: linear-gradient(92deg, rgba(255, 255, 255, 0.1) 38.9%, rgba(0, 0, 0, 0) 62.68%), rgba(2, 6, 13, 0.5);

      background-size: 400% 400%; /* 배경 크기 증가 */
      background-position: 50% 0; /* 그라디언트 위치를 오른쪽 끝으로 이동 */
    }

    .number,
    .project,
    .date,
    .pay {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
