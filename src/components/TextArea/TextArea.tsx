"use client";

import styled from "@emotion/styled";

import { TextareaProps } from "@/types/types";

const TextArea = ({ size = "medium", style, ...rest }: TextareaProps) => {
  return <StyledTextArea size={size} style={style} {...rest} />;
};
export default TextArea;

const TEXTAREA_TYPE = {
  ["medium"]: {
    width: 250,
  },
  ["large"]: {
    width: 400,
  },
};

const StyledTextArea = styled.textarea<any>`
  ${({ size }) => TEXTAREA_TYPE[size as "medium"]};

  box-sizing: border-box;
  padding: 10px;
  border-radius: 6px;
  outline: none;
  resize: none;
`;
