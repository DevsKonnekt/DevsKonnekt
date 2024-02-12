import React from "react";
import { Button } from "../ui/button";

const LeftSidebar = () => {
  return (
    <div className="hidden md:flex flex-col gap-4 items-start justify-start p-4 pt-10">
      <div className="w-full p-4 rounded-md">
        <h2 className="text-xl font-semibold text-secondary text-start w-full">
          Upgrade to Premium
        </h2>
        <p className="mt-4 text-sm text-start opacity-55 w-full">
          Upgrade to access all that DevsKonnekt has to offer. Do not be left
          out; market your work like a pro, get personal mentors, and much more.
        </p>
        <Button className="mt-4 text-background secondary-btn">
          Upgrade Now
        </Button>
      </div>
    </div>
  );
};

export default LeftSidebar;
