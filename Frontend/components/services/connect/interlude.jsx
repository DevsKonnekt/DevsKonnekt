import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Interlude = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 justify-center items-center px-4 sm:px-6 md:px-8 py-8 mb-4 h-[500px] relative">
      <Image
        src="/images/services/connect/4.jpeg"
        alt="hero"
        width={500}
        height={500}
        className="absolute object-cover top-0 left-0 w-full h-full"
      />
      <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 z-10 bg-primary/80 px-4 sm:px-6 md:px-8">
        <p className="text-background font-bold text-3xl md:text-5xl text-center max-w-2xl mx-auto leading-10">
          Join us to create lifelong memories, fantastic collaborations, and
          friendships that last a lifetime.
        </p>
        <Button
          variant="secondary"
          className="primary-btn mt-8 min-w-[256px] font-semibold"
        >
          <Link href="/developers">Join Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default Interlude;
