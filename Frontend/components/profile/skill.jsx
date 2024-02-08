"use client";

import { MdClose } from "react-icons/md";

const Skill = ({ profile, skill, deleteSkill }) => {
  const removeSkill = async () => {
    await deleteSkill(profile.user._id, skill._id);
  };
  return (
    <span className="px-2 py-1 bg-primary/10 dark:bg-gray-400 rounded-md text-primary/80 font-medium flex items-center gap-1">
      {skill.name}
      <MdClose className="cursor-pointer" onClick={removeSkill} />
    </span>
  );
};

export default Skill;
