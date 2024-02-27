'use client';

import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { rest } from '../../api/rest';
import { getResumeList } from '../../api/api';
import Paging from '@/components/Paging/Paging';
import { useState } from 'react';

const Page = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(12);

  //내 프로젝트 목록 가져오기
  // const projectData = useQuery({
  //   queryKey: [],
  //   queryFn: ,
  // });

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <Container>
      <Title>내 프로젝트</Title>
      <TableWrap>
        <TableHeader>
          <div className="number">No.</div>
          <div className="title">프로젝트 명</div>
          <div className="other">프로젝트 진행 기간</div>
          <div className="other">환급 여부</div>
        </TableHeader>
        <TableContent>
          {/* {projectData.data
            ?.slice(items * (page - 1), items * (page - 1) + items)
            .map((item, index) => (
              <ul key={item.id}>
                <li className="number">{index + 1}</li>
                <li className="title">
                  <span>{item.name}</span>
                </li>
                <li className="other">23.11.18~23.12.18</li>
                <li className="other">심사중</li>
              </ul>
            ))} */}
        </TableContent>
        <PageWrap>
          {/* <Paging
            page={page}
            items={items}
            count={projectData.data?.length || 0}
            setPage={handlePageChange}
          /> */}
        </PageWrap>
      </TableWrap>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  max-width: calc(100vw - 246px - 58px - 58px);
  padding-top: 90px;
  flex-grow: 1;
`;

const Title = styled.h1`
  color: var(--txt-main, #1e1e20);
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -1.12px;
`;

const TableWrap = styled.div`
  position: relative;
  margin: 20px 0 35px 0;
  min-height: 780px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 14px;

  .number {
    width: 120px;
    text-align: center;
  }

  .title {
    flex: 1;
  }

  .other {
    width: 290px;
    text-align: center;
  }
`;

const TableHeader = styled.div`
  width: 100%;
  border-radius: 14px 14px 0 0;
  background: #b8ceef;
  border-bottom: 1px solid #c7c7c7;
  display: flex;

  div {
    padding: 20px 35px;
    box-sizing: border-box;
  }

  div:not(:last-child) {
    border-right: 1px solid #ffffff;
  }
`;

const TableContent = styled.div`
  width: 100%;
  background: white;

  ul {
    border-bottom: 1px solid #c7c7c7;
    display: flex;
  }

  ul:hover {
    background: #e2f1ff;
  }

  li {
    padding: 20px 35px;
    height: 52px;
    box-sizing: border-box;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  li:not(:last-child) {
    border-right: 1px solid #a7bfe3;
  }

  .title span:hover {
    color: #0066ff;
  }
`;

const PageWrap = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  z-index: 1;
`;
