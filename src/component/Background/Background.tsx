"use client";

import styled from "@emotion/styled";

const Background = () => {
  return (
    <>
      <div>
        <Circle1
          style={{ position: "absolute", left: "300px", top: "250px" }}
        />
        <Circle2
          style={{ position: "absolute", left: "300px", bottom: "-100px" }}
        />
        <Circle1
          style={{ position: "absolute", right: "200px", top: "500px" }}
        />
        <Circle3
          style={{ position: "absolute", right: "800px", top: "600px" }}
        />
      </div>
    </>
  );
};

export default Background;

const Circle1 = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  background-color: rgba(0, 102, 255, 0.4);
  filter: blur(60px);
`;

const Circle2 = styled.div`
  width: 25rem;
  height: 25rem;
  border-radius: 100%;
  background-color: rgba(149, 54, 206, 0.4);
  filter: blur(60px);
`;

const Circle3 = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  background-color: rgba(0, 255, 10, 0.4);
  filter: blur(60px);
`;
