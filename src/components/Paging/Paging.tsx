import Pagination from 'react-js-pagination';
import styled from '@emotion/styled';
import { PaginationProps } from '@/types/types';

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
        prevPageText={'‹'}
        nextPageText={'›'}
      ></Pagination>
    </PaginationBox>
  );
};

export default Paging;

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
  }
  ul {
    list-style: none;
    padding: 0;
    gap: 5px;
  }
  ul.pagination li {
    display: inline-block;
    width: 32px;
    height: 32px;
    border: 1px solid #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 8px;
    background: white;
  }

  ul.pagination li a {
    text-decoration: none;
    color: black;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #2f80ed;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }
`;
