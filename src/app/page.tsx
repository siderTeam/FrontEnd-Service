'use client';

import { rest } from '@/api/rest';
import Card from '@/components/Card/Card';
import PositionIcon from '@/components/PositionIcon/PositionIcon';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import SelectInput from '@/components/SelectInput/SelectInput';
import Image from 'next/image';
import { getProject } from '@/api/project/api';

const SEARCH_ARRAY = [
  {
    label: '제목',
    value: 1,
  },
  {
    label: '내용',
    value: 2,
  },
  {
    label: '제목+내용',
    value: 3,
  },
];

const Page = () => {
  const [filterType, setFilterType] = useState('all');
  const [select, setSelect] = useState('제목');

  const projectData = useQuery({
    queryKey: [rest.get.project],
    queryFn: getProject,
  });

  const handleFilterClick = (type: any) => {
    setFilterType(type);
  };

  const handleJobSelectChange = (name: string, value: string) => {
    setSelect(value);
  };

  return (
    <Container>
      <div className="banner">배너</div>

      <div className="title">새로 등록된 프로젝트</div>

      <CardContainer>
        <Imsi>
          {projectData.data?.map((item) => (
            <Card key={item.id} title={item.name} startDate={item.recruitStartDate} endDate={item.recruitEndDate} deposit={item.deposit}>
              <PositionIcon color="designer" icon="designer" />
              <PositionIcon color="projectManager" icon="projectManager" />
              <PositionIcon color="feDeveloper" icon="feDeveloper" />
              <PositionIcon color="beDeveloper" icon="beDeveloper" />
            </Card>
          ))}
        </Imsi>
      </CardContainer>

      <div className="title">프로젝트</div>
      <FilterWrap>
        <div className="buttonWrap">
          <div className={filterType === 'all' ? 'choice' : 'basic'} onClick={() => handleFilterClick('all')}>
            전체
          </div>
          <div className={filterType === 'recruiting' ? 'choice' : 'basic'} onClick={() => handleFilterClick('recruiting')}>
            모집중인 프로젝트만 보기
          </div>
          <div className={filterType === 'position' ? 'choice' : 'basic'} onClick={() => handleFilterClick('position')}>
            포지션
            {/* <Image src="/images/arrow/arrow_down.svg" width={16} height={16} alt="arrow" /> */}
          </div>
          <div className={filterType === 'skill' ? 'choice' : 'basic'} onClick={() => handleFilterClick('skill')}>
            스킬
            {/* <Image src="/images/arrow/arrow_down.svg" width={16} height={16} alt="arrow" /> */}
          </div>
        </div>

        <SelectInput options={SEARCH_ARRAY} name="select" onChange={handleJobSelectChange} value={select} placeholder={select} />
      </FilterWrap>
      <CardContainer>
        <Imsi>
          {projectData.data?.map((item) => (
            <Card key={item.id} title={item.name} startDate={item.recruitStartDate} endDate={item.recruitEndDate} deposit={item.deposit}>
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
  max-width: 1280px;
  margin: 0 auto;

  .banner {
    width: 1280px;
    height: 400px;
    flex-shrink: 0;

    margin-bottom: 64px;

    background: linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0) 100%), url('/images/다운로드.jpg'), lightgray 0px -234.525px / 100% 292.86% no-repeat;
  }
  .title {
    color: ${color.gray.gray3};

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
  gap: 810px;
  flex-shrink: 0;
  box-sizing: border-box;

  .logo {
    width: 170px;
    height: 47px;
  }

  .profile-wrap {
    display: flex;
    align-items: center;
    gap: 16px;
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

      font-size: 16px;

      font-weight: 400;

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

      font-size: 16px;

      font-weight: 700;

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
