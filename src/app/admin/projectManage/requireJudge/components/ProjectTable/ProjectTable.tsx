import PaginationComponent from '@/components/Pagination/Pagination';
import Table from '@/components/Table/Table';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import { useState } from 'react';
import RejectRecord from '../Modal/RejectRecord/RejectRecord';
import RequireRecord from '../Modal/RequireRecord/RequireRecord';

const ProjectTable = () => {
  const [rejectModal, setRejectModal] = useState(false);
  const [requireModal, setRequireModal] = useState(false);
  const [page, setPage] = useState(1);
  const items = 10;

  const data = [
    {
      no: 1,
      submitDate: '8888.88.88 88:88:88',
      status: '승인',
      approveDate: '8888.88.88 88:88:88',
      reject: '1건',
      project: '프로젝트명명명명명명명',
      start: '2023.03.01',
      end: '2023.04.25',
      member: '888명',
    },
    {
      no: 2,
      submitDate: '8888.88.88 88:88:88',
      status: '심사중',
      approveDate: '8888.88.88 88:88:88',
      reject: '-',
      project: '프로젝트명명명명명명명',
      start: '2023.03.01',
      end: '2023.04.25',
      member: '888명',
    },
    {
      no: 3,
      submitDate: '8888.88.88 88:88:88',
      status: '보증금 입금',
      approveDate: '8888.88.88 88:88:88',
      reject: '-',
      project: '프로젝트명명명명명명명',
      start: '2023.03.01',
      end: '2023.04.25',
      member: '888명',
    },
    {
      no: 4,
      submitDate: '8888.88.88 88:88:88',
      status: '대기',
      approveDate: '8888.88.88 88:88:88',
      reject: '-',
      project: '프로젝트명명명명명명명',
      start: '2023.03.01',
      end: '2023.04.25',
      member: '888명',
    },
    {
      no: 5,
      submitDate: '8888.88.88 88:88:88',
      status: '심사중',
      approveDate: '8888.88.88 88:88:88',
      reject: '1건',
      project: '프로젝트명명명명명명명',
      start: '2023.03.01',
      end: '2023.04.25',
      member: '888명',
    },
    {
      no: 6,
      submitDate: '8888.88.88 88:88:88',
      status: '반려',
      approveDate: '8888.88.88 88:88:88',
      reject: '1건',
      project: '프로젝트명명명명명명명',
      start: '2023.03.01',
      end: '2023.04.25',
      member: '888명',
    },

    {
      no: 7,
      submitDate: '8888.88.88 88:88:88',
      status: '보증금 입금',
      approveDate: '8888.88.88 88:88:88',
      reject: '-',
      project: '프로젝트명명명명명명명',
      start: '2023.03.01',
      end: '2023.04.25',
      member: '888명',
    },
  ];

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleCloseModal = () => {
    setRejectModal(false);
    setRequireModal(false);
  };

  const handleRejectModal = (item) => {
    if (item.reject !== '-') {
      //반려 이력이 있을 시에만 modal open
      setRejectModal(true);
    }
  };

  const handleRequireModal = () => {
    setRequireModal(true);
  };

  const colors = data.map((item) => {
    const status = item.status;
    let statusColor = null;

    if (status === '승인') {
      statusColor = color.secondary.positive_1;
    } else if (status === '심사중') {
      statusColor = color.brand.brandSub;
    } else if (status === '보증금 입금') {
      statusColor = color.brand.brandMain;
    } else if (status === '대기') {
      statusColor = color.gray.white;
    } else if (status === '반려') {
      statusColor = color.secondary.error_1;
    } else {
      statusColor = color.gray.white;
    }

    return statusColor;
  });

  return (
    <Container>
      <div className="search-length">검색결과: {data.length}건</div>
      <TableHeader>
        <Table type="headerCenter" style={{ width: '80px' }}>
          No.
        </Table>
        <Table type="headerLeft" style={{ width: '220px' }}>
          제출 일시
        </Table>
        <Table type="headerLeft" style={{ width: '120px' }}>
          심사 현황
        </Table>
        <Table type="headerLeft" style={{ width: '220px' }}>
          승인 일시
        </Table>
        <Table type="headerLeft" style={{ width: '80px' }}>
          반려이력
        </Table>
        <Table type="headerLeft" style={{ width: '380px' }}>
          프로젝트 명
        </Table>
        <Table type="headerLeft" style={{ width: '220px' }}>
          프로젝트 기간
        </Table>
        <Table type="headerLeft" style={{ width: '115px' }}>
          구성인원
        </Table>
        <Table type="headerLeft" style={{ width: '140px' }}>
          요구사항 열람
        </Table>
      </TableHeader>

      {data?.slice(items * (page - 1), items * (page - 1) + items).map((item, index) => (
        <TableData key={index}>
          <Table type="dataCenter" style={{ width: '80px' }}>
            {item.no}
          </Table>
          <Table style={{ width: '220px' }}>{item.submitDate}</Table>
          <Table style={{ width: '120px', color: colors[index] }}>{item.status}</Table>
          <Table style={{ width: '220px' }}>{item.approveDate}</Table>
          <Table style={{ width: '80px', cursor: item.reject === '-' ? 'default' : 'pointer' }} onClick={() => handleRejectModal(item)}>
            {item.reject}
          </Table>
          <Table style={{ width: '380px' }}>{item.project}</Table>
          <Table type="dataSubtext" style={{ width: '220px' }} subText="88일">
            {item.start} ~ {item.end}
          </Table>
          <Table style={{ width: '115px' }}>{item.member}</Table>
          <Table style={{ width: '140px', cursor: 'pointer' }} onClick={handleRequireModal}>
            상세보기
          </Table>
        </TableData>
      ))}
      <PaginationComponent activePage={page} itemsCountPerPage={items} totalItemsCount={data.length - 1} pageRangeDisplayed={5} onChange={handlePageChange} />
      <RejectRecord visible={rejectModal} onClose={handleCloseModal} />
      <RequireRecord visible={requireModal} onClose={handleCloseModal} />
    </Container>
  );
};

export default ProjectTable;

const Container = styled.div`
  .search-length {
    color: ${color.gray.gray6};
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 2px;
    margin-top: 32px;
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
