"use client";

import { color } from "@/styles/color";
import { CHECKBOX_TYPE_PROPS, CheckboxProps } from "@/types/types";
import styled from "@emotion/styled";

const Checkbox = ({
  text,
  type = "unchecked",
  requireText,
  name,
  className,
  onChange,
  onClick,
  style,
  requireStyle,
}: CheckboxProps) => {
  return (
    <Container>
      <StyledCheckbox
        type={type}
        // name={name}
        onChange={onChange}
        onClick={onClick}
        style={style}
        className={className}
      />
      <StyledLabel>{text}</StyledLabel>
      {requireText && (
        <StyledRequire style={requireStyle}>{requireText}</StyledRequire>
      )}
    </Container>
  );
};

export default Checkbox;

const CHECKBOX_TYPE = {
  ["unchecked"]: {
    background: 'url("/images/checkbox/UnChecked.svg")',
  },
  ["hover"]: { background: 'url("/images/checkbox/Hover.svg")' },
  ["checked"]: { background: 'url("/images/checkbox/Checked.svg")' },
  ["disabled"]: { background: 'url("/images/checkbox/Disabled.svg")' },
  ["disabledCheck"]: {
    background: 'url("/images/checkbox/DisabledCheck.svg")',
  },
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCheckbox = styled.div<CHECKBOX_TYPE_PROPS>`
  ${({ type }) => CHECKBOX_TYPE[type as keyof typeof CHECKBOX_TYPE]};

  width: 16px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;

  margin-right: 8px;

  &:hover {
    ${({ type }) => (type === "unchecked" ? CHECKBOX_TYPE.hover : "")};
  }
`;

const StyledLabel = styled.div`
  color: ${color.gray.gray5};
  text-align: right;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledRequire = styled.div`
  font-size: 10px;
  color: ${color.secondary.error_1};

  margin-left: 4px;
`;
