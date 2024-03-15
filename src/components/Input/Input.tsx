'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { InputHTMLAttributes } from 'react';
import Image from 'next/image';

export type INPUT_STYLE_PROPS = {
  size?: 'small' | 'medium' | 'large' | 'full';
  color?: 'primary' | 'success' | 'error';
};

export type INPUT_TYPE = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

export type InputProps = INPUT_STYLE_PROPS &
  INPUT_TYPE & {
    value?: string | number | undefined;
    onChange?: (e: any, type?: string) => void;
    readOnly?: boolean;
    type?: string;
    name?: string;
    placeholder?: string;
    subText?: string;
    status?: 'success' | 'error';
    icon?: string;
    style?: React.CSSProperties;
    rest?: any;
    buttonText?: string;
    onClick?: () => void;
    ref?: any;
    isValid?: boolean;
    suffix?: any;
    onClickIcon?: () => void;
    containerStyle?: React.CSSProperties;
  };

const Input = ({
  value,
  onChange,
  readOnly,
  type,
  name,
  placeholder,
  subText,
  size = 'large',
  color = 'primary',
  icon,
  style,
  buttonText,
  onClick,
  onClickIcon,
  ref,
  isValid,
  suffix,
  status,
  containerStyle,
  ...rest
}: InputProps) => {
  const handleChangeInput = (e: any) => {
    if (onChange) {
      if (type === 'number') {
        onChange(e, type);
      } else {
        onChange(e);
      }
    }
  };

  return (
    <InputContainer style={containerStyle}>
      <StyledInput
        onClick={onClick}
        size={size}
        isValid={isValid}
        color={status || color}
        value={type === 'number' ? Number(value).toLocaleString() : value}
        onChange={handleChangeInput}
        readOnly={readOnly}
        type={type === 'number' ? 'string' : type}
        name={name}
        placeholder={placeholder}
        style={style}
        status={status}
        ref={ref}
        {...rest}
      />
      {icon && <Image src={icon} width={16} height={16} alt="icon" className="icon" onClick={onClickIcon} />}

      {suffix && <div className="suffix">{suffix}</div>}
      {subText && <SubText color={status}>{subText}</SubText>}
    </InputContainer>
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
  ['full']: {
    width: '100%',
    height: '56px',
    padding: ' 18px 20px',
    borderRadius: '12px',
    fontSize: '16px',
  },
};

const COLOR_TYPE = {
  ['primary']: {
    border: `1px solid ${color.gray.gray6}`,
    color: color.gray.white,
  },
  ['success']: {
    border: `1px solid ${color.secondary.positive_1}`,
    color: color.gray.white,
  },
  ['error']: {
    border: `1px solid ${color.secondary.error_1}`,
    color: color.gray.white,
  },
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;

  .suffix {
    position: absolute;
    right: 2px;
    top: 2px;
  }

  .icon {
    position: absolute;
    right: 10px;
    top: 8px;

    cursor: pointer;
  }
`;

const StyledInput = styled.input<any>`
  ${({ size }) => INPUT_TYPE[size as 'large']};
  ${({ color }) => COLOR_TYPE[color as 'primary']};
  display: flex;
  align-items: center;
  font-weight: 400;
  background: none;
  box-sizing: border-box;
  outline: none;

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${color.gray.gray7};
  }

  &:disabled {
    border: 1px solid ${color.gray.gray9};
    color: ${color.gray.gray8};
  }
`;

const SubText = styled.div<any>`
  color: ${(props) => (props.color === 'error' ? color.secondary.error_1 : props.color === 'success' ? color.secondary.positive_1 : '')};

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;

  margin-top: 4px;
  margin-left: 10px;
`;
