import { InputHTMLAttributes } from "react";
import { ButtonHTMLAttributes } from "react";
import { TextareaHTMLAttributes } from "react";

//Input

export type INPUT_STYLE_PROPS = {
  size?: "small" | "medium" | "large";
  mode?: "primary" | "disabled";
};

export type INPUT_TYPE = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export type InputProps = INPUT_STYLE_PROPS &
  INPUT_TYPE & {
    value?: string | number | undefined;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
    type?: string;
    name: string;
    placeholder?: string;
    errorText?: string;
    style?: React.CSSProperties;
    rest?: any;
  };

//Label

export type LabelProps = {
  label: string;
  require?: string;
  subText?: string;
  style?: React.CSSProperties;
};

//Button

export type BUTTON_STYLE_PROPS = {
  size?: "small" | "medium" | "large";
  mode?: "primary" | "error";
};

export type ButtonProps = BUTTON_STYLE_PROPS &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: any;
    style?: React.CSSProperties;
    onClick?: () => void;
    isDisabled?: boolean;
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
  size?: "small" | "medium" | "large";
};

export type SelectBoxProps = SELECTBOX_STYLE_PROPS & {
  options: string[];
  value: string;
  name: string;
  onChange: (value: string, name: string) => void;
  style?: React.CSSProperties;
  optionStyle?: React.CSSProperties;
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

// export type LabelInputProps = LabelProps &
//   InputProps &
//   LABELINPUT_STYLE_PROPS & {
//     labelStyle?: React.CSSProperties;
//     inputStyle?: React.CSSProperties;
//   };
