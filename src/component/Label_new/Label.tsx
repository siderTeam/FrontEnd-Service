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
  color: #fff;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StyledRequire = styled.span`
  color: var(--BRAND-BRAND_MAIN, #01ff1a);

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StyledSubText = styled.p<any>`
  /* color: #a7a7a7; */
  font-size: 0.8em;
  margin-left: 8px;
  color: ${({ isValid }) => (isValid === true ? "green" : "red")};
`;
