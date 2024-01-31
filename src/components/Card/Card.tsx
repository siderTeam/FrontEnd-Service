"use client";

import styled from "@emotion/styled";

type CardProps = {
  children: any;
  id: string;
  title: string;
  projectPeriod: string;
  deposit: string;
  necessaryPeriod: string;
};
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
        <TitleWrap>
          <TitleStyle className='title'>{title}</TitleStyle>
          <PositionIconWrap>{children}</PositionIconWrap>
        </TitleWrap>
        <InfoWrap>
          <ProjectPeriodWrap>
            <SubTitleStyle className='period'>프로젝트 기간</SubTitleStyle>
            <DateStyle>{projectPeriod}</DateStyle>
          </ProjectPeriodWrap>
          <SecondInfoWrap>
            <DepositWrap>
              <SubTitleStyle>보증금</SubTitleStyle>
              <SubTextStyle>{deposit}</SubTextStyle>
            </DepositWrap>
            <NecessaryPeriodWrap>
              <SubTitleStyle>소요기간</SubTitleStyle>
              <SubTextStyle>{necessaryPeriod}</SubTextStyle>
            </NecessaryPeriodWrap>
          </SecondInfoWrap>
        </InfoWrap>
      </CardContainer>
    </>
  );
};

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 52px;

  width: 376px;
  padding: 20px;

  border-radius: 14px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);

  /* box-sizing: border-box; */

  &:hover {
    border-radius: 14px;
    border: 1px solid #fff;
    background: #fff;
    box-shadow: 4px 4px 20px 0px rgba(111, 140, 176, 0.41),
      -6px -6px 20px 0px rgba(255, 255, 255, 0.5),
      2px 2px 4px 0px rgba(114, 142, 171, 0.1);

    cursor: pointer; //

    .title {
      color: #06f;
      /* font-family: Pretendard; */
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const TitleStyle = styled.div`
  color: #1e1e20;
  /* font-family: Pretendard; */
  font-size: 22px;
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
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

const ProjectPeriodWrap = styled.div`
  display: flex;

  align-items: flex-start;
  align-self: stretch; //
  gap: 6px;

  .period {
    flex: 1 0 0;
  }
`;

const DateStyle = styled.div`
  width: 233px;
  flex-shrink: 0;
  color: #000;
  text-align: right;
  /* font-family: Pretendard; */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SecondInfoWrap = styled.div`
  display: flex;
  align-items: flex-end;
  align-self: stretch;
`;

const DepositWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`;

const NecessaryPeriodWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`;

const SubTitleStyle = styled.div`
  color: #515151;
  /* font-family: Pretendard; */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SubTextStyle = styled.div`
  color: #000;
  /* font-family: Pretendard; */
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
