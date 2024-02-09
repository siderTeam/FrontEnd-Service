"use client";

import styled from "@emotion/styled";
import { useState } from "react";
import { SelectBoxProps } from "@/type/types";

const SelectBox = ({
  size = "medium",
  value,
  name,
  options = [],
  onChange,
  style,
  optionStyle,
  placeholder,
}: SelectBoxProps) => {
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
      <StyledSelect
        size={size}
        value={value}
        name={name}
        style={style}
        onClick={handleClickSelect}
      >
        <div className="value">
          {selected.length === 0 ? placeholder : selected[0].label}
        </div>
      </StyledSelect>
      {visible && (
        <OptionWrapper size={size}>
          {options?.map((option) => (
            <li
              onClick={() => handleClick(option.value)}
              style={optionStyle}
              key={option.value}
              value={option.label}
            >
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
  ["small"]: {
    width: 150,
    height: 30,
  },
  ["medium"]: {
    width: 250,
    height: 30,
  },
  ["large"]: {
    width: 400,
    height: 30,
  },
};

const StyledSelect = styled.div<any>`
  //${({ size }) => SELECT_TYPE[size as "medium"]};
  width: 100%;
  height: 52px;
  font-size: 16px;
  border: 1px solid #b8b8b8;
  border-radius: 6px;
  outline: none;
  padding: 0 10px;
  box-sizing: border-box;
  background: white;

  &::before {
    content: "⌵";
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 20px;
  }

  .value {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const OptionWrapper = styled.ul<{ size: "small" | "medium" | "large" }>`
  position: absolute;
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
  top: ${({ size }) => SELECT_TYPE[size].height};
  background: white;
  z-index: 3;

  max-height: 200px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
  }
  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #848484; /* 스크롤바의 색상 */
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #84848447; /*스크롤바 뒷 배경 색상*/
  }

  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    cursor: pointer;
    border-bottom: 1px solid #eeee;
    width: 100%;
    height: 52px;
    //${({ size }) => SELECT_TYPE[size as "medium"]};
  }

  li:hover {
    background: #eeeeee;
  }
`;
