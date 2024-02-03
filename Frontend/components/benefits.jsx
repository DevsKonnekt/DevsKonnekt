import { benefits } from "@/constants";
import React from "react";
import BenefitCard from "./benefitCard";

const Benefits = () => {
  return (
    <section className="px-4 my-8 w-full">
      <div className="flex flex-col items-center gap-4 ">
        <h2 className="text-3xl font-bold text-start sm:text-center text-primary dark:text-background">
          DevsKonnekt: Konnekting Developers Like Never Before
        </h2>
        <p className="text-start sm:text-center text-primary/80 dark:text-background/80 text-lg font-semibold">
          Unlock your development potential with DevsKonnekt.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mt-8 w-full">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} icon={benefit.icon} text={benefit.text} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
