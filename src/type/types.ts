import { InputHTMLAttributes } from "react";
import { ButtonHTMLAttributes } from "react";

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
  children: any;
  style?: React.CSSProperties;
};

//input
export type INPUT_STYLE_PROPS = {
  size?: "small" | "medium" | "large" | "full";
  mode?: "primary" | "disabled" | "search" | "text";
};

export type INPUT_TYPE = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export type InputProps = INPUT_STYLE_PROPS &
  INPUT_TYPE & {
    value?: string | number | undefined;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    readOnly?: boolean;
    type?: string;
    name: string;
    placeholder?: string;
    errorText?: string;
    style?: React.CSSProperties;
    rest?: any;
  };
  
//button
export type BUTTON_STYLE_PROPS = {
  size?: "small" | "medium" | "large";
  mode?: "default" | "primary" | "error" | "primary_square" | "square";
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
  label: string;
  require?: string;
  subText?: string;
  style?: React.CSSProperties;
};

//LabelInput
export type LABELINPUT_STYLE_PROPS = {
  location: "left" | "top";
};

//SelectBox
export type SELECTBOX_STYLE_PROPS = {
  size?: "small" | "medium" | "large";
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