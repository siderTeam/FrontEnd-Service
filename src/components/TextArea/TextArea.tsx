"use client";

import styled from "@emotion/styled";
import { TextareaHTMLAttributes } from "react";

type STYLE_PROPS = {
  
};

type Props = STYLE_PROPS &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    style?: React.CSSProperties;
    rest?: any;
  };

const TextArea = ({
  style,
  ...rest
}: Props) => {
  return <StyledTextArea style={style} {...rest} />;
};
export default TextArea;

const StyledTextArea = styled.textarea<any>`
  box-sizing: border-box;
  width: inherit;
  padding: 10px;
  border-radius: 6px;
  outline: none;
  resize: none;
`;