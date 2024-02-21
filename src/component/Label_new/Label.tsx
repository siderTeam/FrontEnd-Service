"use client";

import styled from "@emotion/styled";

import { LabelProps } from "@/types/types";

const Label = ({
  label,
  require,
  subText,
  style,
  children,
  isValid,
}: LabelProps) => {
  return (
    <Container>
      <StyledLabel style={style} location={location}>
        {label}
        {require && <StyledRequire>{require}</StyledRequire>}
        {children}
      </StyledLabel>
      {subText && (
        <StyledSubText location={location} isValid={isValid}>
          {subText}
        </StyledSubText>
      )}
    </Container>
  );
};
export default Label;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label<any>`
  font-weight: bold;
`;

const StyledRequire = styled.span`
  color: red;
`;

const StyledSubText = styled.p<any>`
  /* color: #a7a7a7; */
  font-size: 0.8em;
  margin-left: 8px;
  color: ${({ isValid }) => (isValid === true ? "green" : "red")};
`;
