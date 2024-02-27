import PostDetail from "@/components/community/forum/posts/postDetail";
import Post from "@/components/profile/post";
import PostsList from "@/components/profile/postsList";
import { getPostById, getPostsByUser } from "@/lib/actions/posts.actions";

const PostDetailPage = async ({ params }) => {
  const { id } = params;
  const post = await getPostById(id);
  if (!post) {
    return <div>Post not found</div>;
  }
  const postsFromSameUser = await getPostsByUser(post.author._id);
  let filteredPosts = [];
  if (postsFromSameUser) {
    filteredPosts = postsFromSameUser.filter(
      (postFromSameUser) => postFromSameUser._id !== post._id,
    );
  }
  return (
    <main className="grid lg:grid-cols-3 pt-24 px-4 w-full min-h-screen gap-8 lg:gap-4 mt-8">
      <div className="w-full max-w-xl mx-auto lg:col-span-2">
        <PostDetail post={post} />
      </div>
      <div className="w-full max-w-xl mx-auto lg:col-span-1">
        <h1 className="text-2xl font-bold">
          More from {post.author.firstName}
        </h1>
        {filteredPosts?.length > 0 &&
          filteredPosts.map((post) => (
            <Post key={post._id} post={{ ...post, media: null }} />
          ))}
      </div>
    </main>
  );
};

export default PostDetailPage;
