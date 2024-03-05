import Pagination from 'react-js-pagination';
import styled from '@emotion/styled';
import { color } from '@/styles/color';

const PaginationComponent = ({ activePage, itemsCountPerPage, totalItemsCount, pageRangeDisplayed, onChange }) => {
  return (
    <div>
      <PaginationBox>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={pageRangeDisplayed}
          onChange={onChange}
          prevPageText={'‹'}
          nextPageText={'›'}
        ></Pagination>
      </PaginationBox>
    </div>
  );
};

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;

    position: absolute;
    bottom: 25px;

    gap: 5px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;

    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

    &:hover {
      cursor: pointer;
    }
  }
  ul.pagination li a {
    text-decoration: none;
    color: ${color.gray.gray5};
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: ${color.gray.black};
  }
  ul.pagination li.active {
    background-color: ${color.brand.brandMain};
  }
  ul.pagination li:hover {
    color: ${color.gray.gray3};
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background-color: ${color.gray.gray9};

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
  }
`;

export default PaginationComponent;
