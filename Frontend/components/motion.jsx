"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

const MovingTextSection = () => {
  return (
    <section className="moving-text-section bg-blue-950 w-full">
      <div className="container">
        <h2 className="moving-text text-white text-2xl font-bold">
          <span>
            <FaStar className="star" /> Engage. Inspire. Innovate.{" "}
            <FaStar className="star" />
          </span>
          <span className="spacer"></span>
          <span>
            <FaStar className="star" /> Unleash Your Connectivity{" "}
            <FaStar className="star" />
          </span>
          <span className="spacer"></span>
          <span>
            <FaStar className="star" /> Engage. Inspire. Innovate.{" "}
            <FaStar className="star" />
          </span>
          <span className="spacer"></span>
          <span>
            <FaStar className="star" /> Unleash Your Connectivity{" "}
            <FaStar className="star" />
          </span>
        </h2>
      </div>
    </section>
  );
};

export default MovingTextSection;
