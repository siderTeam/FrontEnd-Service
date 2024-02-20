"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";
import FirstContent from "./components/FirstContent";
import SecondContent from "./components/SecondContent";
import ThirdContent from "./components/ThirdContent";
import LastContent from "./components/LastContent";

const Page = () => {
  const [currentContent, setCurrentContent] = useState("first");

  const handleNextButtonClick = () => {
    switch (currentContent) {
      case "first":
        setCurrentContent("second");
        break;
      case "second":
        setCurrentContent("third");
        break;
      case "third":
        setCurrentContent("last");
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <StyledImage
        src={"/images/logo.svg"}
        alt="logo"
        width={204}
        height={56}
      />
      <ContainerWrap>
        <div className="signUpContainer">
          {currentContent === "first" && (
            <FirstContent onNext={handleNextButtonClick} />
          )}
          {currentContent === "second" && (
            <SecondContent onNext={handleNextButtonClick} />
          )}
          {currentContent === "third" && (
            <ThirdContent onNext={handleNextButtonClick} />
          )}
          {currentContent === "last" && <LastContent />}
          <div className="effect" />
        </div>
      </ContainerWrap>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const StyledImage = styled(Image)`
  margin: 0 auto 47px auto;
`;

const ContainerWrap = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  .signUpContainer {
    box-sizing: border-box;
    width: 624px;
    height: 785px;
    margin: 0 auto;
    padding: 56px;

    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.67);
    background: linear-gradient(
        144deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      rgba(2, 6, 13, 0.5);
    backdrop-filter: blur(20px);
  }

  .effect {
    position: absolute;
    z-index: -1;
    top: -50px;
    left: -200px;

    width: 700px;
    height: 550px;
    transform: rotate(-30deg);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;
