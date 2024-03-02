import PaginationComponent from '@/components/Pagination/Pagination';
import Table from '@/components/Table/Table';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import { useState } from 'react';

const ProjectTable = () => {
  const [rejectModal, setRejectModal] = useState(false);
  const [requireModal, setRequireModal] = useState(false);
  const [page, setPage] = useState(1);
  const items = 10;

  const data = [
    {
      no: 1,
      project: '프로젝트 명 입니다.',
      start: '8888.88.88',
      end: '9999.99.99',
      deadline: '8888.88.88',
      score: '999점',
      completionDate: '9999.99.99',
      depositStatus: '대기',
    },
    {
      no: 1,
      project: '프로젝트 명 입니다.',
      start: '8888.88.88',
      end: '9999.99.99',
      deadline: '8888.88.88',
      score: '999점',
      completionDate: '9999.99.99',
      depositStatus: '지급중',
    },
    {
      no: 1,
      project: '프로젝트 명 입니다.',
      start: '8888.88.88',
      end: '9999.99.99',
      deadline: '8888.88.88',
      score: '999점',
      completionDate: '9999.99.99',
      depositStatus: '지급완료',
    },
    {
      no: 1,
      project: '프로젝트 명 입니다.',
      start: '8888.88.88',
      end: '9999.99.99',
      deadline: '8888.88.88',
      score: '999점',
      completionDate: '9999.99.99',
      depositStatus: '대기',
    },
    {
      no: 1,
      project: '프로젝트 명 입니다.',
      start: '8888.88.88',
      end: '9999.99.99',
      deadline: '8888.88.88',
      score: '999점',
      completionDate: '9999.99.99',
      depositStatus: '지급중',
    },
    {
      no: 1,
      project: '프로젝트 명 입니다.',
      start: '8888.88.88',
      end: '9999.99.99',
      deadline: '8888.88.88',
      score: '999점',
      completionDate: '9999.99.99',
      depositStatus: '지급완료',
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
    const status = item.depositStatus;
    let statusColor = null;

    if (status === '지급중') {
      statusColor = color.secondary.positive_1;
    } else if (status === '지급완료') {
      statusColor = color.brand.brandMain;
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
        <Table type="headerLeft" style={{ width: '515px' }}>
          프로젝트 명
        </Table>
        <Table type="headerLeft" style={{ width: '220px' }}>
          프로젝트 기간
        </Table>
        <Table type="headerLeft" style={{ width: '140px' }}>
          준공 제출일
        </Table>
        <Table type="headerLeft" style={{ width: '120px' }}>
          산출물 확인
        </Table>
        <Table type="headerLeft" style={{ width: '100px' }}>
          총점
        </Table>
        <Table type="headerLeft" style={{ width: '240px' }}>
          심사 완료일시
        </Table>
        <Table type="headerLeft" style={{ width: '160px' }}>
          보증금 지급 현황
        </Table>
      </TableHeader>

      {data?.slice(items * (page - 1), items * (page - 1) + items).map((item, index) => (
        <TableData key={index}>
          <Table type="dataCenter" style={{ width: '80px' }}>
            {item.no}
          </Table>
          <Table style={{ width: '515px' }}>{item.project}</Table>
          <Table style={{ width: '220px' }} subText="(88일 남음)">
            {item.start} ~ {item.end}
          </Table>
          <Table style={{ width: '140px' }} subText="(88일 남음)">
            {item.deadline}
          </Table>
          <Table style={{ width: '120px', cursor: 'pointer' }}>상세보기</Table>
          <Table style={{ width: '100px' }}>{item.score}</Table>
          <Table style={{ width: '240px' }}>{item.completionDate}</Table>
          <Table style={{ width: '160px', color: colors[index] }} subText="(888/888)">
            {item.depositStatus}
          </Table>
        </TableData>
      ))}
      <PaginationComponent activePage={page} itemsCountPerPage={items} totalItemsCount={data.length - 1} pageRangeDisplayed={5} onChange={handlePageChange} />
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
