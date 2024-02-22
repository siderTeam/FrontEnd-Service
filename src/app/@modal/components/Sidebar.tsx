import React, { useState } from "react";
import styled from "@emotion/styled";
import * as CS from "../../../Styles/CommonStyles";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const router = [
  {
    path: "/mypage",
    label: "마이페이지",
    iconPath: "Person_whtie",
    activeIconPath: "Person_green",
  },
  {
    path: "/myapplication",
    label: "내 지원서",
    iconPath: "Document_white",
    activeIconPath: "Document_green",
    subMenu: [
      { path: "/myApplication/applications", label: "지원서 관리" },
      { path: "/myApplication/applicationsCreate", label: "지원서 작성" },
    ],
  },
  {
    path: "/payment",
    label: "결제 내역",
    iconPath: "Document_white",
    activeIconPath: "Document_green",
  },
  {
    path: "/myproject",
    label: "프로젝트",
    iconPath: "Monitor_white",
    activeIconPath: "Monitor_green",
    subMenu: [{ path: "/myProject/myProjectList", label: "내 프로젝트" }],
  },
];

const Sidebar = () => {
  const path = usePathname();
  const [arcodian, setArcodian] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const handleClick = (path: string) => {
    if (activeMenu === path) {
      setArcodian(!arcodian);
    } else {
      setArcodian(true);
    }
    setActiveMenu(path);
  };

  const handleClickOther = () => {
    setArcodian(false);
  };

  return (
    <Container>
      <RouteWrapper>
        {router.map((route) => (
          <div className='route-wrap'>
            <Image
              src={
                path === route.path
                  ? `images/icons/${route.activeIconPath}.svg`
                  : `images/icons/${route.iconPath}.svg`
              }
              alt='route_path'
              width={16}
              height={16}
            />
            <Link href={route.path}>
              <span className={path === route.path ? "choice" : "common"}>
                {route.label}
              </span>
            </Link>
          </div>
        ))}
      </RouteWrapper>
      <div className='mirror'></div>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 220px;
  height: 720px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.03);
  box-sizing: border-box;
  border-radius: 24px;

  position: relative;
  overflow: hidden;
  z-index: 1;

  .mirror {
    width: 293.614px;
    height: 254.156px;
    transform: rotate(-30deg);
    flex-shrink: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    position: absolute;
    top: 0;
    left: -100px;

    z-index: -1;
  }
`;

const RouteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  margin-top: 90px;

  .route-wrap {
    display: flex;
    align-items: center;
  }

  .common {
    color: ${CS.color.white};

    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 8px;
  }

  .choice {
    color: ${CS.color.brandMain};

    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 8px;
  }
`;
