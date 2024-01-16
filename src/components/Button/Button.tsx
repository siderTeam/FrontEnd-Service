"use client";

import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

type STYLE_PROPS = {
  size?: "small" | "medium" | "large";
  mode?: "primary" | "error";
};

type Props = STYLE_PROPS &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: any;
    style?: React.CSSProperties;
    onClick?: () => void;
    isDisabled?: boolean;
  };

const Button = ({
  children,
  size = "medium",
  mode = "primary",
  style,
  onClick,
  isDisabled = false,
  ...rest
}: Props) => {
  return (
    <StyledButton
      size={size}
      mode={mode}
      style={style}
      disabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
export default Button;

const BUTTON_TYPE = {
  ["small"]: {
    width: "70px",
    height: "40px",
    borderRadius: "8px",
    fontSize: 12,
  },
  ["medium"]: {
    width: "140px",
    height: "40px",
    borderRadius: "8px",
    fontSize: 12,
  },
  ["large"]: {
    width: "400px",
    height: "40px",
    borderRadius: "8px",
    fontSize: 12,
  },
};

const COLOR_TYPE = {
  ["primary"]: {
    background: "#3574F2",
    color: "white",
  },
  ["error"]: {
    background: "#FF4E4E",
    color: "white",
  },
};

const StyledButton = styled.button<Props>`
  ${({ size }) => BUTTON_TYPE[size as "medium"]};
  ${({ mode }) => COLOR_TYPE[mode as "primary"]};

  display: ${(props) => (props.disabled ? "none" : "flex")};
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;
  font-weight: bold;
`;
