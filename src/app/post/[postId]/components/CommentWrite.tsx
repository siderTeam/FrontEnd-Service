'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';
import TextArea from '@/components/TextArea/TextArea';
import Button from '@/components/Button/Button';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createReply } from '@/api/projectDetail/api';

type Props = {
  replyCount: number;
  projectId: number;
  refetch: () => void;
};

const CommentWrite = ({ replyCount, projectId, refetch }: Props) => {
  const [textCount, setTextCount] = useState(0);
  const [inputTextarea, setInputTextarea] = useState('');
  const [isActive, setIsActive] = useState(true);

  const { mutate } = useMutation({
    mutationFn: () => createReply(projectId, { content: inputTextarea }),
    onSuccess: async (data) => {
      if (data.result === true) {
        alert('댓글 작성 성공!');
      } else {
        alert('댓글 작성 실패');
      }

      refetch()
      setInputTextarea('')
    },
    onError: () => {
      console.error('실패');
    },
  });

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

    //댓글 작성 버튼 active(2글자 이상)
    if (value.length >= 2) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <Container>
      <div className="subtitle">
        <Image src={'/images/edit/edit_gray5.svg'} alt="edit" width={20} height={20} />
        <span>댓글</span>
        <span style={{ color: `${color.secondary.positive_1}` }}>{replyCount}</span>
      </div>
      <TextArea
        style={{ width: '100%', height: 78 }}
        value={inputTextarea}
        onChange={handleTextChange}
        placeholder="댓글을 입력하세요. (최소 2글자 이상)"
        textareaCount={textCount}
        maxLength={200}
      />
      <div className="button">
        <Button disabled={isActive} leftIcon="/images/edit/edit_black.svg" iconStyle={{ width: 16, height: 16 }} onClick={() => mutate()}>
          댓글 등록
        </Button>
      </div>
    </Container>
  );
};

export default CommentWrite;

const Container = styled.div`
  box-sizing: border-box;
  padding: 44px 0 32px 0;

  .button {
    display: flex;
    justify-content: end;
    margin-top: 8px;
  }
`;
