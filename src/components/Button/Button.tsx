"use client";

import styled from "@emotion/styled";

import { ButtonProps } from "@/types/types";
import { BUTTON_STYLE_PROPS } from "@/types/types";

const Button = ({
  children,
  size = "medium",
  mode = "primary",
  style,
  onClick,
  isDisabled = false,
  ...rest
}: ButtonProps) => {
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

const StyledButton = styled.button<BUTTON_STYLE_PROPS>`
  ${({ size }) => BUTTON_TYPE[size as "medium"]};
  ${({ mode }) => COLOR_TYPE[mode as "primary"]};

  display: ${(props) => (props.disabled ? "none" : "flex")};
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;
  font-weight: bold;
`;
