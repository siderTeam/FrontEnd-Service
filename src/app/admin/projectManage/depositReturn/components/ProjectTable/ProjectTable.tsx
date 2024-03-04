'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Table from '@/components/Table/Table';
import Paging from '@/components/Paging/Paging';
import { useState } from 'react';

const ProjectTable = () => {
  const [page, setPage] = useState(1);

  //페이지네이션
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <Container>
      <div className="search-count">검색결과: 888건</div>
      <TableWrap>
        <div className="table">
          <Table type="headerCenter" style={{ width: 80 }}>
            No.
          </Table>
          <Table type="headerLeft" style={{ width: 400 }}>
            프로젝트 명
          </Table>
          <Table type="headerLeft" style={{ width: 160 }}>
            아이디
          </Table>
          <Table type="headerLeft" style={{ width: 140 }}>
            닉네임
          </Table>
          <Table type="headerLeft" style={{ width: 80 }}>
            이름
          </Table>
          <Table type="headerLeft" style={{ width: 130 }}>
            전화번호
          </Table>
          <Table type="headerLeft" style={{ width: 120 }}>
            은행
          </Table>
          <Table type="headerLeft" style={{ width: 160 }}>
            환불계좌
          </Table>
          <Table type="headerLeft" style={{ width: 80 }}>
            예금주
          </Table>
          <Table type="headerLeft" style={{ width: 221 }}>
            환급현황
          </Table>
        </div>

        <div className="table data">
          <Table type="dataCenter" style={{ width: 80 }}>
            88888
          </Table>
          <Table style={{ width: 400 }}>고구마 프로젝트</Table>
          <Table style={{ width: 160 }}>test88</Table>
          <Table style={{ width: 140 }}>길동홍</Table>
          <Table style={{ width: 80 }}>홍길동</Table>
          <Table style={{ width: 130 }}>010-8888-8888</Table>
          <Table style={{ width: 120 }}>IDK기업은행</Table>
          <Table style={{ width: 160 }}>88888-88888-88888</Table>
          <Table style={{ width: 80 }}>홍길동</Table>
          <Table style={{ width: 221 }}>환급완료(8888.88.88 88:88:88)</Table>
        </div>
      </TableWrap>
      <Paging page={page} items={20} count={100} setPage={handlePageChange} />
    </Container>
  );
};

export default ProjectTable;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .search-count {
    color: ${color.gray6};
    font-size: 12px;
    font-weight: 400;
  }

  .middle-wrap {
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
`;

const TableWrap = styled.div`
  margin-top: 2px;
  flex: 1;

  .table {
    display: flex;
  }

  .data:hover {
    background-color: ${color.gray8};
  }

  .modal-text {
    cursor: pointer;
    text-decoration: underline;
  }
`;
