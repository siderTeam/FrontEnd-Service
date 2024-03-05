import { color } from '@/styles/color';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import PayInput from '../Modal/PayInput/PayInput';

type Props = {
  onClick?: () => void;
  style?: React.CSSProperties;
  moreVisible?: boolean;
};

const PayToggle = ({ onClick, style, moreVisible }: Props) => {
  return (
    <Container moreVisible>
      <div className="more-content" onClick={onClick}>
        직접 입력
      </div>
      <div className="more-content">완납 처리</div>
    </Container>
  );
};

export default PayToggle;

const Container = styled.div<Props>`
  display: ${({ moreVisible }) => (moreVisible ? 'block' : 'none')}; // moreVisible 상태에 따라 보이거나 숨김
  width: 95px;

  border-radius: 4px;
  border: 1px solid ${color.gray.gray6};
  background: ${color.gray.black};

  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 1;

  .more-content {
    padding: 6px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #fff;

    font-size: 16px;

    font-weight: 400;
  }
  .more-content:not(:last-of-type) {
    border-bottom: 1px solid ${color.gray.gray6};
    border-radius: 4px 4px 0 0;
  }
  .more-content:last-child {
    border-radius: 0 0 4px 4px;
  }

  .more-content:hover {
    background-color: ${color.gray.gray9};
  }
`;
