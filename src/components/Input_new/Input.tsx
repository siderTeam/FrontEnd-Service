"use client";

import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";

export type INPUT_STYLE_PROPS = {
  size?: "home";
  mode?: "primary" | "disabled";
  text?: "home";
};

export type INPUT_TYPE = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export type InputProps = INPUT_STYLE_PROPS &
  INPUT_TYPE & {
    value?: string | number | undefined;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
    type?: string;
    name?: string;
    placeholder?: string;
    errorText?: string;
    icon?: boolean;
    style?: React.CSSProperties;
    rest?: any;
  };

const Input = ({
  value,
  onChange,
  readOnly,
  type,
  name,
  placeholder,
  errorText,
  size = "home",
  mode = "primary",
  text = "home",
  icon = true,
  style,
  ...rest
}: InputProps) => {
  return (
    <Container size={size} mode={mode}>
      <StyledInput
        text={text}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        type={type}
        name={name}
        placeholder={placeholder}
        style={style}
        {...rest}
      />
      {errorText && <ErrorText>{errorText}</ErrorText>}
      {icon && <img src='/images/home/search_blue.svg' />}
    </Container>
  );
};
export default Input;

const INPUT_TYPE = {
  ["home"]: {
    display: "flex",
    width: "436px",
    height: "48px",
    padding: "8px 20px",
    justifyContent: "center",
    alignItems: "center",
    gap: "52px",
    flexShrink: 0,

    borderRadius: "100px",
    border: "1px solid #D6E3F3",
    background: "var(--White, #FFF)",
    boxShadow:
      "4px 4px 20px 0px rgba(111, 140, 176, 0.41), -6px -6px 20px 0px rgba(255, 255, 255, 0.50), 2px 2px 4px 0px rgba(114, 142, 171, 0.10)",
  },
};

// const COLOR_TYPE = {
//   ["primary"]: {
//     border: "1px solid #A7A7A7",
//   },
//   ["disabled"]: {
//     background: "#F2F2F2",
//     border: "none",
//   },
// };

const TEXT_TYPE = {
  ["home"]: {
    color: "#515151",

    fontFamily: "Pretendard",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
};

const Container = styled.div<any>`
  ${({ size }) => INPUT_TYPE[size as "home"]};
  box-sizing: border-box;
`;

const StyledInput = styled.input<any>`
  flex: 1 0 0;

  border: none;
  outline: none;

  box-sizing: border-box;

  &::placeholder {
    ${({ text }) => TEXT_TYPE[text as "home"]};
  }
`;

const ErrorText = styled.div`
  color: #ff4e4e;
  font-size: 12px;

  padding: 5px;
`;
