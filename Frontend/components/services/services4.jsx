"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Services4() {
  return (
    <section className="bg-primary min-h-[370px] sm:h-[370px] flex flex-col gap-4 justify-between items-center mx-4 p-4 md:pt-0 md:px-12 md:flex-row mt-8 rounded-lg shadow-md shadow-secondary">
      <div className="flex-1 w-full">
        <Image
          src="/developer-laptop.png"
          alt="Happy developers sitting on a table"
          width={1920}
          height={1080}
          className="rounded-[20px] md:rounded-[40px] rounded-tl-[100px] md:rounded-tl-[200px] object-cover w-full max-h-[308px] max-w-[490px]"
        />
      </div>
      <span className="spacer"></span>
      <div className="flex-1 w-full flex flex-col justify-start">
        <h1 className="text-2xl leading-none text-background font-bold lg:text-3xl sm:text-xl text-start lg:leading-tight mb-4 sm:mb-6">
          Share Knowledge and <br className="hidden sm:block" />
          Insights <br className="hidden sm:block" />
        </h1>
        <p className="text-white font-normal">
          Contribute to our thriving community by sharing your expertise, and
          learn from others&apos; experiences in our valuable knowledge base.
        </p>
        <Link
          href="/services/knowledge-sharing"
          className="primary-btn mt-4 sm:w-[256px] font-semibold"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}

export default Services4;
