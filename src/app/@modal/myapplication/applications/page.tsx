"use client";

import styled from "@emotion/styled";
import { color } from "@/Styles/color";

import Modal from "@/component/Modal_new/Modal";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useQuery } from "@tanstack/react-query";
import { rest } from "@/api/rest";
import { getResume } from "@/api/api";

const Page = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [page, setPage] = useState(1);
  const items = 12;

  // const resumeData = useQuery({
  //   queryKey: [rest.get.resume],
  //   queryFn: getResume,
  // });

  const resumeData = [
    {
      number: 1,
      name: "지원서 이름이시다.",
    },
    {
      number: 1,
      name: "지원서 이름이시다.",
    },
    {
      number: 1,
      name: "지원서 이름이시다.",
    },
    {
      number: 1,
      name: "지원서 이름이시다.",
    },
    {
      number: 1,
      name: "지원서 이름이시다.",
    },
    {
      number: 1,
      name: "지원서 이름이시다.",
    },
    {
      number: 1,
      name: "지원서 이름이시다.",
    },
  ];

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
    <>
      <Modal style={{ width: "1062px" }}>
        <Container>
          <Sidebar />
          <div className='right-section'>
            <TableHeader>
              <div className='number'>No.</div>
              <div className='title'>지원서 이름</div>
              <div className='delete'>삭제</div>
            </TableHeader>
            <TableContent>
              {resumeData
                ?.slice(items * (page - 1), items * (page - 1) + items)
                .map((content, index) => (
                  <ul>
                    {/* <li className='number'>{(page - 1) * items + index + 1}</li> */}
                    <li className='number'>{content.number}</li>
                    <li className='title'>{content.name}</li>
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className='delete'
                    >
                      삭제
                    </div>
                  </ul>
                ))}
            </TableContent>
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default Page;

const Container = styled.div`
  display: flex;
  width: 842px;
  height: 720px;
  flex-shrink: 0;
  box-sizing: border-box;

  .right-section {
    width: 842px;
    height: 100%;
    flex-shrink: 0;
    box-sizing: border-box;

    border-radius: 0 24px 24px 0;

    padding-right: 70px;
    padding-left: 70px;

    background: ${color.gray.black};
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 120px;

  height: 40px;
  background: none;
  border-bottom: 1px solid ${color.gray.white};

  margin-top: 70px;
  margin-bottom: 20px;

  color: ${color.gray.white};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  .number {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .delete {
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
    grid-template-columns: 120px 1fr 120px;

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
      background: linear-gradient(
          92deg,
          rgba(255, 255, 255, 0.1) 38.9%,
          rgba(0, 0, 0, 0) 62.68%
        ),
        rgba(2, 6, 13, 0.5);

      background-size: 400% 400%; /* 배경 크기 증가 */
      background-position: 50% 0; /* 그라디언트 위치를 오른쪽 끝으로 이동 */
    }

    .number,
    .title,
    .delete {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .delete {
      color: ${color.secondary.error_1};
      text-align: center;
      font-size: 12px;
      font-weight: 400;
    }
  }
`;
