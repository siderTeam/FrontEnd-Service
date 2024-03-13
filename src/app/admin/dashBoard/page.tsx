'use client';

import { color } from '@/styles/color';
import styled from '@emotion/styled';
import { useState } from 'react';
import ProjectStatus from './components/ProjectStatus';
import WaitingReview from './components/WaitingReview';
import Calendar from '@/components/Calendar/DateRangePicker';
import Alert from '@/components/Alert/Alert';
import Button from '@/components/Button/Button';
import Table from '@/components/Table/Table';
import { ColumnDef } from '@tanstack/react-table';

interface imsiType {
  number: number;
  name: string;
  deposit: string;
  status: string;
}

const Page = () => {
  const [visible, setVisible] = useState(false);

  const handleAlert = () => {
    setVisible(true);
  };

  const resumeData = [
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집중',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집중',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집완료',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집중',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집완료',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집완료',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집중',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',

      deposit: '88만원',
      status: '모집완료',
    },
    {
      number: 1,
      name: '프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트프로젝트',
      deposit: '88만원',
      status: '모집중',
      
    },
  ];

  const column: ColumnDef<imsiType>[] = [
    { id: 'No.', header: 'No.', accessorKey: 'number', size: 40 },
    { id: 'name', header: '프로젝트 명', accessorKey: 'name', size: 300 },
    { id: 'deposit', header: '결제 일자', accessorKey: 'deposit'},
    { id: 'status', header: '결제 금액', accessorKey: 'name' },
  ];

  return (
    <Container>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="graph-wrap">전체 회원 수</div>
          <div className="graph-wrap">금일 방문자 수</div>
        </div>

        <Calendar />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="list-wrap">
            <Table columns={column} data={resumeData} />
          </div>
          <div className="list-wrap">
            <WaitingReview />
          </div>
        </div>
      </div>

      <button onClick={handleAlert}>test</button>
      <Alert visible={visible} text="메인 텍스트" subText="서브 텍스트">
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button size="small" variant="secondary">
            text
          </Button>
          <Button size="small" variant="primary">
            text
          </Button>
        </div>
      </Alert>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  margin-top: 20px;

  .graph-wrap {
    width: 625px;
    height: 333px;

    border-radius: 16px;
    border: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
    background: var(--Fill, linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5));
  }

  .list-wrap {
    width: 931px;
    height: 484px;

    border-radius: 16px;
    border: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
    background: var(--Fill, linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5));

    padding: 20px 30px;

    overflow: hidden;
  }
`;
