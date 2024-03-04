'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Modal from '@/components/Modal/Modal';
import SelectBox from '@/components/SelectBox/SelectBox';
import { useState } from 'react';
import Button from '@/components/Button/Button';
import TextArea from '@/components/TextArea/TextArea';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const MemberDetail = ({ visible, onClose }: ModalProps) => {
  const [selectValue, setSelectValue] = useState('');

  const handleSelectChange = (name: string, value: string) => {
    setSelectValue(value);
  };

  return (
    <Modal
      style={{
        width: 1062,
        height: 682,
        overflow: 'hidden',
        display: 'flex',
      }}
      visible={visible}
      onClose={onClose}
    >
      <Container>
        <div className="modal-title" style={{ marginBottom: 23 }}>
          회원정보 - 상세
        </div>
        <TableWrap>
          <FourGridWrap>
            <div className="header">상태</div>
            <div className="content">
              <SelectBox
                style={{ width: 160 }}
                options={[
                  { label: '정상', value: '1' },
                  { label: '사용중지', value: '2' },
                  { label: '탈퇴', value: '3' },
                ]}
                value={selectValue}
                name="search"
                onChange={handleSelectChange}
                placeholder="전체"
              />
            </div>

            <div className="header">아이디</div>
            <div className="content">test88</div>

            <div className="header">이름</div>
            <div className="content">홍길동</div>

            <div className="header">닉네임</div>
            <div className="content">길동홍</div>

            <div className="header">포지션</div>
            <div className="content">프론트엔드 개발자</div>

            <div className="header">스킬</div>
            <div className="content">Java, Oracle, NextJS</div>

            <div className="header">경력</div>
            <div className="content">88년</div>

            <div className="header">전화번호</div>
            <div className="content">010-8888-8888</div>
          </FourGridWrap>
          <TwoGridWrap>
            <div className="header">자기소개</div>
            <div className="content">안녕하세요. 홍길동의 자기소개 입니다.</div>
          </TwoGridWrap>

          <div className="modal-title" style={{ marginBottom: 8, marginTop: 23 }}>
            관리자 메모
          </div>
          <TwoGridWrap>
            <div className="header">메모</div>
            <div className="content">
              <TextArea style={{ width: 842, height: 100 }} />
            </div>
          </TwoGridWrap>
        </TableWrap>

        <div className="button">
          <Button mode="secondary">이전</Button>
          <Button>저장</Button>
        </div>
      </Container>
    </Modal>
  );
};

export default MemberDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 39px 40px;

  .modal-title {
    color: ${color.white};
    font-size: 16px;
    font-weight: 400;
  }

  .button {
    display: flex;
    justify-content: center;
    gap: 4px;
  }
`;

const TableWrap = styled.div`
  flex: 1;
  color: ${color.white};
  font-size: 16px;
  font-weight: 500;

  .table {
    display: flex;
  }

  .header {
    display: flex;

    box-sizing: border-box;
    padding-left: 10px;

    border: 1px solid ${color.gray6};
    background: ${color.gray9};
  }

  .content {
    display: inline-flex;

    box-sizing: border-box;
    padding-left: 10px;

    border: 1px solid ${color.gray6};
  }
`;

const FourGridWrap = styled.div`
  display: grid;
  grid-template-columns: 120px 371px 120px 371px;
  grid-template-rows: repeat(4, 40px);

  .header,
  .content {
    align-items: center;
  }
`;

const TwoGridWrap = styled.div`
  display: grid;
  grid-template-columns: 120px 862px;
  grid-template-rows: 120px;

  .header,
  .content {
    padding: 9px 10px;
  }
`;
