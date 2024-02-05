"use client";

import Card from "@/component/Card/Card";
import styled from "@emotion/styled";
import Button from "@/component/Button_new/Button";
import Input from "@/component/Input_new/Input";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { rest } from "@/api/rest";
import { getCodePosition, getProject } from "@/api/api";
import PositionIcon from "@/component/PositionIcon/PositionIcon";

const projectTypeButtons = [
  { type: "전체", label: "전체" },
  {
    type: "디자인",
    label: "디자인",
    icon: "images/positionicon/designericon.png",
  },
  {
    type: "기획",
    label: "기획",
    icon: "images/positionicon/plannericon.png",
  },
  {
    type: "개발",
    label: "개발",
    icon: "images/positionicon/developericon.png",
  },
];

const ProjectPage = () => {
  const [filterType, setFilterType] = useState("전체");

  const projectData = useQuery({
    queryKey: [rest.get.project],
    queryFn: getProject,
  });

  const positionData = useQuery({
    queryKey: [rest.get.code],
    queryFn: getCodePosition,
  });

  const handleFilterClick = (type: any) => {
    setFilterType(type);
  };

  return (
    <HomeStyle>
      <Title>사이드 프로젝트</Title>

      <FilterContainer>
        <div className="button_wrap">
          <Button
            size={filterType === "전체" ? "basic-choice" : "basic"}
            mode={filterType === "전체" ? "basic-choice" : "basic"}
            type="전체"
            onClick={() => handleFilterClick("전체")}
          >
            전체
          </Button>
          {positionData.data?.map((item) => (
            <Button
              key={item.id}
              size={filterType === item.name ? "basic-choice" : "basic"}
              mode={filterType === item.name ? "basic-choice" : "basic"}
              type={item.name}
              onClick={() => handleFilterClick(item.name)}
              LeftIcon={
                projectTypeButtons.find((button) => button.label === item.name)
                  ?.icon || ""
              }
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div className="input">
          <Input placeholder="프로젝트 검색" icon={true} />
        </div>
      </FilterContainer>

      <ImsiContainer>
        <Imsi>
          {projectData.data?.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              projectPeriod={item.recruitEndDate}
              deposit={item.deposit}
              necessaryPeriod={item.count}
            >
              <PositionIcon color="designer" icon="designer" />
              <PositionIcon color="projectManager" icon="projectManager" />
              <PositionIcon color="feDeveloper" icon="feDeveloper" />
              <PositionIcon color="beDeveloper" icon="beDeveloper" />
            </Card>
          ))}
        </Imsi>
      </ImsiContainer>
    </HomeStyle>
  );
};

export default ProjectPage;

const HomeStyle = styled.div`
  padding-top: 90px;
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
