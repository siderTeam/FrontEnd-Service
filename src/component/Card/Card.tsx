"use client";

import styled from "@emotion/styled";
import { CardProps } from "@/type/types";

//title, onClick, position, startDate, endDate, deposit, period

//소요기간 계산 함수
const PeriodDate = (start: string, end: string): number => {
  const sDate: Date = new Date(start);
  const eDate: Date = new Date(end);
  //종료일 포함하는가????????
  return (eDate.getTime() - sDate.getTime()) / (1000 * 3600 * 24) + 1;
}

const Card = ({
  title,
  startDate,
  endDate,
  deposit,
  children,
  style,
}: CardProps) => {
  const days = PeriodDate(startDate, endDate); //소요기간

  return (
    <Container>
      <CardTop>
        <Title className="card-title">{title}</Title>
        <Position>{children}</Position>
      </CardTop>
      <CardBottom>
        <SpaceBetweenWrap>
          <SubTitle>프로젝트 기간</SubTitle>
          <DateWrap>
            {startDate.replace(/-/g, ".")} ~ {endDate.replace(/-/g, ".")}
          </DateWrap>
        </SpaceBetweenWrap>
        <SpaceBetweenWrap>
          <div>
            <SubTitle>보증금</SubTitle>
            <BottomData>{deposit}</BottomData>
          </div>
          <div>
            <SubTitle>소요기간</SubTitle>
            <BottomData>{days}일</BottomData>
          </div>
        </SpaceBetweenWrap>
      </CardBottom>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  cursor: pointer;
  display: flex;
  width: 376px;
  padding: 20px;
  //box-sizing: border-box;
  flex-direction: column;
  gap: 52px;

  border-radius: 14px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);

  &:hover {
    background: #fff;
    box-shadow: 4px 4px 20px 0px rgba(111, 140, 176, 0.41),
      -6px -6px 20px 0px rgba(255, 255, 255, 0.5),
      2px 2px 4px 0px rgba(114, 142, 171, 0.1);
  }

  &:hover .card-title {
    color: #0066ff;
  }
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const Title = styled.div`
  color: var(--txt-main, #1e1e20);
  font-family: Pretendard;
  font-size: 22px;
  font-weight: 700;
`;

const Position = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-self: stretch;
`;

const SpaceBetweenWrap = styled.div`
  display: flex;
  justify-content: space-between;

  color: #000;
  font-family: Pretendard;
`;

const SubTitle = styled.span`
  color: #515151;
  font-size: 16px;
  font-weight: 400;
`;

const DateWrap = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const BottomData = styled.span`
  margin-left: 8px;

  font-size: 22px;
  font-weight: 600;
`;
