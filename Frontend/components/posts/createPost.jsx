"use client";

import Modal from "../myUI/modal";
import PostForm from "./postForm";

const CreatePost = ({ userId }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Modal
      trigerText={"Create Post"}
      title={"Create Post"}
      size={"2xl"}
      loading={loading}
    >
      <PostForm userId={userId} type={"Create"} setLoading={setLoading} />
    </Modal>
  );
};

export default CreatePost;
