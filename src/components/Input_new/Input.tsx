"use client";

import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";

export type INPUT_STYLE_PROPS = {
  size?: "home";
  mode?: "primary" | "disabled";
  text?: "home";
};

export type INPUT_TYPE = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export type InputProps = INPUT_STYLE_PROPS &
  INPUT_TYPE & {
    value?: string | number | undefined;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
    type?: string;
    name?: string;
    placeholder?: string;
    errorText?: string;
    icon?: boolean;
    style?: React.CSSProperties;
    rest?: any;
  };

const Input = ({
  value,
  onChange,
  readOnly,
  type,
  name,
  placeholder,
  errorText,
  size = "home",
  mode = "primary",
  text = "home",
  icon = true,
  style,
  ...rest
}: InputProps) => {
  return (
    <Container size={size} mode={mode}>
      <StyledInput
        text={text}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        type={type}
        name={name}
        placeholder={placeholder}
        style={style}
        {...rest}
      />
      {errorText && <ErrorText>{errorText}</ErrorText>}
      {icon && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M16.325 15.8987L21.705 21.2787C21.8941 21.468 22.0003 21.7246 22.0002 21.9921C22.0001 22.2596 21.8937 22.5161 21.7045 22.7052C21.5153 22.8943 21.2587 23.0005 20.9912 23.0004C20.7236 23.0003 20.4671 22.894 20.278 22.7047L14.898 17.3247C13.2897 18.5704 11.2673 19.1566 9.24214 18.9641C7.21699 18.7716 5.34124 17.8148 3.99649 16.2884C2.65174 14.7619 1.939 12.7806 2.00326 10.7473C2.06753 8.71402 2.90396 6.7816 4.34242 5.34315C5.78087 3.9047 7.71329 3.06826 9.74656 3.004C11.7798 2.93973 13.7612 3.65248 15.2876 4.99723C16.814 6.34198 17.7708 8.21772 17.9634 10.2429C18.1559 12.268 17.5697 14.2905 16.324 15.8987H16.325ZM10 16.9997C11.5913 16.9997 13.1174 16.3676 14.2427 15.2424C15.3679 14.1172 16 12.591 16 10.9997C16 9.40845 15.3679 7.88232 14.2427 6.7571C13.1174 5.63189 11.5913 4.99974 10 4.99974C8.40871 4.99974 6.88259 5.63189 5.75737 6.7571C4.63215 7.88232 4.00001 9.40845 4.00001 10.9997C4.00001 12.591 4.63215 14.1172 5.75737 15.2424C6.88259 16.3676 8.40871 16.9997 10 16.9997Z'
            fill='#0066FF'
          />
        </svg>
      )}
    </Container>
  );
};
export default Input;

const INPUT_TYPE = {
  ["home"]: {
    display: "flex",
    width: "436px",
    height: "48px",
    padding: "8px 20px",
    justifyContent: "center",
    alignItems: "center",
    gap: "52px",
    flexShrink: 0,

    borderRadius: "100px",
    border: "1px solid #D6E3F3",
    background: "var(--White, #FFF)",
    boxShadow:
      "4px 4px 20px 0px rgba(111, 140, 176, 0.41), -6px -6px 20px 0px rgba(255, 255, 255, 0.50), 2px 2px 4px 0px rgba(114, 142, 171, 0.10)",
  },
};

// const COLOR_TYPE = {
//   ["primary"]: {
//     border: "1px solid #A7A7A7",
//   },
//   ["disabled"]: {
//     background: "#F2F2F2",
//     border: "none",
//   },
// };

const TEXT_TYPE = {
  ["home"]: {
    color: "#515151",

    fontFamily: "Pretendard",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
};

const Container = styled.div<any>`
  ${({ size }) => INPUT_TYPE[size as "home"]};
`;

const StyledInput = styled.input<any>`
  flex: 1 0 0;

  border: none;
  outline: none;

  &::placeholder {
    ${({ text }) => TEXT_TYPE[text as "home"]};
  }
`;

const ErrorText = styled.div`
  color: #ff4e4e;
  font-size: 12px;

  padding: 5px;
`;
