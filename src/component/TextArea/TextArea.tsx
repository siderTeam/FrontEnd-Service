"use client";

import styled from "@emotion/styled";
import { TextareaProps } from "@/type/types";
import * as CS from "../../Styles/CommonStyles";
import { useState } from "react";

const TextArea = ({ maxLength, textCount, style, ...rest }: TextareaProps) => {
  return (
    <Container>
      <StyledTextArea style={style} maxLength={maxLength} {...rest} />
      {maxLength && (
        <span className="count">
          {textCount} / {maxLength}
        </span>
      )}
    </Container>
  );
};
export default TextArea;

const Container = styled.div`
  position: relative;

  .count {
    color: ${CS.color.white};
    position: absolute;
    bottom: 10px;
    right: 20px;
  }
`;

const StyledTextArea = styled.textarea<any>`
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid ${CS.color.gray6};

  background: none;
  outline: none;
  resize: none;

  color: ${CS.color.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px; /* 스크롤바의 너비 */
  }
  &::-webkit-scrollbar-thumb {
    background: ${CS.color.gray5}; /* 스크롤바의 색상 */
    border-radius: 28px;

    background-clip: padding-box;
    border: 4px solid transparent;
  }
`;
