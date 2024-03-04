'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Table from '@/components/Table/Table';
import Profile from '@/components/Profile/Profile';
import ProjectStatus from './components/ProjectStatus/ProjectStatus';
import WaitingReview from './components/WaitingReview/WaitingReview';

const Page = () => {
  return (
    <Container>
      <div>
        <div className="box dataWrap"></div>
        <div className="box dataWrap"></div>
      </div>
      <div>
        <div className="box projectWrap">
          <ProjectStatus />
        </div>
        <div className="box projectWrap">
          <WaitingReview />
        </div>
      </div>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  margin: 20px 40px;
  display: flex;
  gap: 20px;

  .box {
    box-sizing: border-box;
    padding: 24px 30px;
    margin-bottom: 20px;

    border-radius: 16px;
    border: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
    background: var(--Fill, linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5));

    .title {
      color: ${color.white};
      font-size: 20px;
      font-weight: 500;
      line-height: 140%;
    }
  }

  .dataWrap {
    width: 625px;
    height: 333px;
  }

  .projectWrap {
    width: 931px;
    height: 484px;
    flex-shrink: 0;
  }
`;

const TableWrap = styled.div`
  margin-top: 32px;

  .table {
    display: flex;
  }
`;
