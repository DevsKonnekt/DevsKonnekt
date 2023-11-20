import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 w-full my-8 px-4">
      <p className="text-primary text-center">
        Connect with fellow developers, share knowledge, and unlock new
        opportunities.
      </p>
      <h3 className="text-3xl text-center text-primary font-bold">
        Join the Developer Community
      </h3>
      <Link
        href="/signup"
        className="primary-btn w-full sm:w-[283px] font-semibold mt-4"
      >
        Join Now
      </Link>
    </section>
  );
};

export default CTA;
