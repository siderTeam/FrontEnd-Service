"use client";

import { CardProps } from "@/types/types";
import styled from "@emotion/styled";
import Profile from "../Profile/Profile";
import * as CS from "../Styles/CommonStyles";

const Card = ({
  children,
  id,
  title = "날아라 사이드킥",
  projectPeriod = "2024.01.20 ~ 2024.02.20",
  deposit = "10만원",
  necessaryPeriod = "20일",
}: CardProps) => {
  return (
    <>
      <CardContainer id={id}>
        <TopInfo>
          <div className='commonText'>모집 마감일 {projectPeriod}</div>
        </TopInfo>

        <PositionIconWrap>{children}</PositionIconWrap>

        <TitleStyle className='title'>{title}</TitleStyle>

        <InfoWrap>
          <ProjectPeriodWrap>
            <div className='commonText'>프로젝트 기간</div>
            <div className='projectPeriod'>{projectPeriod}</div>
          </ProjectPeriodWrap>

          <DepositWrap>
            <div className='commonText'>보증금</div>
            <div className='deposit'>{deposit}</div>
          </DepositWrap>
        </InfoWrap>

        <Profile />
      </CardContainer>
    </>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 296px;
  height: 325px;
  padding: 20px;

  box-sizing: border-box;

  border-radius: 10px;
  border: 1px solid #89192b;
  background: ${CS.color.black};

  &:hover {
    cursor: pointer; //

    .title {
    }
  }

  .commonText {
    overflow: hidden;
    color: ${CS.color.gray5};
    text-overflow: ellipsis;
    font-family: "Spoqa Han Sans Neo";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const TopInfo = styled.div`
  display: flex;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const TitleStyle = styled.div`
  display: -webkit-box;
  width: 236px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  overflow: hidden;
  color: ${CS.color.white};
  text-overflow: ellipsis;
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const PositionIconWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const InfoWrap = styled.div`
  display: flex;
  gap: 65px;
`;

const ProjectPeriodWrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  .projectPeriod {
    overflow: hidden;
    color: ${CS.color.gray2};
    text-align: right;
    text-overflow: ellipsis;
    font-family: "Spoqa Han Sans Neo";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const DepositWrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  .deposit {
    overflow: hidden;
    color: ${CS.color.gray3};
    text-overflow: ellipsis;
    font-family: "Spoqa Han Sans Neo";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
