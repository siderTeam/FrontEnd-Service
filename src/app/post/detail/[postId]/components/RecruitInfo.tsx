'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';
import { CHECK_JOIN_PROJECT, PROJECT_DETAIL_RESPONSE } from '@/api/project/model';
import { Fragment } from 'react';
import { getUserInfo } from '@/store/auth.store';
import { PROJECT_REQUIRE_JOIN_STATUS } from 'public/lib/enum';

type Props = {
  data: PROJECT_DETAIL_RESPONSE | undefined;
  checkJoin?: CHECK_JOIN_PROJECT;
};

const RecruitInfo = ({ data, checkJoin }: Props) => {
  const identification = getUserInfo().id === data?.createUser.id;
  const approveUser = checkJoin?.isJoinedProject && (checkJoin.joinStatus === PROJECT_REQUIRE_JOIN_STATUS.APPROVED);

  return (
    <Container>
      <div className="title">모집 인원</div>
      <div className="content">{data?.count}명</div>
      {(identification || approveUser) && (
          <>
            <div className="title">연락방법</div>
            <div className="content">
              <div className="link">
                {data?.connect}
                <Image src={'/images/link/link_white.svg'} alt="link" width={14} height={14} />
              </div>
            </div>
          </>
        )}
      <div className="title">모집 포지션</div>
      <div className="content">
        {data?.positionCodeList.map((position, index) => (
          <Fragment key={position.name}>
            {index > 0 && ', '}
            {position.name}
          </Fragment>
        ))}
      </div>
      <div className="title">스킬</div>
      <div className="content">
        {data?.skillCodeList.map((skill, index) => (
          <Fragment key={skill.skillCode}>
            {index > 0 && ', '}
            {skill.name}
          </Fragment>
        ))}
      </div>
      <div className="title">모집 마감일</div>
      <div className="content">{data?.recruitEndDate.replace(/-/g, '.')}</div>
      <div className="title">진행 기간</div>
      <div className="content">{data?.audit.week}주</div>
      <div className="title">보증금 (1인)</div>
      <div className="content">{data?.deposit.toLocaleString()}원</div>
    </Container>
  );
};

export default RecruitInfo;

const Container = styled.div`
  border-bottom: 1px solid ${color.gray.gray7};
  box-sizing: border-box;
  padding: 32px 0 40px 0;

  display: grid;
  grid-template-columns: 160px 1fr 160px 1fr;
  grid-row-gap: 8px;

  .title {
    color: ${color.gray.gray5};
    font-size: 16px;
    font-weight: 400;
  }

  .content {
    font-size: 16px;
    font-weight: 500;

    .link {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;
