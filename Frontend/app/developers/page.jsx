"use client";

import LeftSidebar from "@/components/developers/leftSidebar";
import RightSidebar from "@/components/developers/rightSidebar";
import ProfilesList from "@/components/profile/profilesList";
import Search from "@/components/search";
import { getAllProfiles } from "@/lib/actions/profile.actions";
import { useCallback, useEffect, useState } from "react";

const DeveloperProfiles = () => {
  const [developers, setDevelopers] = useState([]);
  const [search, setSearch] = useState("");

  const getDevelopers = useCallback(async () => {
    const allDevelopers = await getAllProfiles();
    setDevelopers(allDevelopers);
  }, []);

  useEffect(() => {
    getDevelopers();
  }, []);

  return (
    <main className="pt-24 px-4 w-full min-h-screen grid md:grid-cols-6 md:gap-4 ">
      <RightSidebar />
      <div className="col-span-4 w-full min-h-screen md:border-x-2 md:border-primary/15 md:px-4">
        <div className="w-full max-w-xl">
          <Search
            search={search}
            setSearch={setSearch}
            getData={getDevelopers}
            setData={setDevelopers}
          />
        </div>
        <ProfilesList profiles={developers} />
      </div>
      <LeftSidebar />
    </main>
  );
};

export default DeveloperProfiles;
