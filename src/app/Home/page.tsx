"use client";

import Card from "@/components/Card/Card";
import styled from "@emotion/styled";
import Button from "@/components/Button_new/Button";
import Input from "@/components/Input_new/Input";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { rest } from "@/api/rest";
import { getProejct } from "@/api/api";
import PositionIcon from "@/components/PositionIcon/PositionIcon";

const page = () => {
  const { data } = useQuery({
    queryKey: [rest.get.proejct],
    queryFn: getProejct,
  });

  console.log(data);

  const [filterType, setFilterType] = useState("all");

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
      <Title>사이드 프로젝트</Title>

      <FilterContainer>
        <div className='button_wrap'>
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
        </div>
        <div className='input'>
          <Input placeholder='프로젝트 검색' />
        </div>
      </FilterContainer>

      <ImsiContainer>
        <Imsi>
          {data?.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              projectPeriod={item.recruitEndDate}
              deposit={item.deposit}
              necessaryPeriod={item.count}
            >
              <PositionIcon color='designer' icon='designer' />
              <PositionIcon color='projectManager' icon='projectManager' />
              <PositionIcon color='feDeveloper' icon='feDeveloper' />
              <PositionIcon color='beDeveloper' icon='beDeveloper' />
              {/* {item.position.map((position, positionIdx) => (
                <PositionIcon
                  key={positionIdx}
                  color={position}
                  icon={position}
                />
              ))} */}
            </Card>
          ))}
        </Imsi>
      </ImsiContainer>
    </HomeStyle>
  );
};

export default page;

const HomeStyle = styled.div`
  padding-top: 90px;
  /* padding-right: 58px; */

  max-width: calc(100vw - 246px - 58px - 58px);
`;
const ImsiContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
`;

const Imsi = styled.div`
  max-width: 1920px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 18px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;

  .button_wrap {
    display: flex;
    gap: 15px;
    flex: 1;
  }
  @media (max-width: 1486px) {
    flex-direction: column;
  }
  .input {
    @media (max-width: 1486px) {
      margin-top: 10px;
    }
  }
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 21px;
  font-weight: bold;
`;
