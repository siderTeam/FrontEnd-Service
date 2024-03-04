'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Table from '@/components/Table/Table';
import Paging from '@/components/Paging/Paging';
import { useState } from 'react';
import ProjectEvaluate from '../Modal/ProjectEvaluate';

const ProjectTable = () => {
  const [page, setPage] = useState(1);
  const [projectModal, setProjectModal] = useState(false);

  //프로젝트 준공 평가 모달
  const handleCloseProjectModal = () => {
    setProjectModal(false);
  };

  //페이지네이션
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <Container>
      <ProjectEvaluate visible={projectModal} onClose={handleCloseProjectModal} />
      <div className="search-count">검색결과: 888건</div>
      <TableWrap>
        <div className="table">
          <Table type="headerCenter" style={{ width: 80 }}>
            No.
          </Table>
          <Table type="headerLeft" style={{ width: 415 }}>
            프로젝트 명
          </Table>
          <Table type="headerLeft" style={{ width: 80 }}>
            리더정보
          </Table>
          <Table type="headerLeft" style={{ width: 200 }}>
            프로젝트 기간
          </Table>
          <Table type="headerLeft" style={{ width: 140 }}>
            산출물 메일 수신일
          </Table>
          <Table type="headerLeft" style={{ width: 120 }}>
            요구사항 확인
          </Table>
          <Table type="headerLeft" style={{ width: 100 }}>
            심사 현황
          </Table>
          <Table type="headerLeft" style={{ width: 180 }}>
            심사 완료일시
          </Table>
          <Table type="headerLeft" style={{ width: 100 }}>
            총점
          </Table>
          <Table type="headerLeft" style={{ width: 160 }}>
            1인 반환 보증금
          </Table>
        </div>

        <div className="table data">
          <Table type="dataCenter" style={{ width: 80 }}>
            88888
          </Table>
          <Table style={{ width: 415 }}>고구마 프로젝트</Table>
          <Table style={{ width: 80 }}>홍길동</Table>
          <Table type="dataSubtext" subText="(7일 남음)" style={{ width: 200 }}>
            8888.88.88 ~ 8888.88.88
          </Table>
          <Table type="dataSubtext" subText="(888일 남음)" style={{ width: 140 }}>
            8888.88.88
          </Table>
          <Table style={{ width: 120 }}>
            <span className="modal-text" onClick={() => setProjectModal(true)}>
              상세보기
            </span>
          </Table>
          <Table style={{ width: 100 }}>심사중</Table>
          <Table style={{ width: 180 }}>8888.88.88 8888:88:88</Table>
          <Table type="dataSubtext" subText="(-88%)" style={{ width: 100 }}>
            888점
          </Table>
          <Table type="dataSubtext" subText="(888,888원)" style={{ width: 160 }}>
            888,888원
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
