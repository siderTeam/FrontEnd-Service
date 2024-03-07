'use client';

import Input from '@/components/Input/Input';
import SelectBox from '@/components/SelectBox/SelectBox';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';

const Page = () => {
  return (
    <Container>
      <RecruitmentContainer>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', height: '18px' }}>
          <Image src="/images/arrow/arrow_left_gray6.svg" width={16} height={16} alt="arrow" />
          <span style={{ color: color.gray.gray6, fontSize: '14px', fontWeight: 400 }}>이전 페이지로</span>
        </div>

        <CommonInfo>
          <Title>1. 프로젝트 기본정보 입력</Title>
          <Line />
          <div className="two-grid-wrap">
            <div className="wrap">
              <div className="title">모집 인원</div>
              <SelectBox options={[]} />
            </div>
            <div>
              <div className="title">연락방법</div>
              <SelectBox options={[]} />
              <Input />
            </div>
          </div>
        </CommonInfo>
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

  width: 1280px;
  height: 1421px;

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
  }
  .wrap {
    display: flex;
    flex-direction: column;
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
