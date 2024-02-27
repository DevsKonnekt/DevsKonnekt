import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-screen xl:w-full -ml-4 xl:ml-auto h-screen sm:h-[75vh] md:h-[90vh] relative flex flex-col items-center justify-center gap-6 sm:gap-8 pt-[80px]">
      <Image
        src="/images/services/events/1.jpeg"
        alt="hero"
        width={1920}
        height={1080}
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-secondary/50 flex flex-col items-center justify-center gap-4 px-4 md:px-8 ">
        <h1 className="text-4xl sm:text-5xl md:text-7xl text-center text-background z-10 font-black column-text">
          Unleash your inner coding genius at local developer gatherings!
        </h1>
        <Link href="/events">
          <Button className="mt-4 primary-btn !bg-background hover:!bg-background/75 !text-primary font-semibold min-w-[256px]">
            Find Nearby Events
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
