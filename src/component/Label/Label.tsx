"use client";

import styled from "@emotion/styled";
import { LabelProps } from "@/type/types";
import { color } from "../../Styles/CommonStyles";

const Label = ({
  location = "left",
  label,
  require,
  subText,
  children,
  style,
}: LabelProps) => {
  return (
    <Container location={location} style={style}>
      <StyledLabel style={style} location={location}>
        {label}
        {require && <StyledRequire>{require}</StyledRequire>}
      </StyledLabel>
      {subText && <StyledSubText location={location}>{subText}</StyledSubText>}
      {children}
    </Container>
  );
};
export default Label;

const CONTAINER_TYPE = {
  ["left"]: {
    alignItems: "center",
  },
  ["top"]: {
    flexDirection: "column",
    gap: "4px",
  },
};

const Container = styled.div<{ location: string }>`
  display: flex;
  gap: 10px;
  ${({ location }) => CONTAINER_TYPE[location as "left"]};
`;

const StyledLabel = styled.label<any>`
  color: ${color.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StyledRequire = styled.span`
  color: ${color.brandMain};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StyledSubText = styled.p<any>`
  color: #a7a7a7;
  font-size: 0.8em;
`;
