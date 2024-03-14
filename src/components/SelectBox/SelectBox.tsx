'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { useState } from 'react';
import Image from 'next/image';

export type SELECTBOX_STYLE_PROPS = {
  size?: 'small';
  selectedType?: 'placeholder' | 'selected' | 'active' | 'disabled';
  optionType?: 'placeholder' | 'selected' | 'active' | 'disabled';
  text?: 'full';
};

export type OPTION_TYPE = { label: string; value: any };

export type SelectBoxProps<T> = SELECTBOX_STYLE_PROPS & {
  options: { label: string; value: T | any }[];
  value: T;
  name?: string;
  onChange?: (name: string, value: T | any) => void;
  style?: React.CSSProperties;
  optionStyle?: React.CSSProperties;
  placeholder?: string;
};

const SelectBox = <T,>({
  size = 'small',
  selectedType = 'placeholder',
  optionType = 'placeholder',
  text = 'full',
  value,
  name,
  options,
  onChange,
  style,
  optionStyle,
}: SelectBoxProps<T>) => {
  const [visible, setVisible] = useState(false);

  const handleClickSelect = () => {
    setVisible(!visible);
  };

  const handleClick = (value: T) => {
    if (onChange) {
      onChange(name as string, value);
      setVisible(false);
    }
  };

  const selected = options.filter((option) => option.value === value);

  return (
    <Container onClick={handleClickSelect}>
      <StyledSelect size={size} selectedType={selectedType} optionType={optionType} text={text} value={value} name={name} style={style}>
        <div className={selected.length === 0 ? 'value' : 'choice-value'}>{selected[0].label}</div>
        {selectedType === 'disabled' ? (
          <Image src="/images/arrow/arrow_down_gray9.svg" width={16} height={16} alt="arrow" style={{ cursor: 'pointer' }} />
        ) : (
          <Image src="/images/arrow/arrow_down_gray6.svg" width={16} height={16} alt="arrow" style={{ cursor: 'pointer' }} />
        )}
      </StyledSelect>
      {visible && (
        <OptionWrapper style={style} size={size} selectedType={selectedType} optionType={optionType}>
          {options?.map((option, index) => (
            <li onClick={() => handleClick(option.value)} style={optionStyle} key={`${option.value}_${index}`} value={option.label}>
              {option.label}
            </li>
          ))}
        </OptionWrapper>
      )}
    </Container>
  );
};

export default SelectBox;
const SIZE_TYPE = {
  ['small']: {
    width: '120px',
    height: '32px',
    padding: '6px 10px 6px 16px',

    color: 'white',
  },
};

const SELECT_TYPE = {
  ['placeholder']: {
    border: `1px solid ${color.gray.gray6} `,
    color: color.gray.gray7,
  },
  ['selected']: {
    border: `1px solid ${color.gray.gray6} `,
    color: color.gray.white,
  },
  ['active']: {
    border: `1px solid ${color.brand.brandMain}`,
    color: color.gray.white,
  },
  ['disabled']: {
    border: `1px solid ${color.gray.gray9}`,
    color: color.gray.gray8,
  },
};

const OPTIONS_TYPE = {
  ['placeholder']: {
    border: `1px solid ${color.gray.gray6} `,
    background: color.gray.black,
  },
  ['selected']: {
    border: `1px solid ${color.gray.gray6} `,
    background: color.gray.black,
  },
  ['active']: {
    border: `1px solid ${color.brand.brandMain}`,
    background: color.gray.black,
  },
  ['disabled']: {
    border: `1px solid ${color.gray.gray9}`,
    background: color.gray.black,
  },
};

const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

const StyledSelect = styled.div<any>`
  ${({ selectedType }) => SELECT_TYPE[selectedType as 'placeholder']}
  ${({ size }) => SIZE_TYPE[size as 'small']}
  
  display: flex;
  width: 120px;
  padding: 6px 10px 6px 16px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  box-sizing: border-box;

  .value {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .choice-value {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color: ${({ value }) => (!!value ? color.gray.white : color.gray.gray7)};
    font-weight: bold;
  }
`;

const OptionWrapper = styled.ul<any>`
  ${({ optionType }) => OPTIONS_TYPE[optionType as 'placeholder']}

  position: absolute;
  box-sizing: border-box;
  border-radius: 8px;

  z-index: 3;

  overflow: hidden;

  li {
    ${({ size }) => SIZE_TYPE[size as 'small']}

    display: flex;
    padding: 6px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    box-sizing: border-box;
    cursor: pointer;
  }

  li:not(:last-of-type) {
    border-bottom: 1px solid ${color.gray.gray6};
  }

  li:hover {
    background: var(--GRAY-GRAY_9, #1d2939);
  }
`;
