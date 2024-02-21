"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { rest } from "../api/rest";
import { getProject } from "../api/api";
import { useState } from "react";
import Card from "@/component/Card/Card";
import Input from "@/component/Input/Input";
import Profile from "@/component/Profile/Profile";
import { color } from "../../Styles/CommonStyles";

const Page = () => {
  const [positionCode, setPositionCode] = useState<number | null>(null);
  const [inputText, setInputText] = useState("");
  const [keyword, setKeyword] = useState<string | null>(null);

  //프로젝트 데이터
  const projectData = useQuery({
    queryKey: [rest.get.project, positionCode, keyword],
    queryFn: () => getProject(positionCode, keyword),
  });

  //포지션 필터 onClick
  const handleFilterClick = (index: number | null) => {
    setPositionCode((prevIndex) =>
      index === positionCode ? prevIndex : index
    );
  };

  //키워드 input onChange
  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  //키워드 검색 button Click
  const handleKeywordClick = () => {
    setKeyword(inputText ? inputText : null);
  };

  //키워드 검색 input Enter
  const handleKeywordEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleKeywordClick();
    }
  };

  return (
    <Container>
      <LogoProfileWrap>
        <Link href="/home">
          <Image src={"/images/logo.svg"} alt="logo" width={170} height={47} />
        </Link>
        <Profile />
      </LogoProfileWrap>
      <ImageSlider>광고 이미지</ImageSlider>
      <Title>프로젝트</Title>
      <FilterWrap>
        <div className="buttonWrap">
          <button
            className={positionCode === null ? "active" : ""}
            onClick={() => handleFilterClick(null)}
          >
            #전체
          </button>
          <button
            className={positionCode === 1 ? "active" : ""}
            onClick={() => handleFilterClick(1)}
          >
            #디자인
          </button>
          <button
            className={positionCode === 2 ? "active" : ""}
            onClick={() => handleFilterClick(2)}
          >
            #기획
          </button>
          <button
            className={positionCode === 3 ? "active" : ""}
            onClick={() => handleFilterClick(3)}
          >
            #개발
          </button>
          <button
            className={positionCode === 4 ? "active" : ""}
            onClick={() => handleFilterClick(4)}
          >
            #모집중
          </button>
        </div>
        <Input
          type="search"
          name="input"
          value={inputText}
          mode="search"
          placeholder="프로젝트 검색"
          size="large"
          onChange={handleInputChange}
          onKeyDown={handleKeywordEnter}
          onClick={handleKeywordClick}
        />
      </FilterWrap>
      <ProjectCardWrap>
        {projectData.data?.map((project) => (
          <Card
            key={project.id}
            title={project.name}
            startDate={project.recruitStartDate}
            endDate={project.recruitEndDate}
            deposit={project.deposit}
          />
        ))}
      </ProjectCardWrap>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`;

const LogoProfileWrap = styled.div`
  padding: 42px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageSlider = styled.div`
  max-width: 1280px;
  height: 400px;
  background: gray;
`;

const Title = styled.h1`
  color: ${color.gray3};
  font-size: 24px;
  font-weight: 700;
  margin: 64px 0 24px 0;
`;

const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .buttonWrap {
    display: flex;
    gap: 8px;

    button {
      cursor: pointer;
      box-sizing: border-box;
      padding: 6px 17px;
      border-radius: 34px;
      background: ${color.black};
      color: ${color.gray6};
      border: 1px solid ${color.gray8};

      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    button.active {
      background: ${color.black};
      border: 1px solid ${color.brandMain};
      color: ${color.brandMain};
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

const ProjectCardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 32px;
  margin: 36px 0;
`;
