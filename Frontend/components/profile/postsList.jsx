import CreatePost from "../community/forum/posts/createPost";
import Post from "./post";

const PostsList = ({ isCurrentUser, posts, user }) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-4 lg:mt-16 md:px-4">
      {isCurrentUser && (
        <div className="w-max fixed right-4 bottom-4">
          <CreatePost userId={user.publicMetadata.userId} />
        </div>
      )}
      <h1 className="hidden lg:block text-2xl text-primary font-bold">Posts</h1>
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

export default PostsList;
