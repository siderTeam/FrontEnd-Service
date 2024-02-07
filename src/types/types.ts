import { InputHTMLAttributes } from "react";
import { ButtonHTMLAttributes } from "react";
import { TextareaHTMLAttributes } from "react";

//Input

export type INPUT_STYLE_PROPS = {
  size?: "home" | "primary";
  mode?: "primary" | "disabled";
  text?: "home" | "primary";
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

//Label

export type LabelProps = {
  label: string;
  require?: string;
  subText?: string;
  style?: React.CSSProperties;
  children?: any;
};

//Button

export type BUTTON_STYLE_PROPS = {
  size?: "nav" | "primary" | "basic" | "basic-choice";
  mode?: "primary" | "reverse-primary" | "error" | "basic" | "basic-choice";
};

export type ButtonProps = BUTTON_STYLE_PROPS & {
  children: any;
  style?: React.CSSProperties;
  onClick?: () => void;
  rightIcon?: string;
  LeftIcon?: string;
  type?: string;
  iconStyle?: React.CSSProperties;
};

//CheckBox

export type CheckboxProps = {
  text: string;
  requireText?: string;
  isChecked: boolean;
  name: string;
  onChange: (e: any) => void;
  style?: React.CSSProperties;
  requireStyle?: React.CSSProperties;
};

//Modal

export type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: any;
  style?: React.CSSProperties;
};

//SelectBox

export type SELECTBOX_STYLE_PROPS = {
  selectedType?: "primary";
  optionType?: "primary";
  text?: "primary";
};

export type SelectBoxProps = SELECTBOX_STYLE_PROPS & {
  options: { label: string; value: string }[];
  value: string;
  name: string;
  onChange?: (name: string, value: string) => void;
  style?: React.CSSProperties;
  optionStyle?: React.CSSProperties;
  placeholder?: string;
};

//Textarea

export type TEXTAREA_STYLE_PROPS = {
  size?: "medium" | "large";
};

export type TextareaProps = TEXTAREA_STYLE_PROPS &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    style?: React.CSSProperties;
    rest?: any;
  };

//LabelInput

export type LABELINPUT_STYLE_PROPS = {
  location: "left" | "top";
};

//Card

export type CardProps = {
  children?: any;
  id?: string;
  title?: string;
  projectPeriod?: string | number;
  deposit?: string | number;
  necessaryPeriod?: string | number;
};
