"use client";

import styled from "@emotion/styled";
import { InputProps } from "@/type/types";
import Image from "next/image";
import { color } from "../../Styles/CommonStyles";

const Input = ({
  type,
  value,
  name,
  onChange,
  onClick,
  readOnly,
  placeholder,
  errorText,
  size = "medium",
  mode = "primary",
  style,
  ...rest
}: InputProps) => {
  return (
    <Container>
      <StyledInput
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        type={type}
        name={name}
        placeholder={placeholder}
        size={size}
        mode={mode}
        style={style}
        {...rest}
      />
      {errorText && mode !== "primary" && (
        <ErrorText mode={mode}>{errorText}</ErrorText>
      )}
    </Container>
  );
};

export default Input;

const INPUT_TYPE = {
  ["medium"]: {
    width: "331px",
    height: "40px",
    padding: "10px 20px",
    border: `1px solid ${color.gray6}`,
    borderRadius: "8px",
  },
  ["large"]: {
    width: "364px",
    height: "56px",
    padding: "18px 20px",
    border: `1px solid ${color.gray6}`,
    borderRadius: "12px",
  },
};

const COLOR_TYPE = {
  ["primary"]: `${color.gray6}`,
  ["failed"]: `${color.error1}`,
  ["positive"]: `${color.positive1}`,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input<any>`
  ${({ size }) => INPUT_TYPE[size as "medium"]};
  border: 1px solid ${({ mode }) => COLOR_TYPE[mode as "primary"]};
  color: ${({ disabled }) => (disabled ? color.gray9 : color.white)};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  background: none;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${color.gray7};
  }

  &:disabled {
    border: 1px solid ${color.gray9};
    color: ${color.gray8};
  }

  //자동완성
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 1000px ${color.black} inset; //배경색
    -webkit-text-fill-color: ${color.white}; //글자색
  }
`;

const ErrorText = styled.div<{ mode: string }>`
  color: ${({ mode }) => COLOR_TYPE[mode as "failed"]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 4px 0 0 10px;
`;
