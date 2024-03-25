'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { useState } from 'react';
import Image from 'next/image';

export type SELECTBOX_STYLE_PROPS = {
  size?: 'small' | 'medium';
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
  optionWrapperStyle?: React.CSSProperties;
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
  placeholder,
  optionWrapperStyle,
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

  const handleBlur = () => {
    setVisible(false);
  };

  const selected = options.filter((option) => option.value === value);

  return (
    <Container onClick={handleClickSelect} tabIndex={0} onBlur={handleBlur}>
      <StyledSelect size={size} selectedType={selectedType} optionType={optionType} text={text} value={value} name={name} style={style}>
        <div className={selected.length === 0 ? 'choice-value' : 'value'}>{selected.length === 0 ? placeholder : selected[0].label}</div>
        {selectedType === 'disabled' ? (
          <Image src="/images/arrow/arrow_down_gray9.svg" width={16} height={16} alt="arrow" style={{ cursor: 'pointer' }} />
        ) : (
          <Image src="/images/arrow/arrow_down_gray6.svg" width={16} height={16} alt="arrow" style={{ cursor: 'pointer' }} />
        )}
      </StyledSelect>
      {visible && (
        <OptionWrapper style={optionWrapperStyle} size={size} selectedType={selectedType} optionType={optionType}>
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
    width: '111px',
    padding: '6px 10px 6px 16px',
    fontSize: '14px',
    color: color.gray.white,
  },
  ['medium']: {
    width: '120px',
    padding: '8px 10px 8px 20px',
    fontSize: '16px',
    color: color.gray.white,
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
  align-items: center;
  font-weight: 400;
  box-sizing: border-box;
  border-radius: 6px;

  color: ${color.gray.white};

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
  }
`;

const OptionWrapper = styled.ul<any>`
  ${({ optionType }) => OPTIONS_TYPE[optionType as 'placeholder']}

  position: absolute;
  box-sizing: border-box;
  border-radius: 6px;

  z-index: 3;

  overflow: hidden;

  &:first-child {
    border-radius: 6px 6px 0 0;
  }

  li {
    ${({ size }) => SIZE_TYPE[size as 'small']}

    height: 30px;
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
