import React from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import { features } from "@/constants";

/**
 * Render a list of features.
 *
 * @return {JSX.Element} A div element containing a list of features.
 */
const Features = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4>
    <div>
      {features.map((feature) => (
        <div key={feature} className="mb-4 flex gap-4">
          <MdCheckCircleOutline />
          <span>{feature}</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Features;
