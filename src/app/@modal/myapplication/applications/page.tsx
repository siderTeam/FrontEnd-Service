"use client";

import styled from "@emotion/styled";
import * as CS from "../../../../Styles/CommonStyles";

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

  .nav {
  }
  .right-section {
    width: 842px;
    height: 100%;
    flex-shrink: 0;
    box-sizing: border-box;

    border-radius: 0 24px 24px 0;

    padding-right: 70px;
    padding-left: 70px;

    background: ${CS.color.black};
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 120px;

  height: 40px;
  background: none;
  border-bottom: 1px solid ${CS.color.white};

  margin-top: 70px;

  color: ${CS.color.white};
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

  ul {
    display: grid;
    grid-template-columns: 120px 1fr 120px;

    height: 52px;
    border-radius: 8px;
    border: 1px solid ${CS.color.gray8};
    background: rgba(2, 6, 13, 0.5);

    color: ${CS.color.white};

    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

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
