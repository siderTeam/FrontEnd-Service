'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { rest } from '@/api/rest';
import { getResume } from '@/api/api';

const MyApply = () => {
  const [filterType, setFilterType] = useState('전체');
  // const resumeData = useQuery({
  //   queryKey: [rest.get.resume],
  //   queryFn: getResume,
  // });

  const handleFilterClick = (type: string) => {
    setFilterType(type);
  };

  const resumeData = [
    {
      number: 1,
      project: '프로젝트 이름이시다.',
      application: '승인 완료',
      recruitment: '모집중',
      status: '대기',
    },
  ];

  return (
    <Container>
      <div className="filter-wrap">
        <div className={filterType === '전체' ? 'choice' : 'basic'} onClick={() => handleFilterClick('전체')}>
          전체보기
        </div>
        <div className={filterType === '대기' ? 'choice' : 'basic'} onClick={() => handleFilterClick('대기')}>
          대기상태 프로젝트만 보기
        </div>
        <div className={filterType === '승인' ? 'choice' : 'basic'} onClick={() => handleFilterClick('승인')}>
          승인된 프로젝트만 보기
        </div>
      </div>
      <TableHeader>
        <div className="number">No.</div>
        <div className="date">지원일시</div>
        <div className="status">진행상태</div>
        <div className="project">프로젝트 명</div>
        <div className="apply-status">지원 현황</div>
      </TableHeader>
      <TableContent>
        {resumeData?.map((content) => (
          <ul key={content.number}>
            {/* <li className='number'>{(page - 1) * items + index + 1}</li> */}
            <li className="number">{content.number}</li>
            <li className="date">{content.project}</li>
            <li className="status">{content.application}</li>
            <li className="project">{content.recruitment}</li>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4 }}>
              <li className="apply-status">{content.status}</li>
              <span style={{ color: color.gray.white, textAlign: 'center', fontSize: 12, textDecorationLine: 'underline', fontWeight: 400 }}>지원취소</span>
            </div>
          </ul>
        ))}
      </TableContent>
    </Container>
  );
};

export default MyApply;

const Container = styled.div`
  width: 842px;
  height: 100%;
  flex-shrink: 0;
  box-sizing: border-box;

  border-radius: 0 24px 24px 0;

  padding-right: 70px;
  padding-left: 70px;

  background: ${color.gray.black};

  .filter-wrap {
    display: flex;
    gap: 18px;
    margin-top: 60px;
  }

  .basic {
    color: ${color.gray.gray5};
    font-size: 16px;
    font-weight: 400;

    cursor: pointer;
  }
  .choice {
    color: ${color.brand.brandMain};
    font-size: 16px;
    font-weight: 700;

    cursor: pointer;
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 60px 110px 140px 1fr 120px;

  height: 40px;
  background: none;
  border-bottom: 1px solid ${color.gray.white};

  margin-top: 30px;
  margin-bottom: 20px;

  color: ${color.gray.white};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  .number,
  .project,
  .date,
  .status,
  .apply-status {
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
    grid-template-columns: 60px 110px 140px 1fr 120px;

    height: 52px;
    border-radius: 8px;
    border: 1px solid ${color.gray.gray8};
    background: rgba(2, 6, 13, 0.5);

    color: ${color.gray.white};

    text-align: center;
    font-size: 14px;
    font-weight: 400;

    transition: background-position 0.3s ease;

    &:hover {
      border-radius: 8px;
      border: 1px solid ${color.gray.white};
      background: linear-gradient(92deg, rgba(255, 255, 255, 0.15) 38.9%, rgba(0, 0, 0, 0) 62.68%), rgba(2, 6, 13, 0.5);

      background-size: 400% 400%;
      background-position: 50% 0;
    }

    .number,
    .project,
    .date,
    .status,
    .apply-status {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .application {
      color: ${color.secondary.positive_1};

      text-align: center;
      font-size: 14px;
      font-weight: 400;
    }

    .cancel {
      color: ${color.secondary.error_1};

      text-align: center;
      font-size: 14px;
      font-weight: 400;
    }
  }
`;
