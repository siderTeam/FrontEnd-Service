'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import { Dispatch, SetStateAction, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale'; //한국어 설정
import Image from 'next/image';

type DateProps = {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
};

const formatDate = (value: Date) => {
  const date = new Date(value);
  const month = date.getMonth() + 1;

  return `${`0${month}`.slice(-2)}월`;
};

const Calendar = ({ selectedDate, setSelectedDate }: DateProps) => {
  //선택 날짜로부터 마이너스 날짜(-7일, -30일)
  const handleClickMinus = (day: number) => {
    const start = new Date(selectedDate);
    start.setDate(start.getDate() - day);

    setSelectedDate(start);
  };

  return (
    <Container>
      <StyledDatePicker
        locale={ko}
        showPopperArrow={false}
        dateFormat="yyyy / MM / dd"
        selected={selectedDate}
        onChange={(date: Date) => setSelectedDate(date)}
        renderCustomHeader={({ date, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
          <div className="customHeaderContainer">
            <ButtonWrap>
              <button className="button">전체</button>
              <button className="button" onClick={() => handleClickMinus(7)}>
                -7일
              </button>
              <button className="button" onClick={() => handleClickMinus(30)}>
                -30일
              </button>
            </ButtonWrap>
            <div>
              <button className="monthButton" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {<Image src={'/images/icons/arrow_left_white.svg'} alt="arrow_left" width={5} height={9} />}
              </button>
              <span className="month">{formatDate(date)}</span>
              <button className="monthButton" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {<Image src={'/images/icons/arrow_right_white.svg'} alt="arrow_left" width={5} height={9} />}
              </button>
            </div>
          </div>
        )}
      />
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  .customHeaderContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
    padding: 10px 16px 16px 16px;

    .monthButton {
      background: none;
      border: none;
      cursor: pointer;
    }

    .month {
      color: ${color.white};
      font-size: 12px;
      font-weight: 400;
      margin: 0 8px 0 8px;
    }
  }

  .react-datepicker {
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    font-weight: 400;

    width: 265px;

    border-radius: 0px 0px 6px 6px;
    border-right: 1px solid ${color.gray6};
    border-bottom: 1px solid ${color.gray6};
    border-left: 1px solid ${color.gray6};
    background: ${color.black};

    .react-datepicker__month-container {
      float: none;
    }

    .react-datepicker__month {
      margin: 0 16px 10px 16px;
    }

    .react-datepicker__week {
      display: flex;
      justify-content: space-between;
    }

    .react-datepicker__header {
      border-bottom: none;
      background: ${color.black};
      padding: 0;
    }

    .react-datepicker__day-names {
      display: flex;
      justify-content: space-between;
      margin: 0 16px 0 16px;
    }

    .react-datepicker__day,
    .react-datepicker__day-name {
      display: flex;
      align-items: center;
      justify-content: center;

      box-sizing: border-box;
      padding: 2px;
      width: 19px;
      height: 19px;
      line-height: normal;
      margin: 2px;
    }

    .react-datepicker__day-name {
      color: ${color.gray5};
    }

    .react-datepicker__day {
      color: ${color.white};
    }

    .react-datepicker__day:hover:not(.react-datepicker__day--selected) {
      background: ${color.gray9};
    }

    .react-datepicker__day--selected {
      background: ${color.brandMain};
      color: ${color.black};
      border-radius: 4px;
    }

    .react-datepicker__day--keyboard-selected {
      background: ${color.gray9};
      border-radius: 4px;
    }

    .react-datepicker__day--outside-month {
      color: ${color.gray6};
    }
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  border: none;
  background-color: transparent;

  font-size: 14px;
  font-weight: 400;
  //color: ${color.gray7};
  color: ${color.white};
  text-align: center;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 4px 8px;

    border-radius: 6px;
    border: none;
    background: ${color.gray9};
    cursor: pointer;

    color: ${color.white};
    font-size: 12px;
    font-weight: 400;
  }
`;
