import styled from "@emotion/styled";

import Input from "../Input/Input";
import Label from "../Label/Label";

import { LabelInputProps } from "@/types/types";
import { LABELINPUT_STYLE_PROPS } from "@/types/types";

const LabelInput = ({
  location = "left",
  label,
  style,
  labelStyle,
  require,
  subText,

  value,
  onChange,
  readOnly,
  type,
  name,
  placeholder,
  errorText,
  inputStyle,
  rest,
  size,
  mode,
}: LabelInputProps) => {
  return (
    <Container location={location} style={style}>
      <Label
        location={location}
        label={label}
        style={labelStyle}
        require={require}
        subText={subText}
      />
      <Input
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        type={type}
        name={name}
        placeholder={placeholder}
        size={size}
        mode={mode}
        errorText={errorText}
        style={inputStyle}
        {...rest}
      />
    </Container>
  );
};

export default LabelInput;

const CONTAINER_TYPE = {
  ["left"]: {
    display: "flex",
    alignItems: "center",
  },
  ["top"]: {
    display: "flex",
    flexDirection: "column",
  },
};

const Container = styled.div<LABELINPUT_STYLE_PROPS>`
  ${({ location }) => CONTAINER_TYPE[location as "left"]}
`;
