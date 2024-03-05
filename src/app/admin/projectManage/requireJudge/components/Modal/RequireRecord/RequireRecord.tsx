import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import Table from '@/components/Table/Table';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import RejectReason from '../RejectReason/RejectReason';

//요구사항 열람 모달
const RequireRecord = ({ visible, onClose }) => {
  const [modal, setModal] = useState(false);
  const data = [
    {
      username: 'sidego',
      name: '사이드',
      position: '프론트엔드 개발자',
      phone: '010-8888-8888',
      member: '리더',
    },
    {
      username: 'sidego',
      name: '사이드',
      position: '백엔드 개발자',
      phone: '010-8888-8888',
      member: '멤버',
    },
    {
      username: 'sidego',
      name: '사이드',
      position: '기획자',
      phone: '010-8888-8888',
      member: '멤버',
    },
    {
      username: 'sidego',
      name: '사이드',
      position: '디자이너',
      phone: '010-8888-8888',
      member: '멤버',
    },
    {
      username: 'sidego',
      name: '사이드',
      position: '프론트엔드 개발자',
      phone: '010-8888-8888',
      member: '멤버',
    },
    {
      username: 'sidego',
      name: '사이드',
      position: '백엔드 개발자',
      phone: '010-8888-8888',
      member: '멤버',
    },
  ];

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <Modal
        style={{
          borderRadius: 24,
          width: 1080,
          height: 714,
          background: 'black',
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
          <div className="title">요구사항 상세</div>

          <div className="table-wrap">
            <LeftTable>
              <div className="header">프로젝트 명</div>
              <div className="content">고구마 만들기</div>
              <div className="header">프로젝트 기간</div>
              <div className="content">8888.88.88 ~ 8888.88.88</div>
              <div className="header">프로젝트 소개</div>
              <div className="content introduce">
                군고구마파는 아저씨 트럭에 GPS를 심어 어디에서나 앱으로 군고구마트럭을 스토킹 할 수 있는 어플리케이션 제작
              </div>
              <div className="header">기능 요구사항 및 배점</div>
              <div className="content score-wrap">
                <div className="score">[10점] 고구마고구마</div>
                <div className="score">[10점] 고구마고구마</div>
                <div className="score">[10점] 고구마고구마</div>
                <div className="score">[10점] 고구마고구마</div>
                <div className="score">[10점] 고구마고구마</div>
                <div className="score">[10점] 고구마고구마</div>
                <div className="score">[10점] 고구마고구마</div>
                <div className="score">[10점] 고구마고구마</div>
                <div className="score">[10점] 고구마고구마</div>
                <div className="score">[10점] 고구마고구마</div>
              </div>
              <div className="header">1인 보증금</div>
              <div className="content">고구마 만들기</div>
            </LeftTable>

            <RightTable>
              <div className="right-header-wrap">
                <Table type="headerLeft" style={{ width: '140px' }}>
                  아이디
                </Table>
                <Table type="headerLeft" style={{ width: '100px' }}>
                  이름
                </Table>
                <Table type="headerLeft" style={{ width: '140px' }}>
                  포지션
                </Table>
                <Table type="headerLeft" style={{ width: '120px' }}>
                  전화번호
                </Table>
              </div>

              {data.map((item) => (
                <div className="right-content-wrap">
                  <Table style={{ width: '140px' }}>{item.username}</Table>
                  <Table style={{ width: '100px' }}>
                    {item.name}
                    {item.member === '리더' ? (
                      <Image src="/images/etc/star_green.svg" width={12} height={12} alt="leader" style={{ marginLeft: '8px' }} />
                    ) : (
                      <></>
                    )}
                  </Table>
                  <Table style={{ width: '140px' }}>{item.position}</Table>
                  <Table style={{ width: '120px' }}>{item.phone}</Table>
                </div>
              ))}
            </RightTable>
          </div>

          <div className="button-wrap">
            <Button size="small" mode="secondary" onClick={handleOpenModal}>
              이전
            </Button>
            <Button size="small" mode="primary">
              저장
            </Button>
          </div>
        </Container>
      </Modal>
      <RejectReason visible={modal} onClose={handleCloseModal} />
    </>
  );
};

export default RequireRecord;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 39px 40px 32px 40px;
  height: 714px;

  box-sizing: border-box;

  .title {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 400;
  }
  .table-wrap {
    display: flex;
    gap: 40px;
  }
  .button-wrap {
    display: flex;
    justify-content: center;
    flex: 1;
    align-items: flex-end;
    gap: 4px;
  }
`;

const LeftTable = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;

  width: 460px;

  margin-top: 22px;

  .header {
    display: flex;
    height: auto;
    min-height: 40px;
    align-items: auto;
    border: 1px solid ${color.gray.gray6};
    background: ${color.gray.gray9};
    padding: 11px 0 11px 10px;

    box-sizing: border-box;

    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 500;
  }

  .content {
    display: flex;

    height: auto;
    padding: 10px;
    align-items: center;

    border: 1px solid ${color.gray.gray6};

    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 500;
  }
  .introduce {
    display: flex;
    align-items: flex-start;
    height: 120px;
  }
  .score-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

const RightTable = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  border: 1px solid ${color.gray.gray6};

  .right-header-wrap {
    display: flex;
  }

  .right-content-wrap {
    display: flex;
  }
`;
