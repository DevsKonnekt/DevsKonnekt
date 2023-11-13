import React from "react";

const Section = () => {
  return (
    <section
      className="w-full h-80 relative mb-8"
      style={{
        height: "654px",
        flexShrink: 0,
        background: "url('/developers.png') lightgray 50% / cover no-repeat",
      }}
    >
      <div className="bg-indigo-900 bg-opacity-50 absolute inset-0"></div>
      <div className="container mx-auto h-full flex justify-center items-center">
        <h1
          className="text-4xl text-center text-shadow font-bold column-text"
          style={{
            color: "#ffffff",
            fontFamily: "Poppins",
            fontSize: "60px",
            fontStyle: "normal",
            fontWeight: 100,
            lineHeight: "normal",
          }}
        >
          Unlock Your <br /> <br />Capacity. United.
        </h1>
      </div>
    </section>
  );
};

export default Section;