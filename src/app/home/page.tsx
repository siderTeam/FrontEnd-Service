"use client";

import styled from "@emotion/styled";
import Card from "@/component/Card/Card";
import Input from "@/component/Input/Input";
import PositionSquare from "@/component/PositionSquare/PositionSquare";
import Button from "@/component/Button/Button";
import { useQuery } from "@tanstack/react-query";
import { rest } from "../api/rest";
import { getProject, getCode } from "../api/api";
import { useState } from "react";

const positions = ["디자이너", "기획자", "프론트엔드", "백엔드"];

const positonFilter = [
  {
    name: "디자인",
    icon: "/images/position/designer.png",
  },
  {
    name: "기획",
    icon: "/images/position/pm.png",
  },
  {
    name: "개발",
    icon: "/images/position/developer.png",
  },
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projectData = useQuery({
    queryKey: [rest.get.project],
    queryFn: getProject,
  });

  const positionData = useQuery({
    queryKey: [rest.get.code],
    queryFn: () => getCode(10, 2),
  });

  const handleFilterClick = (index: number | null) => {
    setActiveIndex((prevIndex) => (index === activeIndex ? prevIndex : index));
  };

  return (
    <Container>
      <Title>사이드 플젝</Title>
      <Wrap>
        <ButtonWrap>
          <Button
            className={activeIndex === null ? "active" : ""}
            onClick={() => handleFilterClick(null)}
          >
            전체
          </Button>
          {positionData.data?.map((item) => (
            <Button
              key={item.id}
              className={item.id === activeIndex ? "active" : ""}
              onClick={() => handleFilterClick(item.id)}
              leftIcon={
                positonFilter.find(
                  (filterItem) => filterItem.name === item.name
                )?.icon
              }
            >
              {item.name}
            </Button>
          ))}
        </ButtonWrap>
        <Input
          type="search"
          name="input"
          mode="search"
          placeholder="프로젝트 검색"
          size="large"
        />
      </Wrap>
      <CardWrap>
        {projectData.data?.map((project) => (
          <Card
            key={project.id}
            title={project.name}
            startDate={project.recruitStartDate}
            endDate={project.recruitEndDate}
            deposit={project.deposit}
          >
            {project.positionCodeList.map((position, index) => (
              <PositionSquare
                key={index}
                parent={position.parentName}
                name={position.name}
              />
            ))}
          </Card>
        ))}
      </CardWrap>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  max-width: calc(100vw - 246px - 58px - 58px);
  padding-top: 90px;
`;

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
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1750px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }

  gap: 32px 18px;
  margin-top: 24px;
`;
