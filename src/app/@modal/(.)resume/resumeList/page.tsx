'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Modal from '@/components/Modal/Modal';

const Page = () => {
  return (
    <Modal>
      <Container>
        <TableHeader>
          <div className="title">No.</div>
          <div className="middleTitle">지원서 이름</div>
          <div className="title">삭제</div>
        </TableHeader>
        <TableContent>
          <div className="content">
            <div className="title">1</div>
            <div className="middleTitle">고구마 만들래</div>
            <div className="delete title">삭제</div>
          </div>
          <div className="content">
            <div className="title">1</div>
            <div className="middleTitle">고구마 만들래</div>
            <div className="delete title">삭제</div>
          </div>
        </TableContent>
      </Container>
    </Modal>
  );
};

export default Page;

const Container = styled.div`
  margin: 0 30px;

  .title {
    width: 120px;
  }

  .middleTitle {
    flex: 1;
  }
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 0px;
  margin-bottom: 20px;

  border-bottom: 1px solid ${color.white};

  color: ${color.white};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .content {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 12px 0;

    border-radius: 8px;
    border: 1px solid ${color.gray8};
    background: rgba(2, 6, 13, 0.5);

    color: ${color.white};
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .content:hover {
    border-radius: 8px;
    border: 1px solid ${color.white};
    background: linear-gradient(92deg, rgba(255, 255, 255, 0.1) 38.9%, rgba(0, 0, 0, 0) 62.68%), rgba(2, 6, 13, 0.5);
  }

  .delete {
    color: ${color.error1};
    font-size: 12px;
  }
`;
