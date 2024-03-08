import styled from '@emotion/styled';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { ModalPageProps } from '@/types/types';
import { color } from '@/styles/color';
import Radio from '../Radio/Radio';
import Checkbox from '../Checkbox/Checkbox';

const PositionModal = ({ visible, onClose }: ModalPageProps) => {
  return (
    <>
      <Modal
        style={{
          borderRadius: 24,
          width: 400,
          height: 571,
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
          <div className="title">포지션</div>
          <div className="position-wrap">
            <div className="position">
              <Checkbox />
              기획자
            </div>
            <div className="position">
              <Checkbox />
              디자이너
            </div>

            <div className="position">
              <Checkbox />
              백엔드 개발자
            </div>

            <div className="position">
              <Checkbox />
              프론트엔드 개발자
            </div>

            <div className="position">
              <Checkbox />
              DB 엔지니어
            </div>

            <div className="position">
              <Checkbox />
              서버/인프라 엔지니어
            </div>

            <div className="position">
              <Checkbox />
              IOS 개발자
            </div>

            <div className="position">
              <Checkbox />
              안드로이드 개발자
            </div>
          </div>
          <div className="button-wrap">
            <Button size="medium" variant="primary">
              선택
            </Button>
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default PositionModal;

const Container = styled.div`
  padding: 60px 70px 32px 70px;
  height: 571px;
  box-sizing: border-box;

  .title {
    color: ${color.gray.white};
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 25px;
  }
  .position-wrap {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
  }
  .position {
    display: flex;
    gap: 16px;

    color: ${color.gray.white};
    font-size: 24px;
    font-weight: 400;
  }
  .button-wrap {
    display: flex;
    justify-content: center;
  }
`;
