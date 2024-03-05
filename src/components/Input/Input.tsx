'use client';

import { InputProps } from '@/types/types';
import styled from '@emotion/styled';
import Button from '../Button/Button';
import { color } from '@/styles/color';

const Input = ({
  value,
  onChange,
  readOnly,
  type,
  name,
  placeholder,
  errorText,
  size = 'large',
  color = 'primary',
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
        {icon && <img src={icon} className="search" />}

        {buttonText && (
          <Button size="in_input" mode="primary" onClick={onClick} className="button" disabled>
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
  ['small']: {
    width: '111px',
    padding: '6px 16px',
    borderRadius: '6px',
    fontSize: '14px',
  },
  ['medium']: {
    width: '331px',
    height: '40px',
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '16px',
  },
  ['large']: {
    width: '364px',
    height: '56px',
    padding: ' 18px 20px',
    borderRadius: '12px',
    fontSize: '16px',
  },
};

const COLOR_TYPE = {
  ['primary']: {
    border: ` 1px solid ${color.gray.gray6}`,
    color: color.gray.white,
  },
  ['success']: {
    border: ` 1px solid ${color.brand.brandMain}`,
    color: color.gray.white,
  },
  ['error']: {
    border: ` 1px solid ${color.secondary.error_1}`,
    color: color.gray.white,
  },
  ['positive']: {
    border: ` 1px solid ${color.secondary.positive_1}`,
    color: color.gray.white,
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
  ${({ size }) => INPUT_TYPE[size as 'large']};
  ${({ color }) => COLOR_TYPE[color as 'placeholder']};
  display: flex;
  align-items: center;
  font-weight: 400;
  background: none;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    border: 1px solid ${color.gray.gray6};
    color: ${color.gray.gray7};
  }

  &:disabled {
    border: 1px solid ${color.gray.gray9};
    color: ${color.gray.gray8};
  }

  .search {
    cursor: pointer;
  }
`;

const ErrorText = styled.div<InputProps>`
  color: ${(props) => (props.color === 'error' ? color.secondary.error_1 : props.color === 'positive' ? color.secondary.positive_1 : '')};

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;

  margin-top: 4px;
  margin-left: 10px;
`;
