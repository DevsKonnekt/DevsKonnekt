import React from "react";
import SignUpButton from "./signUpButton";

const CTA = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 w-full my-8 px-4">
      <p className="text-center">
        Connect with fellow developers, share knowledge, and unlock new
        opportunities.
      </p>
      <h3 className="text-3xl text-center font-bold">
        Join the Developer Community
      </h3>
      <SignUpButton variant="secondary" title="Join Now" />
    </section>
  );
};

export default CTA;
