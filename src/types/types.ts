import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { ButtonHTMLAttributes } from 'react';

//positionSquare
export type PositionSquareProps = {
  parent: string;
  name: string;
  style?: React.CSSProperties;
};

//card
export type CardProps = {
  title: string;
  startDate: string;
  endDate: string;
  deposit: number;
  skillCodeList: { skillCode: number; name: string; imageName: string }[];
  children?: any;
  style?: React.CSSProperties;
};

//input
export type INPUT_STYLE_PROPS = {
  size?: 'small' | 'medium' | 'large';
  mode?: 'primary' | 'active' | 'failed' | 'positive';
};

export type INPUT_TYPE = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

export type InputProps = INPUT_STYLE_PROPS &
  INPUT_TYPE & {
    value?: string | number | undefined;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    readOnly?: boolean;
    type?: string;
    name: string;
    placeholder?: string;
    errorText?: string;
    style?: React.CSSProperties;
    rest?: any;
  };

//selectInput
export type SelectInputProps = INPUT_STYLE_PROPS &
  INPUT_TYPE & {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    name: string;
    placeholder?: string;
    style?: React.CSSProperties;
    rest?: any;
  };

//button
export type BUTTON_STYLE_PROPS = {
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'in_input';
  mode?: 'primary' | 'secondary';
};

export type ButtonProps = BUTTON_STYLE_PROPS &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: any;
    style?: React.CSSProperties;
    onClick?: () => void;
    isDisabled?: boolean;
    leftIcon?: string;
    rightIcon?: string;
    iconSize?: number;
  };

//Label
export type LabelProps = {
  location: 'left' | 'top';
  label: string;
  require?: string;
  subText?: string;
  children: any;
  style?: React.CSSProperties;
};

//SelectBox
export type SELECTBOX_STYLE_PROPS = {
  size?: 'small';
  mode?: 'primary' | 'active';
};

export type SelectBoxProps = SELECTBOX_STYLE_PROPS & {
  options: { label: string; value: string }[];
  value: string;
  name: string;
  onChange: (name: string, value: string) => void;
  style?: React.CSSProperties;
  optionStyle?: React.CSSProperties;
  placeholder?: string;
};

//paging
export type PaginationProps = {
  page: number;
  items: number;
  count: number;
  setPage: (page: number) => void;
};

//CheckBox
export type CheckboxProps = {
  text: string;
  requireText?: string;
  isChecked?: boolean;
  disabled?: boolean;
  name?: string;
  onChange: (e: any) => void;
  style?: React.CSSProperties;
  requireStyle?: React.CSSProperties;
};

//Radio style
export type RADIO_PROPS = {
  size?: 'small' | 'big';
};

//Radio
export type RadioProps = RADIO_PROPS & {
  text: string;
  name: string;
  value: string;
  requireText?: string;
  isChecked?: boolean;
  disabled?: boolean;
  onChange: (e: any) => void;
  style?: React.CSSProperties;
};

//signUp content
export type SignUpProps = {
  onNext?: () => void;
};

//Modal
export type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: any;
  style?: React.CSSProperties;
};

//Textarea
export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  textCount?: number;
  style?: React.CSSProperties;
  rest?: any;
};
