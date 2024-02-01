"use client";

import styled from "@emotion/styled";
import { PositionSquareProps } from "@/type/types";
import Image, { StaticImageData } from "next/image";
import designer from "/public/images/position/designer.png";
import pm from "/public/images/position/pm.png";
import developer from "/public/images/position/developer.png";

//value,     icon, backgroundColor, color => 이렇게 3개는 value에 뭐가 들어오는지에 따라서 바뀌도록

const PositionSquare = ({ value = "디자이너", style }: PositionSquareProps) => {
  let src: StaticImageData;

  if (value === "디자이너") {
    src = designer;
  } else if (value === "기획자") {
    src = pm;
  } else {
    src = developer;
  }

  return (
    <StyledSquare value={value} style={style}>
      <Image
        src={src}
        alt={value}
        width={14}
        height={14}
        style={{ marginRight: "4px" }}
      />
      {value}
    </StyledSquare>
  );
};

export default PositionSquare;

const COLOR_TYPE = {
  ["디자이너"]: {
    background: "#FFEFFB",
    color: "#EC67C6",
  },
  ["기획자"]: {
    background: "#F1E0FE",
    color: "#B35FF5",
  },
  ["프론트엔드"]: {
    background: "#E3F7E7",
    color: "#58BF66",
  },
  ["백엔드"]: {
    background: "#CBE0FF",
    color: "#4F75ED",
  },
};

const StyledSquare = styled.span<PositionSquareProps>`
  ${({ value }) => COLOR_TYPE[value as "디자이너"]};
  box-sizing: border-box;
  padding: 4px 8px;
  border-radius: 4px;

  align-items: center;
  display: inline-flex;

  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
