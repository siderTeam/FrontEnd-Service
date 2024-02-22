"use client";

import styled from "@emotion/styled";
import * as CS from "../../Styles/CommonStyles";
import { RADIO_BUTTON_TYPE_PROPS, RadioButtonProps } from "@/types/types";

const Radio = ({
  text,
  type = "unchecked_Big",
  requireText,
  name,
  className,
  onChange,
  onClick,
  style,
  requireStyle,
}: RadioButtonProps) => {
  return (
    <Container>
      <StyledRadio
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

export default Radio;

const RADIO_TYPE = {
  ["unchecked_Big"]: {
    background: 'url("/images/radio/UnChecked_Big.svg")',
    width: "20px",
    height: "20px,",
  },
  ["unchecked_Small"]: {
    background: 'url("/images/radio/UnChecked_Small.svg")',
    width: "16px",
    height: "16px,",
  },
  ["hover_Big"]: {
    background: 'url("/images/radio/Hover_Big.svg")',
    width: "20px",
    height: "20px",
  },
  ["hover_Small"]: {
    background: 'url("/images/radio/Hover_Small.svg")',
    width: "16px",
    height: "16px,",
  },
  ["checked_Big"]: {
    background: 'url("/images/radio/Checked_Big.svg")',
    width: "20px",
    height: "20px,",
  },
  ["checked_Small"]: {
    background: 'url("/images/radio/Checked_Small.svg")',
    width: "16px",
    height: "16px,",
  },
  ["disabled_Big"]: {
    background: 'url("/images/radio/Disabled_Big.svg")',
    width: "20px",
    height: "20px,",
  },
  ["disabled_Small"]: {
    background: 'url("/images/radio/Disabled_Small.svg")',
    width: "16px",
    height: "16px,",
  },
  ["disabledCheck_Big"]: {
    background: 'url("/images/radio/DisabledCheck_Big.svg")',
    width: "20px",
    height: "20px,",
  },
  ["disabledCheck_Small"]: {
    background: 'url("/images/radio/DisabledCheck_Big.svg")',
    width: "16px",
    height: "16px,",
  },
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledRadio = styled.div<RADIO_BUTTON_TYPE_PROPS>`
  ${({ type }) => RADIO_TYPE[type as keyof typeof RADIO_TYPE]};

  flex-shrink: 0;
  cursor: pointer;

  margin-right: 12px;

  &:hover {
    ${({ type }) => (type === "unchecked_Big" ? RADIO_TYPE.hover_Big : "")};
  }
`;

const StyledLabel = styled.div`
  color: ${CS.color.white};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledRequire = styled.div`
  color: ${CS.color.gray6};
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
