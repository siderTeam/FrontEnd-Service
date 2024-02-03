"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Button from "../Button/Button";

const Navigation = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <Container>
      <Link href="/home">
        <Image src="images/logo.svg" alt="logo" width={60} height={33.623} />
      </Link>
      <NavWrap>
        <MenuWrap>
          <Link href="/home" style={{ textDecoration: "none" }}>
            <Menu>
              <MenuDetail>
                <Image
                  src={
                    segment === "home"
                      ? "images/home/home_blue.svg"
                      : "images/home/home_gray.svg"
                  }
                  alt="home"
                  width={20}
                  height={20}
                />
                Home
              </MenuDetail>
              {segment === "home" && (
                <Image
                  src="images/home/more.svg"
                  alt="more"
                  width={24}
                  height={24}
                />
              )}
            </Menu>
          </Link>
          <Link href="/myPage" style={{ textDecoration: "none" }}>
            <Menu>
              <MenuDetail>
                <Image
                  src={
                    segment === "myPage"
                      ? "images/home/calendar_blue.svg"
                      : "images/home/calendar_gray.svg"
                  }
                  alt="myPage"
                  width={20}
                  height={20}
                />
                마이페이지
              </MenuDetail>
              {segment === "myPage" && (
                <Image
                  src="images/home/more.svg"
                  alt="more"
                  width={24}
                  height={24}
                />
              )}
            </Menu>
          </Link>
          <Link href="/resume" style={{ textDecoration: "none" }}>
            <Menu>
              <MenuDetail>
                <Image
                  src={
                    segment === "resume"
                      ? "images/home/setup_blue.svg"
                      : "images/home/setup_gray.svg"
                  }
                  alt="resume"
                  width={20}
                  height={20}
                />
                지원서 관리
              </MenuDetail>
              {segment === "resume" && (
                <Image
                  src="images/home/more.svg"
                  alt="more"
                  width={24}
                  height={24}
                />
              )}
            </Menu>
          </Link>
          <Link href="/payment" style={{ textDecoration: "none" }}>
            <Menu>
              <MenuDetail>
                <Image
                  src={
                    segment === "payment"
                      ? "images/home/calendar_blue.svg"
                      : "images/home/calendar_gray.svg"
                  }
                  alt="payment"
                  width={20}
                  height={20}
                />
                결제 내역
              </MenuDetail>
              {segment === "payment" && (
                <Image
                  src="images/home/more.svg"
                  alt="more"
                  width={24}
                  height={24}
                />
              )}
            </Menu>
          </Link>
          <Link href="/project" style={{ textDecoration: "none" }}>
            <Menu>
              <MenuDetail>
                <Image
                  src={
                    segment === "project"
                      ? "images/home/bookmark_blue.svg"
                      : "images/home/bookmark_gray.svg"
                  }
                  alt="project"
                  width={20}
                  height={20}
                />
                프로젝트
              </MenuDetail>
              {segment === "project" && (
                <Image
                  src="images/home/more.svg"
                  alt="more"
                  width={24}
                  height={24}
                />
              )}
            </Menu>
          </Link>
        </MenuWrap>
        <ProfileWrap>
          <Image src="images/home/profile.svg" alt="profile" width={94} height={94} />
          <Profile>
            <Name>808Ground</Name>
            <Job>
              <JobDetail>10년차</JobDetail>
              <JobDetail>디자이너</JobDetail>
            </Job>
          </Profile>
          <Button mode="primary" rightIcon="images/home/more_white.svg">마이페이지</Button>
        </ProfileWrap>
      </NavWrap>
    </Container>
  );
};

export default Navigation;

const Container = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  min-height: 100vh;
  padding: 80px 50px;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  flex-shrink: 0;
  justify-content: flex-start;
  position: fixed;

  border-radius: 14px 30px 50px 30px;
  background: var(--White, #fff);
`;

const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
`;

const MenuWrap = styled.div`
  display: flex;
  width: 146px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

const Menu = styled.div`
  display: flex;
  width: 146px;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const MenuDetail = styled.div`
  color: #0066ff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`;

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Name = styled.div`
  color: var(--primary, #06f);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Job = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;
`;

const JobDetail = styled.div`
  color: var(--primary, #06f);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
