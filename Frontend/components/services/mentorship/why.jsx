import Image from "next/image";
import Link from "next/link";
import React from "react";

const Why = () => {
  return (
    <div className="w-full px-4 md:px-8 2xl:px-auto flex flex-col sm:flex-row gap-6 lg:gap-10 items-center justify-between mt-8 bg-secondary/10 py-4">
      <div className="w-full sm:w-1/2 flex flex-col items-start justify-center">
        <h2 className="text-2xl font-bold  mb-4">
          Why Choose Our Mentorship Programme?
        </h2>
        <p className="max-w-lg mb-3 ">
          Imagine entering a world of coding where every challenge feels like a
          journey to a hidden Shangri-La. Yeah, that's our mentorship platform.
        </p>
        <p className="max-w-lg mb-3 ">
          Our mentors range from coding ninjas to database wizards. They've seen
          it all, coded it all, and now they're ready to share their secrets
          with you. You just hit the mentor jackpot!
        </p>
        <p className="max-w-lg ">
          Our platform connects developers through an innovative matchmaking
          process that ensures the perfect pairing of mentor and mentee. Prepare
          for a coding bromance like no other.
        </p>
        <Link
          href="/mentorship/search"
          className="primary-btn font-semibold min-w-[256px] mt-4"
        >
          Get a Mentor
        </Link>
      </div>
      <Image
        src="/images/services/mentorship/third.jpeg"
        loading="lazy"
        alt="Two developers behind desktop computer with code editor open"
        width={1920}
        height={1080}
        className="object-cover w-full max-w-[513px] max-h-[418px] rounded-[40px] sm:w-1/2"
      />
    </div>
  );
};

export default Why;
