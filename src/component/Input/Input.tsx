"use client";

import styled from "@emotion/styled";
import { InputProps } from "@/type/types";
import Image from "next/image";

//value, onchange, icon, readOnly, name, placeholder, size, style

const Input = ({
  type,
  value,
  onChange,
  readOnly,
  name,
  placeholder,
  errorText,
  size = "medium",
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
      {type === "search" && (
        <Image
          src="/images/search.svg"
          alt="search"
          width={24}
          height={24}
          style={{ cursor: "pointer" }}
          onClick={() => alert("클릭")}
        />
      )}
    </Container>
  );
};

export default Input;

const INPUT_TYPE = {
  ["small"]: {
    //미정
    width: 150,
    height: 30,
  },
  ["medium"]: {
    //미정
    width: 250,
    height: 30,
  },
  ["large"]: {
    width: 436,
    height: 48,
  },
  ["full"]: {
    width: "100%",
    height: 52,
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
    background: "white",
    border: "1px solid #B8B8B8",
    padding: "16px",
    borderRadius: "8px",
  },
};

const Container = styled.div<any>`
  ${({ size }) => INPUT_TYPE[size as "medium"]};
  ${({ mode }) => mode === "search" && `
    display: flex;
    box-sizing: border-box;

    padding: 8px 20px;
    justify-content: space-between;
    gap: 52px;
    flex-shrink: 0;

    border-radius: 100px;
    border: 1px solid #d6e3f3;
    background: var(--White, #fff);
    box-shadow: 4px 4px 20px 0px rgba(111, 140, 176, 0.41),
      -6px -6px 20px 0px rgba(255, 255, 255, 0.5),
      2px 2px 4px 0px rgba(114, 142, 171, 0.1);
  `};
`;

const StyledInput = styled.input<any>`
  width: 100%;
  color: #515151;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;

  border: none;
  outline: none;
  ${({ mode }) => COLOR_TYPE[mode as "primary"]};

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
`;
