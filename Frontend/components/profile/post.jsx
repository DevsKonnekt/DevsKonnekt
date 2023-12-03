import Image from "next/image";
import { BiComment, BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { FaRegBookmark, FaRegShareSquare } from "react-icons/fa";
import PostAvatar from "./postAvatar";

const Post = ({ posts }) => {
  return (
    <div className="w-[65%] flex flex-col gap-4 mt-16 px-4">
      <h1 className="text-2xl text-primary font-bold">Posts</h1>
      {posts.map((post) => (
        <article
          className="w-full rounded-lg shadow-md bg-background p-4 mb-4"
          key={post.id}
        >
          <div className="flex items-center space-x-2">
            <PostAvatar avatar={post?.author?.avatar} />
            <h2 className="text-xl text-primary font-bold">{post.title}</h2>
          </div>
          <div className="flex items-center space-x-2 my-2">
            <p className="text-primary/60">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <p className="text-primary/80 line-clamp-5">{post.body}</p>
          <div className="h-[300px] w-full rounded-lg">
            <Image
              src={post.image}
              alt="post"
              height={1080}
              width={1920}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex justify-start gap-4 items-center w-full">
              <p className="text-primary/60 flex gap-[0.1rem] items-center">
                <BiComment className="text-primary/60 text-3xl" />
                {post.comments}
              </p>
              <p className="text-primary/60 flex gap-[0.1rem] items-center">
                <BiUpArrowAlt className="text-secondary text-3xl" />{" "}
                {post.votes.upvotes}
              </p>
              <p className="text-primary/60 flex gap-[0.1rem] items-center">
                <BiDownArrowAlt className="text-primary/80  text-3xl" />{" "}
                {post.votes.downvotes}
              </p>
            </div>
            <div className="flex justify-start gap-4 items-center w-full">
              <button className="flex gap-2 items-center text-primary/60">
                <FaRegBookmark className="text-primary/60 text-3xl" />
                Save
              </button>
              <button className="flex gap-2 items-center text-primary/60">
                <FaRegShareSquare className="text-primary/60 text-3xl" />
                Share
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Post;
