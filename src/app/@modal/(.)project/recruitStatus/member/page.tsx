'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Modal from '@/components/Modal/Modal';
import MemberCard from '@/components/MemberCard/MemberCard';
import Button from '@/components/Button/Button';

const Page = () => {
  return (
    <Modal>
      <Container>
        <div className="title">고구마 만들래</div>
        <div className="subTitle">승인된 유저</div>
        <div className="cardWrap">
          <MemberCard />
        </div>
        <div className="button">
          <Button mode="secondary">이전</Button>
        </div>
      </Container>
    </Modal>
  );
};

export default Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 30px;

  .title {
    color: ${color.white};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .subTitle {
    color: ${color.white};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .cardWrap {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    min-height: 450px;
    max-height: 450px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 12px; /* 스크롤바의 너비 */
    }
    &::-webkit-scrollbar-thumb {
      background: ${color.gray5}; /* 스크롤바의 색상 */
      border-radius: 28px;

      background-clip: padding-box;
      border: 4px solid transparent;
    }
  }

  .button {
    margin: 0 auto;
  }
`;
