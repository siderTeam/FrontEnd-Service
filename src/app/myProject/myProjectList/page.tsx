"use client";

import { getResume } from "@/api/api";
import { rest } from "@/api/rest";
import PaginationComponent from "@/components/Pagination/Pagination";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Page = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [page, setPage] = useState(1);
  const items = 12;

  // const resumeData = useQuery({
  //   queryKey: [rest.get.resume],
  //   queryFn: getResume,
  // });

  const handlePageChange = (page) => {
    setPage(page);
  };

  const data = [
    {
      id: 1,
      no: 1,
      title: "마실커피",
      period: "23.11.18~23.12.18",
      status: "심사 완료",
    },
    {
      id: 1,
      no: 1,
      title: "마실커피",
      period: "23.11.18~23.12.18",
      status: "심사 완료",
    },
    {
      id: 1,
      no: 1,
      title: "마실커피",
      period: "23.11.18~23.12.18",
      status: "심사중",
    },
    {
      id: 1,
      no: 1,
      title: "마실커피",
      period: "23.11.18~23.12.18",
      status: "반려",
    },
    {
      id: 1,
      no: 1,
      title: "마실커피",
      period: "23.11.18~23.12.18",
      status: "심사중",
    },
  ];

  return (
    <Container>
      <Title>내 프로젝트</Title>

      <div className="table-wrap">
        <TableHeader>
          <div className="number">No.</div>
          <div className="title">프로젝트 명</div>
          <div className="period">프로젝트 진행 기간</div>
          <div className="refunds">환급 여부</div>
        </TableHeader>
        <TableContent></TableContent>
        <PaginationComponent
          activePage={page}
          itemsCountPerPage={items}
          totalItemsCount={data.length}
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
  max-width: 1920px;

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
  grid-template-columns: 120px 1fr 290px 290px;

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

    border-right: 1px solid white;
  }
  .period {
    display: flex;
    justify-content: center;
    align-items: center;

    border-right: 1px solid white;
  }
  .refunds {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TableContent = styled.div`
  /* display: grid;
  grid-template-columns: repeat(1, 1fr); */
  background: white;

  ul {
    display: grid;
    grid-template-columns: 120px 1fr 290px 290px;

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

      border-right: 1px solid #a7bfe3;
    }
    .period {
      display: flex;
      justify-content: center;
      align-items: center;

      border-right: 1px solid #a7bfe3;
    }

    .flex {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .circle-ing {
      width: 11.29px;
      height: 11.29px;
      border-radius: 50%;
      background-color: #fe912c;
      margin: 4px;
    }
    .refunds-ing {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fe912c;
      font-weight: bold;
    }
    .circle-no {
      width: 11.29px;
      height: 11.29px;
      border-radius: 50%;
      background-color: #f95858;
      margin: 4px;
    }
    .refunds-no {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #f95858;
      font-weight: bold;
    }
    .circle-good {
      width: 11.29px;
      height: 11.29px;
      border-radius: 50%;
      background-color: #06f;
      margin: 4px;
    }
    .refunds-good {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #06f;
      font-weight: bold;
    }
  }
`;
