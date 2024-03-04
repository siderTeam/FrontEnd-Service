'use client';

import Pagination from 'react-js-pagination';
import styled from '@emotion/styled';
import { PaginationProps } from '@/types/types';
import { color } from '@/styles/CommonStyles';
import Image from 'next/image';

const Paging = ({ page, items, count, setPage }: PaginationProps) => {
  return (
    <PaginationBox>
      <Pagination
        //현재 페이지
        activePage={page}
        //한 페이지당 보여줄 리스트 아이템의 갯수
        itemsCountPerPage={items}
        //총 아이템 갯수
        totalItemsCount={count}
        //paginator 내에서 보여줄 페이지의 범위
        pageRangeDisplayed={5}
        //페이지가 바뀔 때 핸들링해줄 함수
        onChange={setPage}
        firstPageText={<Image src={'/images/icons/doubleArrow_left_white.svg'} alt="arrow_left" width={14} height={12} />}
        lastPageText={<Image src={'/images/icons/doubleArrow_right_white.svg'} alt="arrow_left" width={14} height={12} />}
        prevPageText={<Image src={'/images/icons/arrow_left_white.svg'} alt="arrow_left" width={8} height={14} style={{ marginRight: 12 }} />}
        nextPageText={<Image src={'/images/icons/arrow_right_white.svg'} alt="arrow_right" width={8} height={14} style={{ marginLeft: 12 }} />}
      ></Pagination>
    </PaginationBox>
  );
};

export default Paging;

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    padding: 0;
    gap: 4px;
  }
  ul.pagination li {
    display: flex;
    width: 24px;
    box-sizing: border-box;
    padding: 2px 8px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  ul.pagination li a {
    text-decoration: none;
    color: ${color.white};

    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }

  ul.pagination li.active a {
    color: ${color.black};
  }

  ul.pagination li.active {
    border-radius: 4px;
    background: ${color.brandMain};
  }

  ul.pagination li:hover:not(.active) {
    border-radius: 4px;
    background: ${color.gray9};
  }
`;
