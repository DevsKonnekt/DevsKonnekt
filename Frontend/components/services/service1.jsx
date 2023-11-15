"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Services1() {
  return (
    <section className="bg-blue-950 min-h-[370px] sm:h-[370px] flex flex-col gap-4 justify-between items-center mx-4 p-4 md:pt-0 md:px-12 md:flex-row mt-8 rounded-lg shadow-md shadow-blue-400">
      <div className="flex-1 w-full flex flex-col justify-start">
        <h1 className="text-2xl leading-none text-background font-bold lg:text-3xl sm:text-xl text-start lg:leading-tight mb-4 sm:mb-6">
          Connect and Chat with Like- <br className="hidden sm:block" />
          Minded Developers <br className="hidden sm:block" />
        </h1>
        <p className="text-background font-normal">
          Collaborate, make new friends, and learn from the best in the
          industry. Leverage our powerful communication tools to break the
          barriers.
        </p>
        <Link
          href="/services/connect"
          className="primary-btn mt-4 sm:w-[256px] font-semibold"
        >
          Learn More
        </Link>
      </div>
      <div className="flex-1 w-full">
        <Image
          src="/services.png"
          alt="Happy developers sitting on a table"
          width={800}
          height={700}
          className="rounded-[15px] object-cover w-full max-h-[308px] max-w-[490px]"
        />
      </div>
    </section>
  );
}

export default Services1;
