'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';
import { PROJECT_DETAIL_RESPONSE } from '@/api/projectDetail/model';

type Props = {
  element: any;
  data: PROJECT_DETAIL_RESPONSE | undefined;
};

const FunctionInfo = ({ element, data }: Props) => {
  return (
    <Container ref={element}>
      <div className="subtitle">
        <Image src={'/images/checkCircle/checkCircle_gray5.svg'} alt="checkCircle" width={20} height={20} />
        <span>기능 요구사항</span>
      </div>
      <div className="function-wrap">
        {data?.audit.detailList.map((item, index) => (
          <div className="function" key={index}>
            <div className="require">
              {index}. {item.contents}
            </div>
            <hr className="dash" />
            <span className="score">{item.point}점</span>
          </div>
        ))}
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
