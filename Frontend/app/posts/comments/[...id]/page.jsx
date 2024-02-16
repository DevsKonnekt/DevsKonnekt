import CommentDetail from "@/components/posts/commentDetail";
import Post from "@/components/profile/post";
import { getPostsByUser } from "@/lib/actions/posts.actions";

const CommentDetailPage = async ({ params }) => {
  const { id } = params;
  const comment = await getCommentById(id);
  if (!comment) {
    return <div>Comment not found</div>;
  }
  const postsFromSameUser = await getPostsByUser(comment.author._id);
  let filteredPosts = [];
  if (postsFromSameUser) {
    filteredPosts = postsFromSameUser.filter(
      (postsFromSameUser) => postsFromSameUser._id !== post._id
    );
  }
  return (
    <main className="grid lg:grid-cols-3 pt-24 px-4 w-full min-h-screen gap-8 lg:gap-4 mt-8">
      <div className="w-full max-w-xl mx-auto lg:col-span-2">
        <CommentDetail post={post} />
      </div>
      <div className="w-full max-w-xl mx-auto lg:col-span-1">
        <h1 className="text-2xl font-bold">
          More from {comment.author.firstName}
        </h1>
        {filteredPosts?.length > 0 &&
          filteredPosts.map((post) => (
            <Post key={post._id} post={{ ...post, media: null }} />
          ))}
      </div>
    </main>
  );
};

export default CommentDetailPage;
