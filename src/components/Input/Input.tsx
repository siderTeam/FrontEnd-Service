"use client";

import styled from "@emotion/styled";
import { InputProps } from "@/types/types";

const Input = ({
  value,
  onChange,
  readOnly,
  type,
  name,
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
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </Container>
  );
};
export default Input;

const INPUT_TYPE = {
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

const COLOR_TYPE = {
  ["primary"]: {
    border: "1px solid #A7A7A7",
  },
  ["disabled"]: {
    background: "#F2F2F2",
    border: "none",
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input<any>`
  ${({ size }) => INPUT_TYPE[size as "medium"]};
  ${({ mode }) => COLOR_TYPE[mode as "primary"]};

  border-radius: 8px;
  outline: none;

  font-size: 12px;

  padding: 0 10px;

  box-sizing: border-box;
`;

const ErrorText = styled.div`
  color: #ff4e4e;
  font-size: 12px;

  padding: 5px;
`;
