'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { ColumnDef } from '@tanstack/react-table';
import Table from '@/components/Table/Table';
import SearchBar from '@/components/SearchBar/SearchBar';
import SelectBox from '@/components/SelectBox/SelectBox';
import Input from '@/components/Input/Input';

interface ResponseDataType {
  id: number;
  name: string;
  date: string;
}

const Page = () => {
  const mockData = [
    {
      id: 1,
      name: '테이블 예시',
      date: '2023-12-11',
    },
    {
      id: 2,
      name: '테이블 예시',
      date: '2023-12-11',
    },
    {
      id: 3,
      name: '테이블 예시',
      date: '2023-12-11',
    },
    {
      id: 4,
      name: '테이블 예시',
      date: '2023-12-11',
    },
  ];

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
  ];

  const handleClickSearch = () => {};

  const handleClickReset = () => {};

  return (
    <Container>
      <h1 className="title">보증금 반환</h1>
      <SearchBar onClickSearch={handleClickSearch} onClickReset={handleClickReset}>
        <div className="content">
          <label>검색어</label>
          <div className="item">
            {/* <SelectBox options={[{ label: '프로젝트명', value: 1 }]} /> */}
            <Input size="small" style={{ width: 434 }} />
          </div>
        </div>

        <div className="content">
          <label>심사현황</label>
          <div className="item">
            {/* <SelectBox options={[{ label: '프로젝트명', value: 1 }]} /> */}
          </div>
        </div>

        <div className="content">
          <label>보증금 지급 현황</label>
          <div className="item">
            {/* <SelectBox options={[{ label: '프로젝트명', value: 1 }]} /> */}
          </div>
        </div>
      </SearchBar>
      <Table columns={column} data={mockData} />
    </Container>
  );
};

export default Page;

const Container = styled.div`
  .title {
    margin-bottom: 15px;
    color: ${color.brand.brandMain};
    font-size: 24px;
    font-weight: 700;
  }
`;
