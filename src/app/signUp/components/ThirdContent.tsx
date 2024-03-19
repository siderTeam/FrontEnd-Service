'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import useChangeInput from '@/hook/useChangeInput';
import useChangeSelect from '@/hook/useChangeSelect';
import { SIGN_UP_REQUEST } from '@/api/auth/model';

import SelectBox from '@/components/SelectBox/SelectBox';
import { POSITION_CODE_ARRAY } from 'public/static/requireJudge/static';
import { useEffect, useState } from 'react';
import { POSITION_CODE } from 'public/lib/enum';

interface Props {
  onClick: (callback: Callback) => void;
}

type Callback = Pick<SIGN_UP_REQUEST, 'positionCode' | 'career'>;

const ThirdContent = ({ onClick }: Props) => {
  const { input, onChange, setInput } = useChangeInput('');
  const { select, onChange: onChangeSelect } = useChangeSelect(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (!!select) {
      setDisabled(false);
    }
  }, [select, input]);

  const positionOption = [
    ...POSITION_CODE_ARRAY.map((item) => {
      return {
        label: item.label,
        value: item.value,
      };
    }),
  ];

  const handleClickNext = () => {
    onClick({
      positionCode: select as unknown as POSITION_CODE,
      career: Number(input),
    });
  };

  return (
    <SignupContainer>
      <div className="complete-bar">
        <div className="complete"></div>
      </div>
      <div className="text">
        사이드고를 이용하는
        <br />
        당신의 능력에 대해 설명해주세요.
      </div>

      <SelectBox
        name="positionCode"
        value={select}
        placeholder="포지션"
        onChange={onChangeSelect}
        options={positionOption}
        style={{ width: '100%', borderRadius: 12, height: 56 }}
        optionStyle={{ width: '100%', height: 56 }}
        optionWrapperStyle={{ width: '100%', borderRadius: 12 }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 12 }}>
        <Input onChange={onChange} placeholder="연차" name="career" type="number" size="full" containerStyle={{ flex: 1 }} value={input} />
        <div style={{ color: color.gray.gray6, fontSize: 20 }}>년차</div>
      </div>
      <div className="complete-text">거의 다 왔어요!</div>

      <div className="button-wrapper">
        <Button disabled={disabled} variant="primary" onClick={handleClickNext} style={{ width: '100%' }}>
          다음
        </Button>
      </div>
      <div className="mirror"></div>
    </SignupContainer>
  );
};

export default ThirdContent;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 624px;
  height: 785px;
  flex-shrink: 0;

  overflow: hidden;
  position: relative;

  padding: 56px;

  box-sizing: border-box;

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.67);
  background: linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5);
  backdrop-filter: blur(20px);

  .mirror {
    width: 702.513px;
    height: 551.634px;
    transform: rotate(-30deg);
    flex-shrink: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 100%);

    position: absolute;
    /* overflow: hidden; */
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
      width: 75%;
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
  .complete-text {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 165px;
    margin-bottom: 166px;

    color: ${color.gray.gray8};

    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .button-wrapper {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: end;
  }
`;
