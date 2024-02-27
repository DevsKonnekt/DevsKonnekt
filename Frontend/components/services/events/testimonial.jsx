import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="w-screen xl:w-full -ml-4 xl:ml-auto h-screen sm:h-[75vh] relative flex flex-col items-center justify-center gap-6 sm:gap-8 mt-[80px]">
      <Image
        src="/images/services/events/5.jpeg"
        alt="hero"
        width={1920}
        height={1080}
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-secondary/80 flex flex-col items-center justify-center gap-4 px-4 md:px-8 ">
        <h1 className="text-lg sm:text-xl md:text-2xl text-center text-background z-10 font-black column-text">
          “Discovering the opportunities to get involved face to face through
          Devskonnekt took my learning experience to a whole new level. I feel
          so much more confident in my skills and abilities now thanks to being
          plugged into the local community. I&apos;ll always be grateful for how
          getting active helped open new doors for me.”
        </h1>
      </div>
    </div>
  );
};

export default Testimonial;
