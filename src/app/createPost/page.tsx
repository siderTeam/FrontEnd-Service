'use client';

import Button from '@/components/Button/Button';
import Calendar from '@/components/Calendar/Calendar';
import Input from '@/components/Input/Input';
import PositionModal from '@/components/PositionModal/PositionModal';
import useHandleModal from '@/hook/useHandleModal';

import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';

const Page = () => {
  const { handleModal, handleModalClose, visible } = useHandleModal(false);

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
                <Input size="small" style={{ width: '500px' }} placeholder="프로젝트를 함께할 인원 수를 입력해주세요. (2명 이상)" />
                <span style={{ color: color.gray.gray5 }}>명</span>
              </div>
            </div>
            <div className="wrap">
              <div className="title">연락방법</div>
              <Input size="small" style={{ width: '540px' }} placeholder="오픈 카카오톡 링크, 메일, 전화번호 등 연락받을 방법을 입력해주세요." />
            </div>
          </div>

          <div className="two-grid-wrap" style={{ marginTop: '30px' }}>
            <div className="wrap">
              <div className="title">모집 포지션</div>
              <Input
                size="small"
                style={{ width: '540px' }}
                placeholder="프로젝트를 함께할 인원 수를 입력해주세요. (2명 이상)"
                icon="/images/plus/plus_gray6.svg"
                onClickIcon={handleModal}
              />
            </div>
            <div className="wrap">
              <div className="title">스킬</div>
              <Input
                size="small"
                style={{ width: '540px' }}
                placeholder="오픈 카카오톡 링크, 메일, 전화번호 등 연락받을 방법을 입력해주세요."
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
              <Input size="small" style={{ width: '540px' }} placeholder="1인 보증금을 입력해주세요." />
            </div>
          </div>
        </CommonInfo>

        <ProjectIntroduce>
          <Title>2. 프로젝트 소개</Title>
          <Line />

          <EditorWrap>
            <div className="title">프로젝트 명</div>
            <Input size="small" style={{ width: '1140px' }} placeholder="프로젝트 명을 입력하세요. (5~50자 이하)" />
            <div className="editor">에디터 자리에용</div>
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
                <Input size="small" style={{ width: '960px' }} placeholder="요구사항을 입력하세요. (필수)" />
                <Input size="small" style={{ width: '100px' }} placeholder="배점 입력" />
              </div>
              <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                <Input size="small" style={{ width: '960px' }} placeholder="요구사항을 입력하세요. (필수)" />
                <Input size="small" style={{ width: '100px' }} placeholder="배점 입력" />
              </div>
              <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                <Input size="small" style={{ width: '960px' }} placeholder="요구사항을 입력하세요. (필수)" />
                <Input size="small" style={{ width: '100px' }} placeholder="배점 입력" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Input size="small" style={{ width: '960px', marginRight: '40px' }} placeholder="요구사항을 입력하세요." />
                <Input size="small" style={{ width: '100px', marginRight: '16px' }} placeholder="배점 입력" />
                <Image src="/images/bin/bin.svg" width={24} height={24} alt="delete" style={{ cursor: 'pointer' }} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button size="medium" variant="secondary" style={{ marginTop: '16px' }}>
                <Image src="/images/plus/plus_green.svg" width={16} height={16} alt="plus" />
                요구사항 추가
              </Button>
            </div>
          </ContentWrap>
        </RequireFunction>

        <div className="button-wrap">
          <Button size="medium" variant="secondary">
            취소
          </Button>
          <Button size="medium" variant="primary">
            등록
          </Button>
        </div>
        <PositionModal visible={visible} onClose={handleModalClose} />
      </RecruitmentContainer>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

const RecruitmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1280px;
  height: 1421px;

  border: 1px solid ${color.gray.gray9};

  box-sizing: border-box;

  padding: 32px 32px 50px 32px;

  .button-wrap {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-top: 44px;
    padding-bottom: 80px;
  }
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
  padding: 40px 38px 50px 38px;

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
