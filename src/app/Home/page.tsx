"use client";

import Card from "@/components/Card/Card";

import styled from "@emotion/styled";
import PositionIcon from "@/components/PositionIcon/PositionIcon";
import NavBar from "@/components/NavBar/NavBar";
import Button from "@/components/Button_new/Button";
import Input from "@/components/Input_new/Input";

const data = [
  {
    id: "1",
    title: "사이드1",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "projectManager", "feDeveloper", "beDeveloper"],
  },
  {
    id: "2",
    title: "사이드2",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "projectManager", "beDeveloper"],
  },
  {
    id: "3",
    title: "사이드3",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["feDeveloper", "beDeveloper"],
  },
  {
    id: "4",
    title: "사이드4",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "feDeveloper", "beDeveloper"],
  },
  {
    id: "5",
    title: "사이드5",
    projectPeriod: "2024.01.20 ~ 2024.02.20",
    deposit: "10만원",
    necessaryPeriod: "20일",
    position: ["designer", "feDeveloper", "beDeveloper"],
  },
];

const page = () => {
  return (
    <HomeStyle>
      <RightSection>
        사이드플젝
        <DisplayFlex>
          <Button size='basic' mode='basic'>
            테스트
          </Button>
          <Button size='basic' mode='basic'>
            테스트
          </Button>
          <Button size='basic' mode='basic'>
            테스트
          </Button>
          <Button size='basic' mode='basic'>
            테스트
          </Button>
          <Input placeholder='프로젝트 검색' />
        </DisplayFlex>
        <ImsiContainer>
          <Imsi>
            {data.map((item, idx) => (
              <Card
                id={item.id}
                title={item.title}
                projectPeriod={item.projectPeriod}
                deposit={item.deposit}
                necessaryPeriod={item.necessaryPeriod}
              >
                {item.position.map((position, positionIdx) => (
                  <PositionIcon
                    key={positionIdx}
                    color={position}
                    icon={position}
                  />
                ))}
              </Card>
            ))}
          </Imsi>
        </ImsiContainer>
      </RightSection>
    </HomeStyle>
  );
};

export default page;

const HomeStyle = styled.div`
  display: flex;
`;

const DisplayFlex = styled.div`
  display: flex;
`;

const ImsiContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

const Imsi = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;
