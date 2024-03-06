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
import PaginationComponent from '@/components/Pagination/Pagination';
import useChangeInput from '@/hook/useChangeInput';
import useChangeSelect from '@/hook/useChangeSelect';
import { PROJECT_REQUIRE_JUDGE_OPTION } from 'public/static/requireJudge/static';
import { getAuditList } from '@/api/admin/requireJudege/api';
import { AUDIT_LIST, AUDIT_LIST_REQUEST } from '@/api/admin/requireJudege/model';

const initialParams = {
  page: 1,
  perPage: 20,
  status: null,
  name: '',
};

const Page = () => {
  const [params, setParams] = useState(initialParams);
  const { input, onChange, setInput } = useChangeInput(initialParams.name);
  const { select, onChange: onChangeSelect, setSelect } = useChangeSelect(initialParams.status);

  const { data } = useQuery({
    queryKey: [rest.get.auditList, params],
    queryFn: ({ queryKey }) => getAuditList(queryKey[1] as AUDIT_LIST_REQUEST),
  });

  const column: ColumnDef<AUDIT_LIST>[] = [
    {
      accessorKey: 'id',
      header: 'No.',
    },
    {
      accessorKey: 'name',
      header: '이름',
    },
    {
      accessorKey: 'week',
      header: '날짜',
    },
  ];

  const handleClickReset = () => {
    setParams({
      ...initialParams,
      page: params.page,
    });
    setInput(initialParams.name);
    setSelect(initialParams.status);
  };

  const handleClickSearch = () => {
    setParams({
      ...params,
      name: input,
      status: select,
    });
  };

  const onChangePage = (e: number) => {
    setParams({
      ...params,
      page: e,
    });
  };

  return (
    <Container>
      <h1 className="title">요구사항 심사</h1>
      <SearchBar onClickSearch={handleClickSearch} onClickReset={handleClickReset}>
        <div className="content">
          <label>검색어</label>
          <div className="item">
            <SelectBox onChange={onChangeSelect} style={{ width: 140 }} options={[{ label: '프로젝트명', value: 1 }]} value={1} />
            <Input onChange={onChange} value={input} size="small" style={{ width: 434 }} />
          </div>
        </div>

        <div className="content">
          <label>심사현황</label>
          <div className="item">
            <SelectBox name="status" onChange={onChangeSelect} style={{ width: 140 }} options={PROJECT_REQUIRE_JUDGE_OPTION} value={select} />
          </div>
        </div>
      </SearchBar>

      <div className="tableWrapper">
        <span className="totalCount">검색결과: {data?.dataList?.length}</span>
        <Table columns={column} data={data?.dataList || []} />
        <PaginationComponent
          activePage={params.page}
          itemsCountPerPage={20}
          totalItemsCount={data?.totalCount || 0}
          pageRangeDisplayed={10}
          onChange={onChangePage}
        />
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

  .tableWrapper {
    display: flex;
    gap: 2px;
    flex-direction: column;
    margin-top: 32px;

    .totalCount {
      color: ${color.gray.gray6};
      font-size: 12px;
    }
  }
`;
