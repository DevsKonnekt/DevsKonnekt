"use client";
import { useState } from "react";
import Project from "./project";
import { BiLogoGit } from "react-icons/bi";

const AsideContent = ({ projects }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col justify-between items-start w-full">
      <h2 className="text-2xl mt-4 text-primary font-semibold mb-4 flex items-center gap-2"><BiLogoGit className="text-secondary" /> Projects</h2>
      <div className="grid grid-cols-1 gap-4 w-full">
        {/* Display first 3 projects, then a button to view more if there are more than 3 */}
        {projects.slice(0, 3).map((project) => (
          <Project key={project.id} project={project} />
        ))}
        {/* Display all projects if showMore is true */}
        {showMore &&
          projects
            .slice(3)
            .map((project) => <Project key={project.id} project={project} />)}
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
