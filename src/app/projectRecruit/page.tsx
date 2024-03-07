'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import Label from '@/components/Label/Label';
import SelectBox from '@/components/SelectBox/SelectBox';
import Input from '@/components/Input/Input';

const Page = () => {
  return (
    <Container>
      <ContentWrap>
        <div className="before">
          <Image src={'/images/icons/arrow_left_gray6.svg'} alt="arrow" width={5} height={9} />
          <span>이전 페이지로</span>
        </div>
        <div className="title">1. 프로젝트 기본정보 입력</div>
        <div className="content">
          <Label location="top" label="모집인원" style={{ color: `${color.gray5}`, fontWeight: 400 }}>
            <SelectBox
              style={{ width: '100%' }}
              options={[
                { label: '인원미정', value: '0' },
                { label: '1명', value: '1' },
                { label: '2명', value: '2' },
                { label: '3명', value: '3' },
                { label: '4명', value: '4' },
                { label: '5명', value: '5' },
                { label: '6명', value: '6' },
                { label: '7명', value: '7' },
                { label: '8명', value: '8' },
                { label: '9명', value: '9' },
                { label: '10명', value: '10' },
              ]}
              value={'0'}
              name="person"
              onChange={() => {}}
            />
          </Label>
          <Label location="top" label="연락방법" style={{ color: `${color.gray5}`, fontWeight: 400 }}>
            <div>
              <SelectBox
                style={{ width: 120 }}
                options={[
                  { label: '오픈카톡', value: '0' },
                  { label: '이메일', value: '1' },
                ]}
                value={'0'}
                name="contact"
                onChange={() => {}}
              />
              <Input name="" value={''} placeholder="오픈 카카오톡 링크 주소를 입력해주세요." />
            </div>
          </Label>
          <Label location="top" label="모집 포지션" style={{ color: `${color.gray5}`, fontWeight: 400 }}>
            <SelectBox
              style={{ width: '100%' }}
              options={[
                { label: '기획자', value: '0' },
                { label: '디자인', value: '1' },
                { label: '프론트엔드 개발자', value: '2' },
                { label: 'DB 엔지니어', value: '3' },
                { label: '서버/인프라 엔지니어', value: '4' },
              ]}
              value={'0'}
              name="position"
              onChange={() => {}}
            />
          </Label>
        </div>
      </ContentWrap>
      <div className="button">
        <Button mode="secondary">취소</Button>
        <Button>등록</Button>
      </div>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;

  color: ${color.white};

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;

const ContentWrap = styled.div`
  box-sizing: border-box;
  padding: 32px;
  margin-bottom: 44px;

  border: 1px solid ${color.gray9};

  .before {
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    span {
      color: ${color.gray6};
      font-size: 14px;
      font-weight: 400;

      margin-left: 8px;
    }
  }

  .title {
    font-size: 24px;
    font-weight: 700;

    box-sizing: border-box;
    padding-bottom: 8px;
    border-bottom: 1px solid ${color.gray7};
  }

  .content {
    box-sizing: border-box;
    padding: 40px 38px 50px 38px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px 60px;
  }
`;
