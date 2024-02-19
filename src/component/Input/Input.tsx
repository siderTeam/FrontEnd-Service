"use client";

import styled from "@emotion/styled";
import { InputProps } from "@/type/types";
import Image from "next/image";
import * as CS from "../Styles/CommonStyles";

//value, onchange, icon, readOnly, name, placeholder, size, style

const Input = ({
  type,
  value,
  onChange,
  onClick,
  readOnly,
  name,
  placeholder,
  errorText,
  size = "full",
  mode = "primary",
  style,
  ...rest
}: InputProps) => {
  return (
    <Container size={size} mode={mode}>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        name={name}
        placeholder={placeholder}
        mode={mode}
        {...rest}
      />
      {/* {type === "search" && (
        <Image
          src="/images/search.svg"
          alt="search"
          width={24}
          height={24}
          style={{ cursor: "pointer" }}
          onClick={onClick}
        />
      )} */}
    </Container>
  );
};

export default Input;

const INPUT_TYPE = {
  ["small"]: {
    //미정
  },
  ["medium"]: {
    //미정
  },
  ["large"]: {
    width: 440,
    height: 44,
  },
  ["full"]: {
    width: "100%",
    padding: "18px 20px",
    borderRadius: "12px",
    border: `1px solid ${CS.color.gray6}`,
  },
};

const COLOR_TYPE = {
  ["primary"]: {
    border: "1px solid #A7A7A7",
  },
  ["disabled"]: {
    background: "#F2F2F2",
    border: "none",
  },
  ["text"]: {
    color: "white",
    border: "1px solid #B8B8B8",
    padding: "16px",
    borderRadius: "8px",
  },
};

const Container = styled.div<any>`
  box-sizing: border-box;
  ${({ size }) => INPUT_TYPE[size as "medium"]};
  ${({ mode }) =>
    mode === "search" &&
    `
    display: flex;
    padding: 12px 20px;

    border-radius: 58px;
    border: 1px solid ${CS.color.brandMain};
  `};
`;

const StyledInput = styled.input<any>`
  width: 100%;
  background: none;
  color: ${CS.color.white};
  font-size: 16px;
  font-weight: 400;

  border: none;
  outline: none;

  //input type="search"일 때 x표시 지우기
  &[type="search"] {
    /* 브라우저마다 다를 수 있는 스타일 추가 */
    -webkit-appearance: none;

    /* Firefox에서의 스타일 추가 */
    &::-webkit-search-cancel-button,
    &::-webkit-search-clear-button {
      display: none;
    }
  }

  //자동완성
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 1000px ${CS.color.black} inset; //배경색
    -webkit-text-fill-color: ${CS.color.white}; //글자색
  }
`;
