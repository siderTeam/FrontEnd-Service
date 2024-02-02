"use client"

import styled from "@emotion/styled";
import Card from "@/component/Card/Card";
import Input from "@/component/Input/Input";
import PositionSquare from "@/component/PositionSquare/PositionSquare";
import Button from "@/component/Button/Button";

const data = [
  {
    id: 1,
    title: "프로젝트 1",
    startDate: "2024-02-01",
    endDate: "2024-02-28",
    deposit: "10만원",
    positions: ["디자이너", "기획자", "프론트엔드", "백엔드"],
  },
  {
    id: 2,
    title: "프로젝트 2",
    startDate: "2024-02-01",
    endDate: "2024-02-15",
    deposit: "15만원",
    positions: ["디자이너", "백엔드"],
  },
  {
    id: 3,
    title: "프로젝트 3",
    startDate: "2024-02-05",
    endDate: "2024-02-25",
    deposit: "20만원",
    positions: ["프론트엔드", "백엔드"],
  },
  {
    id: 4,
    title: "프로젝트 4",
    startDate: "2024-02-10",
    endDate: "2024-03-30",
    deposit: "25만원",
    positions: ["디자이너", "기획자"],
  },
  {
    id: 5,
    title: "프로젝트 5",
    startDate: "2024-03-15",
    endDate: "2024-03-25",
    deposit: "30만원",
    positions: ["백엔드"],
  },
  {
    id: 6,
    title: "프로젝트 6",
    startDate: "2024-02-20",
    endDate: "2024-03-10",
    deposit: "20만원",
    positions: ["프론트엔드"],
  },
  {
    id: 7,
    title: "프로젝트 7",
    startDate: "2024-02-25",
    endDate: "2024-03-15",
    deposit: "15만원",
    positions: ["디자이너", "백엔드"],
  },
  {
    id: 8,
    title: "프로젝트 8",
    startDate: "2024-03-30",
    endDate: "2024-04-20",
    deposit: "25만원",
    positions: ["기획자", "프론트엔드"],
  },
  {
    id: 9,
    title: "프로젝트 9",
    startDate: "2024-03-25",
    endDate: "2024-04-05",
    deposit: "30만원",
    positions: ["디자이너", "백엔드"],
  },
  {
    id: 10,
    title: "프로젝트 10",
    startDate: "2024-04-10",
    endDate: "2024-04-30",
    deposit: "20만원",
    positions: ["프론트엔드"],
  },
];

const page = () => {
  return (
    <div>
      <Title>사이드 플젝</Title>
      <Wrap>
        <ButtonWrap>
          <Button>전체</Button>
          <Button leftIcon="/images/position/designer.png">디자인</Button>
          <Button leftIcon="/images/position/pm.png">기획</Button>
          <Button leftIcon="/images/position/developer.png">개발</Button>
        </ButtonWrap>
        <Input
          type="search"
          name="input"
          placeholder="프로젝트 검색"
          size="large"
        />
      </Wrap>
      <CardWrap>
        {data.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            startDate={project.startDate}
            endDate={project.endDate}
            deposit={project.deposit}
          >
            {project.positions.map((position, index) => (
              <PositionSquare key={index} value={position} />
            ))}
          </Card>
        ))}
      </CardWrap>
    </div>
  );
};

export default page;

const Title = styled.h1`
  color: var(--txt-main, #1e1e20);
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -1.12px;
`;

const Wrap = styled.div`
  margin-top: 21px;
  display: flex;
  justify-content: space-between;
`;

const ButtonWrap = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 20px;
`;

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 18px;
  margin-top: 24px;
`;