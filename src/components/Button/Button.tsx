"use client";

import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

type STYLE_PROPS = {
  size?: "small" | "medium" | "large";
  mode?: "primary" | "error" | "success";
};

type Props = STYLE_PROPS &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: any;
    style?: React.CSSProperties;
  };

const Button = ({
  children,
  size = "medium",
  mode = "primary",
  style,
  ...rest
}: Props) => {
  return (
    <StyledButton size={size} mode={mode} style={style} {...rest}>
      {children}
    </StyledButton>
  );
};
export default Button;

const BUTTON_TYPE = {
  ["small"]: {
    width: 100,
    height: 50,
  },
  ["medium"]: {
    width: 125,
    height: 50,
  },
  ["large"]: {
    width: 150,
    height: 75,
  },
};

const COLOR_TYPE = {
  ["primary"]: {
    background: "blue",
    color: "white",
    borderColor: "black",
  },
  ["error"]: {
    background: "red",
    color: "black",
    borderColor: "black",
  },
  ["success"]: {
    background: "green",
    color: "white",
    borderColor: "black",
  },
};

const StyledButton = styled.button<STYLE_PROPS>`
  width: ${({ size }) => `${BUTTON_TYPE[size as "small"].width}px`};
  height: ${({ size }) => `${BUTTON_TYPE[size as "small"].height}px`};
  background: ${({ mode }) => `${COLOR_TYPE[mode as "primary"].background}`};
  color: ${({ mode }) => `${COLOR_TYPE[mode as "primary"].color}`};
  border: ${({ mode }) =>
    `1px solid ${COLOR_TYPE[mode as "primary"].borderColor}`};
`;
