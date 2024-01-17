"use client";

import styled from "@emotion/styled";
import Label from "@/components/Label/Label";
import TextArea from "@/components/TextArea/TextArea";
import { TextareaProps, LABELTEXTAREA_STYLE_PROPS, LabelProps } from "@/types/types";

type LabelTextAreaProps = {
  labelOption: LabelProps;
  TextAreaOption: TextareaProps;
  location?: "left" | "top";
  style?: React.CSSProperties;
}

const LabelTextArea = ({
  location = "left",
  labelOption,
  TextAreaOption,
  style,
}: LabelTextAreaProps) => {
  const { value, maxLength } = TextAreaOption;

  return (
    <Container location={location} style={style}>
      <Label {...labelOption} />
      <TextArea {...TextAreaOption} />
      {maxLength && (
        <div>
          <span>{value.length}</span>
          <span> / {maxLength}</span>
        </div>
      )}
    </Container>
  );
};
export default LabelTextArea;

const LOCATION_TYPE = {
  ["left"]: {
    //flexDirection: "row",
  },
  ["top"]: {
    flexDirection: "column",
  },
};

const Container = styled.div<LABELTEXTAREA_STYLE_PROPS>`
  display: flex;
  gap: 10px;
  ${({ location }) => LOCATION_TYPE[location as "left"]}
`; 
