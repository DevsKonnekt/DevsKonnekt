import React from 'react';
import { Input } from "../../components/ui/input";

function CTA() {
  return (
    <section className='w-screen min-h-screen bg-white mb-8 flex flex-col justify-center items-center'>
      <h1 className='text-5xl text-blue-950 font-bold mb-4'>
        Join Today
      </h1>
      <p className='text-blue-950 text-center max-w-lg overflow-hidden line-clamp-4 mt-8'>
        Get instant access to all of our amazing features! Start collaborating and growing with an incredibly supportive community.
      </p>
      <button
        className="h-10 primary-btn w-full sm:w-[150px] font-semibold mt-8 sm:text-base sm:w-auto"
      >
        Join Now
      </button>

      <h1 className='text-2xl text-blue-950 font-bold mt-12 mb-4'>
        Subscribe to our Newsletter
      </h1>
      <p>Enter your email address to register for our newsletter subscription!</p>
      <Input
        type="email"
        placeholder="Enter your email"
        className="px-2 py-0 rounded-lg bg-background text-primary/80 w-80 mx-auto mt-8"
      />
      <button
        type="submit"
        className="h-10 primary-btn w-full sm:w-[150px] font-semibold mt-8 sm:text-base sm:w-auto"
      >
        Subscribe
      </button>
    </section>
  );
}

export default CTA;