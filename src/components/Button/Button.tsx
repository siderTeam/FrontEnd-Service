'use client';
import styled from '@emotion/styled';
import { color } from '@/styles/color';

export type BUTTON_STYLE_PROPS = {
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'in_input';
  variant?: 'primary' | 'secondary';
};

export type ButtonProps = BUTTON_STYLE_PROPS & {
  children: any;
  style?: React.CSSProperties;
  onClick?: () => void;
  rightIcon?: string;
  leftIcon?: string;
  iconStyle?: React.CSSProperties;
  className?: string;
  disabled?: any;
};

const Button = ({
  children,
  size = 'medium',
  variant = 'primary',
  style,
  iconStyle,
  onClick,
  rightIcon,
  leftIcon,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton size={size} variant={variant} style={style} onClick={onClick} className={className} {...rest}>
      <div className="text_icon_wrap">
        {leftIcon && <Icon src={leftIcon} style={{ marginRight: '10px' }} />}
        {children}
        {rightIcon && <Icon src={rightIcon} style={iconStyle} />}
      </div>
    </StyledButton>
  );
};
export default Button;

const SIZE_TYPE = {
  ['tiny']: {
    height: '23px',
    padding: '4px 8px',
    borderRadius: '6px',

    fontSize: '12px',
    fontWeight: 700,
  },
  ['small']: {
    height: '32px',
    padding: '10px 16px',
    borderRadius: '6px',

    fontSize: '14px',
    fontWeight: 700,
  },
  ['medium']: {
    height: '40px',
    padding: '10px 20px',
    borderRadius: '6px',

    fontSize: '16px',
    fontWeight: 700,
  },
  ['large']: {
    width: '364px',
    height: '56px',
    padding: '13px 0px',
    borderRadius: '12px',

    fontSize: '24px',
    fontWeight: 700,
  },
  ['in_input']: {
    width: '90px',
    height: '52px',
    padding: '16px',
    borderRadius: '10px',

    fontSize: '16px',
    fontWeight: 500,
  },
};

const COLOR_TYPE = {
  ['primary']: {
    background: `${color.brand.brandMain}`,
    color: `${color.gray.black}`,
  },
  ['secondary']: {
    background: 'none',
    border: `1px solid ${color.brand.brandMain}`,
    color: `${color.brand.brandMain}`,
  },
};

const DISABLED_TYPE = {
  ['primary']: {
    background: `${color.gray.gray8}`,
    color: `${color.gray.gray9}`,
  },
  ['secondary']: {
    background: 'none',
    border: `1px solid ${color.gray.gray9}`,
    color: `${color.gray.gray8}`,
  },
};

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
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  white-space: nowrap;
  ${({ size }) => SIZE_TYPE[size as 'medium']};
  ${({ variant }) => COLOR_TYPE[variant as 'primary']};

  &:disabled {
    ${({ variant }) => DISABLED_TYPE[variant as 'primary']};
  }

  &:hover:not(:disabled) {
    box-shadow: 0px 0px 6px 0px ${color.brand.brandMain};
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
