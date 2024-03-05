'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import Radio from '@/components/Radio/Radio';

interface Props {
  onClick: () => void;
}

const FirstContent = ({ onClick }: Props) => {
  const [checkForm, setCheckForm] = useState({
    all: false,
    first: false,
    second: false,
  });

  useEffect(() => {
    const isAllChecked = checkForm.first && checkForm.second;

    if (isAllChecked) {
      setCheckForm((prevCheckForm) => ({
        ...prevCheckForm,
        all: true,
      }));
    } else {
      setCheckForm((prevCheckForm) => ({
        ...prevCheckForm,
        all: false,
      }));
    }
  }, [checkForm.first, checkForm.second]);

  const handleAgreeAll = () => {
    const newState = {
      all: !checkForm.all,
      first: !checkForm.all,
      second: !checkForm.all,
    };
    setCheckForm(newState);
  };

  const handleRadioClick = (name: string) => {
    setCheckForm({
      ...checkForm,
      [name]: !checkForm[name as 'all' | 'first' | 'second'],
    });
  };

  return (
    <SignupContainer>
      <div className="complete-bar">
        <div className="complete"></div>
      </div>
      <div className="text">
        사이드고 서비스 이용약관에
        <br />
        동의해 주세요.
      </div>

      <div className="content-wrapper">
        <Radio style={{ gap: 12 }} size="big" className="radio" text="모두 동의합니다." isChecked={checkForm.all} onClick={handleAgreeAll} />
        <div>
          <Radio
            style={{ gap: 12 }}
            size="big"
            className="radio"
            text="이용약관 동의"
            isChecked={checkForm.first}
            requireText="(필수)"
            onClick={() => handleRadioClick('first')}
          />
          <div className="terms">약관 내용</div>
        </div>
        <div>
          <Radio
            style={{ gap: 12 }}
            size="big"
            className="radio"
            text="개인정보 이용약관 동의"
            isChecked={checkForm.second}
            requireText="(필수)"
            onClick={() => handleRadioClick('second')}
          />
          <div className="terms">약관 내용</div>
        </div>
      </div>

      <div className="button-wrapper">
        <Button variant="primary" onClick={onClick} style={{ width: '100%' }} disabled={!checkForm.all}>
          다음
        </Button>
      </div>
      <div className="mirror"></div>
    </SignupContainer>
  );
};

export default FirstContent;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 624px;
  height: 785px;
  flex-shrink: 0;
  padding: 56px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.67);
  background: linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5);
  backdrop-filter: blur(20px);
  overflow: hidden;
  position: relative;

  .content-wrapper {
    display: flex;
    gap: 24px;
    flex-direction: column;
  }

  .mirror {
    width: 702.513px;
    height: 551.634px;
    transform: rotate(-30deg);
    flex-shrink: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
    position: absolute;
    right: 120px;
    top: -50px;
    z-index: -1;
  }

  .complete-bar {
    width: 100px;
    height: 8px;
    flex-shrink: 0;
    background-color: ${color.gray.gray8};
    border-radius: 26px;
    margin-bottom: 56px;
    position: relative;

    .complete {
      width: 25%;
      height: 8px;
      flex-shrink: 0;
      background-color: ${color.brand.brandMain};
      border-radius: 26px 0 0 26px;
      position: absolute;
    }
  }

  .text {
    color: ${color.gray.gray3};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 32px;
  }

  .terms {
    width: 480px;
    height: 140px;
    flex-shrink: 0;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid ${color.gray.gray7};
    padding: 10px 20px 18px 20px;
    margin-top: 10px;
    margin-left: 24px;
    overflow-y: auto;
    color: ${color.gray.gray4};

    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

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

  .button-wrapper {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: end;
  }
`;
