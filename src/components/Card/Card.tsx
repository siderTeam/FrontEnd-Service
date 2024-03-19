'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import Profile from '../Profile/Profile';
import { black } from '@/styles/color';
import { PROJECT_DETAIL_CREATE_USER } from '@/api/project/model';
import { PROJECT_RESPONSE } from '@/api/project/model';
import Link from 'next/link';

const color = ['red', 'yellow', 'purple', 'green', 'blue'];

type skillCodeType = {
  skillCode: number;
  name: string;
  imageName: string;
};

export type CardProps = {
  title: string;
  startDate: string;
  endDate: string;
  deposit: number;
  children?: any;
  style?: React.CSSProperties;
  skillCodeList: skillCodeType[];
  createUser: PROJECT_DETAIL_CREATE_USER;
  id: number;
};

const ProjectCard = ({ title, startDate, endDate, deposit, skillCodeList, createUser, style, id }: CardProps) => {
  const cardColor = color[Math.floor(Math.random() * color.length)];

  return (
    <Link href={`/post/${id}`}>
      <Container className={cardColor}>
        <CardWrap>
          <div className="subTitle">모집 마감일 {endDate}</div>
          <div className="skillWrap">
            {skillCodeList.map((item, index) => (
              <Image key={`${item.name}_${index}`} src={`/images/skillIcons/${item.imageName}.svg`} alt="profile" width={32} height={32} />
            ))}
          </div>
          <h1 className="title">{title}</h1>
          <SubInfo>
            <div className="info">
              <div className="subTitle">프로젝트 기간</div>
              <div className="projectDate">
                {startDate?.replace(/-/g, '.')}~{endDate?.replace(/-/g, '.')}
              </div>
            </div>
            <div className="info">
              <div className="subTitle">보증금</div>
              <div className="deposit">{deposit.toLocaleString()}원</div>
            </div>
          </SubInfo>
          <Profile name={createUser.nickname} career={createUser.career} positionName={createUser.position.name} />
        </CardWrap>
        <div className={`${cardColor} effect`} />
      </Container>
    </Link>
  );
};

export default ProjectCard;

const CONTAINER_TYPE = {
  ['red']: {
    border: '1px solid #991329',
    background:
      'linear-gradient(180deg, rgba(153, 19, 41, 0.15) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(140deg, rgba(255, 255, 255, 0.10) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(2, 6, 13, 0.60)',
  },
  ['yellow']: {
    border: '1px solid #A17605',
    background:
      'linear-gradient(180deg, rgba(161, 118, 5, 0.15) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(140deg, rgba(255, 255, 255, 0.10) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(2, 6, 13, 0.60);',
  },
  ['purple']: {
    border: '1px solid #3705A1',
    background:
      'linear-gradient(180deg, rgba(55, 5, 161, 0.15) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(140deg, rgba(255, 255, 255, 0.10) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(2, 6, 13, 0.60);',
  },
  ['green']: {
    border: '1px solid #05A156',
    background:
      'linear-gradient(180deg, rgba(5, 161, 86, 0.15) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(140deg, rgba(255, 255, 255, 0.10) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(2, 6, 13, 0.60);',
  },
  ['blue']: {
    border: '1px solid #0543A1',
    background:
      'linear-gradient(180deg, rgba(5, 67, 161, 0.15) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(140deg, rgba(255, 255, 255, 0.10) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(2, 6, 13, 0.60);',
  },
};

const EFFECT_TYPE = {
  ['red']: {
    background: 'linear-gradient(180deg, rgba(255, 0, 42, 0.15) 0%, rgba(0, 0, 0, 0.00) 100%)',
  },
  ['yellow']: {
    background: 'linear-gradient(180deg, rgba(255, 185, 0, 0.15) 0%, rgba(0, 0, 0, 0.00) 100%)',
  },
  ['purple']: {
    background: 'linear-gradient(180deg, rgba(98, 24, 255, 0.15) 0%, rgba(0, 0, 0, 0.00) 100%)',
  },
  ['green']: {
    background: 'linear-gradient(180deg, rgba(0, 255, 132, 0.15) 0%, rgba(0, 0, 0, 0.00) 100%)',
  },
  ['blue']: {
    background: 'linear-gradient(180deg, rgba(0, 101, 255, 0.15) 0%, rgba(0, 0, 0, 0.00) 100%)',
  },
};

const Container = styled.div`
  width: 296px;
  height: 325px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  ${({ className }) => CONTAINER_TYPE[className as 'red']};

  position: relative;
  overflow: hidden;

  .effect {
    position: absolute;
    top: -40px;
    left: -60px;

    width: 311px;
    height: 342px;
    transform: rotate(-30deg);
    ${({ className }) => EFFECT_TYPE[className as 'red']};

    z-index: -1;
  }
`;

const CardWrap = styled.div`
  position: relative;

  .subTitle {
    color: ${black.gray.gray5};
    font-size: 12px;
    font-weight: 400;
  }

  .skillWrap {
    height: 72px;
    margin: 24px 0 28px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .title {
    height: 40px;
    color: ${black.gray.white};
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 16px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .projectDate {
    color: ${black.gray.gray2};
    font-size: 12px;
    font-weight: 500;
  }

  .deposit {
    color: ${black.gray.gray3};
    font-size: 12px;
    font-weight: 700;
  }
`;
