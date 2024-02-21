"use client";

import styled from "@emotion/styled";
import { color } from "../../../Styles/CommonStyles";
import Radio from "@/component/Radio/Radio";
import { useState } from "react";
import Button from "@/component/Button/Button";
import { SignUpProps } from "@/type/types";

const FirstContent = ({ onNext }: SignUpProps) => {
  const [radioSelected, setRadioSelected] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleRadioClick = () => {
    setRadioSelected((prev) => !prev);
  };

  return (
    <>
      <Progressbar></Progressbar>
      <SubTitle>
        사이드고 서비스 이용 약관에
        <br />
        동의해 주세요.
      </SubTitle>
      <RadioWrap>
        <Radio
          text="모두 동의합니다."
          name="service"
          value="all"
          isChecked={radioSelected}
          onChange={handleRadioClick}
        />
        <div>
          <Radio
            text="이용약관 동의"
            requireText="(필수)"
            name="service"
            value="TOS"
            isChecked={radioSelected}
            onChange={handleRadioClick}
          />
          <div className="explain">
            <p>
              고구마맛탕에고구마는없고감자만있는사건에대해 알아야하지않겠습니까.
              이러면 감자맛탕인데 감자맛탕은 내가 살면서 들어본적이 없어요. 이런
              상황에서 고구마맛탕의 지위는 바닥으로 곤두박질치게 될 것입니다.
              고구마맛탕에 감자가 왜있냐고요.
              고구마맛탕에고구마는없고감자만있는사건에대해 알아야하지않겠습니까.
              이러면 감자맛탕인데 감자맛탕은 내가 살면서 들어본적이 없어요. 이런
              상황에서 고구마맛탕의 지위는 바닥으로 곤두박질치게 될 것입니다.
              고구마맛탕에 감자가
              왜있냐고요.고구마맛탕에고구마는없고감자만있는사건에대해
              알아야하지않겠습니까. 이러면 감자맛탕인데 감자맛탕은 내가 살면서
              들어본적이 없어요. 이런 상황에서 고구마맛탕의 지위는 바닥으로
              곤두박질치게 될 것입니다. 고구마맛탕에 감자가
              왜있냐고요.고구마맛탕에고구마는없고감자만있는사건에대해
              알아야하지않겠습니까. 이러면 감자맛탕인데 감자맛탕은 내가 살면서
              들어본적이 없어요. 이런 상황에서 고구마맛탕의 지위는 바닥으로
              곤두박질치게 될 것입니다. 고구마맛탕에 감자가 왜있냐고요.
            </p>
          </div>
        </div>
        <div>
          <Radio
            text="개인정보이용약관 동의"
            requireText="(필수)"
            name="service"
            value="info"
            isChecked={radioSelected}
            onChange={handleRadioClick}
          />
          <div className="explain">
            <p>
              고구마맛탕에고구마는없고감자만있는사건에대해 알아야하지않겠습니까.
              이러면 감자맛탕인데 감자맛탕은 내가 살면서 들어본적이 없어요. 이런
              상황에서 고구마맛탕의 지위는 바닥으로 곤두박질치게 될 것입니다.
              고구마맛탕에 감자가 왜있냐고요.
              고구마맛탕에고구마는없고감자만있는사건에대해 알아야하지않겠습니까.
              이러면 감자맛탕인데 감자맛탕은 내가 살면서 들어본적이 없어요. 이런
              상황에서 고구마맛탕의 지위는 바닥으로 곤두박질치게 될 것입니다.
              고구마맛탕에 감자가
              왜있냐고요.고구마맛탕에고구마는없고감자만있는사건에대해
              알아야하지않겠습니까. 이러면 감자맛탕인데 감자맛탕은 내가 살면서
              들어본적이 없어요. 이런 상황에서 고구마맛탕의 지위는 바닥으로
              곤두박질치게 될 것입니다. 고구마맛탕에 감자가
              왜있냐고요.고구마맛탕에고구마는없고감자만있는사건에대해
              알아야하지않겠습니까. 이러면 감자맛탕인데 감자맛탕은 내가 살면서
              들어본적이 없어요. 이런 상황에서 고구마맛탕의 지위는 바닥으로
              곤두박질치게 될 것입니다. 고구마맛탕에 감자가 왜있냐고요.
            </p>
          </div>
        </div>
      </RadioWrap>
      <Button size="large" onClick={onNext}>
        다음
      </Button>
    </>
  );
};

export default FirstContent;

const Progressbar = styled.div`
  width: 100px;
  height: 8px;
  margin-bottom: 56px;
  background-image: url("/images/progressbar/step1.svg");
`;

const SubTitle = styled.div`
  margin-bottom: 32px;
  color: ${color.gray3};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RadioWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .explain {
    box-sizing: border-box;
    width: 480px;
    height: 140px;
    padding: 10px 20px;
    margin-top: 10px;
    float: right;

    border-radius: 8px;
    border: 1px solid ${color.gray7};

    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 12px; /* 스크롤바의 너비 */
    }
    &::-webkit-scrollbar-thumb {
      background: ${color.gray5}; /* 스크롤바의 색상 */
      border-radius: 28px;

      background-clip: padding-box;
      border: 4px solid transparent;
    }

    p {
      color: ${color.gray4};
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
