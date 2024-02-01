"use client";

import styled from "@emotion/styled";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Button from "../Button_new/Button";

export default function NavBarTest() {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <Container>
        <div>
          <Logo>
            <img src='images/Logo.svg' />
          </Logo>
        </div>
        <Imsi>
          <TopMenu>
            {/* home */}
            <li>
              <Link href='/Home'>
                {segment === "Home" ? (
                  <>
                    <ChoiceMenuWrap>
                      <Wrap>
                        <MenuIcon src='/images/home/Home_blue.svg' />
                        <MenuText>Home</MenuText>
                      </Wrap>
                      <ChoiceMenu src='/images/home/arrow_gray.svg' />
                    </ChoiceMenuWrap>
                  </>
                ) : (
                  <>
                    <MenuWrap>
                      <MenuIcon src='/images/home/Home_gray.svg' />
                      <MenuText>Home</MenuText>
                    </MenuWrap>
                  </>
                )}
              </Link>
            </li>

            {/* mypage */}
            <li>
              <Link href='/MyPage'>
                {segment === "MyPage" ? (
                  <>
                    <ChoiceMenuWrap>
                      <Wrap>
                        <MenuIcon src='/images/home/Calendar_blue.svg' />
                        <MenuText>마이페이지</MenuText>
                      </Wrap>
                      <ChoiceMenu src='/images/home/arrow_gray.svg' />
                    </ChoiceMenuWrap>
                  </>
                ) : (
                  <>
                    <MenuWrap>
                      <MenuIcon src='/images/home/Calendar_gray.svg' />
                      <MenuText>마이페이지</MenuText>
                    </MenuWrap>
                  </>
                )}
              </Link>
            </li>

            {/* 지원서 */}
            <li>
              <Link href='/Application'>
                {segment === "Application" ? (
                  <>
                    <ChoiceMenuWrap>
                      <Wrap>
                        <MenuIcon src='/images/home/Group_blue.svg' />
                        <MenuText>지원서 관리</MenuText>
                      </Wrap>
                      <ChoiceMenu src='/images/home/arrow_gray.svg' />
                    </ChoiceMenuWrap>
                  </>
                ) : (
                  <>
                    <MenuWrap>
                      <MenuIcon src='/images/home/Group_gray.svg' />
                      <MenuText>지원서 관리</MenuText>
                    </MenuWrap>
                  </>
                )}
              </Link>
            </li>

            {/* 결제 내역 */}
            <li>
              <Link href='/Pay'>
                {segment === "Pay" ? (
                  <>
                    <ChoiceMenuWrap>
                      <Wrap>
                        <MenuIcon src='/images/home/Calendar_blue.svg' />
                        <MenuText>결제 내역</MenuText>
                      </Wrap>
                      <ChoiceMenu src='/images/home/arrow_gray.svg' />
                    </ChoiceMenuWrap>
                  </>
                ) : (
                  <>
                    <MenuWrap>
                      <MenuIcon src='/images/home/Calendar_gray.svg' />
                      <MenuText>결제 내역</MenuText>
                    </MenuWrap>
                  </>
                )}
              </Link>
            </li>

            {/* 프로젝트 */}
            <li>
              <Link href='/Project'>
                {segment === "Project" ? (
                  <>
                    <ChoiceMenuWrap>
                      <Wrap>
                        <MenuIcon src='/images/home/Bookmark_blue.svg' />
                        <MenuText>프로젝트</MenuText>
                      </Wrap>
                      <ChoiceMenu src='/images/home/arrow_gray.svg' />
                    </ChoiceMenuWrap>
                  </>
                ) : (
                  <>
                    <MenuWrap>
                      <MenuIcon src='/images/home/Bookmark_gray.svg' />
                      <MenuText>프로젝트</MenuText>
                    </MenuWrap>
                  </>
                )}
              </Link>
            </li>
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
              <Button size='primary' mode='primary' icon={true}>
                마이페이지
              </Button>
            </ButtonWrap>
          </BottomMenu>
        </Imsi>
      </Container>
    </>
  );
}

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
  background: url("images/home/Ellipse.svg"), lightgray 50% / cover no-repeat;
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
