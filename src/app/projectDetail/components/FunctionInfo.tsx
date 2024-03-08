'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';

const FunctionInfo = () => {
  return (
    <Container>
      <div className="subtitle">
        <Image src={'/images/checkCircle/checkCircle_gray5.svg'} alt="checkCircle" width={20} height={20} />
        <span>기능 요구사항</span>
      </div>
      <div className="function-wrap">
        <div className="function">
          <div className="require">1. 고구마 에어프라이어에 좀 돌려보신 분</div>
          <hr className="dash" />
          <span className="score">10점</span>
        </div>
        <div className="function">
          <div className="require">2. 고구마고구마고구마고구마고구마고구마고구마고구마 에어프라이어에 좀 돌려보신 분</div>
          <hr className="dash" />
          <span className="score">10점</span>
        </div>
      </div>
    </Container>
  );
};

export default FunctionInfo;

const Container = styled.div`
  border-bottom: 1px solid ${color.gray.gray7};
  box-sizing: border-box;
  padding: 44px 0 44px 0;

  .function-wrap {
    margin-left: 12px;
    width: 744px;

    .function {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .function:not(:last-child) {
      margin-bottom: 10px;
    }

    .require {
      max-width: 621px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      font-size: 18px;
      font-weight: 500;
    }

    .dash {
      border: 1px dashed ${color.gray.gray8};
      flex-grow: 1;
      margin: 0 20px 0 20px;
    }

    .score {
      font-size: 18px;
      font-weight: 700;
    }
  }
`;
