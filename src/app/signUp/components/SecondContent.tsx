'use client';

import styled from '@emotion/styled';
import { color } from '../../../styles/CommonStyles';
import { useEffect, useState } from 'react';
import Input from '@/components/Input/Input';
import { USER_SIGNUP_REQUEST } from '@/app/api/model';
import Button from '@/components/Button/Button';
import { SignUpProps } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { rest } from '@/app/api/rest';
import { getIdCheck } from '@/app/api/api';

const SecondContent = ({ onNext }: SignUpProps) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [username, setUsername] = useState('');
  const [form, setForm] = useState<USER_SIGNUP_REQUEST>({
    username: '',
    name: '',
    password: '',
    email: '',
    nickname: '',
    bankName: '',
    bankNo: '',
    bankUserName: '',
    phone: '',
    jobCode: 0,
    positionCode: [],
  });

  //form input onChange
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  //id 중복확인
  const idCheckData = useQuery({
    queryKey: [rest.get.getIdCheck, username],
    queryFn: () => getIdCheck(username),
    enabled: !!username, //id값이 존재하지 않을 경우 false를 변경해줌으로써 자동 실행을 막을 수 있음
  });

  useEffect(() => {
    if (idCheckData.isSuccess) {
      if (idCheckData.data?.result === true) {
        alert('사용 가능한 아이디입니다.');
      } else {
        alert('중복된 아이디입니다.');
      }
    }
  }, [idCheckData.data, idCheckData.isSuccess]);

  //전화번호 onKeyDown
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // 입력된 키가 숫자, 방향키, backspace, delete가 아니면 이벤트 취소
    if (!/\d/.test(e.key) && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'Backspace' && e.key !== 'Delete') {
      e.preventDefault();
    }
  };

  return (
    <>
      <Progressbar />
      <SubTitle>
        사이드고 서비스를 이용할
        <br />
        계정 정보를 작성해 주세요.
      </SubTitle>
      <InputWrap>
        <div className="idWrap">
          <Input type="text" name="username" size="large" placeholder="아이디" onChange={handleChange} />
          <StyledButton size="in_input" onClick={() => setUsername(form.username)}>
            중복확인
          </StyledButton>
        </div>
        <Input type="password" name="password" size="large" placeholder="비밀번호" onChange={handleChange} />
        <Input type="password" name="passwordCheck" size="large" placeholder="비밀번호 확인" onChange={handleChange} />
        <Input type="text" name="name" size="large" placeholder="이름" onChange={handleChange} />
        <Input type="text" name="nickname" size="large" placeholder="닉네임" onChange={handleChange} />
        <Input type="text" name="phone" size="large" placeholder="전화번호" onChange={handleChange} onKeyDown={handleKeyDown} maxLength={11} />
      </InputWrap>
      <Button size="large" onClick={onNext}>
        다음
      </Button>
    </>
  );
};

export default SecondContent;

const Progressbar = styled.div`
  width: 100px;
  height: 8px;
  margin-bottom: 56px;
  background-image: url('/images/progressbar/step2.svg');
`;

const SubTitle = styled.div`
  margin-bottom: 32px;
  color: ${color.gray3};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const InputWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .idWrap {
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 2px;
  right: 2px;
`;
