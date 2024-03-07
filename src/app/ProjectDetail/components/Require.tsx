import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';

const Require = () => {
  return (
    <RequireWrap>
      <div className="require-title">
        <Image src="/images/etc/checkCircle_gray5.svg" width={22} height={22} alt="checkCircle" />
        <span>기능 요구사항</span>
      </div>
      <div className="require-content">
        {/* <ol style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', marginRight: '392px' }}>
          <li className="require-text">요구사항요구사항요구사항요구사항</li>
          <hr className="dash" />
          <div>10점</div>
        </ol> */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', marginRight: '392px' }}>
          <div className="require-text">
            1. 요구사항요구사항요구사항요구사항요구사항요구사항요구사항요구사항요구요구사항요구사항요구사항요구사항요구사항요구사항요구사항요구사항요구
          </div>
          <hr className="dash" />
          <div className="score">10점</div>
        </div>
      </div>
    </RequireWrap>
  );
};

export default Require;

const RequireWrap = styled.div`
  padding: 40px 32px 0 32px;
  .require-title {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${color.gray.gray5};
    font-size: 22px;
    font-weight: 700;
  }
  .require-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${color.gray.white};
    font-size: 18px;
    font-weight: 500;

    margin-top: 16px;
  }
  .require-text {
    max-width: 621px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 12px;
    /* list-style: decimal; */

    font-size: 18px;
    font-weight: 500;
  }
  .dash {
    border: 1px dashed ${color.gray.gray8};
    flex-grow: 1;
  }
  .score {
    color: ${color.gray.white};
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
  }
`;
