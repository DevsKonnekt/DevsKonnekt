import SignUpButton from "@/components/signUpButton";
import Link from "next/link";
import React from "react";

const Unlock = () => {
  return (
    <div className="flex flex-col gap-4 items-start justify-start mt-4 px-4">
      <h1 className="text-2xl  mb-2 mt-6 font-bold">
        Unlock the Power of Knowledge Sharing
      </h1>
      <p className="text-lg font-semibold opacity-90 mt-2 max-w-[1000px]">
        Tap into a vast network of software developers in your city and gain
        valuable insights to enhance your coding skills.
      </p>
      <p className=" mt-2 max-w-[1000px]">
        At DevsKonnekt, we believe that knowledge sharing is the key to personal
        and professional growth. Our platform provides you with the opportunity
        to connect with like-minded professionals in your city and share your
        knowledge and insights. Whether you want to learn from others or
        contribute your expertise, DevsKonnekt is the perfect space for you to
        expand your coding knowledge and stay ahead in your career. Join our
        community today and unlock the power of knowledge sharing!
      </p>
      <SignUpButton title={"Sign Me Up"} />
    </div>
  );
};

export default Unlock;
