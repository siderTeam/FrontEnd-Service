'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Table from '@/components/Table/Table';
import Paging from '@/components/Paging/Paging';
import { useState } from 'react';
import RejectHistory from '../Modal/RejectHistory';
import RequireDetail from '../Modal/RequireDetail';

const ProjectTable = () => {
  const [page, setPage] = useState(1);
  const [historyModal, setHistoryModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);

  //반려이력 모달
  const handleCloseHistoryModal = () => {
    setHistoryModal(false);
  };

  //요구사항 상세 모달
  const handleCloseDetailModal = () => {
    setDetailModal(false);
  };

  //페이지네이션
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <Container>
      <RejectHistory visible={historyModal} onClose={handleCloseHistoryModal} />
      <RequireDetail visible={detailModal} onClose={handleCloseDetailModal} />
      <div className="search-count">검색결과: 888건</div>
      <TableWrap>
        <div className="table">
          <Table type="headerCenter" style={{ width: 80 }}>
            No.
          </Table>
          <Table type="headerLeft" style={{ width: 220 }}>
            제출 일시
          </Table>
          <Table type="headerLeft" style={{ width: 120 }}>
            심사현황
          </Table>
          <Table type="headerLeft" style={{ width: 220 }}>
            승인 일시
          </Table>
          <Table type="headerLeft" style={{ width: 80 }}>
            반려이력
          </Table>
          <Table type="headerLeft" style={{ width: 380 }}>
            프로젝트 명
          </Table>
          <Table type="headerLeft" style={{ width: 220 }}>
            프로젝트 기간
          </Table>
          <Table type="headerLeft" style={{ width: 115 }}>
            구성인원
          </Table>
          <Table type="headerLeft" style={{ width: 140 }}>
            요구사항 열람
          </Table>
        </div>

        <div className="table data">
          <Table type="dataCenter" style={{ width: 80 }}>
            88888
          </Table>
          <Table style={{ width: 220 }}>8888.88.88 88:88:88</Table>
          <Table style={{ width: 120 }}>심사중</Table>
          <Table style={{ width: 220 }}>-</Table>
          <Table style={{ width: 80 }}>
            <span className="modal-text" onClick={() => setHistoryModal(true)}>
              1건
            </span>
          </Table>
          <Table style={{ width: 380 }}>고구마 프로젝트</Table>
          <Table type="dataSubtext" subText="(888일)" style={{ width: 220 }}>
            8888.88.88 ~ 8888.88.88
          </Table>
          <Table style={{ width: 115 }}>888명</Table>
          <Table style={{ width: 140 }}>
            <span className="modal-text" onClick={() => setDetailModal(true)}>
              상세보기
            </span>
          </Table>
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
