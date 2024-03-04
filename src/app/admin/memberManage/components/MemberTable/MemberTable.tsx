'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Table from '@/components/Table/Table';
import Paging from '@/components/Paging/Paging';
import { useState } from 'react';
import MemberDetail from '../Modal/MemberDetail';

const MemberTable = () => {
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);

  //회원정보-상세 모달
  const handleCloseModal = () => {
    setModal(false);
  };

  //페이지네이션
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <Container>
      <MemberDetail visible={modal} onClose={handleCloseModal} />
      <div className="search-count">검색결과: 888건</div>
      <TableWrap>
        <div className="table">
          <Table type="headerCenter" style={{ width: 80 }}>
            No.
          </Table>
          <Table type="headerLeft" style={{ width: 80 }}>
            상태
          </Table>
          <Table type="headerLeft">아이디</Table>
          <Table type="headerLeft" style={{ width: 120 }}>
            이름
          </Table>
          <Table type="headerLeft" style={{ width: 140 }}>
            닉네임
          </Table>
          <Table type="headerLeft">포지션</Table>
          <Table type="headerLeft" style={{ width: 80 }}>
            경력
          </Table>
          <Table type="headerLeft">전화번호</Table>
          <Table type="headerLeft">환불계좌 인증</Table>
          <Table type="headerLeft" style={{ width: 180 }}>
            가입일시
          </Table>
          <Table type="headerLeft" style={{ width: 255 }}>
            메모
          </Table>
        </div>
        
        <div className="table data" onClick={() => setModal(true)}>
          <Table type="dataCenter" style={{ width: 80 }}>
            88888
          </Table>
          <Table style={{ width: 80 }}>정상</Table>
          <Table>test88</Table>
          <Table style={{ width: 120 }}>홍길동</Table>
          <Table style={{ width: 140 }}>길동홍</Table>
          <Table>프론트엔드 개발자</Table>
          <Table style={{ width: 80 }}>88년</Table>
          <Table>010-8888-8888</Table>
          <Table>인증완료</Table>
          <Table style={{ width: 180 }}>8888.88.88 88:88:88</Table>
          <Table style={{ width: 255 }}>메모입니다 메모메모</Table>
        </div>
      </TableWrap>
      <Paging page={page} items={20} count={100} setPage={handlePageChange} />
    </Container>
  );
};

export default MemberTable;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .search-count {
    color: ${color.gray6};
    font-size: 12px;
    font-weight: 400;
  }
`;

const TableWrap = styled.div`
  margin-top: 2px;
  flex: 1;

  .table {
    display: flex;
  }

  .data {
    cursor: pointer;

    &:hover {
      background-color: ${color.gray8};
    }
  }
`;
