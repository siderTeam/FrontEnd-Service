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
import { getUserInfo } from '@/store/auth.store';

const initialInputs = {
  username: '',
  name: '',
  nickname: '',
  career: 0,
  introduction: '',
  positionCode: 0,
};

const MyPage = () => {
  const { inputs, setInputs, onChange } = useChangeInputs(initialInputs);
  const { handleModal, handleModalClose, visible } = useHandleModal(false);
  const [positionCodeList, setPositionCodeList] = useState<OPTION_TYPE[]>([]);
  const [textareaCount, setTextareaCount] = useState(0);

  const data = getUserInfo();

  useEffect(() => {
    if (data) {
      setInputs({
        ...inputs,
        name: data.name,
        career: data.career,
        nickname: data.nickname,
        positionCode: data.positionCode,
        introduction: data.introduction,
      });
    }
  }, [data]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });

    onChange(e);
  };

  const onTextareaHandler = (e: any) => {
    const { value, maxLength } = e.target;

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

  return (
    <Container>
      <>
        <MyProfile style={{ marginBottom: '40px' }} name={inputs.name} career={inputs.career} position={formatForPositionCode(inputs.positionCode)} />
        <div className="input-wrap">
          <Label label="이름" require="*">
            <Input size="medium" style={{ marginTop: '4px' }} disabled onChange={handleChange} value={inputs.name} name="name" />
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
              value={positionCodeList.map((item) => item.label).join(', ')}
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
            value={inputs.introduction}
            name="introduction"
          />
        </Label>
      </>

      <div style={{ display: 'flex', justifyContent: 'end', marginTop: 20 }}>
        <Button leftIcon="/images/lock/lock_green.svg" size="medium" variant="secondary">
          비밀번호 변경
        </Button>
      </div>
      <div className="button-wrap">
        <Button size="medium" variant="primary">
          저장
        </Button>
      </div>
      <PositionModal visible={visible} onClose={handleModalClose} onClickChoice={handleClickChoice} />
    </Container>
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
