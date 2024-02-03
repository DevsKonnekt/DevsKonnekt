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
    <section className="flex flex-col gap-4 w-full my-4 px-4 md:px-auto">
      <div className="flex items-center gap-1">
        <hr className="flex-1 border-gray-800 dark:border-gray-400" />
        <h2 className="text-3xl text-primary font-bold dark:text-background">
          Features
        </h2>
        <hr className="flex-1 border-gray-800 dark:border-gray-400" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between my-4">
        <div className="flex-1">
          {features.map((feature) => (
            <div key={feature} className="mb-4 flex gap-2">
              <MdCheckCircleOutline
                className="text-secondary dark:text-blue-300"
                size={24}
              />
              <span className="text-primary dark:text-background">
                {feature}
              </span>
            </div>
          ))}
        </div>
        <Image
          src="/images/features/1.jpg"
          alt="features"
          width={500}
          height={500}
          className="object-cover rounded-md flex-1 w-full sm:max-w-[500px]"
        />
      </div>
    </section>
  );
};

export default Features;
