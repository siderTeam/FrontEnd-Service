import styled from "@emotion/styled";

import { CheckboxProps } from "@/types/types";

const CheckBox = ({
  text,
  requireText,
  isChecked = false,
  name,
  onChange,
  style,
  requireStyle,
}: CheckboxProps) => {
  return (
    <Container>
      <StyledCheckBox
        type='checkbox'
        checked={isChecked}
        name={name}
        onChange={onChange}
        style={style}
      />
      <StyledLabel>{text}</StyledLabel>
      {requireText && (
        <StyledRequire style={requireStyle}>{requireText}</StyledRequire>
      )}
    </Container>
  );
};

export default CheckBox;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCheckBox = styled.input`
  border: 1px solid #f2f2f2;
`;

const StyledLabel = styled.div`
  font-size: 12px;
  margin-left: 4px;
`;

const StyledRequire = styled.div`
  font-size: 10px;
  color: #ff4e4e;

  margin-left: 4px;
`;
