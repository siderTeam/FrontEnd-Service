'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';
import TextArea from '@/components/TextArea/TextArea';
import Button from '@/components/Button/Button';
import { useState } from 'react';

const CommentWrite = () => {
  const [textCount, setTextCount] = useState(0);
  const [inputTextarea, setInputTextarea] = useState('');

  //textarea onChange
  const handleTextChange = (e: any) => {
    if (e.target.maxLength) {
      handleTextCount(e);
    }
    setInputTextarea(e.target.value);
  };

  //textarea 글자 수 카운트
  const handleTextCount = (e: any) => {
    const { value, maxLength } = e.target;

    if (value.length > maxLength) {
      e.target.value = value.slice(0, maxLength);
    }
    setTextCount(e.target.value.length);
  };

  return (
    <Container>
      <div className="subtitle">
        <Image src={'/images/edit/edit_gray5.svg'} alt="edit" width={20} height={20} />
        <span>댓글</span>
        <span style={{ color: `${color.secondary.positive_1}` }}>2</span>
      </div>
      <TextArea style={{ width: '100%', height: 78 }} value={inputTextarea} onChange={handleTextChange} textareaCount={textCount} maxLength={200} />
      <div className="button">
        <Button leftIcon="/images/edit/edit_black.svg" iconStyle={{ width: 16, height: 16 }}>
          댓글 등록
        </Button>
      </div>
    </Container>
  );
};

export default CommentWrite;

const Container = styled.div`
  box-sizing: border-box;
  padding: 44px 0 48px 0;

  .button {
    display: flex;
    justify-content: end;
    margin-top: 8px;
  }
`;
