"use client";

import styled from "@emotion/styled";

import { LabelProps } from "@/types/types";
import { LABEL_STYLE_PROPS } from "@/types/types";

const Label = ({ label, require, subText, location, style }: LabelProps) => {
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

const LABEL_TYPE = {
  ["left"]: {
    marginRight: "10px",
  },
  ["top"]: {
    marginBottom: "10px",
  },
};

const StyledLabel = styled.label<LABEL_STYLE_PROPS>`
  ${({ location }) => LABEL_TYPE[location as "left"]}
  font-weight: bold;
`;

const StyledRequire = styled.span`
  color: red;
`;

const StyledSubText = styled.p<LABEL_STYLE_PROPS>`
  ${({ location }) => LABEL_TYPE[location as "left"]}

  color: #a7a7a7;

  font-size: 0.8em;
`;
