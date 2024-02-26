import React from "react";

import Lottie from "react-lottie-player";
import Cube from "../../../public/Cube_final.json";

export default function Example() {
  console.log("cube:", Cube);

  return (
    <Lottie
      loop
      animationData={Cube}
      play
      style={{ width: 200, height: 200 }}
    />
  );
}
