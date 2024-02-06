"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";

const router = [
  {
    path: "/home",
    label: "Home",
    iconPath: "home_gray",
    activeIconPath: "home_blue",
  },
  {
    path: "/myPage",
    label: "마이페이지",
    iconPath: "calendar_gray",
    activeIconPath: "calendar_blue",
  },
  {
    path: "/application",
    label: "지원서 관리",
    iconPath: "setup_gray",
    activeIconPath: "setup_blue",
  },
  {
    path: "/payment",
    label: "결제 내역",
    iconPath: "calendar_gray",
    activeIconPath: "calendar_blue",
  },
  {
    path: "/project",
    label: "프로젝트",
    iconPath: "bookmark_gray",
    activeIconPath: "bookmark_blue",
  },
];

const Navigation = () => {
  const path = usePathname();

  return (
    <Container>
      <Link href="/home">
        <Image src="images/logo.svg" alt="logo" width={60} height={33.623} />
      </Link>
      <NavWrap>
        <MenuWrap>
          {router.map((route) => (
            <Menu key={route.path}>
              <MenuDetail>
                <Image
                  src={
                    path === route.path
                      ? `images/home/${route.activeIconPath}.svg`
                      : `images/home/${route.iconPath}.svg`
                  }
                  alt={route.path}
                  width={20}
                  height={20}
                />
                <Link href={route.path}>
                  <MenuLabel>{route.label}</MenuLabel>
                </Link>
              </MenuDetail>
              {path === route.path && (
                <Image
                  src="images/home/more.svg"
                  alt="more"
                  width={24}
                  height={24}
                />
              )}
            </Menu>
          ))}
        </MenuWrap>
        <ProfileWrap>
          <Link href="/login">
            <Button mode="primary" rightIcon="images/user.svg" iconSize={16}>
              로그인
            </Button>
          </Link>
          {/* <Image src="images/home/profile.svg" alt="profile" width={94} height={94} />
          <Profile>
            <Name>808Ground</Name>
            <Job>
              <JobDetail>10년차</JobDetail>
              <JobDetail>디자이너</JobDetail>
            </Job>
          </Profile>
          <Button mode="primary" rightIcon="images/home/more_white.svg">마이페이지</Button> */}
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
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`;

const MenuLabel = styled.span`
  color: #0066ff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
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
