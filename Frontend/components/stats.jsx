"use client";

import React from "react";
import StatsCount from "./statsCount";
import Section from "./section";

const Stats = () => {
  return (
    <>
      <section
        className="w-[100vw] lg:w-full h-auto sm:h-[454px] mt-8 bg-secondary px-4 md:px-auto"
        style={{
          flexShrink: 0,
        }}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center w-full px-2 md:px-10 mx-auto">
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-3xl text-white font-bold mt-4 whitespace-normal">
              Celebrating our incredible <br className="hidden sm:block" />
              achievements in the tech <br className="hidden sm:block" />
              community
            </h2>
            <p className="text-lg text-white font-light mt-4">
              Join our vibrant developer community and experience limitless
              possibilities.
            </p>
          </div>
        </div>
        <StatsCount className="justify-start items-start mt-4" />
      </section>
      <Section />
      <style jsx>{`
        @media (max-width: 767px) {
          section {
            width: 100%;
            height: auto;
          }
          .max-w-screen-xl {
            margin: 0 auto;
            padding: 0 1rem;
          }
          .text-3xl {
            font-size: 2rem;
          }
          .text-lg {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
};

export default Stats;
