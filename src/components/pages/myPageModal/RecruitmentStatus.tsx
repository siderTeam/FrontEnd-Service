'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';

import React, { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { rest } from '@/api/rest';
import { getResume } from '@/api/api';
import UserCard from '@/components/UserCard/UserCard';
import Button from '@/components/Button/Button';

const RecruitmentStatus = () => {
  return (
    <Container>
      <div className="project">나랑 고구마 만들래~</div>
      <div className="confirm-user">승인된 유저</div>
      <div className="usecard-wrap">
        <UserCard /> <UserCard /> <UserCard /> <UserCard /> <UserCard />
        <UserCard /> <UserCard /> <UserCard />
        <UserCard /> <UserCard /> <UserCard /> <UserCard /> <UserCard />
        <UserCard /> <UserCard /> <UserCard />
      </div>
      <div className="button">
        <Button mode="secondary" size="medium">
          이전
        </Button>
      </div>
    </Container>
  );
};

export default RecruitmentStatus;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 842px;

  flex-shrink: 0;
  box-sizing: border-box;

  border-radius: 0 24px 24px 0;

  padding-right: 70px;
  padding-left: 70px;

  background: ${color.gray.black};

  .project {
    color: ${color.gray.white};
    font-size: 24px;
    font-weight: 700;

    margin-top: 60px;
    margin-bottom: 20px;
  }
  .confirm-user {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 400;

    margin-bottom: 20px;
  }

  .usecard-wrap {
    height: 466px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);

    gap: 15px 15px;

    overflow: hidden;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: end;
    flex: 1;
    gap: 4px;
    margin-bottom: 32px;
  }
`;
