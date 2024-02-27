import Lottie from "react-lottie";
import cube from "../../../public/CUBE_final.json";

const Cube = () => {
  console.log("cube", cube);
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cube,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default Cube;
