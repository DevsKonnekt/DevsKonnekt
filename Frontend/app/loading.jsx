"use client";
import Lottie from "lottie-react";
import loading from "@/constants/loading.json";
const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen p-4">
      <Lottie
        animationData={loading}
        loop={true}
        allowFullScreen
        placeholder="loading"
        className="w-[50%] md:w-[30%]"
      />
    </div>
  );
};

export default Loading;
