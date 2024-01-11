"use client";

import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";

type STYLE_PROPS = {
  size?: "small" | "medium" | "large";
  mode?: "primary" | "error" | "success";
};

type INPUT_TYPE = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

type Props = STYLE_PROPS &
  INPUT_TYPE & {
    style?: React.CSSProperties;
    rest?: any;
  };

const Input = ({
  size = "medium",
  mode = "primary",
  style,
  ...rest
}: Props) => {
  return <StyledInput size={size} mode={mode} style={style} {...rest} />;
};
export default Input;

const INPUT_TYPE = {
  ["small"]: {
    width: 100,
    height: 25,
  },
  ["medium"]: {
    width: 125,
    height: 30,
  },
  ["large"]: {
    width: 150,
    height: 50,
  },
};

const COLOR_TYPE = {
  ["primary"]: {
    borderColor: "#EEEEEE",
  },
  ["error"]: {
    borderColor: "red",
  },
  ["success"]: {
    borderColor: "blue",
  },
};

const StyledInput = styled.input<any>`
  width: ${({ size }) => `${INPUT_TYPE[size as unknown as "small"].width}px`};
  height: ${({ size }) => `${INPUT_TYPE[size as unknown as "small"].height}px`};
  border: ${({ mode }) =>
    `1px solid ${COLOR_TYPE[mode as "primary"].borderColor}`};

  border-radius: 6px;
  outline: none;
`;
