import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/sXQkha4P57.json";

const LottieAnimation = () => {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: 300, height: 300 }}
      className="w-full h-full  ml-3"
    />
  );
};

export default LottieAnimation;
