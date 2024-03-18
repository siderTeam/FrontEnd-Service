import styled from "@emotion/styled";

import Label from "../Label/Label";
import SelectBox, { SelectBoxProps } from "../SelectBox/SelectBox";

import {
  LABELINPUT_STYLE_PROPS,
  LabelProps,
} from "@/types/types";

type LabelSelectProps = {
  labelOption: LabelProps;
  selectOption: SelectBoxProps<{ label: string; value: string}>;
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
