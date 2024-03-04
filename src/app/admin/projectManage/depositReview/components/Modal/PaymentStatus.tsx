'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import Modal from '@/components/Modal/Modal';
import Table from '@/components/Table/Table';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import Image from 'next/image';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const PaymentStatus = ({ visible, onClose }: ModalProps) => {
  return (
    <Modal
      style={{
        width: 1080,
        height: 660,
        overflow: 'hidden',
        display: 'flex',
      }}
      visible={visible}
      onClose={onClose}
    >
      <Container>
        <div className="modal-title">납부현황</div>
        <Header>
          <div className="sub-title">프로젝트 명</div>
          <div className="content">고구마 프로젝트</div>
          <div className="sub-title people">구성 인원</div>
          <div className="content">88명</div>
        </Header>
        <div className="search-count">검색결과: 888건</div>
        <TableWrap>
          <div className="table">
            <Table type="headerLeft" style={{ width: 100 }}>
              이름
            </Table>
            <Table type="headerLeft" style={{ width: 140 }}>
              포지션
            </Table>
            <Table type="headerLeft" style={{ width: 120 }}>
              전화번호
            </Table>
            <Table type="headerLeft" style={{ width: 240 }}>
              계좌번호
            </Table>
            <Table type="headerLeft" style={{ width: 328 }}>
              납부현황
            </Table>
            <Table type="headerLeft" style={{ width: 72 }}>
              납부처리
            </Table>
          </div>

          <div className="table">
            <Table style={{ width: 100 }}>
              홍길동
              <Image src={'/images/icons/star_fill_green.svg'} alt="star" width={12} height={12} style={{ marginLeft: 8 }} />
            </Table>
            <Table style={{ width: 140 }}>프론트엔드 개발자</Table>
            <Table style={{ width: 120 }}>010-8888-8888</Table>
            <Table style={{ width: 240 }}>카카오) 8888-8888-8888-8888</Table>
            <Table type="dataSubtext" subText="(8,888,888/8,888,888)" style={{ width: 328 }}>
              완납
            </Table>
            <Table type="dataMore" style={{ width: 72, position: 'relative' }}>
              <Image src={'/images/icons/kebap_white.svg'} alt="kebap" width={20} height={20} style={{ cursor: 'pointer' }} onClick={() => {}} />
              <ul className="paymentWrap">
                <li>직접 입력</li>
                <li>완납 처리</li>
              </ul>
              <div className="paymentInput">
                <div className="top">
                  <div className="paymentTitle">직접 입력</div>
                  <Image src="/images/icons/X_white.svg" alt="close" width={7} height={7} onClick={onClose} style={{ cursor: 'pointer' }} />
                </div>
                <div className="inputButtonWrap">
                  <Input type="text" size="small" mode="active" value={''} name="" onChange={() => {}} style={{ width: 127 }} />
                  <Button size="small">납입</Button>
                </div>
              </div>
            </Table>
          </div>
        </TableWrap>
      </Container>
    </Modal>
  );
};

export default PaymentStatus;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 39px 40px;

  .modal-title {
    color: ${color.white};
    font-size: 16px;
    font-weight: 400;

    margin-bottom: 22px;
  }

  .search-count {
    color: ${color.gray6};
    font-size: 12px;
    font-weight: 400;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  box-sizing: border-box;
  margin-bottom: 32px;

  color: ${color.white};
  font-size: 14px;
  font-weight: 400;

  border-radius: 8px;
  border: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  background: var(--Fill, linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5));

  .sub-title {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 120px;
    box-sizing: border-box;
    padding: 11px 0px 9px 0px;

    border-right: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  }

  .people {
    border-left: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  }

  .content {
    width: 360px;
  }
`;

const TableWrap = styled.div`
  flex: 1;
  margin-top: 2px;

  .table {
    display: flex;
  }

  .paymentWrap {
    position: absolute;
    top: 33px;
    right: 20px;

    width: 95px;
    border-radius: 4px;
    border: 1px solid ${color.gray6};
    background: ${color.black};
    overflow: hidden;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      width: 95px;
      box-sizing: border-box;
      padding: 6px 16px;

      cursor: pointer;
    }

    li:hover {
      background: ${color.gray9};
    }
  }

  .paymentInput {
    position: absolute;
    top: 33px;
    right: 20px;

    width: 209px;
    height: 69px;
    box-sizing: border-box;
    padding: 7px 8px;

    border-radius: 4px;
    border: 1px solid ${color.gray6};
    background: ${color.black};

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 8px;
    }

    .paymentTitle {
      color: ${color.white};
      font-size: 10px;
      font-weight: 400;
    }

    .inputButtonWrap {
      display: flex;
      align-items: center;
      gap: 3px;
    }
  }
`;
