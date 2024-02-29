import PaginationComponent from '@/components/Pagination/Pagination';
import Table from '@/components/Table/Table';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import MemberDetail from '../Pages/MemberDetail/MemberDetail';

const MemberTable = () => {
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);
  const items = 10;

  const data = [
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '대기',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '인증 완료',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '인증 완료',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '대기',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '인증 완료',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '인증 완료',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '인증 완료',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '인증 완료',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '대기',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '대기',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '인증 완료',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '인증 완료',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '인증 완료',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '인증 완료',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '인증 완료',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '인증 완료',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '인증 완료',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
    {
      no: 12345,
      status: '정상',
      username: 'test1',
      name: '사이드',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      year: '10년',
      phone: '010-8888-8888',
      account: '인증 완료',
      joinDate: '0000.00.00 00:00:00',
      memo: '사이드고사이드고사이드고사이드고사이드고',
    },
  ];

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleMemberDetail = () => {
    setModal(true);
  };
  return (
    <Container>
      <div className="search-length">검색결과: {data.length}건</div>
      <TableHeader>
        <Table type="headerCenter" style={{ width: '80px' }}>
          No.
        </Table>
        <Table type="headerLeft" style={{ width: '80px' }}>
          상태
        </Table>
        <Table type="headerLeft" style={{ width: '160px' }}>
          아이디
        </Table>
        <Table type="headerLeft" style={{ width: '120px' }}>
          이름
        </Table>
        <Table type="headerLeft" style={{ width: '140px' }}>
          닉네임
        </Table>
        <Table type="headerLeft" style={{ width: '160px' }}>
          포지션
        </Table>
        <Table type="headerLeft" style={{ width: '80px' }}>
          경력
        </Table>
        <Table type="headerLeft" style={{ width: '160px' }}>
          전화번호
        </Table>
        <Table type="headerLeft" style={{ width: '160px' }}>
          환불계좌 인증
        </Table>
        <Table type="headerLeft" style={{ width: '180px' }}>
          가입일시
        </Table>
        <Table type="headerLeft" style={{ width: '255px' }}>
          메모
        </Table>
      </TableHeader>

      {data?.slice(items * (page - 1), items * (page - 1) + items).map((item) => (
        <TableData onClick={handleMemberDetail}>
          <Table type="dataCenter" style={{ width: '80px' }}>
            {item.no}
          </Table>
          <Table style={{ width: '80px' }}>{item.status}</Table>
          <Table style={{ width: '160px' }}>{item.username}</Table>
          <Table style={{ width: '120px' }}>{item.name}</Table>
          <Table style={{ width: '140px' }}>{item.nickname}</Table>
          <Table style={{ width: '160px' }}>{item.position}</Table>
          <Table style={{ width: '80px' }}>{item.year}</Table>
          <Table style={{ width: '160px' }}>{item.phone}</Table>
          <Table style={{ width: '160px', color: item.account === '인증 완료' ? color.secondary.positive_1 : color.secondary.error_1 }}>{item.account}</Table>
          <Table style={{ width: '180px' }}>{item.joinDate}</Table>
          <Table style={{ width: '255px' }}>{item.memo}</Table>
        </TableData>
      ))}
      <PaginationComponent activePage={page} itemsCountPerPage={items} totalItemsCount={data.length - 1} pageRangeDisplayed={5} onChange={handlePageChange} />
      <MemberDetail visible={modal} onClose={handleCloseModal} />
    </Container>
  );
};

export default MemberTable;

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

  cursor: pointer;

  &:hover {
    background-color: ${color.gray.gray8};
    transition: 0.1s;
  }
`;
