'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';
import TextArea from '@/components/TextArea/TextArea';
import Button from '@/components/Button/Button';
import { useState } from 'react';
import { PROJECT_DETAIL_RESPONSE } from '@/api/project/model';
import { useMutation } from '@tanstack/react-query';
import { updateReply } from '@/api/project/api';

type Props = {
  data: PROJECT_DETAIL_RESPONSE['projectReplies'][0];
  refetch: () => void;
};

const Comment = ({ data, refetch }: Props) => {
  const [textCount, setTextCount] = useState(data.content.length);
  const [inputTextarea, setInputTextarea] = useState(data.content);
  const [isEdit, setIsEdit] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const { mutate } = useMutation({
    mutationFn: () => updateReply(data.id, { content: inputTextarea }),
    onSuccess: async (data) => {
      if (data.result === true) {
        alert('댓글 수정 성공!');
        setIsEdit(false);
      } else {
        alert('댓글 수정 실패');
      }

      refetch();
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

    //댓글 수정 안한경우
    if (e.target.value === data.content) {
      setDisabled(true);
    }
  };

  //textarea 글자 수 카운트
  const handleTextCount = (e: any) => {
    const { value, maxLength } = e.target;

    if (value.length > maxLength) {
      e.target.value = value.slice(0, maxLength);
    }
    setTextCount(e.target.value.length);

    //댓글 작성 버튼 active(2글자 이상)
    if (value.trim().length >= 2) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  //댓글 수정 취소
  const handleCancelReplyUpdate = () => {
    setInputTextarea(data.content);
    setTextCount(data.content.length);
    setIsEdit(false);
  };

  return (
    <Container>
      <div className="top">
        <div className="profile">
          <Image src={'/images/user_profile_dummy.svg'} alt="profile" width={40} height={40} />
          <div>
            <div className="info">
              <span className="name">{data?.member.nickname}</span>
              <span className="position">{data?.member.position.name}</span>
            </div>
            <div className="date">{data?.createdDate?.replace(/-/g, '.').replace('T', ' ')}</div>
          </div>
        </div>
        <div className="update">
          <Image src={'/images/edit/edit_gray6.svg'} alt="edit" width={15} height={15} onClick={() => setIsEdit(true)} style={{ cursor: 'pointer' }} />
          <Image src={'/images/trash/trash_gray6.svg'} alt="delete" width={13} height={15} style={{ cursor: 'pointer' }} />
        </div>
      </div>
      {isEdit ? (
        <div>
          <TextArea
            style={{ width: '100%', height: 78 }}
            value={inputTextarea}
            onChange={handleTextChange}
            placeholder="댓글을 입력하세요. (최소 2글자 이상)"
            textareaCount={textCount}
            maxLength={200}
          />
          <div className="button">
            <Button size="tiny" variant="secondary" onClick={() => handleCancelReplyUpdate()}>
              취소
            </Button>
            <Button size="tiny" disabled={disabled} onClick={() => mutate()}>
              완료
            </Button>
          </div>
        </div>
      ) : (
        <div className="comment">{data.content}</div>
      )}
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  box-sizing: border-box;
  padding: 16px 32px;
  border-bottom: 1px solid ${color.gray.gray8};

  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .update {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 4px;

    font-size: 14px;
    font-weight: 500;

    .name {
      color: ${color.gray.gray3};
    }

    .position {
      color: ${color.gray.gray5};
    }

    span:not(:last-child) {
      box-sizing: border-box;
      padding-right: 4px;
      border-right: 1px solid ${color.gray.gray5};
    }
  }

  .date {
    color: ${color.gray.gray6};
    font-weight: 400;
  }

  .button {
    display: flex;
    justify-content: flex-end;
    gap: 4px;
    margin-top: 4px;
  }

  .comment {
    margin-left: 50px;
  }
`;
