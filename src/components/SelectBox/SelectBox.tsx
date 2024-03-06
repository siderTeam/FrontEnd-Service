'use client';

import styled from '@emotion/styled';
import { useState } from 'react';
import { SelectBoxProps } from '@/types/types';
import { color } from '../../styles/CommonStyles';

const SelectBox = ({ size = 'small', mode = 'primary', value, name, options = [], onChange, style, optionStyle, placeholder }: SelectBoxProps) => {
  const [visible, setVisible] = useState(false);

  const handleClickSelect = () => {
    setVisible(!visible);
  };

  const handleClick = (value: string) => {
    onChange(name, value);
    setVisible(false);
  };

  const handleBlur = () => {
    setVisible(false);
  };

  const selected = options.filter((option) => option.value === value);

  return (
    <Container tabIndex={0} onBlur={handleBlur}>
      <StyledSelect size={size} mode={mode} value={value} name={name} style={style} onClick={handleClickSelect}>
        {selected.length === 0 ? <span className="placeholder">{placeholder}</span> : <span className="value">{selected[0].label}</span>}
      </StyledSelect>
      {visible && (
        <OptionWrapper size={size} style={style}>
          {options?.map((option) => (
            <li onClick={() => handleClick(option.value)} style={optionStyle} key={option.value} value={option.label}>
              {option.label}
            </li>
          ))}
        </OptionWrapper>
      )}
    </Container>
  );
};

export default SelectBox;

const SELECT_TYPE = {
  ['small']: {
    width: '120px',
    padding: '6px 16px',
    borderRadius: '8px',
  },
};

const COLOR_TYPE = {
  ['primary']: `${color.gray6}`,
  ['active']: `${color.brandMain}`,
};

const Container = styled.div`
  cursor: pointer;
`;

const StyledSelect = styled.div<any>`
  ${({ size }) => SELECT_TYPE[size as 'small']};
  border: 1px solid ${({ mode }) => COLOR_TYPE[mode as 'primary']};
  box-sizing: border-box;
  position: relative;

  color: ${color.white};
  font-size: 16px;
  font-weight: 400;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::before {
    content: url('/images/selectbox/arrow_down_gray6.svg');
    position: absolute;
    top: 3px;
    right: 10px;
  }

  .placeholder {
    color: ${color.gray7};
  }

  .value {
    color: ${color.white};
  }
`;

const OptionWrapper = styled.ul<any>`
  position: absolute;
  width: ${({ size }) => SELECT_TYPE[size as 'small'].width};

  color: ${color.white};
  font-size: 16px;
  font-weight: 400;

  box-sizing: border-box;
  background: ${color.black};
  border: 1px solid ${color.gray6};
  border-radius: 12px;
  z-index: 3;

  max-height: 200px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px; /* 스크롤바의 너비 */
  }
  &::-webkit-scrollbar-thumb {
    background: ${color.gray5}; /* 스크롤바의 색상 */
    border-radius: 28px;

    background-clip: padding-box;
    border: 4px solid transparent;
  }

  li {
    cursor: pointer;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    box-sizing: border-box;
    width: 100%;
    padding: 6px 16px;
    justify-content: center;
    align-items: center;
  }

  li:not(:last-child) {
    border-bottom: 1px solid ${color.gray6};
  }

  li:hover {
    background: ${color.gray9};
  }
`;
