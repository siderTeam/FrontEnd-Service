"use client";

import styled from "@emotion/styled";

import { ButtonProps } from "@/type/types";
import { BUTTON_STYLE_PROPS } from "@/type/types";
import Image from "next/image";
import * as CS from "../Styles/CommonStyles";

const Button = ({
  children,
  size = "full",
  mode = "primary",
  style,
  onClick,
  isDisabled = false,
  leftIcon,
  rightIcon,
  iconSize = 20,
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
  ["full"]: {
    width: "100%",
    padding: " 13px 0px",
    borderRadius: "12px",
  },
};

const COLOR_TYPE = {
  ["primary"]: {
    background: `${CS.color.brandMain}`,
    color: `${CS.color.black}`,

    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  ["primary-reverse"]: {
    background: "none",
    color: `${CS.color.brandMain}`,
    border: `1px solid ${CS.color.brandMain}`,

    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
};

const StyledButton = styled.button<BUTTON_STYLE_PROPS>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  cursor: pointer;
  border: none;

  ${({ size }) => BUTTON_TYPE[size as "full"]};
  ${({ mode }) => COLOR_TYPE[mode as "primary"]};
`;
