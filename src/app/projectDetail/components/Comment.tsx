'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Image from 'next/image';

const Comment = () => {
  return (
    <Container>
      <div className="profile">
        <Image src={'/images/home/profile.svg'} alt="profile" width={40} height={40} />
        <div>
          <div className="info">
            <span className="name">홍길동</span>
            <span className="position">프론트엔드</span>
          </div>
          <div className="date">8888.88.88 88:88:88</div>
        </div>
      </div>
      <div className="comment">댓글입니다.</div>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  box-sizing: border-box;
  padding: 16px 32px;
  border-bottom: 1px solid ${color.gray8};

  .profile {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 4px;

    font-size: 14px;
    font-weight: 500;

    .name {
      color: ${color.gray3};
    }

    .position {
      color: ${color.gray5};
    }

    span:not(:last-child) {
      box-sizing: border-box;
      padding-right: 4px;
      border-right: 1px solid ${color.gray5};
    }
  }

  .date {
    color: ${color.gray6};
    font-weight: 400;
  }

  .comment {
    margin: 16px 32px 0 50px;
  }
`;
