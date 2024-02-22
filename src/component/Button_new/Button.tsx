"use client";

import { ButtonProps } from "@/types/types";
import styled from "@emotion/styled";
import * as CS from "../../Styles/CommonStyles";

const Button = ({
  children,
  size = "large",
  mode = "primary",
  style,
  iconStyle,
  onClick,
  rightIcon,
  leftIcon,

  className,
  ...rest
}: ButtonProps) => {
  return (
    <>
      {/* <ButtonWrap > */}
      <StyledButton
        size={size}
        mode={mode}
        style={style}
        onClick={onClick}
        className={className}
        {...rest}
      >
        <div className='text_icon_wrap'>
          {leftIcon && <Icon src={leftIcon} style={{ marginRight: "10px" }} />}
          {children}
          {rightIcon && <Icon src={rightIcon} style={iconStyle} />}
        </div>
      </StyledButton>
      {/* </ButtonWrap> */}
    </>
  );
};
export default Button;

const SIZE_TYPE = {
  ["medium"]: {
    height: "40px",
    padding: "10px 20px",
    borderRadius: "6px",

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

// const ButtonWrap = styled.div`
//   display: flex;
// `;

const StyledButton = styled.button<ButtonProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-style: normal;
  line-height: normal;

  cursor: pointer;

  border: none;

  cursor: ${({ disabled }) => !disabled && "pointer"};

  ${({ size }) => SIZE_TYPE[size as "medium"]};
  ${({ mode }) => COLOR_TYPE[mode as "primary"]};

  &:disabled {
    ${({ mode }) => DISABLED_TYPE[mode as "primary"]};
  }

  &:hover:not(:disabled) {
    box-shadow: 0px 0px 6px 0px ${CS.color.brandMain};
  }

  .text_icon_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
