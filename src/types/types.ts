import { InputHTMLAttributes } from "react";
import { ButtonHTMLAttributes } from "react";
import { TextareaHTMLAttributes } from "react";

//Input

export type INPUT_STYLE_PROPS = {
  size?: "medium" | "large";
  color?: string;
};

export type INPUT_TYPE = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export type InputProps = INPUT_STYLE_PROPS &
  INPUT_TYPE & {
    value?: string | number | undefined;
    onChange?: (e: any, id: string) => void;
    readOnly?: boolean;
    type?: string;
    name?: string;
    placeholder?: string;
    errorText?: string;
    icon?: string;
    style?: React.CSSProperties;
    rest?: any;
    buttonText?: string;
    onClick?: () => void;
    ref?: any;
    isValid?: boolean;
  };

//Label

export type LabelProps = {
  label: string;
  require?: string;
  subText?: string;
  style?: React.CSSProperties;
  children?: any;
  isValid?: boolean;
};

//Button

export type BUTTON_STYLE_PROPS = {
  size?: "medium" | "large" | "in_input";
  mode?: "primary" | "secondary";
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

//CheckBox

export type CHECKBOX_TYPE_PROPS = {
  type?: "unchecked" | "hover" | "checked" | "disabled" | "disabledCheck";
};

export type CheckboxProps = CHECKBOX_TYPE_PROPS & {
  text?: string;
  checked?: boolean;
  requireText?: string;
  name?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  onClick?: () => void;
  style?: React.CSSProperties;
  requireStyle?: React.CSSProperties;
  className?: string;
};

//Modal

export type ModalProps = {
  visible?: boolean;
  onClose?: () => void;
  children?: any;
  style?: React.CSSProperties;
};

//SelectBox

export type SELECTBOX_STYLE_PROPS = {
  selectedType?: "full";
  optionType?: "full";
  text?: "full";
};

export type SelectBoxProps = SELECTBOX_STYLE_PROPS & {
  options?: { label: string; value: string }[];
  value?: string;
  name: string;
  onChange?: (name: string, value: string) => void;
  style?: React.CSSProperties;
  optionStyle?: React.CSSProperties;
  placeholder?: string;
};

//SelectInput

export type SelectInputProps = {
  options?: { label: string; value: string }[];
  value?: string;
  name: string;
  onChange?: (name: string, value: string) => void;
  style?: React.CSSProperties;
  optionStyle?: React.CSSProperties;
  placeholder?: string;
};

//Textarea

export type TEXTAREA_STYLE_PROPS = {
  size?: "full" | "medium" | "large";
  color?: "primary";
};

export type TextareaProps = TEXTAREA_STYLE_PROPS &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    style?: React.CSSProperties;
    rest?: any;
    textareaCount: number;
  };

//LabelInput

export type LABELINPUT_STYLE_PROPS = {
  location: "left" | "top";
};

//card
export type CardProps = {
  title: string;
  startDate: string;
  endDate: string;
  deposit: number;
  children?: any;
  style?: React.CSSProperties;
};

//Radio

export type RADIO_BUTTON_TYPE_PROPS = {
  size?: "small" | 'big'
};

export type RadioButtonProps = RADIO_BUTTON_TYPE_PROPS & {
  text?: string;
  requireText?: string;
  isChecked?: boolean;
  name?: string;
  onChange?: (e: any) => void;
  onClick?: () => void;
  style?: React.CSSProperties;
  requireStyle?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  size?: "small" | 'big';
};