"use client";

import { testimonials } from "@/constants";
import Link from "next/link";
import React from "react";
import TestimonialCard from "./testimonialCard";
import { MdChevronLeft, MdOutlineChevronLeft, MdOutlineChevronRight, MdSwipeLeftAlt, MdSwipeRightAlt } from "react-icons/md";

const Testimonials = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === "left") {
          current.scrollLeft -= 350;
        } else {
          current.scrollLeft += 350;
        }
    };

  return (
    <section className="w-full p-4 mt-8">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl text-primary font-bold">
            Trusted By Numerous Software Developers
          </h2>
          <p className="text-lg text-primary/80 font-medium">
            Hear From Our Satisfied Clients About Their Experience With
            Devskonnekt
          </p>
        </div>
        <Link href="/testimonials" className="primary-btn">
          View All Testimonials
        </Link>
      </div>
      <div className="relative w-full mt-8">
      <div className="flex overflow-x-scroll .no-scrollbar gap-4" ref={scrollRef}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={"testimonial " + index}
            image={testimonial.image}
            name={testimonial.name}
            text={testimonial.text}
          />
        ))}
      </div>
      <div className="absolute xl:hidden top-1/2 right-0 transform -translate-y-1/2 flex items-center justify-between w-full">
        <button
          className="bg-transperant p-2 rounded-full shadow-primary hover:shadow-md transition-shadow"
          onClick={() => scroll("left")}
        >
          <MdOutlineChevronLeft className="text-primary text-5xl" />
        </button>
        <button
          className="bg-transperant p-2 rounded-full shadow-primary hover:shadow-md transition-shadow"
          onClick={() => scroll("right")}
        >
          <MdOutlineChevronRight className="text-primary text-5xl" />
        </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
