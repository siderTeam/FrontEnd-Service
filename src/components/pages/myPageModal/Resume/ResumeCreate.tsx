'use client';

import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import Label from '@/components/Label/Label';
import TextArea from '@/components/TextArea/TextArea';
import styled from '@emotion/styled';

const ResumeCreate = () => {
  return (
    <Container>
      <div className="contentWrap">
        <Label location="top" label="지원서 이름" require="*">
          <Input type="text" name="name" placeholder="지원서 이름" />
        </Label>
        <Label location="top" label="자기소개" require="*">
          <TextArea placeholder="자기소개" style={{ width: '702px', height: '240px' }} />
        </Label>
        <Label location="top" label="스킬" require="*">
          <TextArea placeholder="스킬" style={{ width: '702px', height: '80px', fontSize: '16px' }} />
        </Label>
      </div>
      <div className="button">
        <Button>저장</Button>
      </div>
    </Container>
  );
};

export default ResumeCreate;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .contentWrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .button {
    margin: 0 auto;
  }
`;
