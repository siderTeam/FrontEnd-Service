'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { ColumnDef } from '@tanstack/react-table';
import Table from '@/components/Table/Table';

interface ResponseDataType {
  id: number,
  name: string;
  date: string;
}

const Page = () => {

  const mockData = [
    {
      id: 1,
      name: '테이블 예시',
      date: '2023-12-11'
    },
    {
      id: 2,
      name: '테이블 예시',
      date: '2023-12-11'
    },
    {
      id: 3,
      name: '테이블 예시',
      date: '2023-12-11'
    },
    {
      id: 4,
      name: '테이블 예시',
      date: '2023-12-11'
    },
  ]

  const column: ColumnDef<ResponseDataType>[] = [
    {
      accessorKey: 'id',
      header: 'No.',
    },
    {
      accessorKey: 'name',
      header: '이름',
    },
    {
      accessorKey: 'date',
      header: '날짜',
    },
  ]

  return (
    <Container>
      <h1 className="title">보증금 반환</h1>
      <Table columns={column} data={mockData} />
    </Container>
  );
};

export default Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px;

  .title {
    margin-bottom: 15px;

    color: ${color.brand.brandMain};
    font-size: 24px;
    font-weight: 700;
  }
`;
