"use client";

import styled from "@emotion/styled";
import { useState } from "react";

import { SelectBoxProps } from "@/types/types";

const SelectBox = ({
  selectedType = "primary",
  optionType = "primary",
  text = "primary",
  value,
  name,
  options,
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

  const selected = options.filter((option) => option.value === value);

  return (
    <Container>
      <StyledSelect
        selectedType={selectedType}
        optionType={optionType}
        text={text}
        value={value}
        name={name}
        style={style}
        onClick={handleClickSelect}
      >
        <div className={selected.length === 0 ? "value" : "choice-value"}>
          {selected.length === 0 ? placeholder : selected[0].label}
        </div>
      </StyledSelect>
      {visible && (
        <OptionWrapper selectedType={selectedType} optionType={optionType}>
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
const SELECT_TYPE = {
  ["primary"]: {
    width: "396px",
    height: "52px",
    padding: "0px 16px",
    background: "white",
    border: "1px solid #B8B8B8",
    borderRadius: "8px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    color: "#B8B8B8",

    fontFamily: "Pretendard",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
};

const OPTIONS_TYPE = {
  ["primary"]: {
    width: "396px",
    height: "52px",
    padding: "0px 16px",
    background: "white",
    border: "1px solid #eeee",
    borderRadius: "8px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    color: "black",

    fontFamily: "Pretendard",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
};

const Container = styled.div`
  position: relative;
`;

const OptionWrapper = styled.ul<any>`
  position: absolute;
  box-sizing: border-box;

  z-index: 3;

  li {
    ${({ optionType }) => OPTIONS_TYPE[optionType as "primary"]}

    box-sizing: border-box;
    cursor: pointer;
  }

  li:hover {
    background: #eeeeee;
    border: 1px solid #b8b8b8;
  }
`;

const StyledSelect = styled.div<any>`
  ${({ selectedType }) => SELECT_TYPE[selectedType as "primary"]}

  box-sizing: border-box;

  .value {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .choice-value {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: bold;
  }
`;
