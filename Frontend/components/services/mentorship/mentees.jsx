import Image from "next/image";
import React from "react";

const Mentees = () => {
  return (
    <section className=" w-full max-w-7xl px-4 md:px-8 2xl:px-auto flex flex-col sm:flex-row gap-6 items-center justify-center mt-8">
      <div className="w-full sm:w-1/2 flex flex-col items-start justify-center">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Transform Your Coding
          <br />
          Journey With Expert
          <br />
          Guidance
        </h2>
        <p className="max-w-lg text-primary">
          Get a helping hand from seasoned developers who can catapult you to
          coding greatness. Trust us, they&#39;ve been there, done that, and
          debugged it.
        </p>
      </div>
      <Image
        src="/images/services/mentorship/transform.jpeg"
        loading="lazy"
        alt="Two developers behind desktop computer with code editor open"
        width={1920}
        height={1080}
        className="object-cover w-full max-w-[513px] max-h-[418px] rounded-[30px] sm:rounded-[45px] lg:rounded-[90px] rounded-tl-[5px] sm:rounded-tl-[7.5px] lg:rounded-tl-[15px] sm:w-1/2"
      />
    </section>
  );
};

export default Mentees;
