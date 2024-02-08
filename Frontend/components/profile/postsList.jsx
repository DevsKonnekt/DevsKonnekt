import Post from "./post";

const PostsList = ({ posts }) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-4 lg:mt-16 md:px-4">
      <h1 className="hidden lg:block text-2xl text-primary font-bold">Posts</h1>
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

export default PostsList;
