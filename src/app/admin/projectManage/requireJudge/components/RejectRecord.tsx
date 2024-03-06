import Modal from '@/components/Modal/Modal';
import Table from '@/components/Table/Table';
import { color } from '@/styles/color';
import { ModalPageProps } from '@/types/types';
import styled from '@emotion/styled';

//반려 이력 모달
const RejectRecord = ({ visible, onClose }: ModalPageProps) => {
  const data = [
    {
      date: '8888.88.88 88:88:88',
      name: '사이드',
      reject: '반려사유',
    },
    {
      date: '8888.88.88 88:88:88',
      name: '사이드',
      reject: '반려사유',
    },
    {
      date: '8888.88.88 88:88:88',
      name: '사이드',
      reject: '반려사유',
    },
    {
      date: '8888.88.88 88:88:88',
      name: '사이드',
      reject:
        '반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유반려사유',
    },
    {
      date: '8888.88.88 88:88:88',
      name: '사이드',
      reject: '반려사유',
    },
    {
      date: '8888.88.88 88:88:88',
      name: '사이드',
      reject: '반려사유',
    },
    {
      date: '8888.88.88 88:88:88',
      name: '사이드',
      reject: '반려사유',
    },
    {
      date: '8888.88.88 88:88:88',
      name: '사이드',
      reject: '반려사유',
    },
  ];

  return (
    <>
      <Modal
        style={{
          borderRadius: 24,
          width: 560,
          height: 640,
          background: 'black',
          zIndex: 9999,
          overflow: 'hidden',
          padding: 0,
          border: '1px solid rgba(255, 255, 255, 0.60)',
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.40)',
        }}
        visible={visible}
        onClose={onClose}
      >
        <Container>
          <div className="title">반려 이력</div>
        </Container>
      </Modal>
    </>
  );
};

export default RejectRecord;

const Container = styled.div`
  padding: 39px 40px;
  .title {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 400;
  }
`;

const TableHeader = styled.div`
  display: flex;

  margin-top: 22px;
`;

const TableDate = styled.div`
  display: flex;
`;
