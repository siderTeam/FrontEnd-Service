"use client";

import styled from "@emotion/styled";
import PositionIcon from "../Tag/Tag";

const ProjectCard = () => {
  return (
    <Container>
      <div className="top">
        <h3>날아라 사이드킥</h3>
        <div className="tag_wrapper">
          <PositionIcon color="designer" icon="designer" />
          <PositionIcon color="projectManager" icon="projectManager" />
          <PositionIcon color="feDeveloper" icon="feDeveloper" />
          <PositionIcon color="beDeveloper" icon="beDeveloper" />
        </div>
      </div>

      <div className="bottom">
        <div className="content">
          <span className="left_wrapper">프로젝트 기간</span>
          <span style={{ color: "black" }}>2024.01.20 ~ 2024.02.02</span>
        </div>
        <div className="content">
          <span className="left_wrapper">
            보증금 <b>10만원</b>
          </span>
          <span>
            소요기간 <b>20일</b>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default ProjectCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 376px;
  height: 210px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 14px;
  border: 1px solid white;

  :hover {
    background: white;
    box-shadow: 4px 4px 20px 0px rgba(111, 140, 176, 0.41),
      -6px -6px 20px 0px rgba(255, 255, 255, 0.5),
      2px 2px 4px 0px rgba(114, 142, 171, 0.1);

    h3 {
      color: #0066ff;
    }
  }

  .top {
    flex: 1;

    h3 {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 12px;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
      display: flex;
      color: #515151;
      align-items: center;
      font-size: 16px;
    }

    b {
      color: black;
      font-size: 26px;
      margin-left: 8px;
    }

    .content {
      display: flex;
      .left_wrapper {
        flex: 1;
      }
    }
  }

  .tag_wrapper {
    gap: 4px;
    display: flex;
  }
`;

const Tag = styled.div`
  padding: 0px 4px;
`;
