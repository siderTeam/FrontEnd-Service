'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Modal from '@/components/Modal/Modal';
import Table from '@/components/Table/Table';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const RejectHistory = ({ visible, onClose }: ModalProps) => {
  return (
    <Modal
      style={{
        width: 560,
        height: 563,
        overflow: 'hidden',
        display: 'flex',
      }}
      visible={visible}
      onClose={onClose}
    >
      <Container>
        <div className="modal-title">반려이력</div>
        <TableWrap>
          <div className="table">
            <Table type="headerLeft">반려일시</Table>
            <Table type="headerLeft" style={{ width: '100px' }}>
              작업자
            </Table>
            <Table type="headerLeft" style={{ width: '220px' }}>
              반려사유
            </Table>
          </div>

          <div className="table">
            <Table>8888.88.88 88:88:88</Table>
            <Table style={{ width: '100px' }}>홍길동</Table>
            <Table style={{ width: '220px' }}>참여태도 불량</Table>
          </div>
        </TableWrap>
      </Container>
    </Modal>
  );
};

export default RejectHistory;

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
`;

const TableWrap = styled.div`
  flex: 1;

  .table {
    display: flex;
  }
`;
