'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { ColumnDef } from '@tanstack/react-table';
import Table from '@/components/Table/Table';
import SearchBar from '@/components/SearchBar/SearchBar';
import SelectBox from '@/components/SelectBox/SelectBox';
import Input from '@/components/Input/Input';
import { rest } from '@/api/rest';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const initialParams = {
  page: 1,
  perPage: 50,
  status: 33,
  name: '',
  nickname: '',
};

const Page = () => {
  const [params, setParams] = useState(initialParams);
  // const { data } = useQuery({
  //   queryKey: [rest.get.depositList, params],
  //   queryFn: getDepositList,
  // });

  // const column: ColumnDef<DEPOSIT_LIST_REQUEST>[] = [
  //   {
  //     accessorKey: 'id',
  //     header: 'No.',
  //   },
  //   {
  //     accessorKey: 'name',
  //     header: '이름',
  //   },
  //   {
  //     accessorKey: 'week',
  //     header: '날짜',
  //   },
  // ];

  const handleClickSearch = () => {};

  const handleClickReset = () => {
    setParams(initialParams);
  };

  const onChange = () => {};

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
      {/* <Table columns={column} data={data || []} /> */}
      {/* <Pagination activePage={1} itemCountPerPage={50} totalItemCount={27} pageRangeDisplayed={10} onChange={onChange} /> */}
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
