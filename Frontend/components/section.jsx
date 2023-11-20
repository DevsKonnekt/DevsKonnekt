import React from "react";

const Section = () => {
  return (
    <section
      className="w-[100vw] lg:w-full h-60 sm:h-80 md:h-[654px] relative mb-8"
      style={{
        flexShrink: 0,
        background: "url('/developers.png') lightgray 50% / cover no-repeat",
      }}
    >
      <div className="bg-primary bg-opacity-80 absolute inset-0"></div>
      <div className="container mx-auto h-full flex justify-center items-center">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl text-center text-shadow text-background z-10 font-black column-text"
        >
          Unlock Your Capacity.  <br className="mb-0 sm:mb-4" /> United.
        </h1>
      </div>
    </section>
  );
};

export default Section;