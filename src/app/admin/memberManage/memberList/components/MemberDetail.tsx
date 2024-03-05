import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import { color } from '@/styles/color';
import styled from '@emotion/styled';

interface Props {
  visible: boolean;
  onClose: () => void;
}

//회원 정보 모달
const MemberDetail = ({ visible, onClose }: Props) => {
  const data = [
    {
      status: '정상',
      username: 'sidego',
      name: '사이드고',
      nickname: '사이드고',
      position: '프론트엔드 개발자',
      skill: 'JavaScript, React, Next.js',
      year: '10년',
      phone: '010-0000-0000',
      bank: '카카오뱅크',
      account: '8888-8888-888888',
      accountStatus: '인증 완료',
      introduce:
        '거란족은 왜 정수리만 빡빡밀어놓을까... 추파춥스 잘못 깐 것 같음... 왜그럴까... 왜 그랬을까... 신체발부수지부모를 모르는 오랑캐새끼들은 뭔가 달라도 다른 것 같다. 거란족은 왜 정수리만 빡빡밀어놓을까... 추파춥스 잘못 깐 것 같음... 왜그럴까... 왜 그랬을까... 신체발부수지부모를 모르는 오랑캐새끼들은 뭔가 달라도 다른 것 같다. 거란족은 왜 정수리만 빡빡밀어놓을까... 추파춥스 잘못 깐 것 같음... 왜그럴까... 왜 그랬을까... 신체발부수지부모를 모르는 오랑캐새끼들은 뭔가 달라도 다른 것 같다. 거란족은 왜 정수리만 빡빡밀어놓을까... 추파춥스 잘못 깐 것 같음... 왜그럴까... 왜 그랬을까... 신체발부수지부모를 모르는 오랑캐새끼들은 뭔가 달라도 다른 것 같다. ',
    },
  ];

  return (
    <>
      <Modal
        style={{
          borderRadius: 24,
          width: 1062,
          height: 682,
          background: 'black',
          zIndex: 9999,
          overflow: 'hidden',
          padding: 0,
          border: `1px solid rgba(255, 255, 255, 0.60)`,
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.40)',
        }}
        visible={visible}
        onClose={onClose}
      >
        <Container>
          <div className="title">회원 정보 - 상세</div>
          <FourGridContainer>
            {data.map((item) => (
              <>
                <div className="header">상태</div>
                <div className="content">{item.status}</div> {/* input */}
                <div className="header">아이디</div>
                <div className="content">{item.username}</div>
                <div className="header">이름</div>
                <div className="content">{item.name}</div>
                <div className="header">닉네임</div>
                <div className="content">{item.nickname}</div>
                <div className="header">포지션</div>
                <div className="content">{item.position}</div>
                <div className="header">스킬</div>
                <div className="content">{item.skill}</div>
                <div className="header">경력</div>
                <div className="content">{item.year}</div>
                <div className="header">전화번호</div>
                <div className="content">{item.phone}</div>
              </>
            ))}
          </FourGridContainer>

          <TwoGridContainer>
            {data.map((item) => (
              <>
                {/* <div className="header">환불계좌</div> */}
                {/* <div className="content" style={{ display: 'flex', justifyContent: 'space-between' }}> */}
                {/* <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}> */}
                {/* <SelectBox size="small" selectedType="disabled" value={item.bank} name={''} /> */}
                {/* {item.bank} */}
                {/* <Input size="small" value={item.account} disabled /> */}
                {/* </div> */}
                {/* <div style={{ paddingRight: '280px', color: item.accountStatus === '인증 완료' ? color.secondary.positive_1 : color.secondary.error_1 }}> */}
                {/* {item.accountStatus} */}
                {/* </div> */}
                {/* </div> */}
                <div className="header" style={{ height: '120px', paddingBottom: '88px' }}>
                  자기소개
                </div>
                <div className="content" style={{ height: '120px', boxSizing: 'border-box' }}>
                  {item.introduce}
                </div>
              </>
            ))}
          </TwoGridContainer>

          <div className="title" style={{ marginTop: '23px' }}>
            관리자 메모
          </div>
          <TwoGridContainer>
            <div className="header" style={{ height: '120px', paddingBottom: '88px' }}>
              메모
            </div>
            <div className="content" style={{ height: '120px', boxSizing: 'border-box' }}></div>
          </TwoGridContainer>

          <div className="button-wrap">
            <Button size="small" variant="secondary">
              이전
            </Button>
            <Button size="small" variant="primary">
              저장
            </Button>
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default MemberDetail;

const Container = styled.div`
  height: 682px;
  padding: 39px 40px 32px 40px;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  .title {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 22px;
  }

  .button-wrap {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: end;

    gap: 4px;
  }
`;

const FourGridContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 120px 1fr;

  .header {
    display: flex;
    height: 40px;
    align-items: center;
    border: 1px solid ${color.gray.gray6};
    background: ${color.gray.gray9};
    padding-left: 10px;

    box-sizing: border-box;

    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 500;
  }

  .content {
    display: flex;
    padding-left: 10px;
    align-items: center;

    border: 1px solid ${color.gray.gray6};

    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 500;
  }
`;

const TwoGridContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;

  .header {
    display: flex;
    height: 40px;
    align-items: center;
    border: 1px solid ${color.gray.gray6};
    background: ${color.gray.gray9};
    padding-left: 10px;

    box-sizing: border-box;

    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 500;
  }

  .content {
    display: flex;
    padding-left: 10px;
    align-items: center;

    border: 1px solid ${color.gray.gray6};

    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 500;
  }
`;
