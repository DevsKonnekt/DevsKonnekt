"use client";

import { useState } from "react";
import Modal from "../myUI/modal";
import { Input } from "../ui/input";
import { MdClose } from "react-icons/md";

const AddSkills = () => {
  const [skills, setSkills] = useState(["Frontend", "Backend", "Devops"]);
  const [skill, setSkill] = useState("");
  const [mySkills, setMySkills] = useState(["Frontend"]);
  return (
    <Modal
      trigerText="Add Skills"
      title="Add Skills"
      description="Type your skill name and press enter to add it. You can add multiple skills at once."
      actionButtonText="Save Skills"
      size={"3xl"}
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="skills" className="sr-only">
            My Skills
          </label>
          <div id="skills" className="flex flex-wrap gap-2 w-full mb-1">
            {mySkills.map((sk) => (
              <div
                key={sk}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20"
              >
                <p className="text-primary font-semibold">{sk}</p>
                <button
                  className="text-primary/60"
                  onClick={() => {
                    setMySkills(mySkills.filter((s) => s !== sk));
                  }}
                >
                  <MdClose />
                </button>
              </div>
            ))}
          </div>
          <label htmlFor="skill" className="sr-only">
            Skill Name
          </label>
          <Input
            id="skill"
            placeholder="Start typing..."
            value={skill}
            onChange={(e) => {
              setSkill(e.target.value);
            }}
            className="w-full bg-primary/10 focus:outline-0 focus:ring-0 focus:ring-transparent text-primary font-semibold"
          />
        </div>
        {skills.length > 0 && (
          <div className="flex flex-col gap-2">
            {skills.map((s) => (
              <button
                onClick={() => setMySkills((prev) => [...prev, s])}
                className="w-full block text-start px-4 py-2 focus:outline-0 focus:ring-0 focus:ring-transparent hover:bg-primary/20 transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default AddSkills;
