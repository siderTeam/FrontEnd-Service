"use client";

import styled from "@emotion/styled";

type STYLE_PROPS = {
  location?: "left" | "top";
};

type Props = STYLE_PROPS & {
  children: any;
  label: string;
  require?: string;
  subText?: string;
  style?: React.CSSProperties;
};

const Label = ({
  children,
  location = "left",
  label,
  require,
  subText,
  style,
}: Props) => {
  return (
    <>
      <StyledLabel location={location} style={style}>
        {label}
        {require && <StyledRequire>{require}</StyledRequire>}
      </StyledLabel>
      {subText && <StyledsubText>{subText}</StyledsubText>}
      {children}
    </>
  );
};
export default Label;

const LOCAION_TYPE = {
  ["left"]: {
    verticalAlign: "top",
  },
  ["top"]: {
    display: "flex",
    marginBottom: "3px",
  },
};

const StyledLabel = styled.label<STYLE_PROPS>`
  ${({ location }) => LOCAION_TYPE[location as "left"]};
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
