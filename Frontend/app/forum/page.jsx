import PostsList from "@/components/profile/postsList";
import { getAllPosts } from "@/lib/actions/posts.actions";
import { currentUser } from "@clerk/nextjs";

const Forum = async () => {
  const user = await currentUser();
  const posts = await getAllPosts();
  return (
    <div className="w-full flex flex-col gap-4 pt-24">
      <PostsList posts={posts} isCurrentUser={false} user={user} />
    </div>
  );
};

export default Forum;
