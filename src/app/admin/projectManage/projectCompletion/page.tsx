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
import { COMPLETION_LIST, PROJECT_COMPLETION_LIST_REQUEST } from '@/api/admin/projectCompletion/model';
import { getProjectCompletionList } from '@/api/admin/projectCompletion/api';

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
    queryKey: [rest.get.projectCompletionList, params],
    queryFn: ({ queryKey }) => getProjectCompletionList(queryKey[1] as PROJECT_COMPLETION_LIST_REQUEST),
  });

  const column: ColumnDef<COMPLETION_LIST>[] = [
    {
      accessorKey: 'id',
      header: 'No.',
    },
    {
      accessorKey: 'name',
      header: '프로젝트명',
    },
    {
      accessorKey: 'username',
      header: '리더정보',
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
      <h1 className="title">프로젝트 준공 심사</h1>
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

        <div className="content">
          <label>보증금 지급 현황</label>
          <div className="item">
            <SelectBox
              name="status"
              onChange={onChangeSelect}
              style={{ width: 140 }}
              options={[
                { label: '전체', value: 0 },
                { label: '지급중', value: 1 },
                { label: '대기', value: 2 },
              ]}
              value={select}
            />
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
