"use client";

import styled from "@emotion/styled";

import { LabelProps } from "@/types/types";

const Label = ({ label, require, subText, style }: LabelProps) => {
  return (
    <>
      <StyledLabel style={style}>
        {label}
        {require && <StyledRequire>{require}</StyledRequire>}
      </StyledLabel>
      {subText && <StyledsubText>{subText}</StyledsubText>}
    </>
  );
};
export default Label;

const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledRequire = styled.span`
  color: red;
`;

const StyledsubText = styled.p`
  color: #a7a7a7;
  margin: 0px 0px 3px 0px;
  font-size: 0.8em;
`;
