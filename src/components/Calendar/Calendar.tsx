import styled from '@emotion/styled';
import { color } from '@/styles/color';
import LeftDate from './LeftDate';
import RightDate from './RightDate';

const Calendar = () => {
  return (
    <Container>
      <LeftDate />

      <Dash>-</Dash>

      <RightDate />
    </Container>
  );
};

export default Calendar;

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
