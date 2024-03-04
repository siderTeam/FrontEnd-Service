'use client';

import { CardProps } from '@/types/types';
import styled from '@emotion/styled';
import Profile from '../Profile/Profile';
import Image from 'next/image';
import { color } from '@/styles/color';
import { useQuery } from '@tanstack/react-query';
import { rest } from '@/api/rest';
import { getProject } from '@/api/api';

const Card = ({ children, id, title = '날아라 사이드킥', projectPeriod = '2024.01.20 ~ 2024.02.20', deposit = '10만원' }: CardProps) => {

  const { data, isLoading } = useQuery({
    queryKey: [rest.get.project],
    queryFn: getProject,
  });

  return (
    <Container id={id}>
      <span className="endDate">모집 마감일 8888.88.88</span>
      <div className="iconContianer">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
          <div key={index} className="iconWrapper">
            <Image src={'/images/skills/git.svg'} alt="git" width={28} height={26} />
          </div>
        ))}
      </div>
      <span className="title">{title}</span>
      <div className="projectInfo">
        <div>
          <label>프로젝트기간</label>
          <span className="content">{projectPeriod}</span>
        </div>

        <div>
          <label>보증금</label>
          <span className="content">{deposit.toLocaleString()}만원</span>
        </div>
      </div>
      <Profile />
      <div className="test" />
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 296px;
  height: 325px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(153, 19, 41, 0.15) 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(140deg, rgba(255, 255, 255, 0.001) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.7);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 10px;
    padding: 1px;
    background: linear-gradient(-45deg, #9b1226, #242323);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .test {
    position: absolute;
    left: -70px;
    top: -22px;
    width: 311.102px;
    height: 342.62px;
    transform: rotate(-30deg);
    flex-shrink: 0;
    background: linear-gradient(180deg, rgba(255, 0, 42, 0.23) 0%, rgba(0, 0, 0, 0) 100%),
      linear-gradient(140deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.6);
    z-index: -1;
  }

  .endDate {
    color: ${color.gray.gray5};
    font-size: 12px;
  }

  .iconContianer {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 24px;
    margin-bottom: 28px;

    .iconWrapper {
      background: red;
      width: 32px;
      height: 32px;
    }
  }

  .title {
    color: ${color.gray.white};
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 700;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .projectInfo {
    display: flex;
    margin-bottom: 16px;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      text-overflow: ellipsis;
      font-size: 12px;
      font-weight: 500;
      gap: 4px;

      label {
        color: ${color.gray.gray5};
      }

      .content {
        color: ${color.gray.white};
      }
    }
  }
`;
