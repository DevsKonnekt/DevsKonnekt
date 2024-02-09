"use client";
import { useState } from "react";
import Project from "./projects/project";
import { BiLogoGit } from "react-icons/bi";
import CreateProject from "./projects/createProject";

const AsideContent = ({ projects, owner }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col justify-between items-start w-full">
      <div className="flex gap-4 items-center justify-between w-full">
        <h2 className="text-2xl mt-4 text-primary font-semibold mb-4 flex items-center gap-2">
          <BiLogoGit className="text-secondary" /> Projects
        </h2>
        <CreateProject userId={owner} />
      </div>
      <div className="grid grid-cols-1 gap-4 w-full">
        {projects.slice(0, 3).map((project) => (
          <Project key={project._id} project={project} />
        ))}
        {showMore &&
          projects
            .slice(3)
            .map((project) => <Project key={project._id} project={project} />)}
        {projects.length > 3 && (
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="text-secondary font-semibold text-xl text-center"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default AsideContent;
