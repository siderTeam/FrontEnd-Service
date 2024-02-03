"use client";

import styled from "@emotion/styled";

type BUTTON_STYLE_PROPS = {
  size?: "primary" | "basic" | "basic-choice";
  mode?: "primary" | "error" | "basic" | "basic-choice";
};

type ButtonProps = BUTTON_STYLE_PROPS & {
  children: any;
  style?: React.CSSProperties;
  onClick?: () => void;
  icon?: boolean;
  src?: string;
  type?: string;
};

const Button = ({
  children,
  size = "primary",
  mode = "primary",
  style,
  onClick,
  icon = false,
  src,
  type,
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
          type={type}
        >
          <div>
            {src && <Img src={src} />}
            {children}
          </div>
          {icon && <Icon src='images/home/arrow_white.svg' />}
        </StyledButton>
      </ButtonWrap>
    </>
  );
};
export default Button;

const BUTTON_TYPE = {
  ["primary"]: {
    display: "flex",
    justifyContent: "center",
    width: "130px",
    height: "32px",
    padding: "5px",
    alignItems: "center",
    gap: "10px",
    borderRadius: "100px",

    // textAlign: "center",
    fontFamily: "Pretendard",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
  ["basic-choice"]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // gap: "52px",
    width: "160px",
    height: "48px",

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
    boxSizing: "border-box",
  },

  ["basic"]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // gap: "4px",

    width: "160px",
    height: "48px",

    borderRadius: "100px",
    border: "1px solid var(--White, #FFF)",

    backdropFilter: "blur(15px)",

    textAlign: "center",
    fontFamily: "Pretendard",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    boxSizing: "border-box",
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
  ["basic-choice"]: {
    background: "var(--White, #FFF)",
    color: "var(--primary, #06F)",
  },
  ["basic"]: {
    background: "rgba(255, 255, 255, 0.50)",
    color: "var(--txt-main, #1E1E20)",
  },
};

const TEXT_TYPE = {};

const StyledButton = styled.div<ButtonProps>`
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
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 4px;
`;
