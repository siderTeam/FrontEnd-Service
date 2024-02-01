"use client";

import Card from "@/components/Card/Card";

import styled from "@emotion/styled";
import PositionIcon from "@/components/PositionIcon/PositionIcon";
import Button from "@/components/Button_new/Button";
import Input from "@/components/Input_new/Input";
import { useState } from "react";

const data = [
  {
    id: "1",
    title: "사이드1",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "projectManager", "feDeveloper", "beDeveloper"],
  },
  {
    id: "2",
    title: "사이드2",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "projectManager", "beDeveloper"],
  },
  {
    id: "3",
    title: "사이드3",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["feDeveloper", "beDeveloper"],
  },
  {
    id: "4",
    title: "사이드4",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "feDeveloper", "beDeveloper"],
  },
  {
    id: "5",
    title: "사이드5",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "feDeveloper", "beDeveloper"],
  },
  {
    id: "5",
    title: "사이드5",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "feDeveloper", "beDeveloper"],
  },
  {
    id: "5",
    title: "사이드5",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "feDeveloper", "beDeveloper"],
  },
  {
    id: "5",
    title: "사이드5",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "feDeveloper", "beDeveloper"],
  },
  {
    id: "5",
    title: "사이드5",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "feDeveloper", "beDeveloper"],
  },
  {
    id: "5",
    title: "사이드5",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "feDeveloper", "beDeveloper"],
  },
  {
    id: "5",
    title: "사이드5",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "feDeveloper", "beDeveloper"],
  },
  {
    id: "5",
    title: "사이드5",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "feDeveloper", "beDeveloper"],
  },
  {
    id: "5",
    title: "사이드5",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "feDeveloper", "beDeveloper"],
  },
  {
    id: "5",
    title: "사이드5",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "feDeveloper", "beDeveloper"],
  },
];

const page = () => {
  const [filterType, setFilterType] = useState("develop");

  const handleClickAll = () => {
    setFilterType("all");
  };

  const handleClickDesign = () => {
    setFilterType("design");
  };

  const handleClickPlan = () => {
    setFilterType("plan");
  };

  const handleClickDevelop = () => {
    setFilterType("develop");
  };

  console.log(filterType);

  return (
    <HomeStyle>
      {/* <RightSection> */}
      <Title>사이드플젝</Title>
      <ButtonWrap>
        <Button
          size={filterType === "all" ? "basic-choice" : "basic"}
          mode={filterType === "all" ? "basic-choice" : "basic"}
          type='all'
          onClick={handleClickAll}
        >
          전체
        </Button>
        <Button
          size={filterType === "design" ? "basic-choice" : "basic"}
          mode={filterType === "design" ? "basic-choice" : "basic"}
          src='images/positionicon/designericon.png'
          type='design'
          onClick={handleClickDesign}
        >
          디자인
        </Button>
        <Button
          size={filterType === "plan" ? "basic-choice" : "basic"}
          mode={filterType === "plan" ? "basic-choice" : "basic"}
          src='images/positionicon/plannericon.png'
          type='plan'
          onClick={handleClickPlan}
        >
          기획
        </Button>
        <Button
          size={filterType === "develop" ? "basic-choice" : "basic"}
          mode={filterType === "develop" ? "basic-choice" : "basic"}
          src='images/positionicon/developericon.png'
          type='develop'
          onClick={handleClickDevelop}
        >
          개발
        </Button>
        <Input placeholder='프로젝트 검색' />
      </ButtonWrap>
      <ImsiContainer>
        <Imsi>
          {data.map((item, idx) => (
            <Card
              id={item.id}
              title={item.title}
              projectPeriod={item.projectPeriod}
              deposit={item.deposit}
              necessaryPeriod={item.necessaryPeriod}
            >
              {item.position.map((position, positionIdx) => (
                <PositionIcon
                  key={positionIdx}
                  color={position}
                  icon={position}
                />
              ))}
            </Card>
          ))}
        </Imsi>
      </ImsiContainer>
      {/* </RightSection> */}
    </HomeStyle>
  );
};

export default page;

const HomeStyle = styled.div`
  /* position: absolute;
  left: 304px;
  top: 90px; */
`;
const ImsiContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

const Imsi = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

const ButtonWrap = styled.div`
  display: inline-flex;
  margin: 21px 0 24px 0;
  align-items: flex-start;
  gap: 20px;
`;

const Title = styled.div`
  color: var(--txt-main, #1e1e20);
  /* font-family: Pretendard; */
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -1.12px;
`;
