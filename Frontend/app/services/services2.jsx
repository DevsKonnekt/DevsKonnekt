"use client";
import Image from "next/image";
import React from "react";

function Services2() {

  return (
    <section className="w-full bg-secondary min-h-screen flex flex-col gap-4 justify-between items-center mx-4 pt-36 sm:pt-24 md:pt-0 md:px-12 md:flex-row mt-8 rounded-lg shadow-md shadow-blue-100">
        <div className="flex-1 w-full md:w-1/2 rounded-tl-lg">
  <Image
    src="/laptop.png"
    alt="Happy developers sitting on a table"
    width={200}
    height={300}
    className="rounded-md object-cover w-full"
    style={{
      borderTopLeftRadius: '200px',
      borderTopRightRadius: '40px',
      borderBottomRightRadius: '40px',
      borderBottomLeftRadius: '40px',
    }}
  />
</div>
<span className="spacer"></span>
      <div className="mb-14 lg:mb-0 md:w-1/2 flex-1 w-full">
        <h1 className="text-2xl leading-none text-white font-bold lg:text-3xl sm:text-xl text-start lg:leading-tight mb-5 sm:pt-14 sm:mb-12">
         Participate in Exciting Coding <br className="hidden sm:block" />
          Challenges <br className="hidden sm:block" />

        </h1>
        <p className="text-white font-normal">
        Hone your skills and show off your abilities by taking part in our regular coding competitions. Win big prizes and get noticed!
        </p>
        <div className="flex justify-center items-center mt-16">
          <button className="text-primary bg-white text-base sm:text-lg border border-secondary bg-secondary transition-all duration-500 font-medium rounded-lg px-6 py-1 w-[150px] sm:w-auto text-center hover:bg-primary hover:border-primary hover:text-white">
            Learn More
          </button>
        </div>
      </div>
      
    </section>
  );
}

export default Services2;