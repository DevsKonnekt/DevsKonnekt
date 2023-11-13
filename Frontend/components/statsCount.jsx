import React from "react";
import CountUp from "react-countup";

function StatsCount() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      <div className="text-center">
        <div style={{ fontSize: "25px" }} className="font-bold">
          <CountUp start={0} end={5000} duration={3} />
          +
        </div>
        <div className="font-bold mt-2">
          <p>Active members</p>
        </div>
      </div>
      <div className="text-center mb-8 sm:mb-2">
        <div style={{ fontSize: "25px" }} className="font-bold">
          <CountUp start={0} end={300} duration={3} />
          +
        </div>
        <div className="font-bold mt-2">
          <p>Community events organised</p>
        </div>
      </div>
      <div className="text-center">
        <div style={{ fontSize: "25px" }} className="font-bold">
          <CountUp start={0} end={40} duration={3} />
          +
        </div>
        <div className="font-bold mt-2">
          <p>Cities with active developers</p>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 767px) {
          .grid-cols-1 {
            grid-template-columns: 1fr;
          }
          .text-center {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default StatsCount;