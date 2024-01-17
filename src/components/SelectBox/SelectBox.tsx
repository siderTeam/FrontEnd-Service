"use client";

import styled from "@emotion/styled";
import { useState } from "react";

type STYLE_PROPS = {
  size?: "small" | "medium" | "large";
};

type Props = STYLE_PROPS & {
  options: string[];
  value: string;
  name: string;
  onChange: (value: string, name: string) => void;
  style?: React.CSSProperties;
  optionStyle?: React.CSSProperties;
};

const SelectBox = ({
  size = "medium",
  value,
  name,
  options,
  onChange,
  style,
  optionStyle,
}: Props) => {
  const [visible, setVisible] = useState(false);

  const handleClickSelect = () => {
    setVisible(!visible);
  };

  const handleClick = (option: string) => {
    onChange(option, name);
    setVisible(false);
  };
  return (
    <Container>
      <StyledSelect
        size={size}
        value={value}
        name={name}
        style={style}
        onClick={handleClickSelect}
      >
        <div className="value">{value}</div>
      </StyledSelect>
      {visible && (
        <OptionWrapper size={size}>
          {options.map((option) => (
            <li
              onClick={() => handleClick(option)}
              style={optionStyle}
              key={option}
              value={option}
            >
              {option}
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

const OptionWrapper = styled.ul<{ size: "small" | "medium" | "large" }>`
  position: absolute;
  font-size: 12px;
  box-sizing: border-box;
  top: ${({ size }) => SELECT_TYPE[size].height};
  background: white;
  z-index: 3;

  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    cursor: pointer;
    border-bottom: 1px solid #eeee;
    ${({ size }) => SELECT_TYPE[size as "medium"]};
  }

  li:hover {
    background: #eeeeee;
  }
`;

const StyledSelect = styled.div<any>`
  ${({ size }) => SELECT_TYPE[size as "medium"]};
  font-size: 12px;
  border: 1px solid #a7a7a7;
  border-radius: 6px;
  outline: none;
  padding: 0 10px;
  box-sizing: border-box;

  .value {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
