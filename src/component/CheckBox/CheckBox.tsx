import styled from "@emotion/styled";

import { CheckboxProps } from "@/type/types";
import * as CS from "../Styles/CommonStyles";

const CheckBox = ({
  text,
  requireText,
  isChecked = false,
  disabled = false,
  name,
  onChange,
  style,
  requireStyle,
}: CheckboxProps) => {
  return (
    <Container>
      <StyledCheckBox
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
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

const Container = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledCheckBox = styled.input`
  background-image: url("/images/checkbox/UnChecked.svg");
  width: 16px;
  height: 16px;
  margin: 0 8px 0 0;
  appearance: none; /* 기본 체크박스 스타일 제거 */

  &:hover {
    background-image: url("/images/checkbox/Hover.svg");
  }

  &:checked {
    background-image: url("/images/checkbox/Checked.svg");
  }

  &:disabled {
    background-image: url("/images/checkbox/Disabled.svg");
  }

  &:disabled:checked {
    background-image: url("/images/checkbox/DisabledCheck.svg");
  }
`;

const StyledLabel = styled.div`
  color: ${CS.color.gray5};
  text-align: right;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledRequire = styled.div`
  color: ${CS.color.gray6};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
