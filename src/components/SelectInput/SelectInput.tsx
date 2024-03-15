import Image from 'next/image';
import SelectBox from '../SelectBox/SelectBox';
import styled from '@emotion/styled';
import { color } from '@/styles/color';

import { useState } from 'react';

export type SelectInputProps<T> = {
  options: { label: string; value: T | any }[];
  value?: string;
  name: string;
  onChange?: (name: string, value: T | any) => void;
  style?: React.CSSProperties;
  optionStyle?: React.CSSProperties;
  placeholder?: string;
};

const SelectInput = <T,>({ value, name, style, options, onChange, placeholder }: SelectInputProps<T>) => {
  const [visible, setVisible] = useState(false);

  const handleClickSelect = (e: any) => {
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
    <Container>
      <div className="select-input-wrap">
        <div className="select">
          <SelectStyle value={value} name={name} style={style}>
            <div className={selected.length === 0 ? 'value' : 'choice-value'}>{selected.length === 0 ? placeholder : selected[0].label}</div>
          </SelectStyle>

          {visible && (
            <OptionWrapper>
              {options?.map((option) => (
                <li onClick={() => handleClick(option.value)} key={option.value} value={option.label}>
                  {option.label}
                </li>
              ))}
            </OptionWrapper>
          )}
        </div>
        <Image
          src="/images/icons/ArrowDown_green.svg"
          alt="arrow"
          width={14}
          height={8}
          style={{ marginLeft: '8px', cursor: 'pointer' }}
          onClick={handleClickSelect}
        />

        <input className="input" placeholder="프로젝트 검색 ㄱ?" />
        <Image src="/images/icons/Magnification_green.svg" alt="magnification" width={20} height={20} style={{ marginLeft: '10px', cursor: 'pointer' }} />
      </div>
    </Container>
  );
};

export default SelectInput;

const Container = styled.div`
  display: flex;

  width: 440px;
  height: 44px;
  flex-shrink: 0;

  border-radius: 58px;
  border: 1px solid ${color.brand.brandMain};

  .select-input-wrap {
    display: flex;
    align-items: center;

    .select {
      position: relative;
    }

    .choice-value {
      width: 100%;
      text-align: center;
    }

    .input {
      outline: none;
      border: none;
      background: none;
      margin-left: 16px;

      width: 250px;

      color: ${color.gray.white};

      font-size: 16px;

      font-weight: 400;

      &::placeholder {
        color: ${color.gray.gray7};
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`;

const SelectStyle = styled.div<any>`
  width: 80px;
  color: ${color.gray.white};

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 20px;
`;

const OptionWrapper = styled.ul`
  position: absolute;
  width: 110px;
  top: 40px;
  left: 5px;

  box-sizing: border-box;

  z-index: 3;

  li {
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid ${color.brand.brandMain};
    color: ${color.gray.white};

    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    background-color: ${color.gray.black};
  }

  li:first-child {
    border-radius: 8px 8px 0 0;
  }

  li:last-child {
    border-radius: 0 0 8px 8px;
  }
  li:hover {
    background-color: ${color.gray.gray8};
    color: ${color.brand.brandMain};
  }
`;
