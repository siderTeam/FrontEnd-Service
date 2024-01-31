import styled from "@emotion/styled";
import Button from "../Button_new/Button";

const NavBar = () => {
  return (
    <>
      <Container>
        <div>
          <Logo>
            <img src='Logo.svg' />
          </Logo>
        </div>
        <Imsi>
          <TopMenu>
            <ChoiceMenuWrap>
              <Wrap>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                >
                  <path
                    d='M3 9.62317L12 2.62317L21 9.62317V20.6232C21 21.1536 20.7893 21.6623 20.4142 22.0374C20.0391 22.4125 19.5304 22.6232 19 22.6232H5C4.46957 22.6232 3.96086 22.4125 3.58579 22.0374C3.21071 21.6623 3 21.1536 3 20.6232V9.62317Z'
                    stroke='#0066FF'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M9 22.6232V12.6232H15V22.6232'
                    stroke='#0066FF'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <MenuText>Home</MenuText>
              </Wrap>
              <ChoiceMenu src='more.svg' />
            </ChoiceMenuWrap>
            <MenuWrap>
              <MenuIcon src='Calendar.svg' />
              <MenuText>마이페이지</MenuText>
            </MenuWrap>
            <MenuWrap>
              <MenuIcon src='Group.svg' />
              <MenuText>지원서 관리</MenuText>
            </MenuWrap>
            <MenuWrap>
              <MenuIcon src='Calendar.svg' />
              <MenuText>결제 내역</MenuText>
            </MenuWrap>
            <MenuWrap>
              <MenuIcon src='Bookmark.svg' />
              <MenuText>프로젝트</MenuText>
            </MenuWrap>
          </TopMenu>
          <BottomMenu>
            <ProfileWrap>
              <ProfileImg />
              <ProfileInfo>
                <NicknameText>808Ground</NicknameText>
                <PositionWrap>
                  <PositionText>10년차</PositionText>
                  <PositionText>디자이너</PositionText>
                </PositionWrap>
              </ProfileInfo>
            </ProfileWrap>
            <ButtonWrap>
              <Button size='primary' mode='primary'>
                마이페이지
              </Button>
            </ButtonWrap>
          </BottomMenu>
        </Imsi>
      </Container>
    </>
  );
};

export default NavBar;

const Container = styled.div`
  display: inline-flex;
  height: 960px;
  padding: 80px 50px;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  flex-shrink: 0;

  border-radius: 14px 30px 50px 30px;
  background: var(--White, #fff);
`;

const Logo = styled.div`
  width: 60px;
  height: 33.623px;
  flex-shrink: 0;
`;

const Imsi = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
`;

const TopMenu = styled.div`
  display: flex;
  width: 146px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

const ChoiceMenuWrap = styled.div`
  display: flex;
  width: 146px;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`;

const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const MenuText = styled.div`
  color: var(--primary, #06f);
  text-align: center;
  /* font-family: Pretendard; */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ChoiceMenu = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

const BottomMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ProfileImg = styled.img`
  width: 94px;
  height: 94px;
  border-radius: 94px;
  background: url("Ellipse.svg"), lightgray 50% / cover no-repeat;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const NicknameText = styled.div`
  color: var(--primary, #06f);
  text-align: center;
  /* font-family: Pretendard; */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const PositionWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;
`;

const PositionText = styled.div`
  color: var(--primary, #06f);
  text-align: center;
  /* font-family: Pretendard; */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ButtonWrap = styled.div`
  display: flex;
  padding: 3px 0px;
  align-items: center;
`;
