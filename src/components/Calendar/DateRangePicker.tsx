import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Calender from './Calender';
import { DateRangeType } from '@/hook/useChangeDateRange';

interface DateRangeProps {
  onChange: (e: Date, type: 'start' | 'end') => void;
  date: DateRangeType;
}

const DateRangePicker = ({date, onChange}: DateRangeProps) => {
  return (
    <Container>
      <Calender date={date.start} type="start" onChange={onChange} />

      <Dash>-</Dash>

      <Calender date={date.end} type="end" onChange={onChange} />
    </Container>
  );
};

export default DateRangePicker;

const Container = styled.div`
  display: flex;
  width: 265px;
  height: 30px;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  border: 1px solid ${color.gray.gray6};

  box-sizing: border-box;
`;

const Dash = styled.div`
  color: ${color.gray.gray7};
  margin: 0 17px;
`;
