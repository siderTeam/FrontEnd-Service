"use client";

import styled from "@emotion/styled";
import { color } from "@/Styles/CommonStyles";
import Modal from "@/component/Modal/Modal";

const Page = () => {
  return (
    <Modal>
      <Container>
        <TableHeader>
          <div className="title">No.</div>
          <div className="secondTitle">프로젝트 명</div>
          <div className="middleTitle">프로젝트 진행기간</div>
          <div className="title">환급 여부</div>
        </TableHeader>
        <TableContent>
          <div className="content">
            <div className="title">1</div>
            <div className="secondTitle">고구마 만들래</div>
            <div className="middleTitle">8888.88.88~8888.88.88</div>
            <div className="title">심사중</div>
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

  .secondTitle {
    width: 280px;
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
    background: linear-gradient(
        92deg,
        rgba(255, 255, 255, 0.1) 38.9%,
        rgba(0, 0, 0, 0) 62.68%
      ),
      rgba(2, 6, 13, 0.5);
  }

  .delete {
    color: ${color.error1};
    font-size: 12px;
  }
`;
