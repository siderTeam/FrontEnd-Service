"use client";

import styled from "@emotion/styled";
import { PositionSquareProps } from "@/type/types";
import Image, { StaticImageData } from "next/image";
import designer from "/public/images/position/designer.png";
import pm from "/public/images/position/pm.png";
import developer from "/public/images/position/developer.png";

//value,     icon, backgroundColor, color => 이렇게 3개는 value에 뭐가 들어오는지에 따라서 바뀌도록

const PositionSquare = ({
  parent = "개발",
  name,
  style,
}: PositionSquareProps) => {
  let src: StaticImageData;

  if (parent === "디자인") {
    src = designer;
  } else if (parent === "기획") {
    src = pm;
  } else {
    src = developer;
  }

  return (
    <StyledSquare parent={parent} style={style}>
      <Image
        src={src}
        alt={parent}
        width={14}
        height={14}
        style={{ marginRight: "4px" }}
      />
      {name}
    </StyledSquare>
  );
};

export default PositionSquare;

const COLOR_TYPE = {
  ["디자인"]: {
    background: "#FFEFFB",
    color: "#EC67C6",
  },
  ["기획"]: {
    background: "#F1E0FE",
    color: "#B35FF5",
  },
  ["개발"]: {
    background: "#E3F7E7",
    color: "#58BF66",
  },
  // [""]: {
  //   background: "#CBE0FF",
  //   color: "#4F75ED",
  // },
};

const StyledSquare = styled.span<{parent: string}>`
  ${({ parent }) => COLOR_TYPE[parent as "개발"]};
  box-sizing: border-box;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;

  align-items: center;
  display: inline-flex;

  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
