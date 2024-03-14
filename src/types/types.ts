import { TextareaHTMLAttributes } from 'react';
//Label

export type LabelProps = {
  label: string;
  require?: string;
  subText?: string;
  style?: React.CSSProperties;
  children?: any;
  isValid?: boolean;
};

//CheckBox

export type CHECKBOX_TYPE_PROPS = {
  type?: 'unchecked' | 'hover' | 'checked' | 'disabled' | 'disabledCheck';
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
  labelStyle?: React.CSSProperties;
};

//Modal

export type ModalProps = {
  visible?: boolean;
  onClose?: () => void;
  children?: any;
  style?: React.CSSProperties;
};

export type ModalPageProps = Pick<ModalProps, 'onClose' | 'visible'>;

//Textarea

export type TEXTAREA_STYLE_PROPS = {
  size?: 'full' | 'medium' | 'large';
  color?: 'primary';
};

export type TextareaProps = TEXTAREA_STYLE_PROPS &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    style?: React.CSSProperties;
    rest?: any;
    textareaCount?: number;
  };

//LabelInput

export type LABELINPUT_STYLE_PROPS = {
  location: 'left' | 'top';
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

//Table

export type TABLE_TYPE_PROPS = {
  type?: 'headerLeft' | 'headerCenter' | 'headerCheckbox' | 'dataLeft' | 'dataCenter' | 'dataSubtext' | 'dataMore';
};

export type TableProps = TABLE_TYPE_PROPS & {
  check?: boolean;
  children?: any;
  src?: string;
  subText?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

//Alert

export type AlertProps = {
  visible?: boolean;
  onClick?: () => void;
  children?: any;
  style?: React.CSSProperties;
  text?: string;
  subText?: string;
};
