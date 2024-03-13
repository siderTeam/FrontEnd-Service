'use client';

import { color } from '@/styles/color';
import { CheckboxProps } from '@/types/types';
import styled from '@emotion/styled';

const Checkbox = ({ text, disabled, checked, requireText, className, onChange, onClick, style, requireStyle }: CheckboxProps) => {
  return (
    <Container>
      <StyledCheckbox
        disabled={disabled}
        type="checkbox"
        checked={checked}
        onChange={onChange ? onChange : () => {}}
        onClick={onClick}
        style={style}
        className={className}
      />
      <StyledLabel>{text}</StyledLabel>
      {requireText && <StyledRequire style={requireStyle}>{requireText}</StyledRequire>}
    </Container>
  );
};

export default Checkbox;

const Container = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledCheckbox = styled.input`
  width: 16px;
  height: 16px;
  border: 1px solid ${color.gray.gray4};
  appearance: none;
  margin-right: 8px;
  border-radius: 4px;

  &:hover {
    background-color: ${color.gray.gray7};
  }

  &:hover&:checked {
    background-color: transparent;
  }

  &:checked {
    background-image: url('/images/check/checked.svg');
    border: none;
  }

  &:disabled {
    background-color: ${color.gray.gray8};
    border: 1px solid ${color.gray.gray9};
  }

  &:checked&:disabled {
    background-image: url('/images/check/disabled_checked.svg');
    border: none;
  }
`;

const StyledLabel = styled.div`
  color: ${color.gray.gray5};
  text-align: right;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledRequire = styled.div`
  font-size: 10px;
  color: ${color.secondary.error_1};

  margin-left: 4px;
`;
