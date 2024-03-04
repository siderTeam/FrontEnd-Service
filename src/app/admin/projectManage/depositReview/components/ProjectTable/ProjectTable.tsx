'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Table from '@/components/Table/Table';
import Paging from '@/components/Paging/Paging';
import { useState } from 'react';
import Button from '@/components/Button/Button';
import DepositPayment from '../Modal/DepositPayment';
import PaymentStatus from '../Modal/PaymentStatus';

const ProjectTable = () => {
  const [page, setPage] = useState(1);
  const [paymentModal, setPaymentModal] = useState(false);
  const [statusModal, setStatusModal] = useState(false);

  //납부현황 모달
  const handleCloseStatusModal = () => {
    setStatusModal(false);
  };

  //보증금 납입처리 모달
  const handleClosePaymentModal = () => {
    setPaymentModal(false);
  };

  //페이지네이션
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <Container>
      <DepositPayment visible={paymentModal} onClose={handleClosePaymentModal} />
      <PaymentStatus visible={statusModal} onClose={handleCloseStatusModal} />
      <div className="middle-wrap">
        <div className="search-count">검색결과: 888건</div>
        <Button size="tiny" style={{ marginBottom: 2 }} onClick={() => setPaymentModal(true)}>
          보증금 납입처리
        </Button>
      </div>

      <TableWrap>
        <div className="table">
          <Table type="headerCenter" style={{ width: 80 }}>
            No.
          </Table>
          <Table type="headerLeft" style={{ width: 560 }}>
            프로젝트 명
          </Table>
          <Table type="headerLeft" style={{ width: 200 }}>
            납부현황
          </Table>
          <Table type="headerLeft" style={{ width: 320 }}>
            납부 기간
          </Table>
          <Table type="headerLeft" style={{ width: 415 }}>
            납부 마감일 연장
          </Table>
        </div>

        <div className="table data">
          <Table type="dataCenter" style={{ width: 80 }}>
            88888
          </Table>
          <Table style={{ width: 560 }}>고구마 프로젝트</Table>
          <Table type="dataSubtext" subText="(888/888)" style={{ width: 200 }}>
            <span className="modal-text" onClick={() => setStatusModal(true)}>
              입금완료
            </span>
          </Table>
          <Table type="dataSubtext" subText="(7일 남음)" style={{ width: 320 }}>
            8888.88.88 ~ 8888.88.88
          </Table>
          <Table style={{ width: 415 }}>연장하기</Table>
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
  }
`;
