import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="flex flex-col gap-4 md:gap-8 items-center justify-center my-4 px-0 sm:px-2 md:px-4">
      <h3 className="text-3xl md:text-5xl font-black text-center text-secondary">
        Get Involved
      </h3>
      <p className=" text-center max-w-2xl">
        Enough chit-chat! It’s time to discover the vibrant developer community
        in your city. Click below and let the magic unfold.
      </p>
      <Button
        variant="default"
        className="primary-btn font-semibold sm:min-w-[256px] text-background text-lg"
      >
        <Link href="/events">Explore Events</Link>
      </Button>
    </section>
  );
};

export default CTA;
