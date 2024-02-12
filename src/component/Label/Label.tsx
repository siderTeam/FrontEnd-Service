"use client";

import styled from "@emotion/styled";

import { LabelProps } from "@/type/types";

const Label = ({
  label,
  require,
  confirmText,
  errorText,
  subText,
  style,
}: LabelProps) => {
  return (
    <>
      <StyledLabel style={style} location={location}>
        {label}
        {require && <StyledRequire>{require}</StyledRequire>}
        {confirmText && <StyledConfirm>{confirmText}</StyledConfirm>}
        {errorText && <StyledError>{errorText}</StyledError>}
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

const StyledConfirm = styled.span`
  font-weight: 500;
  margin-left: 10px;
  color: green;
`;

const StyledError = styled.span`
  font-weight: 500;
  margin-left: 10px;
  color: red;
`;

const StyledSubText = styled.p<any>`
  color: #a7a7a7;
  font-size: 0.8em;
`;
