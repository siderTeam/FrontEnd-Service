"use client";

import styled from "@emotion/styled";

type BUTTON_STYLE_PROPS = {
  size?: "primary" | "basic" | "large";
  mode?: "primary" | "error" | "basic";
};

type ButtonProps = BUTTON_STYLE_PROPS & {
  children: any;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const Button = ({
  children,
  size = "primary",
  mode = "primary",
  style,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <>
      <ButtonWrap>
        <StyledButton
          size={size}
          mode={mode}
          style={style}
          onClick={onClick}
          {...rest}
        >
          {children}
          {/* <Icon src='more_white.svg' /> */}
        </StyledButton>
      </ButtonWrap>
    </>
  );
};
export default Button;

const BUTTON_TYPE = {
  ["primary"]: {
    display: "flex",
    height: "32px",
    padding: "10px 24px",
    alignItems: "center",
    gap: "10px",
    borderRadius: "100px",
  },
  ["basic"]: {
    display: "flex",
    width: "160px",
    height: "48px",
    padding: "8px 20px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "52px",
    borderRadius: "100px",
    border: "1px solid #D6E3F3",
    boxShadow:
      "4px 4px 20px 0px rgba(111, 140, 176, 0.41), -6px -6px 20px 0px rgba(255, 255, 255, 0.50), 2px 2px 4px 0px rgba(114, 142, 171, 0.10);",
    textAlign: "center",
    fontFamily: "Pretendard",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
};

const COLOR_TYPE = {
  ["primary"]: {
    background: "var(--primary, #06F)",
    color: "white",
  },
  ["error"]: {
    background: "#FF4E4E",
    color: "white",
  },
  ["basic"]: {
    background: "var(--White, #FFF)",
    color: "var(--primary, #06F)",
  },
};

const TEXT_TYPE = {};

const StyledButton = styled.div<BUTTON_STYLE_PROPS>`
  ${({ size }) => BUTTON_TYPE[size as "primary"]};
  ${({ mode }) => COLOR_TYPE[mode as "primary"]};

  cursor: pointer;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const ButtonWrap = styled.div`
  display: flex;
  padding: 3px 0px;
  align-items: center;
`;
