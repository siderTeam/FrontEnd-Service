'use client';

import styled from '@emotion/styled';
import { useState } from 'react';
import { SelectBoxProps } from '@/types/types';
import { color } from '../../styles/CommonStyles';

const SelectBox = ({ size = 'medium', value, name, options = [], onChange, style, optionStyle, placeholder }: SelectBoxProps) => {
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
      <StyledSelect size={size} value={value} name={name} style={style} onClick={handleClickSelect}>
        {selected.length === 0 ? <div>{placeholder}</div> : <div className="value">{selected[0].label}</div>}
      </StyledSelect>
      {visible && (
        <OptionWrapper>
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

const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

const SELECT_TYPE = {
  ['small']: {
    width: 150,
    height: 30,
  },
  ['medium']: {
    width: 250,
    height: 30,
  },
  ['large']: {
    width: 400,
    height: 30,
  },
};

const StyledSelect = styled.div<any>`
  //${({ size }) => SELECT_TYPE[size as 'medium']};
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid ${color.gray6};
  color: ${color.gray7};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::before {
    content: '⌵';
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 20px;
  }

  .value {
    color: ${color.white};
  }
`;

const OptionWrapper = styled.ul`
  position: absolute;
  width: 100%;
  color: ${color.gray7};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
    display: flex;
    align-items: center;
    cursor: pointer;

    box-sizing: border-box;
    width: 100%;
    height: 52px;
    padding: 0 20px;
  }

  li:hover {
    background: ${color.gray8};
    color: ${color.white};
  }
`;
