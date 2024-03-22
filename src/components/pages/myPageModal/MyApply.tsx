'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { rest } from '@/api/rest';
import { deleteRecruitment, getRecruitStatus } from '@/api/project/api';
import { formatForProjectJoinStatus, formatForProjectStatus } from 'public/lib/formatForEnum';
import { RECRUIT_STATUS_LIST_RESPONSE } from '@/api/project/model';
import { PROJECT_REQUIRE_JOIN_STATUS } from 'public/lib/enum';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

const STATUS_WAITING = PROJECT_REQUIRE_JOIN_STATUS.WAITING;
const STATUS_APPROVED = PROJECT_REQUIRE_JOIN_STATUS.APPROVED;

type Props = {
  onClose: () => void;
};

const MyApply = ({ onClose }: Props) => {
  const route = useRouter();
  const [filterType, setFilterType] = useState('전체');
  const [applyData, setApplyData] = useState<RECRUIT_STATUS_LIST_RESPONSE[]>();

  const { data, refetch } = useQuery({
    queryKey: [rest.get.recruitStatus],
    queryFn: getRecruitStatus,
  });

  const { mutate } = useMutation({
    mutationFn: deleteRecruitment,
    onSuccess: async (data) => {
      if (data.result === true) {
        console.log('성공');
      }
      refetch();
    },
  });

  useEffect(() => {
    setApplyData(data?.filter((item) => item) as unknown as RECRUIT_STATUS_LIST_RESPONSE[]);
  }, [data]);

  const handleMenuClick = (value: string) => {
    if (value === '전체') {
      setApplyData(data?.filter((item) => item) as unknown as RECRUIT_STATUS_LIST_RESPONSE[]);
    } else if (value === '대기') {
      setApplyData(data?.filter((item) => item.status == STATUS_WAITING) as unknown as RECRUIT_STATUS_LIST_RESPONSE[]);
    } else if (value === '승인') {
      setApplyData(data?.filter((item) => item.status === STATUS_APPROVED) as unknown as RECRUIT_STATUS_LIST_RESPONSE[]);
    }
    setFilterType(value);
  };

  const handleRecruitCancel = (id: number) => {
    if (confirm('프로젝트 지원을 취소하시겠습니까?')) {
      mutate(id);
    }
  };

  const handleClickProjectPost = (id: number) => {
    route.push(`/post/detail/${id}`);
    onClose();
  };

  return (
    <Container>
      <div className="filter-wrap">
        <div className={filterType === '전체' ? 'choice' : 'basic'} onClick={() => handleMenuClick('전체')}>
          전체보기
        </div>
        <div className={filterType === '대기' ? 'choice' : 'basic'} onClick={() => handleMenuClick('대기')}>
          대기상태 프로젝트만 보기
        </div>
        <div className={filterType === '승인' ? 'choice' : 'basic'} onClick={() => handleMenuClick('승인')}>
          승인된 프로젝트만 보기
        </div>
      </div>
      <TableHeader>
        <div className="number">No.</div>
        <div className="date">지원일시</div>
        <div className="status">진행상태</div>
        <div className="project">프로젝트 명</div>
        <div className="apply-status">지원 현황</div>
      </TableHeader>
      <TableContent>
        {applyData?.map((content, index) => (
          <ul key={content.id}>
            <li className="number">{index + 1}</li>
            <li className="date">{format(content.createdDate, 'yyyy.MM.dd HH:mm:ss')}</li>
            <li className="status">{formatForProjectStatus(content.project.status)}</li>
            <li className="project" onClick={() => handleClickProjectPost(content.project.id)}>
              {content.project.name}
            </li>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
              <li
                className="apply-status"
                style={{ color: `${content.status === 38 ? color.secondary.error_1 : content.status === 39 ? color.brand.brandMain : color.gray.white}` }}
              >
                {formatForProjectJoinStatus(content.status)}
              </li>
              {content.status !== 38 && (
                <span
                  style={{ color: color.gray.white, textAlign: 'center', fontSize: 12, textDecorationLine: 'underline', fontWeight: 400, cursor: 'pointer' }}
                  onClick={() => handleRecruitCancel(content.id)}
                >
                  지원취소
                </span>
              )}
            </div>
          </ul>
        ))}
      </TableContent>
    </Container>
  );
};

export default MyApply;

const Container = styled.div`
  width: 842px;
  height: 100%;
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
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 60px 110px 140px 1fr 120px;

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
  .project,
  .date,
  .status,
  .apply-status {
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
    grid-template-columns: 60px 110px 140px 1fr 120px;

    height: 52px;
    border-radius: 8px;
    border: 1px solid ${color.gray.gray8};
    background: rgba(2, 6, 13, 0.5);

    color: ${color.gray.white};

    text-align: center;
    font-size: 14px;
    font-weight: 400;

    transition: background-position 0.3s ease;

    &:hover {
      border-radius: 8px;
      border: 1px solid ${color.gray.white};
      background: linear-gradient(92deg, rgba(255, 255, 255, 0.15) 38.9%, rgba(0, 0, 0, 0) 62.68%), rgba(2, 6, 13, 0.5);

      background-size: 400% 400%;
      background-position: 50% 0;
    }

    .number,
    .project,
    .date,
    .status,
    .apply-status {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .date {
      line-height: normal;
    }
    .project {
      text-decoration-line: underline;
      cursor: pointer;
    }

    .apply-status {
      font-weight: 700;
    }

    .cancel {
      color: ${color.secondary.error_1};

      text-align: center;
      font-size: 14px;
      font-weight: 400;
    }
  }
`;
