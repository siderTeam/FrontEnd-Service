"use client";

import styled from "@emotion/styled";

import { LabelProps } from "@/types/types";

const Label = ({ label, require, subText, style }: LabelProps) => {
  return (
    <>
      <StyledLabel style={style} location={location}>
        {label}
        {require && <StyledRequire>{require}</StyledRequire>}
      </StyledLabel>
      {subText && <StyledSubText location={location}>{subText}</StyledSubText>}
    </>
  );
};
export default Label;

const StyledLabel = styled.label<any>`
  font-weight: bold;
`;

const StyledRequire = styled.span`
  color: red;
`;

const StyledSubText = styled.p<any>`
  color: #a7a7a7;
  font-size: 0.8em;
`;
