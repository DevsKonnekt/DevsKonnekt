import React from "react";
import Achievements from "./achievements";
import AsideContent from "./asideContent";

const Aside = ({ profile }) => {
  return (
    <aside className="w-full lg:w-[400px] h-full pb-8 lg:px-4 pt-2 border-[0.5px] shadow-lg lg:ml-2 rounded">
      {profile?.achievements && (
        <Achievements achievements={profile.achievements} />
      )}
      {profile?.projects && (
        <AsideContent projects={profile.projects} owner={profile?.user?._id} />
      )}
    </aside>
  );
};

export default Aside;
