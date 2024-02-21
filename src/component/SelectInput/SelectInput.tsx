"use client";

import styled from "@emotion/styled";
import { color } from "../../Styles/CommonStyles";
import Image from "next/image";
import { useState } from "react";

const SelectInput = () => {
  const [visible, setVisible] = useState(true);

  const handleClickSelect = () => {
    setVisible(!visible);
  };

  const handleBlur = () => {
    setVisible(false);
  };

  return (
    <Container>
      <div tabIndex={0} onBlur={handleBlur}>
        <StyledSelect onClick={handleClickSelect}>테스트</StyledSelect>
        {visible && (
          <OptionWrapper>
            <li>옵션1</li>
            <li>옵션2</li>
            <li>옵션3</li>
            <li>옵션4</li>
          </OptionWrapper>
        )}
      </div>
      <StyledInput placeholder="프로젝트 검색" />
      <Image
        src={"/images/icons/magnification_green.svg"}
        alt="search"
        width={24}
        height={24}
        style={{ cursor: "pointer" }}
      />
    </Container>
  );
};

export default SelectInput;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  box-sizing: border-box;
  width: 440px;
  height: 44px;
  padding: 12px 20px;
  border-radius: 58px;
  border: 1px solid ${color.brandMain};
`;

const StyledSelect = styled.div`
  color: ${color.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;

  cursor: pointer;

  &::after {
    content: url("/images/icons/arrow_down_green.svg");
    margin: 0 16px 0 8px;
  }
`;

const OptionWrapper = styled.ul`
  position: absolute;
  top: 45px;
  left: 0;
  color: ${color.gray7};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  box-sizing: border-box;
  background: ${color.black};
  border: 1px solid ${color.brandMain};
  border-radius: 12px;
  z-index: 3;

  max-height: 200px;
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

  li {
    display: flex;
    align-items: center;
    cursor: pointer;

    box-sizing: border-box;
    width: 100%;
    height: 52px;
    padding: 0 20px;
  }

  li:hover {
    background: ${color.gray8};
    color: ${color.white};
  }
`;

const StyledInput = styled.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  margin-right: 16px;

  color: ${color.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: ${color.gray7};
  }
`;
