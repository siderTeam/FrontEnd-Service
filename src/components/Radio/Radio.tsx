'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';

export type RadioButtonProps = {
  text?: string;
  requireText?: string;
  isChecked?: boolean;
  name?: string;
  onChange?: (e: any) => void;
  onClick?: () => void;
  style?: React.CSSProperties;
  requireStyle?: React.CSSProperties;
  radioStyle?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  size?: 'small' | 'big';
};

const Radio = ({ text, requireText, className, onChange, onClick, style, radioStyle, requireStyle, disabled, size = 'small', isChecked }: RadioButtonProps) => {
  return (
    <Container style={style}>
      <StyledRadio
        type="checkbox"
        disabled={disabled}
        onChange={onChange ? onChange : () => {}}
        onClick={onClick}
        style={radioStyle}
        className={className}
        size={size as never}
        checked={isChecked}
      />
      <StyledLabel>{text}</StyledLabel>
      {requireText && <StyledRequire style={requireStyle}>{requireText}</StyledRequire>}
    </Container>
  );
};

export default Radio;

const SIZE = {
  big: {
    width: 20,
    height: 20,
  },
  small: {
    width: 16,
    height: 16,
  },
};

const Container = styled.label`
  display: flex;
  align-items: center;
`;

const StyledRadio = styled.input<RadioButtonProps>`
  ${({ size }) => SIZE[size as unknown as 'big' | 'small']}
  border-radius: 100%;
  background-color: transparent;
  border: 1px solid ${color.gray.gray4};
  appearance: none;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;

  &:hover {
    background-color: ${color.gray.gray7};
  }

  &:hover&:checked {
    background-color: transparent;
  }

  &:checked {
    background-image: url('/images/radio/Checked_Big.svg');
    border: none;
  }

  &:disabled {
    background-image: url('/images/radio/Disabled_Big.svg');
    border: none;
  }

  &:checked&:disabled {
    background-image: url('/images/radio/DisabledCheck_Big.svg');
    border: none;
  }
`;

const StyledLabel = styled.div`
  color: ${color.gray.white};
  font-size: 16px;
`;

const StyledRequire = styled.div`
  color: ${color.gray.gray6};
  font-size: 14px;
`;
