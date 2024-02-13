import { auth } from "@clerk/nextjs";
import CreatePost from "../posts/createPost";
import Post from "../profile/post";

const ForumPostsList = ({ posts, user }) => {
  const { userId } = auth();
  return (
    <div className="w-full flex flex-col gap-4 lg:mt-16 md:px-4">
      {userId && (
        <div className="w-max fixed right-4 bottom-4">
          <CreatePost userId={user.publicMetadata.userId} />
        </div>
      )}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default ForumPostsList;
