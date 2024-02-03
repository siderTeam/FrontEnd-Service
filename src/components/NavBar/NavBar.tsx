"use client";

import styled from "@emotion/styled";
import Image from "next/image";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../Button_new/Button";

const router = [
  {
    path: "/home",
    label: "Home",
    iconPath: "Home_gray",
    activeIconPath: "Home_blue",
  },
  {
    path: "/myPage",
    label: "마이페이지",
    iconPath: "Calendar_gray",
    activeIconPath: "Calendar_blue",
  },
  {
    path: "/application",
    label: "지원서 관리",
    iconPath: "Group_gray",
    activeIconPath: "Group_blue",
  },
  {
    path: "/payment",
    label: "결제 내역",
    iconPath: "Calendar_gray",
    activeIconPath: "Calendar_blue",
  },
  {
    path: "/project",
    label: "프로젝트",
    iconPath: "Bookmark_gray",
    activeIconPath: "Bookmark_blue",
  },
];

const Sidebar = () => {
  const path = usePathname();

  return (
    <Container>
      <div className='top'>
        <Image
          className='logo'
          src={"images/Logo.svg"}
          width={60}
          height={34}
          alt='로고'
        />
        <RouteWrapper>
          {router.map((route) => (
            <div className='route_box' key={route.path}>
              <Image
                src={
                  path === route.path
                    ? `images/home/${route.activeIconPath}.svg`
                    : `images/home/${route.iconPath}.svg`
                }
                width={24}
                height={24}
                alt='route_path'
              />
              <Link href={route.path}>
                <span>{route.label}</span>
              </Link>
              {path === route.path && (
                <div className='arrow_icon'>
                  <Image
                    src={`images/home/arrow_gray.svg`}
                    width={20}
                    height={20}
                    alt='arrow'
                  />
                </div>
              )}
            </div>
          ))}
        </RouteWrapper>
      </div>
      <div className='bottom'>
        <ProfileWrapper>
          <Image
            src={"images/home/Ellipse.svg"}
            width={94}
            height={94}
            alt='profile'
          />
          <span className='name'>닉네임</span>
          <span>10년차 디자이너</span>
          <Button icon={true} style={{ marginTop: 10 }}>
            마이페이지
          </Button>
        </ProfileWrapper>
      </div>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 246px;
  border-radius: 15px;
  background: white;
  z-index: 3;

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bottom {
    position: absolute;
    bottom: 0px;
    width: 146px;
    left: 50px;
    bottom: 50px;
  }

  .logo {
    margin-top: 50px;
    margin-bottom: 100px;
  }
`;

const RouteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  gap: 30px;

  .route_box {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #0066ff;

    .arrow_icon {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
    }
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  span {
    color: #0066ff;
    font-size: 14px;
  }

  .name {
    font-size: 16px;
  }

  button {
    margin-top: 10px;
  }
`;
