import React from "react";
import CountUp from "react-countup";

function StatsCount() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 my-10">
      <div className="text-center">
        <div style={{ fontSize: "25px" }} className="font-bold">
          <CountUp start={0} end={5000} duration={3} />
          +
        </div>
        <div className="font-bold mt-2">
          <p>Active members</p>
        </div>
      </div>
      <div className="text-center">
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
    </div>
  );
}

export default StatsCount;