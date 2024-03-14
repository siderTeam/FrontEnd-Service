import styled from '@emotion/styled';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { ModalPageProps } from '@/types/types';
import { color } from '@/styles/color';
import Checkbox from '../Checkbox/Checkbox';
import { useState } from 'react';
import { POSITION_CODE_ARRAY } from 'public/static/requireJudge/static';
import { OPTION_TYPE } from '../SelectBox/SelectBox';

const PositionModal = ({ visible, onClose, onClickChoice }: ModalPageProps & { onClickChoice: (callback: OPTION_TYPE[], type: 'skill') => void }) => {
  const [checked, setChecked] = useState<OPTION_TYPE[]>([]);

  const handleChangeCheck = (e: any, position: OPTION_TYPE) => {
    setChecked((prev) => {
      const checkedValue = prev.map((item) => item.value);

      if (checkedValue.includes(position.value)) {
        return prev.filter((item) => item.value !== position.value);
      } else {
        return prev.concat(position);
      }
    });
  };

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
            {POSITION_CODE_ARRAY.map((position) => (
              <div className="position" key={position.value}>
                <Checkbox
                  onChange={(e) => handleChangeCheck(e, position)}
                  name={position.label}
                  text={position.label}
                  labelStyle={{ color: color.gray.white, fontSize: '24px', fontWeight: 400 }}
                />
              </div>
            ))}
          </div>
          <div className="button-wrap">
            <Button onClick={() => onClickChoice(checked, 'skill')} size="medium" variant="primary">
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
