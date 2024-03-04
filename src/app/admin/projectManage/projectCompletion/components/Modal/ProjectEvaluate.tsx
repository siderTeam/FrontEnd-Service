'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import TextArea from '@/components/TextArea/TextArea';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const ProjectEvaluate = ({ visible, onClose }: ModalProps) => {
  return (
    <Modal
      style={{
        width: 1200,
        height: 804,
        overflow: 'hidden',
        display: 'flex',
      }}
      visible={visible}
      onClose={onClose}
    >
      <Container>
        <div className="modal-title">프로젝트 준공 평가</div>
        <div className="table-wrap">
          <LeftTable>
            <div className="header">프로젝트 명</div>
            <div className="content">고구마 프로젝트</div>
            <div className="header">프로젝트 기간</div>
            <div className="content">8888.88.88 ~ 8888.88.88 (888일)</div>
            <div className="header">준공일</div>
            <div className="content">8888.88.88 (888일 초과)</div>
            <div className="header">프로젝트 소개</div>
            <div className="content">군고구마파는 아저씨 트럭에 GPS를 심어 어디에서나 앱으로 군고구마트럭을 스토킹 할 수 있는 어플리케이션 제작</div>
            <div className="header">기능 요구사항 및 배점</div>
            <div className="content">
              <ScoreWrap>
                <span>기능1의 기능은 기능</span>
                <div className="score">
                  <Input type="text" size="small" name="count" value={10} style={{ width: 50 }} />
                  <span>/</span>
                  <span>10</span>
                </div>
              </ScoreWrap>
              <ScoreWrap>
                <span>기능2의 기능은 기능</span>
                <div className="score">
                  <Input type="text" size="small" name="count" value={10} style={{ width: 50 }} />
                  <span>/</span>
                  <span>10</span>
                </div>
              </ScoreWrap>
            </div>
          </LeftTable>

          <RightTable>
            <div className="header">산출물 제출 이메일</div>
            <div className="content">test@gmail.com</div>
            <div className="header">심사결과 사유</div>
            <div className="content">
              <TextArea style={{ width: 400, height: '100%' }} />
            </div>
            <div className="header">보증금 차감율</div>
            <Rate>
              <div className="percent">
                <span>-</span>
                <Input type="text" size="small" name="count" value={10} style={{ width: 50 }} />
                <span>%</span>
              </div>
              <div className="payment">
                <div>1인 보증금: 888,888원</div>
                <div>1인 환불 금액: 888,888원</div>
              </div>
            </Rate>
          </RightTable>
        </div>

        <div className="button">
          <Button mode="secondary" onClick={onClose}>
            닫기
          </Button>
          <Button>심사완료</Button>
        </div>
      </Container>
    </Modal>
  );
};

export default ProjectEvaluate;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 39px 40px;

  color: ${color.white};
  font-size: 16px;
  font-weight: 500;

  .modal-title {
    font-weight: 400;

    margin-bottom: 22px;
  }

  .table-wrap {
    display: flex;
    gap: 40px;
    flex: 1;
  }

  .button {
    display: flex;
    justify-content: center;
    gap: 4px;
  }
`;

const LeftTable = styled.div`
  display: grid;
  grid-template-columns: 120px 420px;
  grid-template-rows: 40px 40px 40px 120px 376px;

  .header {
    box-sizing: border-box;
    padding: 9px 10px;

    border: 1px solid ${color.gray6};
    background: ${color.gray9};
  }

  .content {
    box-sizing: border-box;
    padding: 9px 10px;

    border: 1px solid ${color.gray6};
  }
`;

const ScoreWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .score {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const RightTable = styled.div`
  display: grid;
  grid-template-columns: 120px 420px;
  grid-template-rows: 120px 376px 120px;

  .header {
    display: flex;
    box-sizing: border-box;
    padding: 9px 10px;

    border: 1px solid ${color.gray6};
    background: ${color.gray9};
  }

  .content {
    display: inline-flex;
    box-sizing: border-box;
    padding: 9px 10px;

    border: 1px solid ${color.gray6};
  }
`;

const Rate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  box-sizing: border-box;
  padding: 9px 10px;

  border: 1px solid ${color.gray6};

  .percent {
    display: flex;
    gap: 4px;
  }

  .payment {
    font-size: 14px;
    font-weight: 400;
  }
`;
