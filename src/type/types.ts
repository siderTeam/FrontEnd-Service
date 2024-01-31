import { InputHTMLAttributes } from "react";

//positionSquare
export type PositionSquareProps = {
  value: string;
  style?: React.CSSProperties;
};

//card
export type CardProps = {
  title: string;
  startDate: string;
  endDate: string;
  deposit: string;
  children: any;
  style?: React.CSSProperties;
};

//input
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