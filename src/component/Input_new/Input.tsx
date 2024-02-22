"use client";

import { InputProps } from "@/types/types";
import styled from "@emotion/styled";
import Button from "../Button_new/Button";
import * as CS from "../../Styles/CommonStyles";

const Input = ({
  value,
  onChange,
  readOnly,
  type,
  name,
  placeholder,
  errorText,
  size = "large",
  color = "placeholder",
  icon,
  style,
  buttonText,
  onClick,
  ref,
  isValid,
  ...rest
}: InputProps) => {
  return (
    <>
      <InputContainer>
        <StyledInput
          size={size}
          isValid={isValid}
          color={color}
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
        {icon && <img src={icon} className='search' />}

        {buttonText && (
          <Button
            size='in_input'
            mode='primary'
            onClick={onClick}
            className='button'
            disabled
          >
            {buttonText}
          </Button>
        )}
        {errorText && <ErrorText color={color}>{errorText}</ErrorText>}
      </InputContainer>
    </>
  );
};
export default Input;

const INPUT_TYPE = {
  ["medium"]: {
    width: "331px",
    height: "40px",
    padding: "10px 20px",
    borderRadius: "8px",
  },
  ["large"]: {
    width: "364px",
    height: "56px",
    padding: " 18px 20px",
    borderRadius: "12px",
  },
};

const COLOR_TYPE = {
  ["placeholder"]: {
    border: ` 1px solid ${CS.color.gray6}`,
    color: CS.color.gray7,
  },
  ["filled"]: {
    border: ` 1px solid ${CS.color.gray6}`,
    color: CS.color.white,
  },
  ["active"]: {
    border: ` 1px solid ${CS.color.brandMain}`,
    color: CS.color.white,
  },
  ["failed"]: {
    border: ` 1px solid ${CS.color.error1}`,
    color: CS.color.white,
  },
  ["positive"]: {
    border: ` 1px solid ${CS.color.positive1}`,
    color: CS.color.white,
  },
  ["disabled"]: {
    border: ` 1px solid ${CS.color.gray9}`,
    color: CS.color.gray8,
  },
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  .button {
    position: absolute;
    right: 2px;
    top: 2px;
  }
`;

const StyledInput = styled.input<any>`
  ${({ size }) => INPUT_TYPE[size as "large"]};
  ${({ color }) => COLOR_TYPE[color as "placeholder"]};

  display: flex;
  align-items: center;
  flex-shrink: 0;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  background: none;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${({ color }) => COLOR_TYPE[color as "placeholder"]};
  }

  .search {
    cursor: pointer;
  }
`;

const ErrorText = styled.div<InputProps>`
  color: ${({ color }) =>
    color === "failed"
      ? CS.color.error1
      : color === "positive"
      ? CS.color.positive1
      : ""};

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;

  margin-top: 4px;
  margin-left: 10px;
`;
