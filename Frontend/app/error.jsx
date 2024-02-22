"use client";

import Lottie from "lottie-react";
import data from "@/constants/error.json";
import { Button } from "@/components/ui/button";
const ErrorPage = ({ error, reset }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-4">
      <Lottie
        animationData={data}
        loop={true}
        allowFullScreen
        placeholder="Ann error occurred"
        className="w-[50%] md:w-[30%]"
      />
      <Button onClick={() => reset()} className="primary-btn mt-4">
        Try Again
      </Button>
    </div>
  );
};

export default ErrorPage;
