'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { ColumnDef } from '@tanstack/react-table';
import Table from '@/components/Table/Table';
import SearchBar from '@/components/SearchBar/SearchBar';
import SelectBox from '@/components/SelectBox/SelectBox';
import Input from '@/components/Input/Input';
import { useQuery } from '@tanstack/react-query';
import { rest } from '@/api/rest';
import { getUserList } from '@/api/admin/user/api';
import { USER_LIST_REQUEST, USER_LIST_RESPONSE } from '@/api/admin/user/model';
import { useState } from 'react';
import useChangeInput from '@/hook/useChangeInput';
import useChangeSelect from '@/hook/useChangeSelect';
import { USER_SEARCH } from 'public/static/requireJudge/static';
import PaginationComponent from '@/components/Pagination/Pagination';

const initialParams = {
  page: 1,
  size: 20,
  username: '',
  name: '',
  nickname: '',
};

const Page = () => {
  const [params, setParams] = useState(initialParams);
  const { select, onChange: onChangeSelect, setSelect } = useChangeSelect(initialParams);

  const { data } = useQuery({
    queryKey: [rest.get.adminUserList, params],
    queryFn: ({ queryKey }) => getUserList(queryKey[1] as USER_LIST_REQUEST),
  });

  const column: ColumnDef<USER_LIST_RESPONSE>[] = [
    {
      accessorKey: 'id',
      header: 'No.',
    },
    {
      accessorKey: 'status',
      header: '상태',
    },
    {
      accessorKey: 'username',
      header: '아이디',
    },
    {
      accessorKey: 'name',
      header: '이름',
    },
    {
      accessorKey: 'nickname',
      header: '닉네임',
    },
    {
      accessorKey: 'position',
      header: '포지션',
    },
    {
      accessorKey: 'career',
      header: '경력',
    },
    {
      accessorKey: 'phone',
      header: '전화번호',
    },
  ];

  const handleClickSearch = () => {};

  const handleClickReset = () => {};

  return (
    <Container>
      <h1 className="title">회원목록</h1>
      <SearchBar onClickSearch={handleClickSearch} onClickReset={handleClickReset}>
        <div className="content">
          <label>검색어</label>
          <div className="item">
            <SelectBox onChange={onChangeSelect} style={{ width: 140 }} options={[{ label: '프로젝트명', value: 1 }]} value={1} />
          </div>
        </div>

        <div className="content">
          <label>심사현황</label>
          <div className="item">
            <SelectBox name="status" onChange={onChangeSelect} style={{ width: 140 }} options={USER_SEARCH} value={select} />
          </div>
        </div>
      </SearchBar>

      <div className="tableWrapper">
        <span className="totalCount">검색결과: {data?.length}</span>
        <Table columns={column} data={[]} />
      </div>
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
