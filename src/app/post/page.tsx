'use client';

import { CREATE_PROJECT_REQUEST } from '@/api/project/model';
import { postCreateProject } from '@/api/project/api';

import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import PositionModal from '@/components/PositionModal/PositionModal';
import SelectBox, { OPTION_TYPE } from '@/components/SelectBox/SelectBox';
import SkillModal, { SKILL_TYPE } from '@/components/SkillModal/SkillModal';
import TextEditor from '@/components/TextEditor/TextEditor';
import useChangeDateRange from '@/hook/useChangeDateRange';
import useChangeInputs from '@/hook/useChangeInputs';
import useHandleModal from '@/hook/useHandleModal';

import { color } from '@/styles/color';
import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';
import { numExp } from 'public/regex';
import Calender from '@/components/Calendar/Calender';
import useChangeSelect from '@/hook/useChangeSelect';
import { MONTH } from 'public/static/requireJudge/static';
import { format } from 'date-fns';

const initialParams: CREATE_PROJECT_REQUEST = {
  count: '' as unknown as number,
  connect: '',
  positionCodeList: [],
  skillCodeList: [],
  recruitEndDate: '',
  month: '' as unknown as number,
  deposit: '' as unknown as number,
  requiredContentsList: [
    {
      content: '',
      point: '' as unknown as number,
    },
    {
      content: '',
      point: '' as unknown as number,
    },
    {
      content: '',
      point: '' as unknown as number,
    },
  ],
  name: '',
  content: '',
};

const initialInputs = {
  count: initialParams.count,
  connect: initialParams.connect,
  deposit: initialParams.deposit,
  name: initialParams.name,
  content: initialParams.content,
};

const Page = () => {
  const { handleModal, handleModalClose, visible } = useHandleModal(false);
  const { handleModal: handleSkillModal, handleModalClose: handleModalCloseSkill, visible: skillModalVisbile } = useHandleModal(false);

  const { inputs, onChange, setInputs } = useChangeInputs(initialInputs);
  const { select, onChange: onChangeSelect } = useChangeSelect(1);
  const [positionCodeList, setPositionCodeList] = useState<OPTION_TYPE[]>([]);
  const [skillList, setSkillList] = useState<SKILL_TYPE[]>([]);
  const [requirements, setRequirements] = useState<{ content: string; point: number }[]>(initialParams.requiredContentsList);

  const handleAddRequirement = () => {
    if (requirements.length < 10) {
      setRequirements([...requirements, { content: '', point: '' as unknown as number }]);
    }
  };

  const handleRequirementChange = (index: number, value: string, type: string) => {
    const numberValue = value.replace(numExp, '');

    const updatedRequirements = [...requirements];
    if (type === 'content') {
      updatedRequirements[index].content = value;
    } else if (type === 'point') {
      updatedRequirements[index].point = numberValue as unknown as number;
    }
    setRequirements(updatedRequirements);
  };

  const handleDeleteRequirement = (index: number) => {
    const updatedRequirements = [...requirements];
    updatedRequirements.splice(index, 1);
    setRequirements(updatedRequirements);
  };

  const { mutate } = useMutation({
    mutationFn: postCreateProject,
    onSuccess: async (data) => {
      if (data.result === true) {
        console.log('성공');
      }
    },
    onError: () => {
      console.log('실패');
    },
  });

  const handleClickPost = () => {
    const totalPoint = requirements.reduce((acc, obj) => Number(acc) + Number(obj.point), 0);

    if(totalPoint !== 100) {
      alert("요구사항 점수는 총 100점 이어야 합니다.")
      return;
    }
    const params = {
      ...inputs,
      positionCodeList: positionCodeList.map((item) => item.value),
      skillCodeList: skillList.map((item) => item.id),
      recruitEndDate: format(date.end, 'yyyy-MM-dd'),
      month: select,
      requiredContentsList: requirements,
    };

    

    mutate(params);
  };

  const handleClickChoice = (callback: OPTION_TYPE[] | SKILL_TYPE[], type?: 'skill' | 'position') => {
    if (type === 'skill') {
      setSkillList(callback as SKILL_TYPE[]);
      handleModalCloseSkill();
    } else {
      setPositionCodeList(callback as OPTION_TYPE[]);
      handleModalClose();
    }
  };

  const { date, onChange: onChangeDate } = useChangeDateRange();

  const handleContentChange = (text: string) => {
    if (text.length <= 5000) {
      setInputs((prev) => {
        return {
          ...prev,
          content: text,
        };
      });
    }
  };

  return (
    <Container>
      <RecruitmentContainer>
        <CommonInfo>
          <Title>1. 프로젝트 기본정보 입력</Title>
          <Line />

          <div className="two-grid-wrap" style={{ marginTop: '40px' }}>
            <div className="wrap">
              <div className="title">모집 인원</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Input
                  name="count"
                  size="small"
                  style={{ width: '100%' }}
                  containerStyle={{ flex: 1 }}
                  placeholder="프로젝트를 함께할 인원 수를 입력해주세요. (2명 이상)"
                  type="number"
                  onChange={onChange}
                  value={inputs.count}
                />
                <span style={{ color: color.gray.gray5 }}>명</span>
              </div>
            </div>
            <div className="wrap">
              <div className="title">연락방법</div>
              <Input
                name="connect"
                size="small"
                style={{ width: '100% ' }}
                placeholder="오픈 카카오톡 링크, 메일, 전화번호 등 연락을 위한 링크 및 번호를 입력해주세요."
                onChange={onChange}
                value={inputs.connect}
              />
            </div>
          </div>

          <div className="two-grid-wrap" style={{ marginTop: '30px' }}>
            <div className="wrap">
              <div className="title">모집 포지션</div>
              <Input
                value={positionCodeList.map((item) => item.label).join(', ')}
                name="position"
                size="small"
                style={{ width: '540px', border: `1px solid ${color.gray.gray6}`, color: color.gray.white }}
                placeholder="프로젝트에 필요한 포지션을 선택해주세요."
                icon="/images/plus/plus_gray6.svg"
                onClick={handleModal}
              />
            </div>
            <div className="wrap">
              <div className="title">스킬</div>
              <Input
                value={skillList.map((item) => item.name).join(', ')}
                name="skill"
                size="small"
                style={{ width: '100% ' }}
                placeholder="프로젝트에 필요한 스킬을 선택해주세요."
                icon="/images/plus/plus_gray6.svg"
                onClick={handleSkillModal}
              />
            </div>
          </div>

          <div className="two-grid-wrap" style={{ marginTop: '30px' }}>
            <div style={{ display: 'flex' }}>
              <div className="wrap" style={{ flex: 1 }}>
                <div className="title">모집 마감일</div>
                <div className="calender-style">
                  <Calender onChange={onChangeDate} date={date.end} type="end" />
                </div>
              </div>

              <div className="wrap" style={{ flex: 1 }}>
                <div className="title">진행 기간</div>
                <SelectBox optionStyle={{ width: '100%' }} style={{ width: '100%' }} options={MONTH} onChange={onChangeSelect} value={select} />
              </div>
            </div>
            <div className="wrap">
              <div className="title">보증금 (1인)</div>
              <Input
                name="deposit"
                size="small"
                style={{ width: '540px' }}
                placeholder="1인 보증금을 입력해주세요."
                type="number"
                onChange={onChange}
                value={inputs.deposit}
              />
            </div>
          </div>
        </CommonInfo>

        <ProjectIntroduce>
          <Title>2. 프로젝트 소개</Title>
          <Line />

          <EditorWrap>
            <div className="title">프로젝트 명</div>
            <Input
              size="small"
              style={{ width: '1140px' }}
              placeholder="프로젝트 명을 입력하세요. (5~50자 이하)"
              onChange={onChange}
              value={inputs.name}
              name="name"
            />
            <TextEditor onChange={handleContentChange} value={inputs.content} />
          </EditorWrap>
        </ProjectIntroduce>

        <RequireFunction>
          <Title>3. 기능 요구사항</Title>
          <Line />

          <ContentWrap>
            <div className="description">
              1. 요구사항은 최대 10개까지 등록할 수 있습니다.
              <br />
              2. 점수의 총 합계가 100점이 되도록 입력해주세요. (0점은 입력할 수 없습니다.)
            </div>
            <div className="input-wrap">
              {requirements.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <Input
                    name="content"
                    size="small"
                    style={{ width: '960px', marginRight: '40px' }}
                    placeholder="요구사항을 입력하세요."
                    value={item.content}
                    onChange={(e) => handleRequirementChange(index, e.target.value, 'content')}
                  />
                  <Input
                    name="point"
                    size="small"
                    style={{ width: '100px', marginRight: '16px' }}
                    placeholder="배점 입력"
                    value={item.point}
                    onChange={(e) => handleRequirementChange(index, e.target.value, 'point')}
                    type="number"
                  />

                  {index > 2 && (
                    <Image
                      src="/images/bin/bin.svg"
                      width={24}
                      height={24}
                      alt="delete"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleDeleteRequirement(index)}
                    />
                  )}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              {requirements.length < 10 && (
                <Button size="medium" variant="secondary" onClick={handleAddRequirement} leftIcon="/images/plus/plus_green.svg">
                  요구사항 추가
                </Button>
              )}
            </div>
          </ContentWrap>
        </RequireFunction>
      </RecruitmentContainer>

      <div className="button-wrap">
        <Button size="medium" variant="secondary">
          취소
        </Button>
        <Button onClick={handleClickPost} size="medium" variant="primary">
          등록
        </Button>
      </div>
      <PositionModal visible={visible} onClose={handleModalClose} onClickChoice={handleClickChoice} />
      <SkillModal visible={skillModalVisbile} onClose={handleModalCloseSkill} onClickChoice={handleClickChoice} />
    </Container>
  );
};

export default Page;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .button-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    margin-top: 44px;
    padding-bottom: 80px;
  }
`;

const RecruitmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1280px;
  min-height: 1421px;

  border: 1px solid ${color.gray.gray9};

  box-sizing: border-box;

  padding: 32px 32px 50px 32px;
`;

const Line = styled.div`
  margin-top: 8px;
  width: 1216px;
  height: 1px;
  background: ${color.gray.gray7};

  box-sizing: border-box;
`;

const CommonInfo = styled.div`
  margin-top: 40px;

  .two-grid-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 38px;
  }
  .wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-right: 30px;
  }
  .title {
    color: ${color.gray.gray5};
    font-size: 16px;
    font-weight: 400;
  }
  .calender-style {
    width: 265px;
    height: 32px;
    border: 1px solid ${color.gray.gray6};
    border-radius: 6px;

    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.div`
  color: ${color.gray.white};
  font-size: 24px;
  font-weight: 700;
`;

const ProjectIntroduce = styled.div`
  margin-top: 50px;
`;

const EditorWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 40px 38px 0 38px;

  .title {
    color: ${color.gray.gray5};
    font-size: 16px;
    font-weight: 400;
  }
  .editor {
    width: 1140px;
    height: 347px;
    border-radius: 6px;
    border: 1px solid ${color.gray.gray6};
  }
`;

const RequireFunction = styled.div`
  margin-top: 50px;
`;

const ContentWrap = styled.div`
  padding: 40px 38px 0 38px;

  .description {
    color: ${color.gray.gray7};
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 40px;
  }

  .input-wrap {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
