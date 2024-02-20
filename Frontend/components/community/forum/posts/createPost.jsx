"use client";

import { useState } from "react";
import Modal from "../../../myUI/modal";
import PostForm from "./postForm";
import { PlusIcon } from "lucide-react";

const CreatePost = ({ userId }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Modal
      trigerText={<PlusIcon size={24} />}
      triggerClassName={
        "bg-secondary text-background hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer p-2 rounded-full w-max"
      }
      title={"Create Post"}
      size={"2xl"}
      loading={loading}
    >
      <PostForm
        userId={userId}
        type={"Create"}
        setLoading={setLoading}
        loading={loading}
      />
    </Modal>
  );
};

export default CreatePost;
