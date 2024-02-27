'use client';

import styled from '@emotion/styled';
import { color } from '@/Styles/color';
import Modal from '@/components/Modal/Modal';
import Sidebar from '@/app/@modal/components/Sidebar';
import Input from '@/components/Input/Input';
import TextArea from '@/components/TextArea/TextArea';
import Button from '@/components/Button/Button';
import Label from '@/components/Label/Label';

const Page = () => {
  return (
    <Modal style={{ width: '1062px' }}>
      <Container>
        <Sidebar />
        <div className="right-section">
          <div className="wrap">
            <Label label="지원서 이름" style={{ marginBottom: '4px' }} require="*">
              <Input />
            </Label>

            <Label label="자기 소개" require="*">
              <TextArea />
            </Label>

            <Label label="스킬" require="*">
              <TextArea />
            </Label>
          </div>
          <div className="button-wrap">
            <Button size="medium" mode="primary">
              저장
            </Button>
          </div>
        </div>
      </Container>
    </Modal>
  );
};

export default Page;

const Container = styled.div`
  display: flex;
  width: 842px;
  height: 720px;
  flex-shrink: 0;
  box-sizing: border-box;

  .right-section {
    display: flex;
    flex-direction: column;
    width: 842px;
    height: 100%;
    flex-shrink: 0;
    box-sizing: border-box;

    border-radius: 0 24px 24px 0;

    padding-right: 70px;
    padding-left: 70px;

    background: ${color.gray.black};
  }

  .wrap {
    display: flex;
    flex-direction: column;
    gap: 16px;

    margin-top: 60px;
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
