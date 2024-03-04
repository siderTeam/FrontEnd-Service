'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Modal from '@/components/Modal/Modal';
import Table from '@/components/Table/Table';
import Button from '@/components/Button/Button';
import Image from 'next/image';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const RefundStatus = ({ visible, onClose }: ModalProps) => {
  return (
    <Modal
      style={{
        width: 1080,
        height: 659,
        overflow: 'hidden',
        display: 'flex',
      }}
      visible={visible}
      onClose={onClose}
    >
      <Container>
        <div className="modal-title">환불 현황</div>
        <Wrap>
          <div className="top subTitle">프로젝트 명</div>
          <div className="top">고구마 프로젝트</div>
          <div className="top borderLeft subTitle">구성 인원</div>
          <div className="top">88명</div>
          <div className="subTitle">보증금 지급액</div>
          <div>888,888,888원 (-88%)</div>
          <div className="borderLeft subTitle">지급 상태</div>
          <div>지급중 (888/888)</div>
        </Wrap>
        <TableWrap>
          <div className="table">
            <Table type="headerLeft" style={{ width: '100px' }}>
              이름
            </Table>
            <Table type="headerLeft" style={{ width: '192px' }}>
              포지션
            </Table>
            <Table type="headerLeft" style={{ width: '140px' }}>
              전화번호
            </Table>
            <Table type="headerLeft" style={{ width: '240px' }}>
              계좌번호
            </Table>
            <Table type="headerLeft" style={{ width: '140px' }}>
              지급상태
            </Table>
            <Table type="headerLeft" style={{ width: '188px' }}>
              지급일시
            </Table>
          </div>
          <div className="table">
            <Table style={{ width: '100px' }}>
              홍길동
              <Image src={'/images/icons/star_fill_green.svg'} alt="star" width={12} height={12} style={{ marginLeft: '8px' }} />
            </Table>
            <Table style={{ width: '192px' }}>프론트엔드 개발자</Table>
            <Table style={{ width: '140px' }}>010-8888-8888</Table>
            <Table style={{ width: '240px' }}>카카오) 8888-8888-8888-8888</Table>
            <Table style={{ width: '140px' }}>지급완료</Table>
            <Table style={{ width: '188px' }}>8888.88.88 88:88:88</Table>
          </div>
        </TableWrap>
        <div className="button">
          <Button mode="secondary">이전</Button>
          <Button>저장</Button>
        </div>
      </Container>
    </Modal>
  );
};

export default RefundStatus;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 39px 40px;

  .modal-title {
    color: ${color.white};
    font-size: 16px;
    font-weight: 400;

    margin-bottom: 22px;
  }

  .button {
    display: flex;
    justify-content: center;
    gap: 4px;
  }
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 120px 380px 120px 380px;
  grid-template-rows: 40px 40px;

  width: 1000px;
  align-items: center;
  margin-bottom: 32px;

  color: ${color.white};
  font-size: 14px;
  font-weight: 400;

  border-radius: 8px;
  border: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  background: var(--Fill, linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5));

  div {
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 11px 10px 9px 10px;
  }

  .top {
    border-bottom: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  }

  .subTitle {
    text-align: center;
    border-right: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  }
  .borderLeft {
    border-left: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  }
`;

const TableWrap = styled.div`
  flex: 1;
  margin-top: 2px;

  .table {
    display: flex;
  }
`;
