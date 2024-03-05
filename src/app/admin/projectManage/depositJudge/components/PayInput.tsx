import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { color } from '@/styles/color';
import { ModalPageProps } from '@/types/types';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

const PayInput = ({ visible, onClose }: ModalPageProps) => {
  return (
    <Container visible={visible} onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <div onClick={onClose} className="close">
          <Image width={12} height={12} src="/images/x/x_white.svg" alt="close" />
        </div>
        <div className="text">직접 입력</div>
        <div className="wrap">
          <Input size="small" color="success" style={{ width: '132px', height: '32px' }} />
          <Button size="small" variant="primary">
            납입
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default PayInput;

const Container = styled.div<{ visible?: boolean }>`
  position: absolute;
  top: 30px;
  right: 25px;

  display: ${({ visible }) => (visible ? 'flex' : 'none')};

  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Content = styled.div`
  position: relative;

  width: 209px;
  height: 69px;
  border-radius: 4px;
  border: 1px solid ${color.gray.gray6};
  background: ${color.gray.black};

  padding: 7px 8px;
  box-sizing: border-box;
  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    cursor: pointer;
    justify-content: flex-end;
  }

  .text {
    color: ${color.gray.white};
    font-size: 10px;
    font-weight: 400;
  }
  .wrap {
    display: flex;
    gap: 3px;

    margin-top: 8px;
  }
`;
