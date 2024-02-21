"use client";

import styled from "@emotion/styled";
import { RadioProps } from "@/type/types";
import * as CS from "../Styles/CommonStyles";

const Radio = ({
  text,
  name,
  value,
  requireText,
  isChecked = false,
  disabled = false,
  size = "big",
  onChange,
  style,
}: RadioProps) => {
  return (
    <Container>
      <StyledRadio
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={onChange}
        size={size}
        style={style}
      />
      <StyledLabel>{text}</StyledLabel>
      {requireText && <StyledRequire>{requireText}</StyledRequire>}
    </Container>
  );
};

export default Radio;

const BUTTON_TYPE = {
  ["big"]: {
    width: "20px",
    height: "20px",
  },
  ["small"]: {
    width: "16px",
    height: "16px",
  },
};

const Container = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledRadio = styled.input<any>`
  ${({ size }) => BUTTON_TYPE[size as "big"]};
  background-image: url("/images/radio/UnChecked.svg");
  margin: 0 12px 0 0;
  appearance: none; /* 기본 체크박스 스타일 제거 */

  &:hover {
    background-image: url("/images/radio/Hover.svg");
  }

  &:checked {
    background-image: url("/images/radio/Checked.svg");
  }

  &:disabled {
    background-image: url("/images/radio/Disabled.svg");
  }

  &:disabled:checked {
    background-image: url("/images/radio/DisabledCheck.svg");
  }
`;

const StyledLabel = styled.div`
  color: ${CS.color.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StyledRequire = styled.div`
  color: ${CS.color.gray6};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
