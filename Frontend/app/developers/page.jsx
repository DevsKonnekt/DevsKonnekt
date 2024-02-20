"use client";

import LeftSidebar from "@/components/community/developers/leftSidebar";
import RightSidebar from "@/components/community/developers/rightSidebar";
import ProfilesList from "@/components/profile/profilesList";
import Search from "@/components/search";
import { getAllProfiles } from "@/lib/actions/profile.actions";
import { useEffect, useState } from "react";

const DeveloperProfiles = () => {
  const [developers, setDevelopers] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getDevelopers() {
      const allDevelopers = await getAllProfiles();
      setDevelopers(allDevelopers);
    }
    const timer = setTimeout(async () => {
      if (search) {
        const newData = await getAllProfiles(search);

        setDevelopers(newData);
      }
    }, 800);
    if (!search) {
      getDevelopers();
    }
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <main className="pt-24 px-4 w-full min-h-screen grid lg:grid-cols-6 md:gap-4 ">
      <RightSidebar />
      <div className="lg:col-span-4 w-full min-h-screen lg:border-x-2 lg:border-primary/15 md:px-4">
        <div className="w-full max-w-xl">
          <Search search={search} setSearch={setSearch} />
        </div>
        {developers && <ProfilesList profiles={developers} />}
      </div>
      <LeftSidebar />
    </main>
  );
};

export default DeveloperProfiles;
