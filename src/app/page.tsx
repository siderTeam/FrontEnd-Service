'use client';

import { rest } from '@/api/rest';
import Card from '@/components/Card/Card';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import SelectInput from '@/components/SelectInput/SelectInput';
import Image from 'next/image';
import { getProject } from '@/api/project/api';
import PositionModal from '@/components/PositionModal/PositionModal';
import useHandleModal from '@/hook/useHandleModal';
import { OPTION_TYPE } from '@/components/SelectBox/SelectBox';
import SkillModal, { SKILL_TYPE } from '@/components/SkillModal/SkillModal';
import { PROJECT_REQUEST } from '@/api/project/model';
import { PROJECT_STATUS } from 'public/lib/enum';

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

const initialParams = {
  page: 1,
  size: 20,
  keyword: null,
  positionCode: null,
  skillCode: null,
  status: null,
};

const Page = () => {
  const [params, setParams] = useState(initialParams);
  const [filterType, setFilterType] = useState('all');
  const [select, setSelect] = useState('제목');
  const { handleModal, handleModalClose, visible } = useHandleModal(false);
  const { handleModal: handleSkillModal, handleModalClose: handleModalCloseSkill, visible: skillModalVisible } = useHandleModal(false);
  const [positionCodeList, setPositionCodeList] = useState<OPTION_TYPE[]>([]);
  const [skillList, setSkillList] = useState<SKILL_TYPE[]>([]);

  const { data } = useQuery({
    queryKey: [rest.get.project, params],
    queryFn: ({ queryKey }) => getProject(queryKey[1] as unknown as PROJECT_REQUEST),
  });

  const handleFilterClick = (type: string) => {
    setFilterType(type);
    setParams(initialParams);
  };

  const handleRecruitingClick = (type: string) => {
    setParams({
      ...params,
      status: PROJECT_STATUS.RECRUITING,
    });
    setFilterType(type);
  };

  const handleClickChoice = (callback: OPTION_TYPE[] | SKILL_TYPE[], type?: 'skill' | 'position') => {
    if (type === 'skill') {
      setSkillList(callback as SKILL_TYPE[]);
      handleModalCloseSkill();
      setFilterType(type);
    } else if (type === 'position') {
      setPositionCodeList(callback as OPTION_TYPE[]);
      handleModalClose();
      setFilterType(type);
    }
  };

  useEffect(() => {
    if (skillList.length > 0) {
      setParams({
        ...params,
        skillCode: skillList[0].id,
      });
    }
  }, [skillList]);

  useEffect(() => {
    if (positionCodeList.length > 0) {
      setParams({
        ...params,
        positionCode: positionCodeList[0].value,
      });
    }
  }, [positionCodeList]);

  const handleJobSelectChange = (name: string, value: string) => {
    setSelect(value);
  };

  return (
    <Container>
      <div className="banner">배너</div>

      <div className="title">새로 등록된 프로젝트</div>

      <CardContainer>
        <Imsi>
          {data?.map((item) => (
            <Card key={item.id} title={item.name} startDate={item.recruitStartDate} endDate={item.recruitEndDate} deposit={item.deposit} />
          ))}
        </Imsi>
      </CardContainer>

      <div className="title">프로젝트</div>
      <FilterWrap>
        <div className="filter-wrap">
          <div className={filterType === 'all' ? 'choice' : 'basic'} onClick={() => handleFilterClick('all')}>
            전체
          </div>
          <div className={filterType === 'recruiting' ? 'choice' : 'basic'} onClick={() => handleRecruitingClick('recruiting')}>
            모집중인 프로젝트만 보기
          </div>
          <div className={filterType === 'position' ? 'choice' : 'basic'} onClick={handleModal}>
            {positionCodeList.length === 0
              ? '포지션'
              : positionCodeList
                  .map((item) => item.label)
                  .join(', ')
                  .slice(0, 10) + '...'}
            <Image src="/images/arrow/arrow_down.svg" width={16} height={16} alt="arrow" />
          </div>
          <div className={filterType === 'skill' ? 'choice' : 'basic'} onClick={handleSkillModal}>
            {skillList.length === 0
              ? '스킬'
              : skillList
                  .map((item) => item.name)
                  .join(', ')
                  .slice(0, 30) + '...'}

            <Image src="/images/arrow/arrow_down.svg" width={16} height={16} alt="arrow" />
          </div>
        </div>

        <SelectInput options={SEARCH_ARRAY} name="select" onChange={handleJobSelectChange} value={select} placeholder={select} />
      </FilterWrap>
      <CardContainer>
        <Imsi>
          {data?.map((item) => (
            <Card key={item.id} title={item.name} startDate={item.recruitStartDate} endDate={item.recruitEndDate} deposit={item.deposit} />
          ))}
        </Imsi>
      </CardContainer>
      <PositionModal visible={visible} onClose={handleModalClose} onClickChoice={handleClickChoice} />
      <SkillModal visible={skillModalVisible} onClose={handleModalCloseSkill} onClickChoice={handleClickChoice} />
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

const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;

  .filter-wrap {
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
