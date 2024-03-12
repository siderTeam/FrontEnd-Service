'use client';

import { postCreateProject } from '@/api/createPost/api';
import { CREATE_PROJECT_REQUEST } from '@/api/createPost/model';
import Button from '@/components/Button/Button';
import Calendar from '@/components/Calendar/Calendar';
import Input from '@/components/Input/Input';
import PositionModal from '@/components/PositionModal/PositionModal';
import TextEditor from '@/components/TextEditor/TextEditor';
import useChangeInputs from '@/hook/useChangeInputs';
import useHandleModal from '@/hook/useHandleModal';

import { color } from '@/styles/color';
import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';

const initialParams: CREATE_PROJECT_REQUEST = {
  count: 0,
  connect: '',
  positionCodeList: null,
  skillCodeList: [0],
  recruitEndDate: '',
  month: 0,
  deposit: 0,
  requiredContentsList: [
    {
      content: '',
      point: 0,
    },
  ],
  name: '',
  content: '',
};

const Page = () => {
  const { handleModal, handleModalClose, visible } = useHandleModal(false);
  const { inputs, onChange, setInputs } = useChangeInputs(initialParams);
  const [requirements, setRequirements] = useState([{ requirement: '', score: '' }]);

  const handleAddRequirement = () => {
    if (requirements.length < 7) {
      setRequirements([...requirements, { requirement: '', score: '' }]);
    }
  };

  const handleRequirementChange = (index: number, value: string, type: string) => {
    const updatedRequirements = [...requirements];
    if (type === 'requirement') {
      updatedRequirements[index].requirement = value;
    } else if (type === 'score') {
      updatedRequirements[index].score = value;
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
                  style={{ width: '500px' }}
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
                style={{ width: '540px' }}
                placeholder="오픈 카카오톡 링크, 메일, 전화번호 등 연락받을 방법을 입력해주세요."
                onChange={onChange}
                value={inputs.connect}
              />
            </div>
          </div>

          <div className="two-grid-wrap" style={{ marginTop: '30px' }}>
            <div className="wrap">
              <div className="title">모집 포지션</div>
              <Input
                name="position"
                size="small"
                style={{ width: '540px' }}
                placeholder="프로젝트에 필요한 포지션을 선택해주세요."
                icon="/images/plus/plus_gray6.svg"
                onClickIcon={handleModal}
              />
            </div>
            <div className="wrap">
              <div className="title">스킬</div>
              <Input
                name="skill"
                size="small"
                style={{ width: '540px' }}
                placeholder="프로젝트에 필요한 스킬을 선택해주세요."
                icon="/images/plus/plus_gray6.svg"
              />
            </div>
          </div>

          <div className="two-grid-wrap" style={{ marginTop: '30px' }}>
            <div className="wrap">
              <div className="title">모집 마감일</div>
              <Calendar />
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
            <Input size="small" style={{ width: '1140px' }} placeholder="프로젝트 명을 입력하세요. (5~50자 이하)" onChange={onChange} value={inputs.name} />
            <div>
              <TextEditor />
            </div>
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
              <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                <Input name="content" size="small" style={{ width: '960px' }} placeholder="요구사항을 입력하세요. (필수)" />
                <Input name="point" size="small" style={{ width: '100px' }} placeholder="배점 입력" type="number" />
              </div>
              <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                <Input name="content" size="small" style={{ width: '960px' }} placeholder="요구사항을 입력하세요. (필수)" />
                <Input name="point" size="small" style={{ width: '100px' }} placeholder="배점 입력" />
              </div>
              <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                <Input name="content" size="small" style={{ width: '960px' }} placeholder="요구사항을 입력하세요. (필수)" />
                <Input name="point" size="small" style={{ width: '100px' }} placeholder="배점 입력" />
              </div>
              {requirements.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <Input
                    name="content"
                    size="small"
                    style={{ width: '960px', marginRight: '40px' }}
                    placeholder="요구사항을 입력하세요."
                    value={item.requirement}
                    onChange={(e) => handleRequirementChange(index, e.target.value, 'requirement')}
                  />
                  <Input
                    name="point"
                    size="small"
                    style={{ width: '100px', marginRight: '16px' }}
                    placeholder="배점 입력"
                    value={item.score}
                    onChange={(e) => handleRequirementChange(index, e.target.value, 'score')}
                  />
                  <Image
                    src="/images/bin/bin.svg"
                    width={24}
                    height={24}
                    alt="delete"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleDeleteRequirement(index)}
                  />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              {requirements.length < 7 && (
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
        <Button size="medium" variant="primary">
          등록
        </Button>
      </div>
      <PositionModal visible={visible} onClose={handleModalClose} />
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
  }
  .title {
    color: ${color.gray.gray5};
    font-size: 16px;
    font-weight: 400;
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
