'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Modal from '@/components/Modal/Modal';
import Sidebar from '@/app/@modal/components/Sidebar';
import Input from '@/components/Input/Input';
import TextArea from '@/components/TextArea/TextArea';
import Button from '@/components/Button/Button';
import Label from '@/components/Label/Label';
import MyProfile from '@/components/MyProfile/MyProfile';

const RecruitmentDetail = () => {
  return (
    <Container>
      <MyProfile style={{ marginTop: '60px', marginBottom: '40px' }} />

      <div className="wrap">
        <Label label="한 줄 소개">
          <TextArea style={{ marginTop: '4px' }} />
        </Label>

        <Label label="스킬">
          <TextArea style={{ marginTop: '4px' }} />
        </Label>

        <Label label="링크">
          <Input style={{ marginTop: '4px' }} />
        </Label>
      </div>
      <div className="delete">강제 퇴장</div>
      <div className="button-wrap">
        <Button size="medium" mode="secondary">
          이전
        </Button>
      </div>
    </Container>
  );
};

export default RecruitmentDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 842px;
  flex-shrink: 0;
  box-sizing: border-box;

  border-radius: 0 24px 24px 0;

  padding-right: 70px;
  padding-left: 70px;

  background: ${color.gray.black};

  .wrap {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .delete {
    color: ${color.secondary.error_1};
    text-align: right;
    font-size: 12px;
    font-weight: 400;
    margin-top: 10px;

    cursor: pointer;
  }

  .button-wrap {
    display: flex;
    justify-content: center;
    align-items: end;
    flex: 1;
    gap: 4px;
    margin-bottom: 32px;
  }
`;
