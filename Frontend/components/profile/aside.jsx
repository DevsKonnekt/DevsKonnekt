import React from "react";
import Achievements from "./achievements";
import AsideContent from "./asideContent";
import { dummyProjects } from "@/app/profile/[...id]/page";

const Aside = () => {
  return (
    <aside className="w-full lg:w-[400px] h-full pb-8 lg:px-4 pt-2 border-[0.5px] shadow-lg lg:ml-2 rounded">
      <Achievements />
      <AsideContent projects={dummyProjects} />
    </aside>
  );
};

export default Aside;
