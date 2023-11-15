import Image from "next/image";
import Link from "next/link";
import React from "react";

function Services6() {
  return (
    <section className="bg-background min-h-[370px] sm:h-[370px] flex flex-col gap-4 justify-between items-center mx-4 p-4 md:pt-0 md:px-12 md:flex-row mt-8 rounded-lg shadow-md shadow-secondary mb-8">
      <div className="flex-1 w-full md:w-1/2">
        <Image
          src="/meeting.png"
          alt="Happy developers in a meeting"
          width={1920}
          height={1080}
          className="rounded-[20px] md:rounded-[40px] rounded-tl-[100px] md:rounded-tl-[200px] object-cover w-full max-h-[308px] max-w-[490px]"
        />
      </div>
      <span className="spacer"></span>
      <div className="flex-1 w-full flex flex-col justify-start">
        <h1 className="text-2xl leading-none text-primary font-bold lg:text-3xl sm:text-xl text-start lg:leading-tight mb-4 sm:mb-6">
          Explore and Attend Local
          <br className="hidden sm:block" />
          Developer Events
          <br className="hidden sm:block" />
        </h1>
        <p className="text-primary font-normal">
          Discover and attend coding workshops, hackathons, and tech meetups near you. Network with fellow developers and grow together.
        </p>
        <Link href="/services/job-listings" className="primary-btn mt-4 sm:w-[256px] font-semibold">
          Learn More
        </Link>
      </div>
    </section>
  );
}

export default Services6;