"use client";

import styled from "@emotion/styled";
import Label from "@/components/Label/Label";
import TextArea from "@/components/TextArea/TextArea";
import { LABELTEXTAREA_STYLE_PROPS } from "@/types/types";
import { LabelTextAreaProps } from "@/types/types";

const LabelTextArea = ({
  location = "left",
  label,
  require,
  subText,
  labelStyle,

  size = "medium",
  textAreaStyle,
  ...rest
}: LabelTextAreaProps) => {
  return (
    <Container location={location}>
      <Label
        label={label}
        require={require}
        subText={subText}
        style={labelStyle}
      />
      <TextArea size={size} style={textAreaStyle} {...rest} />
    </Container>
  );
};
export default LabelTextArea;

const LOCATION_TYPE = {
  ["left"]: {
    display: "flex",
  },
  ["top"]: {
    display: "flex",
    flexDirection: "column",
  },
};

const Container = styled.div<LABELTEXTAREA_STYLE_PROPS>`
  ${({ location }) => LOCATION_TYPE[location as "left"]}
`; 
