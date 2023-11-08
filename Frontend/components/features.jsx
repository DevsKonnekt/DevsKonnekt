import React from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import { features } from "@/constants";
import Image from "next/image";

/**
 * Render a list of features.
 *
 * @return {JSX.Element} A div element containing a list of features.
 */
const Features = () => {
  return (
    <section className="flex flex-col gap-4 w-full my-4">
      <div className="flex items-center gap-1">
        <hr className="flex-1 border-gray-800" />
        <h2 className="text-3xl text-primary font-bold">Features</h2>
        <hr className="flex-1 border-gray-800" />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between my-4">
        <div>
          {features.map((feature) => (
            <div key={feature} className="mb-4 flex gap-4">
              <MdCheckCircleOutline className="text-primary" />
              <span className="text-primary">{feature}</span>
            </div>
          ))}
        </div>
        <Image
          src="/images/features/1.jpg"
          alt="features"
          width={500}
          height={500}
          className="object-cover rounded-md"
        />
      </div>
    </section>
  );
};

export default Features;
