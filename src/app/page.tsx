"use client";

import { getProject } from "@/api/api";
import { rest } from "@/api/rest";
import Card from "@/components/Card/Card";

import Input from "@/components/Input/Input";
import PositionIcon from "@/components/PositionIcon/PositionIcon";
import Profile from "@/components/Profile/Profile";
import { color } from "@/styles/color";

import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Page = () => {
  const [filterType, setFilterType] = useState("all");

  const { data, isLoading } = useQuery({
    queryKey: [rest.get.project],
    queryFn: getProject,
  });

  const handleFilterClick = (type: any) => {
    setFilterType(type);
  };

  return (
    <Container>
      <Header>
        <img src="/images/Logo.svg" alt="로고" className="logo" />
        <Profile />
      </Header>
      <div className="banner">배너</div>
      <div className="title">프로젝트</div>
      <FilterWrap>
        <div className="buttonWrap">
          <div
            className={filterType === "all" ? "choice" : "basic"}
            onClick={() => handleFilterClick("all")}
          >
            #전체
          </div>
          <div
            className={filterType === "design" ? "choice" : "basic"}
            onClick={() => handleFilterClick("design")}
          >
            #디자인
          </div>
          <div
            className={filterType === "pm" ? "choice" : "basic"}
            onClick={() => handleFilterClick("pm")}
          >
            #기획
          </div>
          <div
            className={filterType === "develop" ? "choice" : "basic"}
            onClick={() => handleFilterClick("develop")}
          >
            #개발
          </div>
          <div
            className={filterType === "recruitment" ? "choice" : "basic"}
            onClick={() => handleFilterClick("recruitment")}
          >
            #모집중
          </div>
        </div>
        <Input />
      </FilterWrap>
      <CardContainer>
        <Imsi>
          {data?.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              // projectPeriod={`${item.recruitStartDate}~${item.recruitEndDate}`}
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
      </CardContainer>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  max-width: 1920px;
  height: 2561px;

  .banner {
    width: 1280px;
    height: 400px;
    flex-shrink: 0;

    margin-bottom: 64px;

    background: linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0) 100%),
      url("/images/다운로드.jpg"),
      lightgray 0px -234.525px / 100% 292.86% no-repeat;
  }
  .title {
    color: ${color.gray.gray3};
    font-family: "Spoqa Han Sans Neo";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-bottom: 24px;
  }
`;

const Header = styled.div`
  display: inline-flex;
  height: 124px;
  padding: 42px 0px;
  justify-content: center;
  align-items: flex-start;
  gap: 1039px;
  flex-shrink: 0;
  box-sizing: border-box;

  .logo {
    width: 60px;
    height: 33.623px;
    flex-shrink: 0;
  }
`;

const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;

  .buttonWrap {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    .basic {
      display: flex;
      padding: 6px 17px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 34px;
      border: 1px solid ${color.gray.gray8};
      background: ${color.gray.black};
      color: ${color.gray.gray6};
      font-family: "Spoqa Han Sans Neo";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      cursor: pointer;
    }
    .choice {
      display: flex;
      padding: 6px 17px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 34px;
      border: 1px solid ${color.brand.brandMain};
      background: ${color.gray.black};
      color: ${color.brand.brandMain};
      font-family: "Spoqa Han Sans Neo";
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      cursor: pointer;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
`;

const Imsi = styled.div`
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

  gap: 40px 32px;
  margin-top: 24px;
`;
