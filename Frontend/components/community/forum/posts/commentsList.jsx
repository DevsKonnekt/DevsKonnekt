import Comment from "./comment";

const CommentsList = ({ comments }) => {
  return (
    <div className="w-full mt-8">
      <h2 className="text-lg font-bold text-start">Comments</h2>
      <hr className="my-2" />
      <div className="flex flex-col gap-4 mt-2 w-full">
        {comments?.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsList;
