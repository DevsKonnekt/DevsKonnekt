"use client";

// import { testimonials } from "@/constants";
import Link from "next/link";
import React from "react";
import StatsCount from "./statsCount";
import Section from "./section";


const Stats = () => {
  return (
    <>
    <section
        className="w-full max-w-screen mt-8 bg-blue-600"
        style={{
          width: "1400px",
          height: "454px",
          flexShrink: 0,
        }}
      >
      <div className="max-w-screen-xl flex flex-col sm:flex-row gap-4 justify-between items-center w-full px-4 ml-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl text-white font-bold mt-4">
            Celebrating our incredible
          </h2>
          <h2 className="text-3xl text-white font-bold">
            achievements in the tech
          </h2>
          <h2 className="text-3xl text-white font-bold">
            community
          </h2>
          <p className="text-lg text-white font-light mt-4 ">
            Join our vibrant developer community and experience limitless possibilities.
          </p>
        </div>
      </div>
      <StatsCount className="justify-start items-start mt-4"/>
    </section>
    <Section/>
    </>
  );
};

export default Stats;