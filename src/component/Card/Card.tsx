"use client";

import styled from "@emotion/styled";
import { CardProps } from "@/type/types";
import Image from "next/image";
import Profile from "../Profile/Profile";
import * as CS from "../Styles/CommonStyles";

const ProjectCard = ({
  title,
  startDate,
  endDate,
  deposit,
  style,
}: CardProps) => {
  return (
    <Container>
      <div className="subTitle">모집 마감일 8888.88.88</div>
      <div className="skillWrap">
        <Image
          src={"/images/skillIcons/figma.png"}
          alt="profile"
          width={32}
          height={32}
        />
      </div>
      <h1 className="title">{title}</h1>
      <SubInfo>
        <div className="info">
          <div className="subTitle">프로젝트 기간</div>
          <div className="projectDate">
            {startDate.replace(/-/g, ".")}~{endDate.replace(/-/g, ".")}
          </div>
        </div>
        <div className="info">
          <div className="subTitle">보증금</div>
          <div className="deposit">{deposit.toLocaleString()}원</div>
        </div>
      </SubInfo>
      <Profile />
    </Container>
  );
};

export default ProjectCard;

const Container = styled.div`
  width: 296px;
  height: 325px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #89192b;

  .subTitle {
    color: ${CS.color.gray5};
    font-size: 12px;
    font-weight: 400;
  }

  .skillWrap {
    height: 72px;
    margin: 24px 0 28px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .title {
    height: 40px;
    color: ${CS.color.white};
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 16px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .projectDate {
    color: ${CS.color.gray2};
    font-size: 12px;
    font-weight: 500;
  }

  .deposit {
    color: ${CS.color.gray3};
    font-size: 12px;
    font-weight: 700;
  }
`;
