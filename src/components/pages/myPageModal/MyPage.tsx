'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { useEffect, useState } from 'react';
import Input from '@/components/Input/Input';
import Label from '@/components/Label/Label';
import TextArea from '@/components/TextArea/TextArea';
import MyProfile from '@/components/MyProfile/MyProfile';
import Button from '@/components/Button/Button';
import useChangeInputs from '@/hook/useChangeInputs';
import { formatForPositionCode } from 'public/lib/formatForEnum';
import useHandleModal from '@/hook/useHandleModal';
import PositionModal from '@/components/PositionModal/PositionModal';
import { OPTION_TYPE } from '@/components/SelectBox/SelectBox';
import { getUserInfo, useAuthStore } from '@/store/auth.store';
import { useMutation } from '@tanstack/react-query';
import { updateUserInfo } from '@/api/auth/api';
import ChangePassword from './ChangePassword';
import Image from 'next/image';

const initialInputs = {
  nickname: '',
  career: 0,
  positionCode: 0,
  skillCodeList: [],
};

const MyPage = () => {
  const { inputs, setInputs, onChange } = useChangeInputs(initialInputs);
  const [textArea, setTextArea] = useState('');
  const [textareaCount, setTextareaCount] = useState(0);
  const { handleModal, handleModalClose, visible } = useHandleModal(false);
  const [positionCodeList, setPositionCodeList] = useState<OPTION_TYPE[]>([]);
  const [viewPassword, setViewPassword] = useState(false);

  const data = getUserInfo();

  const { setUserInfo } = useAuthStore((state) => {
    return {
      setUserInfo: state.setUserInfo,
    };
  });

  useEffect(() => {
    if (data) {
      setInputs({
        ...inputs,
        career: data.career,
        nickname: data.nickname,
        positionCode: data.positionCode,
      });
      setTextArea(data.introduction);
    }
  }, [data]);

  //input onChange
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });

    onChange(e);
  };

  //textarea onChange
  const onTextareaHandler = (e: any) => {
    const { value, maxLength } = e.target;
    setTextArea(value);

    if (value.length > maxLength) {
      e.target.value = value.slice(0, maxLength);
    }
    setTextareaCount(e.target.value.length);
  };

  const handleClickChoice = (callback: OPTION_TYPE[], type?: 'position') => {
    if (type) {
      setPositionCodeList(callback as OPTION_TYPE[]);
      handleModalClose();
    }
  };

  const { mutate } = useMutation({
    mutationFn: updateUserInfo,
    onSuccess: async (_data) => {
      if (_data.result === true) {
        setUserInfo({
          ...data,
          nickname: inputs.nickname,
          career: inputs.career,
          positionCode: inputs.positionCode,
          skillCodeList: inputs.skillCodeList,
          introduction: textArea,
        });
      }
    },
    onError: () => {
      console.log('실패');
    },
  });

  const handleMutate = () => {
    mutate({
      nickname: inputs.nickname,
      career: inputs.career,
      positionCode: inputs.positionCode,
      skillCodeList: inputs.skillCodeList,
      introduction: textArea,
    });
  };

  const handleChangePassword = () => {
    setViewPassword(true);
  };
  return (
    <>
      {viewPassword && (
        <div style={{ display: 'flex', gap: 8, position: 'absolute', top: 40, left: 260, cursor: 'pointer' }} onClick={() => setViewPassword(false)}>
          <Image src="/images/arrow/arrow_left_gray6.svg" width={16} height={16} alt="arrow" />
          <div style={{ color: color.gray.gray6 }}>뒤로가기</div>
        </div>
      )}
      <Container>
        {viewPassword === false ? (
          <div>
            <MyProfile style={{ marginBottom: '40px' }} name={data.name} career={inputs.career} position={formatForPositionCode(inputs.positionCode)} />
            <div className="input-wrap">
              <Label label="이름" require="*">
                <Input size="medium" style={{ marginTop: '4px' }} disabled onChange={handleChange} value={data.name} name="name" />
              </Label>
              <Label label="연차" require="*">
                <Input size="medium" style={{ marginTop: '4px' }} type="number" onChange={handleChange} value={inputs.career} name="career" />
              </Label>
              <Label label="닉네임" require="*">
                <Input size="medium" style={{ marginTop: '4px' }} onChange={handleChange} value={inputs.nickname} name="nickname" />
              </Label>
              <Label label="포지션" require="*">
                <Input
                  size="medium"
                  style={{ marginTop: '4px' }}
                  onChange={handleChange}
                  value={formatForPositionCode(inputs.positionCode)}
                  name="positionCode"
                  onClick={handleModal}
                />
              </Label>
            </div>

            <Label label="한 줄 소개" style={{ width: '100%', marginTop: '16px' }}>
              <TextArea
                size="full"
                color="primary"
                style={{ marginTop: '4px' }}
                onChange={onTextareaHandler}
                maxLength={100}
                textareaCount={textareaCount}
                value={textArea}
                name="introduction"
              />
            </Label>

            <div style={{ display: 'flex', justifyContent: 'end', marginTop: 20 }}>
              <Button leftIcon="/images/lock/lock_green.svg" size="medium" variant="secondary" onClick={handleChangePassword}>
                비밀번호 변경
              </Button>
            </div>
            <div className="button-wrap">
              <Button size="medium" variant="primary" onClick={handleMutate}>
                저장
              </Button>
            </div>
          </div>
        ) : (
          <ChangePassword />
        )}
        <PositionModal visible={visible} onClose={handleModalClose} onClickChoice={handleClickChoice} positionCodeList={positionCodeList} />
      </Container>
    </>
  );
};

export default MyPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 842px;
  height: 100%;
  flex-shrink: 0;
  box-sizing: border-box;

  border-radius: 0 24px 24px 0;

  padding-top: 60px;
  padding-right: 70px;
  padding-left: 70px;
  padding-bottom: 32px;

  background: ${color.gray.black};

  .input-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 16px 40px;
  }
  .button-wrap {
    display: flex;
    justify-content: center;
    align-items: end;
    flex: 1;
  }
`;
