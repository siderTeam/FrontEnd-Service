'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import Apply from './Modal/Apply';
import ApplyStatus from './Modal/ApplyStatus';

const ProjectTitle = () => {
  const [applyModal, setApplyModal] = useState(false);
  const [applyStatusModal, setApplyStatusModal] = useState(false);

  //지원하기 모달
  const handleCloseApplyModal = () => {
    setApplyModal(false);
  };

  //지원현황 모달
  const handleCloseApplyStatusModal = () => {
    setApplyStatusModal(false);
  };

  return (
    <>
      <Apply visible={applyModal} onClose={handleCloseApplyModal} />
      <ApplyStatus visible={applyStatusModal} onClose={handleCloseApplyStatusModal} />
      <Container>
        <div className="before">
          <Image src={'/images/icons/arrow_left_gray6.svg'} alt="arrow" width={5} height={9} />
          <span>이전 페이지로</span>
        </div>
        <div className="title-wrap top">
          <div className="info">
            <span>닉네임</span>
            <span>8888.88.88</span>
            <span className="status">모집중</span>
          </div>
          <div className="seen">
            <Image src={'/images/icons/security_gray5.svg'} alt="security" width={12} height={7} />
            <span>888,888,888</span>
          </div>
        </div>
        <div className="title-wrap">
          <h1 className="project-title">프로젝트 모집글 제목</h1>
          <div className="button">
            <Button mode="secondary" onClick={() => setApplyStatusModal(true)}>
              지원현황
            </Button>
            <Button onClick={() => setApplyModal(true)}>지원하기</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProjectTitle;

const Container = styled.div`
  border-bottom: 1px solid ${color.gray7};
  box-sizing: border-box;
  padding: 32px 0 40px 0;
  background: ${color.black};

  position: sticky;
  top: 0;

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

  .top {
    margin-bottom: 10px;
  }

  .title-wrap {
    display: flex;
    justify-content: space-between;
    gap: 48px;

    .info {
      display: flex;
      align-items: center;
      gap: 16px;

      color: ${color.gray5};
      font-size: 18px;
      font-weight: 400;

      .status {
        color: ${color.brandMain};
        font-weight: 700;
      }

      span:not(:last-child) {
        box-sizing: border-box;
        padding-right: 16px;
        border-right: 1px solid ${color.white};
      }
    }

    .seen {
      display: flex;
      align-items: center;

      span {
        color: ${color.gray5};
        text-align: center;
        font-size: 12px;
        font-weight: 400;

        margin-left: 4px;
      }
    }

    .project-title {
      flex: 1;
      font-size: 26px;
      font-weight: 700;
    }

    .button {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;
