import Button from '@/components/Button/Button';
import CommentProfile from '@/components/Profile/CommentProfile';
import TextArea from '@/components/TextArea/TextArea';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';

const Comment = () => {
  const [textareaCount, setTextareaCount] = useState(0);
  const [commentValue, setCommentValue] = useState('외않되');

  const onTextareaHandler = (e: any) => {
    const { value, maxLength } = e.target;

    if (value.length > maxLength) {
      e.target.value = value.slice(0, 200);
    }

    setCommentValue(e.target.value);

    setTextareaCount(e.target.value.length);
  };

  return (
    <CommentWrap>
      <div className="textarea-wrap">
        <div className="comment-title">
          <Image src="/images/etc/edit_gray5.svg" width={22} height={22} alt="edit" />
          <span>댓글</span>
          <div className="comment-length">0</div>
        </div>
        <div className="comment-textarea">
          <TextArea onChange={onTextareaHandler} value={commentValue} maxLength={200} textareaCount={textareaCount} />
          <div style={{ display: 'flex', flex: 1, justifyContent: 'end', marginTop: '8px' }}>
            <Button size="medium" mode="primary">
              <Image src="/images/etc/edit_black.svg" width={16} height={16} alt="comment" style={{ marginRight: '4px' }} />
              댓글 등록
            </Button>
          </div>
        </div>
      </div>

      <CommentContentWrap>
        <div className="comment-content">
          <div style={{ paddingLeft: '32px' }}>
            <CommentProfile />
            <div className="comment">댓글입니다.</div>
          </div>
        </div>
      </CommentContentWrap>
    </CommentWrap>
  );
};

export default Comment;

const CommentWrap = styled.div`
  .textarea-wrap {
    padding: 40px 32px 0 32px;
  }
  .comment-title {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${color.gray.gray5};
    font-size: 22px;
    font-weight: 700;
  }
  .comment-length {
    color: ${color.secondary.positive_1};
    font-size: 22px;
    font-weight: 700;
  }
  .comment-textarea {
    margin-top: 16px;
  }
`;

const CommentContentWrap = styled.div`
  .comment-content {
    width: 1180px;
    height: 108px;
    flex-shrink: 0;
    border-bottom: 1px solid ${color.gray.gray8};
  }
  .comment {
    padding: 16px 0 16px 50px;
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
  }
`;
