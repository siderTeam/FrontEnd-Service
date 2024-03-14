import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { getMonth } from 'date-fns';
import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';

interface CalenderProps {
  date: Date | null;
  type: 'start' | 'end';
  onChange: (date: Date, type: 'start' | 'end') => void;
}

const Calender = ({ date, onChange, type }: CalenderProps) => {
  const MONTHS = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  console.log('date', date, type);

  return (
    <Container>
      <StyledDatePicker // DatePicker의 styled-component명
        locale={ko} //한글
        dateFormat="yyyy / MM / dd"
        selected={date}
        closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
        onChange={(date: Date) => onChange(date, type)}
        /////////////////////
        renderCustomHeader={({ date, changeYear, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
          <div className="customHeaderContainer">
            <div className="dateButtonWrap">
              <button className="dateButton">전체</button>
              <button className="dateButton">-7일</button>
              <button className="dateButton">-30일</button>
            </div>
            <div className="monthWrap">
              <button type="button" onClick={decreaseMonth} className="monthButton" disabled={prevMonthButtonDisabled}>
                <Image src="/images/arrow/arrow_left.svg" alt="arrow" width={5.33} height={9.328} />
              </button>
              <span className="month">{MONTHS[getMonth(date)]}</span>
              <button type="button" onClick={increaseMonth} className="monthButton" disabled={nextMonthButtonDisabled}>
                <Image src="/images/arrow/arrow_right.svg" alt="arrow" width={5.33} height={9.328} />
              </button>
            </div>
          </div>
        )}
        ///////////////////////
        dayClassName={(_date: Date) => {
          // 현재 선택된 월의 날짜인지 확인
          const isCurrentMonth = _date.getMonth() === date!.getMonth();

          // 현재 선택된 월의 날짜가 아닌 경우 클래스 이름 반환
          if (!isCurrentMonth) {
            return 'otherMonthDay';
          }

          // 현재 선택된 월의 날짜인 경우
          // 선택된 날짜인 경우 'selectedDay', 선택되지 않은 날짜인 경우 'unselectedDay' 반환
          return date?.getDate() === _date.getDate() ? 'selectedDay' : 'unselectedDay';
        }}
      />
    </Container>
  );
};

export default Calender;

const Container = styled.div`
  .react-datepicker__month-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .customHeaderContainer {
    width: 233px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    height: 23px;
    margin-bottom: 16px;
  }
  .dateButtonWrap {
    display: flex;
    gap: 4px;
  }
  .dateButton {
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    background: ${color.gray.gray9};

    color: ${color.gray.white};
    font-size: 12px;
    font-weight: 400;

    border: none;

    cursor: pointer;
  }

  .monthWrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .month {
    font-size: 12px;
  }

  .monthButton {
    border: none;
    background: none;
    cursor: pointer;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker {
    padding: 10px 16px;
    position: absolute;
    top: -6px;
    left: -64px;
    width: 265px;
    box-sizing: border-box;

    font-family: 'Spoqa Han Sans Neo';
    border: none;
    border-radius: 0px 0px 6px 6px;
    border-right: 1px solid ${color.gray.gray6};
    border-bottom: 1px solid ${color.gray.gray6};
    border-left: 1px solid ${color.gray.gray6};
    background: var(--Fill, linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5));

    color: ${color.gray.white};

    .react-datepicker__header {
      padding: 0;

      box-sizing: border-box;
      background: inherit;

      border: none;

      .react-datepicker__day-names {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;

        margin-bottom: 8px;

        .react-datepicker__day-name {
          color: ${color.gray.gray5};
          font-size: 12px;
          font-weight: 400;

          width: auto;
          margin: 0;
        }
      }
    }
  }

  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    margin: 0;
    box-sizing: border-box;
    gap: 8px;
  }

  .react-datepicker__week {
    width: 233px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 19px;
    box-sizing: border-box;
  }

  .react-datepicker__day {
    width: 19px;
    height: 19px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${color.gray.white};

    &:hover {
      width: 19px;
      height: 19px;
      padding: 2px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border-radius: 4px;
      background: ${color.gray.gray9};

      box-sizing: border-box;

      cursor: pointer;
    }
  }

  .react-datepicker__day--outside-month {
    color: ${color.gray.gray6};
    font-size: 12px;
    font-weight: 400;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background: none;
    border-radius: 0;
  }

  .selectedDay {
    width: 19px;
    height: 19px;
    display: flex;
    padding: 2px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: ${color.brand.brandMain};

    color: ${color.gray.black};
    font-size: 12px;
    font-weight: 400;

    box-sizing: border-box;
  }

  .unselectedDay {
    font-size: 12px;
    font-weight: 400;

    &:hover {
      width: 19px;
      height: 19px;
      padding: 2px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border-radius: 4px;
      background: ${color.gray.gray9};

      box-sizing: border-box;
    }
  }
`;

const Dash = styled.div`
  color: ${color.gray.gray7};
  margin: 0 17px;
`;

const StyledDatePicker = styled(DatePicker)`
  position: relative;

  width: 100%;
  border: none;
  background-color: transparent;

  font-size: 14px;
  font-weight: 400;
  color: ${color.gray.gray7};
  text-align: center;

  &:focus {
    color: ${color.gray.white};
    outline: none;
  }
`;
