import React from "react";

import Lottie from "react-lottie-player";
import cube from "../../../public/Cube.json";

export default function Example() {
  console.log("cube:", cube);

  return (
    <Lottie
      loop
      animationData={cube}
      play
      style={{ width: 200, height: 200 }}
    />
  );
}
