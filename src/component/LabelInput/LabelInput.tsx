import styled from "@emotion/styled";

import Input from "../Input/Input";
import Label from "../Label/Label";

import { InputProps, LABELINPUT_STYLE_PROPS, LabelProps } from "@/type/types";

type LabelInputProps = {
  labelOption: LabelProps;
  inputOption: InputProps;
  location?: "left" | "top";
  style?: React.CSSProperties;
};

const LabelInput = ({
  labelOption,
  inputOption,
  location = "left",
  style,
}: LabelInputProps) => {
  return (
    <Container location={location} style={style}>
      <Label {...labelOption} />
      <Input {...inputOption} />
    </Container>
  );
};

export default LabelInput;

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