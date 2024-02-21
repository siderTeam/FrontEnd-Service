"use client";

import { InputProps } from "@/types/types";
import styled from "@emotion/styled";
import Button from "../Button_new/Button";
import * as CS from "../Styles/CommonStyles";

const Input = ({
  value,
  onChange,
  readOnly,
  type,
  name,
  placeholder,
  errorText,
  size = "full",
  text = "primary",
  icon = false,
  style,
  buttonText,
  onClick,
  ref,
  isValid,
  ...rest
}: InputProps) => {
  return (
    <InputContainer>
      <StyledInput
        size={size}
        isValid={isValid}
        text={text}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        type={type}
        name={name}
        placeholder={placeholder}
        style={style}
        ref={ref}
        {...rest}
      />
      {errorText && <ErrorText>{errorText}</ErrorText>}
      {icon && <img src='/images/home/search_blue.svg' className='search' />}

      {buttonText && (
        <Button style={{ width: 80, height: 52 }} onClick={onClick}>
          {buttonText}
        </Button>
      )}
    </InputContainer>
  );
};
export default Input;

const INPUT_TYPE = {
  ["full"]: {
    display: "flex",
    width: "100%",
    padding: "18px 20px 18px 20px",
    alignItems: "center",

    borderRadius: "12px",
    border: `1px solid ${CS.color.gray6}`,
  },
};

const TEXT_TYPE = {
  ["primary"]: {
    color: `${CS.color.gray7}`,
    fontFamily: "Spoqa Han Sans Neo",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
};

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input<any>`
  ${({ size }) => INPUT_TYPE[size as "full"]};
  ${({ text }) => TEXT_TYPE[text as "primary"]};

  display: flex;
  justify-content: center;
  background: none;
  box-sizing: border-box;

  outline: none;

  .search {
    cursor: pointer;
  }
`;

const ErrorText = styled.div`
  color: #ff4e4e;
  font-size: 12px;

  padding: 5px;
`;
