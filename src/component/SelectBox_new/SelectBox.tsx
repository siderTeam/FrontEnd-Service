"use client";

import styled from "@emotion/styled";
import { color } from "@/Styles/color";
import { useState } from "react";

import { SelectBoxProps } from "@/types/types";

const SelectBox = ({
  selectedType = "full",
  optionType = "full",
  text = "full",
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
        {/* <div className={selected.length === 0 ? "value" : "choice-value"}>
          {selected.length === 0 ? placeholder : selected[0].label}
        </div> */}
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
  ["full"]: {
    display: "flex",
    width: "100%",
    padding: "18px 20px 18px 20px",
    alignItems: "center",

    borderRadius: "12px",
    border: `1px solid ${color.gray.gray6}`,

    color: `${color.gray.gray7}`,

    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
};

const OPTIONS_TYPE = {
  ["full"]: {
    display: "flex",
    width: "100%",
    padding: "18px 20px 18px 20px",
    alignItems: "center",

    borderRadius: "12px",
    border: `1px solid ${color.gray.gray6}`,

    color: `${color.gray.gray7}`,

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
    ${({ optionType }) => OPTIONS_TYPE[optionType as "full"]}

    box-sizing: border-box;
    cursor: pointer;
  }

  li:hover {
    background: #eeeeee;
    border: 1px solid #b8b8b8;
  }
`;

const StyledSelect = styled.div<any>`
  ${({ selectedType }) => SELECT_TYPE[selectedType as "full"]}

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
