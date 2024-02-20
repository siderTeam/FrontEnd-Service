import styled from "@emotion/styled";

import Label from "../Label_new/Label";
import SelectBox from "../SelectBox_new/SelectBox";

import {
  SelectBoxProps,
  LABELINPUT_STYLE_PROPS,
  LabelProps,
} from "@/types/types";

type LabelSelectProps = {
  labelOption: LabelProps;
  selectOption: SelectBoxProps;
  location?: "left" | "top";
  style?: React.CSSProperties;
};

const LabelSelect = ({
  labelOption,
  selectOption,
  location = "left",
  style,
}: LabelSelectProps) => {
  return (
    <>
      <Container location={location} style={style}>
        <Label {...labelOption} />
        <SelectBox {...selectOption} />
      </Container>
    </>
  );
};

export default LabelSelect;

const CONTAINER_TYPE = {
  ["left"]: {
    alignItems: "center",
  },
  ["top"]: {
    flexDirection: "column",
  },
};

const Container = styled.div<LABELINPUT_STYLE_PROPS>`
  display: flex;
  gap: 10px;
  ${({ location }) => CONTAINER_TYPE[location as "left"]};
`;
