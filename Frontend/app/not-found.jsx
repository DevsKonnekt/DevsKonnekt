"use client";
import Lottie from "lottie-react";
import notFound from "@/constants/notFound.json";
const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen p-4">
      <Lottie
        animationData={notFound}
        loop={true}
        allowFullScreen
        placeholder="Page not found"
        className="w-full"
      />
    </div>
  );
};

export default NotFound;
