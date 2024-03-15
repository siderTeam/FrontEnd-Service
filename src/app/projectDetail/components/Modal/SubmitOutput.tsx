'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Modal from '@/components/Modal/Modal';
import Profile from '@/components/Profile/Profile';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const SubmitOutput = ({ visible, onClose }: ModalProps) => {
  const handleClick = () => {};

  return (
    <Modal
      style={{
        borderRadius: 24,
        width: 650,
        height: 526,
        background: `${color.gray.black}`,
        zIndex: 9999,
        overflow: 'hidden',
        padding: 0,
        border: '1px solid rgba(255, 255, 255, 0.60)',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.40)',
      }}
      visible={visible}
      onClose={onClose}
    >
      <Container>
        <div className="modal-title">산출물 제출</div>
        <div className="modal-content">
          <div className="first content">
            <span className="email">sidego96@gmail.com</span>으로 산출물을 보내세요.
            <br />
            제목에는 프로젝트명, 리더 이름 및 아이디를 제목 부분에 필히 기입해주세요.
            <br />
            <span className="example">ex) 나랑 고구마 만들래? / 박봉팔 / samsunglions</span>
          </div>
          <div className="second content">
            제출할 산출물을 포함한 내용을 작성해주세요.
            <ol>
              <li>실행이 가능한 형태의 소스파일</li>
              <li>접속이 가능한 URL 및 계정정보</li>
              <li>발생한 산출물 정보</li>
            </ol>
          </div>
          <div className="third content">
            위 내용 중 <span>요구사항 평가를 진행할 수 있는 정보를 포함</span>하여 발송해주시기바랍니다.
          </div>
          <div className="input">
            <Input
              style={{ width: '100%' }}
              size="medium"
              placeholder="산출물을 발송한 이메일 주소를 입력하세요."
              suffix={
                <Button onClick={handleClick} size="small">
                  저장
                </Button>
              }
            />
          </div>
        </div>
      </Container>
    </Modal>
  );
};

export default SubmitOutput;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  box-sizing: border-box;
  padding: 60px 70px;
  color: ${color.gray.white};

  .modal-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 32px;
  }

  .modal-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .content {
      color: ${color.gray.gray5};
      font-size: 16px;
      font-weight: 400;
      line-height: 32px;
    }

    .first {
      .email {
        color: ${color.gray.white};
        font-size: 16px;
        font-weight: 700;
      }

      .example {
        color: ${color.gray.gray6};
      }
    }

    .second {
      ol,
      li {
        list-style: auto;
        font-size: 14px;
        line-height: normal;
        margin-left: 10px;
      }
    }

    .third {
      line-height: normal;

      span {
        color: ${color.gray.white};
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
`;
