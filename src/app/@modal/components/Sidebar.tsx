import React, { useState } from "react";
import styled from "@emotion/styled";
import { color } from "@/Styles/color";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const router = [
  {
    path: "/mypage",
    label: "마이페이지",
    iconPath: "Person_white",
    activeIconPath: "Person_green",
  },
  {
    path: "/myapplication",
    label: "내 지원서",
    iconPath: "Document_white",
    activeIconPath: "Document_green",
    subMenu: [
      { path: "/myapplication/applications", label: "지원서 관리" },
      { path: "/myapplication/createapp", label: "지원서 작성" },
    ],
  },
  {
    path: "/payment",
    label: "결제 내역",
    iconPath: "Document_white",
    activeIconPath: "Document_green",
  },
  {
    path: "/project",
    label: "프로젝트",
    iconPath: "Monitor_white",
    activeIconPath: "Monitor_green",
    subMenu: [
      { path: "/project/myproject", label: "내 프로젝트" },
      { path: "/project/applicationStatus", label: "지원 현황" },
      { path: "/project/recruitmentStatus", label: "모집 현황" },
    ],
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
        <div className='router-wrap'>
          {router.map((route) => (
            <div
              className={
                route.subMenu && activeMenu === route.path && arcodian
                  ? "route_box"
                  : "route_box_nosub"
              }
              key={route.path}
            >
              {!route.subMenu && (
                <div className={path === route.path ? "choice" : "common"}>
                  <Image
                    src={
                      path === route.path
                        ? `/images/icons/${route.activeIconPath}.svg`
                        : `/images/icons/${route.iconPath}.svg`
                    }
                    alt='route_path'
                    width={16}
                    height={16}
                    style={{ marginRight: "8px" }}
                  />
                  <Link href={route.path}>
                    <span onClick={handleClickOther}>{route.label}</span>
                  </Link>
                </div>
              )}

              <div
                className={
                  (route.subMenu && arcodian && activeMenu === route.path
                    ? "subMenu-wrap"
                    : "subMenu-hidden") || ""
                }
              >
                {route.subMenu && (
                  <div className={path === route.path ? "choice" : "common"}>
                    <Image
                      src={
                        activeMenu === route.path && arcodian === true
                          ? `/images/icons/${route.activeIconPath}.svg`
                          : `/images/icons/${route.iconPath}.svg`
                      }
                      width={16}
                      height={16}
                      alt='route_path'
                      style={{ marginRight: "8px" }}
                    />
                    <span
                      onClick={() => handleClick(route.path)}
                      className={path === route.path ? "choice" : "common"}
                    >
                      {route.label}
                    </span>
                  </div>
                )}

                <div className='subMenu'>
                  {arcodian &&
                    activeMenu === route.path &&
                    route.subMenu?.map((item) => (
                      <Link href={item.path} key={item.path}>
                        <span
                          className={path === route.path ? "choice" : "common"}
                        >
                          {item.label}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
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

  /* .mirror {
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
  } */

  .common {
    color: ${color.gray.white};

    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .choice {
    color: ${color.brand.brandMain};

    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const RouteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  margin-top: 90px;

  .router-wrap {
    display: flex;
    flex-direction: column;
    justify-content: start;

    gap: 40px;
  }

  .subMenu-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;

    padding: 20px 0;

    transition: 0.5s;
  }

  .subMenu-hidden {
    transition: 0.5s;
  }

  .subMenu-title {
    display: flex;
    /* justify-content: center; */

    align-items: center;
    cursor: pointer;
  }

  .subMenu {
    display: flex;
    flex-direction: column;
    justify-content: right;
    gap: 12px;
    color: black;

    .choice {
      color: #06f;
    }

    a {
      display: flex;
      margin-left: 22px;
      /* justify-content: center; */
    }
  }

  .route-wrap {
    display: flex;
    align-items: center;
  }
`;
