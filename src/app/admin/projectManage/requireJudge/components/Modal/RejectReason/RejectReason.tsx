import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import TextArea from '@/components/TextArea/TextArea';
import { color } from '@/styles/color';
import styled from '@emotion/styled';

//반려 사유 기입 모달
const RejectReason = ({ visible, onClose }) => {
  return (
    <>
      <Modal
        style={{
          borderRadius: 24,
          width: 560,
          height: 400,
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
          <div className="title">반려사유 기입</div>
          <TextArea style={{ height: 212 }} />
          <div className="button-wrap">
            <Button size="small" mode="secondary">
              이전
            </Button>
            <Button size="small" mode="primary">
              저장
            </Button>
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default RejectReason;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 39px 40px 32px 40px;
  height: 400px;
  box-sizing: border-box;
  .title {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 22px;
  }
  .button-wrap {
    display: flex;
    justify-content: center;
    flex: 1;
    align-items: flex-end;
    gap: 4px;
  }
`;
