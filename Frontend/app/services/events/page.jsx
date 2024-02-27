import CTA from "@/components/services/events/cta";
import Description from "@/components/services/events/description";
import HandsOn from "@/components/services/events/handsOn";
import Hero from "@/components/services/events/hero";
import Perks from "@/components/services/events/perks";
import Testimonial from "@/components/services/events/testimonial";
import React from "react";

const EventsService = () => {
  return (
    <div className="flex flex-col gap-4 w-full mx-auto px-4">
      <Hero />
      <Description />
      <Perks />
      <Testimonial />
      <HandsOn />
      <CTA />
    </div>
  );
};

export default EventsService;
