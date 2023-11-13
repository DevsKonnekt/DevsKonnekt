"use client";

import React from "react";
import StatsCount from "./statsCount";
import Section from "./section";

const Stats = () => {
  return (
    <>
      <section
        className="w-full max-w-screen mt-8 bg-blue-600"
        style={{
          height: "454px",
          flexShrink: 0,
        }}
      >
        <div className="max-w-screen-xl flex flex-col sm:flex-row gap-4 justify-between items-center w-full px-4 mx-auto">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl text-white font-bold mt-4">Celebrating our incredible</h2>
            <h2 className="text-3xl text-white font-bold">achievements in the tech</h2>
            <h2 className="text-3xl text-white font-bold">community</h2>
            <p className="text-lg text-white font-light mt-4">Join our vibrant developer community and experience limitless possibilities.</p>
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