import Image from "next/image";
import SelectBox from "../SelectBox_new/SelectBox";
import styled from "@emotion/styled";
import { color } from "@/Styles/color";
import { SelectInputProps } from "@/types/types";
import { useState } from "react";

const SelectInput = ({
  value,
  name,
  style,
  options,
  onChange,
  placeholder,
}: SelectInputProps) => {
  const [visible, setVisible] = useState(false);

  const handleClickSelect = (e: any) => {
    e.preventDefault();
    setVisible(!visible);
  };

  const handleClick = (e: any, value: string) => {
    e.preventDefault();
    onChange(name, value);
    setVisible(false);
  };

  const selected = options.filter((option) => option.value === value);

  return (
    <Container>
      <div className='select-input-wrap'>
        <div className='select'>
          <SelectStyle value={value} name={name} style={style}>
            <div className={selected.length === 0 ? "value" : "choice-value"}>
              {selected.length === 0 ? placeholder : selected[0].label}
            </div>
          </SelectStyle>

          {visible && (
            <OptionWrapper>
              {options?.map((option) => (
                <li
                  onClick={(e) => handleClick(e, option.value)}
                  key={option.value}
                  value={option.label}
                >
                  {option.label}
                </li>
              ))}
            </OptionWrapper>
          )}
        </div>
        <Image
          src='/images/icons/ArrowDown_green.svg'
          alt='arrow'
          width={14}
          height={8}
          style={{ marginLeft: "8px", cursor: "pointer" }}
          onClick={handleClickSelect}
        />

        <input className='input' />
        <Image
          src='/images/icons/Magnification_green.svg'
          alt='magnification'
          width={20}
          height={20}
          style={{ marginLeft: "20px" }}
        />
      </div>
    </Container>
  );
};

export default SelectInput;

const Container = styled.div`
  display: flex;

  width: 440px;
  height: 44px;
  flex-shrink: 0;

  border-radius: 58px;
  border: 1px solid ${color.brand.brandMain};

  .select-input-wrap {
    display: flex;
    align-items: center;

    .select {
      position: relative;
    }

    .input {
      outline: none;
      border: none;
      background: none;
      margin-left: 16px;

      width: 250px;

      color: ${color.gray.gray7};

      font-size: 16px;

      font-weight: 400;
    }
  }
`;

// const SelectWrap = styled.div`

// `;

const SelectStyle = styled.div`
  width: 65px;
  color: ${color.gray.white};

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 20px;
`;

const OptionWrapper = styled.ul`
  position: absolute;
  width: 100px;
  top: 40px;
  left: 10px;
  box-sizing: border-box;

  z-index: 3;

  li {
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid ${color.brand.brandMain};
    color: ${color.gray.white};

    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  li:hover {
    border: 1px solid #b8b8b8;
  }
`;
