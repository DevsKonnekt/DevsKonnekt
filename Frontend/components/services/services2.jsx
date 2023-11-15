"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Services2() {
  return (
    <section className="bg-secondary/50 min-h-[370px] sm:h-[370px] flex flex-col gap-4 justify-between items-center mx-4 p-4 md:pt-0 md:px-12 md:flex-row mt-8 rounded-lg shadow-md shadow-background">
      <div className="flex-1 w-full">
        <Image
          src="/laptop.png"
          alt="Happy developers sitting on a table"
          width={1920}
          height={1080}
          className="rounded-[20px] md:rounded-[40px] rounded-tl-[100px] md:rounded-tl-[200px] object-cover w-full max-h-[308px] max-w-[490px]"
        />
      </div>
      <span className="spacer"></span>
      <div className="flex-1 w-full flex flex-col justify-start">
        <h1 className="text-2xl leading-none text-background font-bold lg:text-3xl sm:text-xl text-start lg:leading-tight mb-4 sm:mb-6">
          Participate in Exciting Coding <br className="hidden sm:block" />
          Challenges
        </h1>
        <p className="text-background font-normal">
          Hone your skills and show off your abilities by taking part in our
          regular coding competitions. Win big prizes and get noticed!
        </p>
        <Link href="/services/coding-challenges" className="primary-btn mt-4 sm:w-[256px] !bg-background hover:!bg-background/70 !text-primary font-semibold">
          Learn More
        </Link>
      </div>
    </section>
  );
}

export default Services2;
