'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import { useState } from 'react';
import SelectBox from '@/components/SelectBox/SelectBox';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Calendar from '@/components/Calendar/Calendar';

const SearchHeader = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  //검색어 selectbox
  const handleSelectChange = (name: string, value: string) => {
    setSelectValue(value);
  };

  //검색어 input
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <SearchWrap>
      <div className="subtitle">반환 요청일(기간)</div>
      <DatePickerWrap>
        <Calendar selectedDate={startDate} setSelectedDate={setStartDate} />
        <div className="dash">-</div>
        <Calendar selectedDate={endDate} setSelectedDate={setEndDate} />
      </DatePickerWrap>

      <div className="subtitle status">환급현황</div>
      <SelectBox
        style={{ width: 220 }}
        options={[{ label: '환급완료', value: '1' }]}
        value={selectValue}
        name="search"
        onChange={handleSelectChange}
        placeholder="전체"
      />

      <div className="subtitle">검색어</div>
      <SelectBox
        style={{ width: 140 }}
        options={[
          { label: '아이디', value: '1' },
          { label: '닉네임', value: '2' },
          { label: '이름', value: '3' },
        ]}
        value={selectValue}
        name="search"
        onChange={handleSelectChange}
        placeholder="전체"
      />
      <Input style={{ width: 248 }} size="small" name="input" value={inputValue} placeholder="검색어를 입력해주세요." onChange={handleInputChange} />

      <div className="button-wrap">
        <Button mode="secondary" size="small">
          초기화
        </Button>
        <Button size="small">검색</Button>
      </div>
    </SearchWrap>
  );
};

export default SearchHeader;

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  width: 100%;
  height: 40px;
  margin-bottom: 32px;

  border-radius: 8px;
  border: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  background: var(--Fill, linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5));

  .subtitle {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 120px;
    box-sizing: border-box;
    padding: 11px 0px 9px 0px;

    border-right: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));

    color: ${color.white};
    font-size: 14px;
    font-weight: 400;
  }

  .status {
    border-left: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  }

  .button-wrap {
    flex: 1;
    display: flex;
    justify-content: end;
    gap: 4px;
    margin-right: 4px;
  }
`;

const DatePickerWrap = styled.div`
  display: flex;
  width: 265px;
  height: 30px;
  box-sizing: border-box;
  padding: 6px 16px;
  justify-content: space-between;
  align-items: center;

  border-radius: 6px;
  border: 1px solid ${color.gray6};

  .dash {
    color: ${color.gray7};
    font-size: 14px;
    font-weight: 400;
    margin: 0 17px 0 17px;
  }
`;
