"use client";

import Modal from "@/components/myUI/modal";
import { useState } from "react";
import ProjectForm from "./projectForm";
import { PlusCircleIcon } from "lucide-react";

const CreateProject = ({ userId }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Modal
      trigerText={<PlusCircleIcon size={24} />}
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
