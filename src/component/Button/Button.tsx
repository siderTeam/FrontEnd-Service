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
  ["primary_square"]: {
    background: "#0066FF",
    color: "var(--White, #FFF)",
    fontSize: "16px",

    width: "100%",
    height: "52px",
    borderRadius: "8px",
  },
  ["square"]: {
    background: "none",
    border: "1px solid #0066FF",
    color: "#0066FF",
    fontSize: "16px",

    width: "100%",
    height: "52px",
    borderRadius: "8px",
  },
};

const StyledButton = styled.button<BUTTON_STYLE_PROPS>`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;

  text-align: center;
  font-family: Pretendard;
  font-weight: 500;

  ${({ mode }) => COLOR_TYPE[mode as "primary"]};

  &.active {
    ${({ mode }) =>
      mode === "default" &&
      `background: #fff;
    box-shadow: 4px 4px 20px 0px rgba(111, 140, 176, 0.41),
      -6px -6px 20px 0px rgba(255, 255, 255, 0.5),
      2px 2px 4px 0px rgba(114, 142, 171, 0.1);
      color: #0066ff;`}
  }

  background: ${(props) => (props.disabled ? "#d2d2d2" : "inherit")};
  color: ${(props) => (props.disabled ? "gray" : "inherit")};
`;
