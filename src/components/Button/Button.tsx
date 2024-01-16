"use client";

import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

type STYLE_PROPS = {
  size?:
    | "small-box"
    | "medium-box"
    | "large-box"
    | "round-box"
    | "small-text"
    | "medium-text"
    | "large-text";
  mode?:
    | "primary-box"
    | "error-box"
    | "point-box"
    | "success-box"
    | "primary-text"
    | "point-text"
    | "disabled-text";
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
  size = "medium-box",
  mode = "primary-box",
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
  ["small-box"]: {
    width: "70px",
    height: "40px",
    borderRadius: "8px",
    fontSize: 12,
  },
  ["medium-box"]: {
    width: "140px",
    height: "40px",
    borderRadius: "8px",
    fontSize: 12,
  },
  ["large-box"]: {
    width: "400px",
    height: "40px",
    borderRadius: "8px",
    fontSize: 12,
  },
  ["round-box"]: {
    width: "30px",
    height: "30px",
    borderRadius: "50px",
    fontSize: 20,
  },
  ["small-text"]: {
    fontSize: 12,
    background: "none",
  },
  ["medium-text"]: {
    fontSize: 16,
    background: "none",
  },
  ["large-text"]: {
    fontSize: 20,
    background: "none",
  },
};

const COLOR_TYPE = {
  ["primary-box"]: {
    background: "#3574F2",
    color: "white",
  },
  ["error-box"]: {
    background: "#FF4E4E",
    color: "white",
  },
  ["point-box"]: {
    background: "#F2F2F2",
    color: "black",
  },
  ["primary-text"]: {
    color: "black",
  },
  ["point-text"]: {
    color: "#3574F2",
  },
  ["disabled-text"]: {
    color: "#A7A7A7",
  },
};

const StyledButton = styled.button<Props>`
  ${({ size }) => BUTTON_TYPE[size as "medium-box"]};
  ${({ mode }) => COLOR_TYPE[mode as "primary-box"]};

  display: ${(props) => (props.disabled ? "none" : "flex")};
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;
  font-weight: bold;
`;
