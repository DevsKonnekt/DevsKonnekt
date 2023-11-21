import React from "react";
import { MdCheckCircle } from "react-icons/md";

const Benefits = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 justify-center items-center px-4 sm:px-6 md:px-8 py-8 mt-6 bg-secondary">
      <p className="text-xl md:text-2xl font-bold text-center text-background flex-1">
        Become a part of something extraordinary. Connect with developers around
        you and the globe to build your network and expand your horizons
      </p>
      <ul className="flex flex-col gap-4 justify-start items-start text-background flex-1 font-medium">
        <li className="flex gap-3 items-center">
          <MdCheckCircle className="text-primary text-xl font-bold" /> Form
          study groups to prepare for tech interviews together
        </li>
        <li className="flex gap-3 items-center">
          <MdCheckCircle className="text-primary text-xl font-bold" />{" "}
          Collaborate on side projects and build your portfolios
        </li>
        <li className="flex gap-3 items-center">
          <MdCheckCircle className="text-primary text-xl font-bold" /> Get
          mentorship and advice from more senior locals
        </li>
        <li className="flex gap-3 items-center">
          <MdCheckCircle className="text-primary text-xl font-bold" /> Find
          like-minded souls to grab coffee or have lunch with
        </li>
        <li className="flex gap-3 items-center">
          <MdCheckCircle className="text-primary text-xl font-bold" />
          Attend local meetups and events together for an instant social circle
        </li>
      </ul>
    </section>
  );
};

export default Benefits;
