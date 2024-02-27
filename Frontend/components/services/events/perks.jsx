import { eventsPerks } from "@/constants";
import React from "react";
import PerkCard from "./perkCard";

const Perks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {eventsPerks.map((perk) => (
        <PerkCard key={perk.heading} {...perk} />
      ))}
    </div>
  );
};

export default Perks;
