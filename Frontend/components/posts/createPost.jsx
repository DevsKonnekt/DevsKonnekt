import Modal from "../myUI/modal";
import PostForm from "./postForm";

const CreatePost = ({ userId }) => {
  return (
    <Modal trigerText={"Create Post"} title={"Create Post"} size={"2xl"}>
      <PostForm userId={userId} type={"Create"} />
    </Modal>
  );
};

export default CreatePost;
