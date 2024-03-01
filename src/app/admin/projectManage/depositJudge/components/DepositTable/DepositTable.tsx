import Button from '@/components/Button/Button';
import PaginationComponent from '@/components/Pagination/Pagination';
import Table from '@/components/Table/Table';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import { useState } from 'react';
import DepositPay from '../Modal/DepositPay/DepositPay';
import PayStatus from '../Modal/PayStatus/PayStatus';

const DepositTable = () => {
  const [depositPayModal, setDepositPayModal] = useState(false);
  const [payStatusModal, setPayStatusModal] = useState(false);
  const [page, setPage] = useState(1);
  const items = 10;
  const data = [
    {
      no: 1,
      project: '프로젝트명입니다.',
      payStatus: '입금 완료',
      payStartDate: '8888.88.88',
      payEndDate: '9999.99.99',
    },
    {
      no: 1,
      project: '프로젝트명입니다.',
      payStatus: '입금 대기',
      payStartDate: '8888.88.88',
      payEndDate: '9999.99.99',
    },
    {
      no: 1,
      project: '프로젝트명입니다.',
      payStatus: '입금 대기',
      payStartDate: '8888.88.88',
      payEndDate: '9999.99.99',
    },
    {
      no: 1,
      project: '프로젝트명입니다.',
      payStatus: '입금 완료',
      payStartDate: '8888.88.88',
      payEndDate: '9999.99.99',
    },
    {
      no: 1,
      project: '프로젝트명입니다.',
      payStatus: '입금 진행 중',
      payStartDate: '8888.88.88',
      payEndDate: '9999.99.99',
    },
  ];

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleCloseModal = () => {
    setDepositPayModal(false);
    setPayStatusModal(false);
  };

  const handleDepositPayModal = () => {
    setDepositPayModal(true);
  };

  const handlePayStatusModal = () => {
    setPayStatusModal(true);
  };

  const colors = data.map((item) => {
    const status = item.payStatus;
    let statusColor = null;

    if (status === '입금 완료') {
      statusColor = color.brand.brandMain;
    } else if (status === '입금 진행 중') {
      statusColor = color.secondary.positive_1;
    } else {
      statusColor = color.gray.white;
    }

    return statusColor;
  });

  return (
    <Container>
      <div className="wrap">
        <div className="search-length">검색결과: 444건</div>
        <Button mode="primary" size="tiny" onClick={handleDepositPayModal}>
          보증금 납입 처리
        </Button>
      </div>

      <TableHeader>
        <Table type="headerCenter" style={{ width: '80px' }}>
          No.
        </Table>
        <Table type="headerLeft" style={{ width: '560px' }}>
          프로젝트 명
        </Table>
        <Table type="headerLeft" style={{ width: '200px' }}>
          납부현황
        </Table>
        <Table type="headerLeft" style={{ width: '320px' }}>
          납부 기간
        </Table>
        <Table type="headerLeft" style={{ width: '415px' }}>
          납부 마감일 연장
        </Table>
      </TableHeader>

      {data.map((item, index) => (
        <TableData key={index}>
          <Table type="dataCenter" style={{ width: '80px' }}>
            {item.no}
          </Table>
          <Table style={{ width: '560px' }}>{item.project}</Table>
          <Table style={{ width: '200px', color: colors[index], cursor: 'pointer' }} subText="(888/888)" onClick={handlePayStatusModal}>
            {item.payStatus}
          </Table>
          <Table style={{ width: '320px' }} subText="{7일 남음)">
            {item.payStartDate} ~ {item.payEndDate}
          </Table>
          <Table style={{ width: '415px' }}>연장하기</Table>
        </TableData>
      ))}
      <PaginationComponent activePage={page} itemsCountPerPage={items} totalItemsCount={data.length - 1} pageRangeDisplayed={5} onChange={handlePageChange} />
      <DepositPay visible={depositPayModal} onClose={handleCloseModal} />
      <PayStatus visible={payStatusModal} onClose={handleCloseModal} />
    </Container>
  );
};

export default DepositTable;

const Container = styled.div`
  .wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
    margin-top: 40px;
    align-items: flex-end;
  }
  .search-length {
    color: ${color.gray.gray6};
    font-size: 12px;
    font-weight: 400;
  }
`;

const TableHeader = styled.div`
  display: flex;
`;

const TableData = styled.div`
  display: flex;

  &:hover {
    background-color: ${color.gray.gray8};
    transition: 0.1s;
  }
`;
