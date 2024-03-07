import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import SelectBox from '@/components/SelectBox/SelectBox';
import TextArea from '@/components/TextArea/TextArea';
import { color } from '@/styles/color';
import styled from '@emotion/styled';

interface MyPageProps {
  visible: boolean;
  onClose: () => void;
}

const ApplyModal = ({ visible, onClose }: MyPageProps) => {
  return (
    <Modal
      style={{
        borderRadius: 24,
        width: '420px',
        height: '562px',
        background: 'black',
        zIndex: 9999,
        overflow: 'hidden',
        padding: 0,
        border: '1px solid rgba(255, 255, 255, 0.60)',
      }}
      visible={visible}
      onClose={onClose}
    >
      <Container>
        <div className="apply">지원하기</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="position">
            <div className="apply-title">포지션</div>
            <SelectBox size="small" selectedType="disabled" options={[]} style={{ width: '100%' }} />
          </div>
          <div className="skill">
            <div className="apply-title">스킬</div>
            <SelectBox size="small" selectedType="disabled" options={[]} style={{ width: '100%' }} />
          </div>
          <div style={{ marginBottom: '32px' }}>
            <div className="apply-title">지원 사유</div>
            <TextArea size="full" color="primary" placeholder="지원 사유를 입력하세요." style={{ width: '100%', height: '180px' }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button size="small" mode="primary">
            제출
          </Button>
        </div>
      </Container>
    </Modal>
  );
};

export default ApplyModal;

const Container = styled.div`
  height: 562px;
  padding: 60px 70px 32px 70px;

  box-sizing: border-box;
  .apply {
    color: ${color.gray.white};
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .apply-title {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
  }
`;
