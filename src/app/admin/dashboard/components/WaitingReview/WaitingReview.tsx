'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Table from '@/components/Table/Table';
import Profile from '@/components/Profile/Profile';

const WaitingReview = () => {
  return (
    <Container>
      <div className="title">심사 대기 프로젝트</div>
      <TableWrap>
        <div className="table">
          <Table type="dataCenter" style={{ width: 100 }}>
            No.
          </Table>
          <Table style={{ width: 281 }}>프로젝트 명</Table>
          <Table style={{ width: 220 }}>신청자</Table>
          <Table style={{ width: 140 }}>보증금</Table>
          <Table style={{ width: 130 }}>상태</Table>
        </div>
        <div className="table">
          <Table type="dataCenter" style={{ width: 100 }}>
            88888
          </Table>
          <Table style={{ width: 281 }}>고구마 프로젝트</Table>
          <Table style={{ width: 220 }}>
            <Profile />
          </Table>
          <Table style={{ width: 140 }}>88만원</Table>
          <Table style={{ width: 130 }}>모집중</Table>
        </div>
      </TableWrap>
    </Container>
  );
};

export default WaitingReview;

const Container = styled.div`
  .title {
    color: ${color.white};
    font-size: 20px;
    font-weight: 500;
    line-height: 140%;
  }
`;

const TableWrap = styled.div`
  margin-top: 32px;

  .table {
    display: flex;
  }

  .project {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
