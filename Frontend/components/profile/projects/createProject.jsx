"use client";

import Modal from "@/components/myUI/modal";
import { useState } from "react";
import ProjectForm from "./projectForm";
import { GitBranchPlusIcon } from "lucide-react";

const CreateProject = ({ userId }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Modal
      trigerText={<GitBranchPlusIcon size={24} />}
      triggerClassName={
        "bg-secondary text-background hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer p-2 rounded-full"
      }
      title={"Create Project"}
      size={"2xl"}
      loading={loading}
    >
      <ProjectForm
        userId={userId}
        type={"Create"}
        setLoading={setLoading}
        loading={loading}
      />
    </Modal>
  );
};

export default CreateProject;
