'use client';

import { color } from '@/styles/color';
import styled from '@emotion/styled';
import { useState } from 'react';
import ProjectStatus from './components/ProjectStatus/ProjectStatus';
import WaitingReview from './components/WaitingReview/WaitingReview';
import Calendar from '@/components/Calendar/Calendar';
import Alert from '@/components/Alert/Alert';
import Button from '@/components/Button/Button';

const Page = () => {
  const [visible, setVisible] = useState(false);

  const handleAlert = () => {
    setVisible(true);
  };
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
            <ProjectStatus />
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
