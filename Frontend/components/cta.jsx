import { SignUpButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 w-full my-8 px-4">
      <p className="text-primary dark:text-background text-center">
        Connect with fellow developers, share knowledge, and unlock new
        opportunities.
      </p>
      <h3 className="text-3xl text-center text-primary dark:text-background font-bold">
        Join the Developer Community
      </h3>
      <SignUpButton>
        <Button
          variant="secondary"
          className="primary-btn w-full sm:w-[283px] font-semibold mt-4 text-background text-lg"
        >
          Join Now
        </Button>
      </SignUpButton>
    </section>
  );
};

export default CTA;
