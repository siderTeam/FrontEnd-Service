"use client";

import styled from "@emotion/styled";

type POSITION_PROPS = {
  color?: "designer" | "projectManager" | "feDeveloper" | "beDeveloper";
  icon?: "designer" | "projectManager" | "feDeveloper" | "beDeveloper";
};

type PositionProps = POSITION_PROPS & {
  style?: React.CSSProperties;
};

const PositionIcon = ({
  color = "designer",
  icon = "designer",
  style,
}: PositionProps) => {
  return (
    <>
      <IconContainer color={color} style={style}>
        <IconStyle icon={icon}></IconStyle>
        <TextStyle color={color}>{positionTextMap[icon]}</TextStyle>
      </IconContainer>
    </>
  );
};

export default PositionIcon;

const COLOR_TYPE = {
  ["designer"]: {
    background: "#ffeffb",
    color: "#ec67c6",
  },
  ["projectManager"]: {
    background: "#F1E0FE",
    color: "#B35FF5",
  },
  ["feDeveloper"]: {
    background: "#E3F7E7",
    color: "#58BF66",
  },
  ["beDeveloper"]: {
    background: "#CBE0FF",
    color: "#4F75ED",
  },
};

const ICON_TYPE = {
  ["designer"]: {
    background:
      'url("images/positionicon/designericon.png")  50% / cover no-repeat',
  },
  ["projectManager"]: {
    background:
      'url("images/positionicon/plannericon.png")  50% / cover no-repeat',
  },
  ["feDeveloper"]: {
    background:
      'url("images/positionicon/developericon.png")  50% / cover no-repeat',
  },
  ["beDeveloper"]: {
    background:
      'url("images/positionicon/developericon.png")  50% / cover no-repeat',
  },
};

const positionTextMap = {
  designer: "디자이너",
  projectManager: "기획자",
  feDeveloper: "프론트엔드",
  beDeveloper: "백엔드",
};

const IconContainer = styled.div<POSITION_PROPS>`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 4px;

  background: ${({ color }) => COLOR_TYPE[color as "designer"].background};
`;

const IconStyle = styled.div<POSITION_PROPS>`
  width: 14px;
  height: 14px;

  background: ${({ icon }) => ICON_TYPE[icon as "designer"].background};
`;

const TextStyle = styled.div<POSITION_PROPS>`
  color: ${({ color }) => COLOR_TYPE[color as "designer"].color};

  /* font-family: Pretendard; */
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
