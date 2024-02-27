import Pagination from "react-js-pagination";
import styled from "@emotion/styled";

const PaginationComponent = ({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed,
  onChange,
}) => {
  return (
    <div>
      <PaginationBox>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={pageRangeDisplayed}
          onChange={onChange}
          prevPageText={"‹"}
          nextPageText={"›"}
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
    border: 1px solid #f1f1f1;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background-color: white;

    &:hover {
      cursor: pointer;
    }
  }
  ul.pagination li a {
    text-decoration: none;
    color: #333333;
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
  }
  a {
    cursor: none;
  }
`;

export default PaginationComponent;
