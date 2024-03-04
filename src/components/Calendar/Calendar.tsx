'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale'; //한국어 설정
import Image from 'next/image';

const formatDate = (d: Date) => {
  const date = new Date(d);
  const month = date.getMonth() + 1;

  return `${`0${month}`.slice(-2)}월`;
};

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  return (
    <Container>
      <StyledDatePicker // DatePicker의 styled-component명
        locale={ko}
        showPopperArrow={false}
        dateFormat="yyyy / MM / dd"
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        renderCustomHeader={({ date, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
          <div className="customHeaderContainer">
            <div></div>
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
      <span className="dash">-</span>
      <StyledDatePicker locale={ko} showPopperArrow={false} dateFormat="yyyy / MM / dd" selected={endDate} onChange={(date: Date) => setEndDate(date)} />
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
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
    height: 189px;

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

      .react-datepicker__day {
        margin: 2px;
      }
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
      box-sizing: border-box;
      padding: 2px;
      width: 19px;
      height: 19px;
      line-height: normal;
      margin: 0;
    }

    .react-datepicker__day-name {
      color: ${color.gray5};
    }

    .react-datepicker__day {
      color: ${color.white};
    }

    .react-datepicker__day:hover {
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
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  border: none;
  background-color: transparent;

  font-size: 14px;
  font-weight: 400;
  color: ${color.gray7};
  text-align: center;
`;
