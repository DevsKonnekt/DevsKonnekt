"use client";
import React from "react";
import { FaArrowDown} from "react-icons/fa";

const MovingSection = () => {
  return (
    <>
    <section className="moving-text-section mt-4 mb-8">
      <div className="container">
        <h2 className="moving-text text-blue-500 text-2xl font-bold">
          <span>
            <FaArrowDown className="star text-blue-500" /> Ignite Your Creativity.{" "}
            <FaArrowDown className="star text-blue-500" />
            
          </span>
          <span className="spacer"></span>
          <span>
            <FaArrowDown className="star text-blue-500" /> Unleash Your Connectivity{" "}
            <FaArrowDown className="star text-blue-500" />
          </span>
          <span className="spacer"></span>
          <span>
            <FaArrowDown className="star text-blue-500" /> Experience The Magic{" "}
            <FaArrowDown className="star text-blue-500" />
          </span>
          <span className="spacer"></span>
          <span>
            <FaArrowDown className="star text-blue-500" /> Ignite Your Creativity.{" "}
            <FaArrowDown className="star text-blue-500" />
          </span>
          <span className="spacer"></span>
          <span>
            <FaArrowDown className="star text-blue-500" /> Unleash Your Connectivity{" "}
            <FaArrowDown className="star text-blue-500" />
          </span>
          <span className="spacer"></span>
          <span>
            <FaArrowDown className="star text-blue-500" /> Experience The Magic{" "}
            <FaArrowDown className="star text-blue-500" />
          </span>
        </h2>
      </div>
      <div
          style={{
            content: "",
            display: "block",
            borderBottom: "2px solid gray",
            marginTop: "1rem",
          }}
        ></div>
    </section>
    <br/><br/>
    </>
  );
};

export default MovingSection;