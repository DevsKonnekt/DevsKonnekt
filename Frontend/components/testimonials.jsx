"use client";

import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./testimonialCard";

const Testimonials = () => {
  return (
    <section className="w-full p-4 mt-8">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl text-primary dark:text-background font-bold">
            Trusted By Numerous Software Developers
          </h2>
          <p className="text-lg text-primary/80 dark:text-background/80 font-medium">
            Hear From Our Satisfied Clients About Their Experience With
            Devskonnekt
          </p>
        </div>
        <Link href="/testimonials" className="primary-btn">
          View All Testimonials
        </Link>
      </div>
      <div className="relative w-full mt-8">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={"testimonial " + index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard
                  image={testimonial.image}
                  name={testimonial.name}
                  text={testimonial.text}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
