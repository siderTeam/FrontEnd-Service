'use client';

import styled from '@emotion/styled';
import { AlertProps } from '@/types/types';
import Image from 'next/image';
import { color } from '@/styles/color';
import Button from '../Button/Button';

const Alert = ({ visible, onClick, children, style, text, subText }: AlertProps) => {
  return (
    <Container visible={visible} onClick={onClick}>
      <Content style={style} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <MainText>{text}</MainText>
          <SubText subText={subText}>{subText}</SubText>
          {children}
        </div>
      </Content>
    </Container>
  );
};

export default Alert;

const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  left: 0px;
  top: 0px;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Content = styled.div`
  position: relative;

  display: inline-flex;
  padding: 40px 80px 24px 80px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid ${color.gray.gray6};
  background: ${color.gray.black};
`;

const MainText = styled.div`
  color: ${color.gray.white};
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;

  margin-bottom: 20px;
`;

const SubText = styled.div<{ subText: string }>`
  display: ${({ subText }) => (subText ? 'flex' : 'none')};
  justify-content: center;

  color: ${color.gray.gray5};
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  margin-bottom: 24px;
`;
