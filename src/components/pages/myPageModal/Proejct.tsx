'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { useState } from 'react';

const Proejct = () => {
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
      status: '입금대기',
      project: '프로젝트 이름이시다.',
      start: '8888.88.88',
      end: '8888.88.88',
      done: '납입 완료',
      deposit: '888,888',
      refund: '환급 완료',
    },
  ];

  return (
    <Container>
      <div className="filter-wrap">
        <div className={filterType === '전체' ? 'choice' : 'basic'} onClick={() => handleFilterClick('전체')}>
          전체보기
        </div>
        <div className={filterType === '내가쓴글' ? 'choice' : 'basic'} onClick={() => handleFilterClick('내가쓴글')}>
          내가 쓴 글만보기
        </div>
        <div className={filterType === '진행중' ? 'choice' : 'basic'} onClick={() => handleFilterClick('진행중')}>
          진행중인 프로젝트만 보기
        </div>
      </div>
      <TableHeader>
        <div className="number">No.</div>
        <div className="status">진행상태</div>
        <div className="project">프로젝트 명</div>
        <div className="period">진행 기간</div>
        <div className="done">보증금 납입</div>
        <div className="refund">보증금 환급</div>
      </TableHeader>
      <TableContent>
        {resumeData?.map((content, index) => (
          <ul key={`${content.number}_${index}`}>
            <li className="number">{content.number}</li>
            <li className="status">{content.status}</li>
            <li className="project">{content.project}</li>
            <li className="period">
              {content.start}
              <br />~{content.end}
            </li>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <li className="done">{content.done}</li>
              <span>{content.deposit}</span>
            </div>
            <li className="refund">{content.refund}</li>
          </ul>
        ))}
      </TableContent>
    </Container>
  );
};

export default Proejct;

const Container = styled.div`
  width: 842px;
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
  grid-template-columns: 60px 80px 1fr 100px 95px 95px;

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
  .status,
  .project,
  .period,
  .done,
  .refund {
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
    grid-template-columns: 60px 80px 1fr 100px 95px 95px;

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
    .status,
    .project,
    .period,
    .done,
    .refund {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
