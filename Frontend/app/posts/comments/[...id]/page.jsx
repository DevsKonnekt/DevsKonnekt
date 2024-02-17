import CommentDetail from "@/components/posts/commentDetail";
import Post from "@/components/profile/post";
import { getCommentById, getPostsByUser } from "@/lib/actions/posts.actions";

const CommentDetailPage = async ({ params }) => {
  const { id } = params;
  let comment, error;
  try {
    comment = await getCommentById(id);
  } catch (err) {
    error = err;
  }
  if (error || !comment) {
    return <div>Comment not found</div>;
  }
  const postsFromSameUser = await getPostsByUser(comment.author._id);

  return (
    <main className="grid lg:grid-cols-3 pt-24 px-4 w-full min-h-screen gap-8 lg:gap-4 mt-8">
      <div className="w-full max-w-xl mx-auto lg:col-span-2">
        <CommentDetail comment={comment} />
      </div>
      <div className="w-full max-w-xl mx-auto lg:col-span-1">
        <h1 className="text-2xl font-bold">
          More from {comment.author.firstName}
        </h1>
        {postsFromSameUser?.length > 0 &&
          postsFromSameUser.map((post) => (
            <Post key={post._id} post={{ ...post, media: null }} />
          ))}
      </div>
    </main>
  );
};

export default CommentDetailPage;
