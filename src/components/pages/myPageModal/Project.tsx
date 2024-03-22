'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { rest } from '@/api/rest';
import { getParticipatingProject } from '@/api/project/api';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PARTICIPATING_PROJECT_LIST_RESPONSE } from '@/api/project/model';
import { PROJECT_STATUS } from 'public/lib/enum';
import { formatForDepositStatus, formatForUserAllStatus } from 'public/lib/formatForEnum';

import useHandleModal from '@/hook/useHandleModal';
import DepositAccountModal from './Modal/DepositAccountModal';

const STATUS_PROGRESS = PROJECT_STATUS.IN_PROGRESS;

type Props = {
  onClose: () => void;
};

const Project = ({ onClose }: Props) => {
  const route = useRouter();
  const [filterType, setFilterType] = useState('전체');
  const [projectData, setProjectData] = useState<PARTICIPATING_PROJECT_LIST_RESPONSE[]>();
  const [modal, setModal] = useState<number | null>(null);

  const { data } = useQuery({
    queryKey: [rest.get.projectMember],
    queryFn: getParticipatingProject,
  });

  console.log(data);
  useEffect(() => {
    setProjectData(data?.filter((item) => item) as unknown as PARTICIPATING_PROJECT_LIST_RESPONSE[]);
  }, [data]);

  const handleMenuClick = (value: string) => {
    if (value === '전체') {
      setProjectData(data?.filter((item) => item) as unknown as PARTICIPATING_PROJECT_LIST_RESPONSE[]);
    } else if (value === '내가쓴글') {
      setProjectData(data?.filter((item) => item.issuer == true) as unknown as PARTICIPATING_PROJECT_LIST_RESPONSE[]);
    } else if (value === '진행중') {
      setProjectData(data?.filter((item) => item.project.status === STATUS_PROGRESS) as unknown as PARTICIPATING_PROJECT_LIST_RESPONSE[]);
    }
    setFilterType(value);
  };

  const handleClickProjectPost = (id: number) => {
    route.push(`/post/detail/${id}`);
    onClose();
  };

  const handleClickModal = (id: number) => {
    setModal(id);
  };

  const handleClickCloseModal = () => {
    setModal(null);
  };

  return (
    <Container>
      <div className="filter-wrap">
        <div className={filterType === '전체' ? 'choice' : 'basic'} onClick={() => handleMenuClick('전체')}>
          전체보기
        </div>
        <div className={filterType === '내가쓴글' ? 'choice' : 'basic'} onClick={() => handleMenuClick('내가쓴글')}>
          내가 쓴 글만보기
        </div>
        <div className={filterType === '진행중' ? 'choice' : 'basic'} onClick={() => handleMenuClick('진행중')}>
          진행중인 프로젝트만 보기
        </div>
      </div>

      <TableHeader>
        <div className="number">No.</div>
        <div className="status">진행상태</div>
        <div className="project">프로젝트 명</div>
        <div className="period">진행 기간</div>
        <div className="deposit">보증금 납입</div>
        <div className="refund">보증금 환급</div>
      </TableHeader>
      <div className="table-wrap">
        <TableContent>
          {projectData?.map((content, index) => (
            <ul key={`${content.project.id}_${index}`}>
              <li className="number">{index + 1}</li>
              <li className="status">{formatForUserAllStatus(content.project.status)}</li>
              <li className="project" onClick={() => handleClickProjectPost(content.project.id)}>
                {content.project.name}
              </li>
              <li className="period">
                {content.project.startDate === null
                  ? '-'
                  : `${content.project.startDate}
                ${(<br />)}~${content.project.endDate}`}
              </li>

              {content.deposit === null ? (
                <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>-</div>
              ) : (
                <div
                  style={{ display: 'flex', flexDirection: 'column', marginTop: 5, cursor: 'pointer', textDecorationLine: 'underline' }}
                  onClick={() => handleClickModal(content.project.id)}
                >
                  <li className="deposit">{formatForDepositStatus(content.deposit.status)}</li>
                  <span>{content.project.deposit.toLocaleString()}원</span>
                </div>
              )}

              <li className="refund">{content.deposit?.status}</li>

              {content.issuer && <Image src="/images/etc/star_green.svg" width={12} height={12} alt="leader" className="star" />}
              <DepositAccountModal
                visible={modal === content.project.id}
                onClose={handleClickCloseModal}
                projectName={content.project.name}
                username={content.member.loginId}
                deposit={content.project.deposit}
              />
            </ul>
          ))}
        </TableContent>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  width: 842px;
  flex-shrink: 0;
  box-sizing: border-box;

  border-radius: 0 24px 24px 0;

  padding-right: 70px;
  padding-left: 70px;

  background: ${color.gray.black};

  .filter-wrap {
    display: flex;
    gap: 18px;
    margin-top: 60px;
  }

  .basic {
    color: ${color.gray.gray5};
    font-size: 16px;
    font-weight: 400;

    cursor: pointer;
  }
  .choice {
    color: ${color.brand.brandMain};
    font-size: 16px;
    font-weight: 700;

    cursor: pointer;
  }
  .table-wrap {
    height: 500px;
    box-sizing: border-box;
    padding-bottom: 5px;

    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 12px; /* 스크롤바의 너비 */
    }
    &::-webkit-scrollbar-thumb {
      background: ${color.gray.gray5}; /* 스크롤바의 색상 */
      border-radius: 28px;

      background-clip: padding-box;
      border: 4px solid transparent;
    }
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 60px 110px 230px 100px 95px 95px;

  height: 40px;
  background: none;
  border-bottom: 1px solid ${color.gray.white};

  margin-top: 30px;
  margin-bottom: 20px;

  color: ${color.gray.white};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  .number,
  .status,
  .project,
  .period,
  .deposit,
  .refund {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TableContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;

  ul {
    display: grid;
    grid-template-columns: 60px 110px 1fr 100px 95px 95px;
    position: relative;

    height: 52px;
    border-radius: 8px;
    border: 1px solid ${color.gray.gray8};
    background: rgba(2, 6, 13, 0.5);

    color: ${color.gray.white};

    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    /* Transition for smooth hover effect */
    transition: background-position 0.5s ease; /* 애니메이션 추가 */

    &:hover {
      border-radius: 8px;
      border: 1px solid ${color.gray.white};
      background: linear-gradient(92deg, rgba(255, 255, 255, 0.1) 38.9%, rgba(0, 0, 0, 0) 62.68%), rgba(2, 6, 13, 0.5);

      background-size: 400% 400%; /* 배경 크기 증가 */
      background-position: 50% 0; /* 그라디언트 위치를 오른쪽 끝으로 이동 */
    }

    .number,
    .status,
    .project,
    .period,
    .deposit,
    .refund {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .project {
      text-decoration-line: underline;
      cursor: pointer;
    }
    .star {
      position: absolute;
      top: 19px;
      right: 10px;
    }
  }
`;
