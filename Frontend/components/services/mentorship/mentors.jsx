import Image from "next/image";
import React from "react";

const Mentors = () => {
  return (
    <section className="w-full max-w-7xl px-4 md:px-8 2xl:px-auto flex flex-col-reverse sm:flex-row gap-6 lg:gap-10 items-center justify-between mt-8">
      <Image
        src="/images/services/mentorship/second.jpeg"
        loading="lazy"
        alt="Two developers behind desktop computer with code editor open"
        width={1920}
        height={1080}
        className="object-cover w-full max-w-[513px] max-h-[418px] rounded-[40px] sm:w-1/2"
      />
      <div className="w-full sm:w-1/2 flex flex-col items-start justify-center">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Become a Mentor and
          <br />
          Share Your Wisdom
        </h2>
        <p className="max-w-lg text-primary">
          Time to give back? Guide fledgling developers along their paths and
          witness their growth firsthand. Feel the pride swell as they conquer
          the coding world.
        </p>
      </div>
    </section>
  );
};

export default Mentors;
