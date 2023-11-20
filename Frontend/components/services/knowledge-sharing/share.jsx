import Image from "next/image";
import React from "react";

const Share = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6 py-8 px-4 bg-secondary/10">
      <Image
        src="/images/services/knowledge-sharing/1.jpg"
        alt="Share"
        width={1920}
        height={1080}
        className="rounded-xl object-cover w-full max-w-[512px] max-h-[400px] flex-1"
      />
      <div className="flex flex-col gap-6 md:gap-8 flex-1 max-w-[680px]">
        <h1 className="text-2xl text-secondary font-bold">
          Share Knowledge and
          <br />
          Insights with
          <br />
          DevsKonnekt
        </h1>
        <p className="text-xl font-semibold text-primary/90">
          Konnekt with fellow software developers in your city and exchange
          valuable knowledge and insights to enhance your coding skills.
        </p>
        <p className="text-primary">
          We provide a platform for software developers to come together and
          share their knowledge and insights. Whether you have a specific coding
          problem you need help with or you want to share your expertise on a
          particular topic, our community is here to support you. Join us and
          tap into a network of like-minded professionals who are eager to
          collaborate, learn, and grow together.
        </p>
      </div>
    </div>
  );
};

export default Share;
