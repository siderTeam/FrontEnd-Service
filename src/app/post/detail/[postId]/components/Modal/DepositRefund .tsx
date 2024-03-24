'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Modal from '@/components/Modal/Modal';
import Profile from '@/components/Profile/Profile';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import SelectBox from '@/components/SelectBox/SelectBox';
import useChangeSelect from '@/hook/useChangeSelect';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const DepositRefund = ({ visible, onClose }: ModalProps) => {
  const { select, onChange: onChangeSelect } = useChangeSelect(null);

  const handleClick = () => {};

  return (
    <Modal
      style={{
        borderRadius: 24,
        width: 670,
        height: 430,
        background: `${color.gray.black}`,
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
        <div className="modal-title">보증급 환급 계좌</div>
        <div className="modal-content">
          <div className="content">
            (이름)/(아이디) 님께서 환급 받으실 수 있는 환급금은 총 (환급액 api) 원 입니다.
            <br />
            아래에 환급 받으실 계좌 정보를 입력 후 저장 해주세요.
          </div>
          <div className="example">예금주, 은행, 계좌번호 불일치로 인한 책임은 본인에게 있습니다.</div>
          <div>
            <Input style={{ width: '100%' }} size="medium" placeholder="예금주를 입력하세요." />
            <div className="selectInput">
              <SelectBox
                size="medium"
                name="positionCode"
                value={select}
                placeholder="은행명"
                onChange={onChangeSelect}
                options={[{ label: '은행이름', value: 1 }]}
                style={{ borderRadius: 8, height: 40 }}
                optionWrapperStyle={{ borderRadius: 8 }}
              />
              <Input style={{ width: '100%' }} containerStyle={{ flex: 1 }} size="medium" placeholder="계좌번호를 입력하세요." />
            </div>
          </div>
        </div>
        <div className="button">
          <Button size="small">저장</Button>
        </div>
      </Container>
    </Modal>
  );
};

export default DepositRefund;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  box-sizing: border-box;
  padding: 60px 70px 40px 60px;
  color: ${color.gray.white};

  .modal-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 32px;
  }

  .modal-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .content {
      color: ${color.gray.white};
      font-size: 16px;
      font-weight: 400;
      line-height: 32px;
    }

    .example {
      color: ${color.gray.gray6};
    }
  }

  .selectInput {
    display: flex;
    align-items: center;
    margin-top: 9px;
    gap: 9px;
  }

  .button {
    display: flex;
    justify-content: center;
  }
`;
