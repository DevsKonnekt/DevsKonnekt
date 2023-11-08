import React from "react";
import Link from "next/link";
import ServiceCard from "./serviceCard";
import { landingServices as services } from "@/constants";

const Services = () => {
  return (
    <section className="flex flex-col gap-4 w-full my-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl text-primary font-bold">Developer Community Services</h2>
          <p className="text-lg text-secondary font-semibold">Unleashing the Power of Developers</p>
        </div>
        <Link href="/services" className="primary-btn">
          View All Services
          </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard
            key={service.description}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
