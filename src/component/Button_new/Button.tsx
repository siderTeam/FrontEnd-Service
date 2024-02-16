"use client";

import { ButtonProps } from "@/types/types";
import styled from "@emotion/styled";
import * as CS from "../Styles/CommonStyles";

const Button = ({
  children,
  size = "full",
  mode = "primary",
  style,
  iconStyle,
  onClick,
  rightIcon,
  LeftIcon,
  type,
  ...rest
}: ButtonProps) => {
  return (
    <>
      <ButtonWrap {...rest}>
        <StyledButton
          size={size}
          mode={mode}
          style={style}
          onClick={onClick}
          type={type}
        >
          <div className='text_icon_wrap'>
            {LeftIcon && <Img src={LeftIcon} />}
            {children}
            {rightIcon && <Icon src={rightIcon} style={iconStyle} />}
          </div>
        </StyledButton>
      </ButtonWrap>
    </>
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

const TEXT_TYPE = {};

const StyledButton = styled.div<ButtonProps>`
  ${({ size }) => BUTTON_TYPE[size as "full"]};
  ${({ mode }) => COLOR_TYPE[mode as "primary"]};

  cursor: pointer;

  .text_icon_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Icon = styled.img`
  margin-left: 4px;
  width: 24px;
  height: 24px;
`;

const ButtonWrap = styled.div`
  display: flex;

  /* &:hover {
    filter: brightness(0.9);
  } */
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 4px;
`;
