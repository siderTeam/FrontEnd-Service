"use client";

import { getResume } from "@/api/api";
import { rest } from "@/api/rest";
import PaginationComponent from "@/component/Pagination/Pagination";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Page = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [page, setPage] = useState(1);
  const items = 12;

  const resumeData = useQuery({
    queryKey: [rest.get.resume],
    queryFn: getResume,
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Container>
      <Title>지원서 관리</Title>

      <div className='table-wrap'>
        <TableHeader>
          <div className='number'>No.</div>
          <div className='title'>지원서 이름</div>
        </TableHeader>
        <TableContent>
          {resumeData.data
            ?.slice(items * (page - 1), items * (page - 1) + items)
            .map((content, index) => (
              <ul>
                <li className='number'>{(page - 1) * items + index + 1}</li>
                <li className='title'>{content.name}</li>
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className='delete'
                >
                  {isHovered ? (
                    <img src='/images/applications/delete_red.svg' />
                  ) : (
                    <img src='/images/applications/delete_gray.svg' />
                  )}
                </div>
              </ul>
            ))}
        </TableContent>
        <PaginationComponent
          activePage={page}
          itemsCountPerPage={items}
          totalItemsCount={resumeData.data?.length}
          pageRangeDisplayed={10}
          onChange={handlePageChange}
        />
      </div>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 90px;
  max-width: calc(100vw - 246px - 58px - 58px);

  .table-wrap {
    flex-grow: 1;
    height: 780px;

    background: rgba(255, 255, 255, 0.7);
    border-radius: 14px;
    position: relative;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 21px;
  font-weight: bold;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;

  height: 62px;
  background: #b8ceef;

  border-radius: 14px 14px 0 0;
  border-bottom: 1px solid #c7c7c7;

  .number {
    display: flex;
    justify-content: center;
    align-items: center;

    border-right: 1px solid white;
  }
  .title {
    display: flex;

    align-items: center;

    padding-left: 36px;
  }
`;

const TableContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background: white;

  ul {
    display: grid;
    grid-template-columns: 120px 1fr 52px;

    height: 52px;
    border-bottom: 1px solid #c7c7c7;

    &:hover {
      background: #e2f1ff;

      .title {
        color: #06f;
        cursor: pointer;
      }

      .delete {
        opacity: 1;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .number {
      display: flex;
      justify-content: center;
      align-items: center;

      border-right: 1px solid #a7bfe3;
    }

    .title {
      display: flex;
      align-items: center;

      padding-left: 36px;
    }

    .delete {
      display: flex;
      justify-content: center;
      align-items: center;

      opacity: 0;
    }
  }
`;
