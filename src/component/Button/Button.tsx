"use client";

import styled from "@emotion/styled";

import { ButtonProps } from "@/type/types";
import { BUTTON_STYLE_PROPS } from "@/type/types";
import Image from "next/image";
import * as CS from "../Styles/CommonStyles";

const Button = ({
  children,
  size = "medium",
  mode = "primary",
  style,
  onClick,
  leftIcon,
  rightIcon,
  iconSize = 16,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      mode={mode}
      style={style}
      onClick={onClick}
      {...rest}
    >
      {leftIcon && (
        <Image src={leftIcon} alt="icon" width={iconSize} height={iconSize} />
      )}
      {children}
      {rightIcon && (
        <Image src={rightIcon} alt="icon" width={iconSize} height={iconSize} />
      )}
    </StyledButton>
  );
};
export default Button;

const BUTTON_TYPE = {
  ["medium"]: {
    padding: "10px 20px",
    borderRadius: "6px",
    gap: "4px",

    fontSize: "16px",
    fontWeight: 700,
  },
  ["large"]: {
    width: "364px",
    height: "56px",
    padding: "13px 0px",
    borderRadius: "12px",

    fontSize: "24px",
    fontWeight: 700,
  },
  ["in_input"]: {
    width: "90px",
    height: "52px",
    padding: "16px",
    borderRadius: "10px",

    fontSize: "16px",
    fontWeight: 500,
  },
};

const COLOR_TYPE = {
  ["primary"]: {
    background: `${CS.color.brandMain}`,
    color: `${CS.color.black}`,
  },
  ["secondary"]: {
    background: "none",
    border: `1px solid ${CS.color.brandMain}`,
    color: `${CS.color.brandMain}`,
  },
};

const DISABLED_TYPE = {
  ["primary"]: {
    background: `${CS.color.gray8}`,
    color: `${CS.color.gray9}`,
  },
  ["secondary"]: {
    background: "none",
    border: `1px solid ${CS.color.gray9}`,
    color: `${CS.color.gray8}`,
  },
};

const StyledButton = styled.button<BUTTON_STYLE_PROPS>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-style: normal;
  line-height: normal;

  border: none;
  cursor: ${({ disabled }) => !disabled && "pointer"};

  ${({ size }) => BUTTON_TYPE[size as "medium"]};
  ${({ mode }) => COLOR_TYPE[mode as "primary"]};

  &:disabled {
    ${({ mode }) => DISABLED_TYPE[mode as "primary"]};
  }

  &:hover:not(:disabled) {
    box-shadow: 0px 0px 6px 0px ${CS.color.brandMain};
  }
`;
