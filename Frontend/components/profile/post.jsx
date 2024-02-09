import Image from "next/image";
import PostAvatar from "./postAvatar";
import {
  ArrowBigDownIcon,
  ArrowBigUp,
  Bookmark,
  LucideMessageCircle,
  MoveDownIcon,
  MoveUpIcon,
  Share2,
} from "lucide-react";

const Post = ({ post }) => {
  return (
    <article className="w-full max-h-[400px]rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center space-x-2">
        <PostAvatar avatar={post?.author?.profilePicture} />
        <p>
          {post?.author?.firstName} {post?.author?.lastName}{" "}
          <span className="text-muted dark:text-background/65">
            @{post?.author?.username}
          </span>
        </p>
      </div>
      <div className="flex items-center space-x-2 my-2">
        <p className="text-sm font-thin">
          {new Date(post?.createdAt)?.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <h2 className="text-lg md:text-xl font-bold mb-2">{post?.title}</h2>
      <p className="text-primary/80 dark:text-background/80 line-clamp-5 mb-1">
        {post?.body}
      </p>
      <div className="h-[200px] md:h-[250px] w-full rounded-lg">
        <Image
          src={post?.media}
          alt="post"
          height={500}
          width={500}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between gap-4 w-full mt-4">
        <div className="flex justify-start gap-3 md:gap-4 items-center w-full">
          <p className="text-primary/60 dark:text-background/60 flex gap-[0.1rem] items-center">
            <LucideMessageCircle className="text-3xl cursor-pointer" />
            {post?.comments?.length || ""}
          </p>
          <p className="text-primary/60 dark:text-background/60 flex gap-[0.1rem] items-center">
            <MoveUpIcon className="text-secondary text-3xl cursor-pointer" />{" "}
            {post?.votes?.upvotes || ""}
          </p>
          <p className="text-primary/60 dark:text-background/60 flex gap-[0.1rem] items-center">
            <MoveDownIcon className=" text-3xl cursor-pointer" />{" "}
            {post?.votes?.downvotes || ""}
          </p>
        </div>
        <div className="flex justify-start gap-8 items-center">
          <button className="flex gap-2 items-center text-primary/60 dark:text-background/60">
            <Bookmark className="text-primary/60 dark:text-background/60 text-3xl cursor-pointer" />
          </button>
          <button className="flex gap-2 items-center text-primary/60 dark:text-background/60">
            <Share2 className="text-primary/60 dark:text-background/60 text-3xl cursor-pointer" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Post;
