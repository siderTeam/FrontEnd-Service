'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import Apply from './Modal/Apply';
import ApplyStatusContainer from './Modal/ApplyStatusModal/ApplyStatusContainer';
import { PROJECT_DETAIL_RESPONSE } from '@/api/projectDetail/model';
import { formatForProjectStatus } from 'public/lib/formatForEnum';

type Props = {
  element: any;
  data?: PROJECT_DETAIL_RESPONSE;
};

const ProjectTitle = ({ element, data }: Props) => {
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
      <ApplyStatusContainer visible={applyStatusModal} onClose={handleCloseApplyStatusModal} />
      <Container ref={element}>
        <div className="header">
          <div className="before">
            <Image src={'/images/arrow/arrow_left_gray6.svg'} alt="arrow" width={5} height={9} />
            <span>이전 페이지로</span>
          </div>
          <div className="edit">
            <Image src={'/images/edit/edit_gray6.svg'} alt="edit" width={22} height={22} />
            <Image src={'/images/trash/trash_gray6.svg'} alt="trash" width={20} height={22} />
          </div>
        </div>
        <div className="title-wrap top">
          <div className="info">
            <span>{data?.createUser.nickname}</span>
            <span>{data?.createdDate.replace(/-/g, '.').slice(0, 10)}</span>
            <span className="status">{data && formatForProjectStatus(data?.status)}</span>
          </div>
          <div className="seen">
            <Image src={'/images/security/security_gray5.svg'} alt="security" width={12} height={7} />
            <span>{data?.view}</span>
          </div>
        </div>
        <div className="title-wrap">
          <h1 className="project-title">{data?.name}</h1>
          <div className="button">
            <Button variant="secondary" onClick={() => setApplyStatusModal(true)}>
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
  border-bottom: 1px solid ${color.gray.gray7};
  box-sizing: border-box;
  padding: 32px 0 40px 0;
  background: ${color.gray.black};
  z-index: 1;

  position: sticky;
  top: 0;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  .before {
    display: flex;
    align-items: center;

    span {
      color: ${color.gray.gray6};
      font-size: 14px;
      font-weight: 400;

      margin-left: 8px;
    }
  }

  .edit {
    display: flex;
    align-items: center;
    gap: 18px;
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

      color: ${color.gray.gray5};
      font-size: 18px;
      font-weight: 400;

      .status {
        color: ${color.brand.brandMain};
        font-weight: 700;
      }

      span:not(:last-child) {
        box-sizing: border-box;
        padding-right: 16px;
        border-right: 1px solid ${color.gray.white};
      }
    }

    .seen {
      display: flex;
      align-items: center;

      span {
        color: ${color.gray.gray5};
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
