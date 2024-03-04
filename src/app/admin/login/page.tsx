'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Input from '@/components/Input/Input';
import CheckBox from '@/components/CheckBox/CheckBox';
import Button from '@/components/Button/Button';

const Page = () => {
  return (
    <Container>
      <h1 className="title">SIDE GO</h1>
      <div className="inputWrap">
        <Input type="text" name="id" value={''} placeholder="아이디" size="large" onChange={() => {}} />
        <Input type="password" name="password" value={''} placeholder="비밀번호" size="large" onChange={() => {}} />
      </div>
      <CheckBox text="아이디 저장" onChange={() => console.log()} />
      <StyledButton size="large">로그인</StyledButton>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;

  .title {
    margin-bottom: 38px;

    color: ${color.brandMain};
    text-align: center;

    font-size: 32px;
    font-weight: 400;
  }

  .inputWrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 8.5px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 49.5px;
`;
