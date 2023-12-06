import Image from "next/image";
import { BiComment, BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { FaRegBookmark, FaRegShareSquare } from "react-icons/fa";
import PostAvatar from "./postAvatar";

const Post = ({ posts }) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-4 lg:mt-16 md:px-4">
      <h1 className="hidden lg:block text-2xl text-primary font-bold">Posts</h1>
      {posts.map((post) => (
        <article
          className="w-full rounded-lg shadow-md bg-background p-4 mb-4"
          key={post.id}
        >
          <div className="flex items-center space-x-2">
            <PostAvatar avatar={post?.author?.avatar} />
            <h2 className="text-lg md:text-xl text-primary font-bold">{post.title}</h2>
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
          <div className="md:h-[300px] w-full rounded-lg">
            <Image
              src={post.image}
              alt="post"
              height={1080}
              width={1920}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="flex items-center justify-between gap-4 w-full mt-4">
            <div className="flex justify-start gap-1 md:gap-4 items-center w-full">
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
                <span className="hidden md:inline">Save</span>
              </button>
              <button className="flex gap-2 items-center text-primary/60">
                <FaRegShareSquare className="text-primary/60 text-3xl" />
                <span className="hidden md:inline">Share</span>
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Post;
