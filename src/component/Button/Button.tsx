"use client";

import styled from "@emotion/styled";

import { ButtonProps } from "@/type/types";
import { BUTTON_STYLE_PROPS } from "@/type/types";
import Image from "next/image";

const Button = ({
  children,
  size = "medium",
  mode = "default",
  style,
  onClick,
  isDisabled = false,
  leftIcon,
  rightIcon,
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
      {leftIcon && <Image src={leftIcon} alt="icon" width={20} height={20} />}
      {children}
      {rightIcon && <Image src={rightIcon} alt="icon" width={20} height={20} />}
    </StyledButton>
  );
};
export default Button;

const COLOR_TYPE = {
  ["default"]: {
    color: "var(--txt-main, #1E1E20)",
    fontSize: "18px",

    borderRadius: "100px",
    border: "1px solid var(--White, #FFF)",
    background: "rgba(255, 255, 255, 0.50)",
    backdropFilter: "blur(15px)",

    width: "160px",
    height: "48px",
    padding: "20px",
    gap: "4px",
  },
  ["primary"]: {
    background: "#0066FF",
    color: "var(--White, #FFF)",
    fontSize: "14px",

    borderRadius: "100px",
    height: "32px",
    padding: "10px 24px",
    gap: "10px",
  },
  ["error"]: {
    background: "#FF4E4E",
    color: "white",
  },
};

const StyledButton = styled.button<BUTTON_STYLE_PROPS>`
  ${({ mode }) => COLOR_TYPE[mode as "primary"]};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;

  text-align: center;
  font-family: Pretendard;
  font-weight: 500;
`;
