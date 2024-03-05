import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import SearchHeader from '../../SearchHeader/SearchHeader';
import Table from '@/components/Table/Table';
import { useState } from 'react';
import PayToggle from '../../PayToggle/PayToggle';
import PayInput from '../PayInput/PayInput';
import { relative } from 'path';

// 보증금 납입처리 모달
const DepositPay = ({ visible, onClose }) => {
  const [moreVisibleIndex, setMoreVisibleIndex] = useState<number | null>(null);
  const [visibleInputIndex, setVisibleInputIndex] = useState<number | null>(null);

  const data = [
    {
      no: 1,
      username: 'sidego',
      name: '사이드',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      project: '프로젝트명',
    },
    {
      no: 1,
      username: 'sidego',
      name: '사이드',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      project: '프로젝트명',
    },
    {
      no: 1,
      username: 'sidego',
      name: '사이드',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      project: '프로젝트명',
    },
    {
      no: 1,
      username: 'sidego',
      name: '사이드',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      project: '프로젝트명',
    },
    {
      no: 1,
      username: 'sidego',
      name: '사이드',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      project: '프로젝트명',
    },
    {
      no: 1,
      username: 'sidego',
      name: '사이드',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      project: '프로젝트명',
    },
    {
      no: 1,
      username: 'sidego',
      name: '사이드',
      phone: '010-8888-8888',
      account: '카카오)8888-8888-8888-8888',
      project: '프로젝트명',
    },
  ];

  const handleMoreToggle = (index: number) => {
    setMoreVisibleIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleInputToggle = (index: number) => {
    setVisibleInputIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleCloseModal = () => {
    setVisibleInputIndex(null);
  };

  return (
    <>
      <Modal
        style={{
          borderRadius: 24,
          width: 1080,
          height: 679,
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
          <div className="title">보증금 납입처리</div>
          <SearchHeader />
          <div className="search-length">검색결과: 22건</div>
          <TableHeader>
            <Table type="headerCenter" style={{ width: '80px' }}>
              No.
            </Table>
            <Table type="headerLeft" style={{ width: '120px' }}>
              아이디
            </Table>
            <Table type="headerLeft" style={{ width: '80px' }}>
              이름
            </Table>
            <Table type="headerLeft" style={{ width: '160px' }}>
              전화번호
            </Table>
            <Table type="headerLeft" style={{ width: '240px' }}>
              계좌번호
            </Table>
            <Table type="headerLeft" style={{ width: '247px' }}>
              프로젝트명
            </Table>
            <Table type="headerLeft" style={{ width: '72px' }}>
              납부처리
            </Table>
          </TableHeader>
          {data.map((item, index) => (
            <TableData>
              <Table type="dataCenter" style={{ width: '80px' }}>
                {item.no}
              </Table>
              <Table style={{ width: '120px' }}>{item.username}</Table>
              <Table style={{ width: '80px' }}>{item.name}</Table>
              <Table style={{ width: '160px' }}>{item.phone}</Table>
              <Table style={{ width: '240px' }}>{item.account}</Table>
              <Table style={{ width: '247px' }}>{item.project}</Table>
              <Table
                type="dataMore"
                style={{ width: '72px', cursor: 'pointer', position: 'relative' }}
                src="/images/more/more.svg"
                onClick={() => handleMoreToggle(index)}
              >
                {moreVisibleIndex === index ? (
                  <PayToggle onClick={() => handleInputToggle(index)} />
                ) : (
                  visibleInputIndex === index && <PayInput visible={true} onClose={handleCloseModal} />
                )}
              </Table>
            </TableData>
          ))}

          <div className="button-wrap">
            <Button size="small" mode="secondary">
              이전
            </Button>
            <Button size="small" mode="primary">
              저장
            </Button>
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default DepositPay;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 39px 40px 32px 40px;
  height: 679px;
  box-sizing: border-box;
  .title {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 22px;
  }
  .search-length {
    color: ${color.gray.gray6};
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 2px;
    margin-top: 32px;
  }
  .button-wrap {
    display: flex;
    flex: 1;
    align-items: end;
    justify-content: center;
    gap: 4px;
  }
`;

const TableHeader = styled.div`
  display: flex;
`;

const TableData = styled.div`
  display: flex;

  &:hover {
    background-color: ${color.gray.gray8};
    transition: 0.1s;
  }
`;
