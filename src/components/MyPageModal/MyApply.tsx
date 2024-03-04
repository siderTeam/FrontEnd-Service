'use client';

import { useEffect, useState } from 'react';
import Table from '@/components/Table/Table';
import { useQuery } from '@tanstack/react-query';
import { rest } from '@/api/rest';
import { getResume } from '@/api/myPage/api';

const MyApply = () => {
  const [test, setTest] = useState(false);

  const { data } = useQuery({
    queryKey: [rest.get.resume],
    queryFn: getResume,
  });

  useEffect(() => {
    setTest(true);
  }, []);

  console.log("data", data)

  const column = [
    { id: 'No.', header: 'No.', accessorKey: 'id' },
    { id: 'name', header: '지원서 이름', accessorKey: 'name', style: { width: 1500 } },
    {
      id: '삭제',
      header: '삭제',
      cell: (data) => {
        console.log('data.getValue()', data.getValue());
        return <div>{data.getValue()}</div>;
      },
    },
  ];

  return <Table columns={column} data={data || []} />;
};

export default MyApply;
