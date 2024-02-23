"use client";

import Image from "next/image";
import PostAvatar from "./postAvatar";
import {
  Bookmark,
  LucideMessageCircle,
  MoveDownIcon,
  MoveUpIcon,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";
import {
  bookmarkPost,
  downvotePost,
  unbookmarkPost,
  upvotePost,
} from "@/lib/actions/posts.actions";
import { useState } from "react";
import { MdBookmarkAdded } from "react-icons/md";
import { cn } from "@/lib/utils";
import { SpinnerCircular } from "spinners-react";
import CommentForm from "../community/forum/posts/commentForm";

const Post = ({ post }) => {
  const { user, isSignedIn, isLoaded } = useUser();
  const [isPostBookmarked, setIsPostBookmarked] = useState(
    post?.bookmarks?.includes(user?.publicMetadata?.userId) || false
  );
  const [isCommenting, setIsCommenting] = useState(false);
  const upvotes = post?.votes?.filter((vote) => vote.voteType === "upvote");
  const downvotes = post?.votes?.filter((vote) => vote.voteType === "downvote");
  const { toast } = useToast();

  const handleBookMarkPost = async () => {
    if (isSignedIn) {
      if (post?.bookmarks?.includes(user.publicMetadata.userId)) {
        return;
      } else {
        try {
          await bookmarkPost({
            postId: post?._id,
            userId: user.publicMetadata.userId,
          });
          setIsPostBookmarked(true);
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Oops! Something went wrong",
            description: "Failed to bookmark. Please try again.",
          });
        }
      }
    }
  };

  const handleUnBookmarkPost = async () => {
    if (isSignedIn) {
      try {
        await unbookmarkPost({
          postId: post?._id,
          userId: user.publicMetadata.userId,
        });
        setIsPostBookmarked(false);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Oops! Something went wrong",
          description: "Failed to unbookmark. Please try again.",
        });
      }
    }
  };

  const handleUpvotePost = async () => {
    if (isSignedIn) {
      try {
        await upvotePost({
          postId: post?._id,
          userId: user.publicMetadata.userId,
          voteType: "upvote",
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Oops! Something went wrong",
          description: `Failed to upvote. ${error.message}`,
        });
      }
    }
  };

  const handleDownvotePost = async () => {
    if (isSignedIn) {
      try {
        await downvotePost({
          postId: post?._id,
          userId: user.publicMetadata.userId,
          voteType: "downvote",
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Oops! Something went wrong",
          description: `Failed to downvote: ${error.message}`,
        });
      }
    }
  };

  if (!isLoaded) return <SpinnerCircular color="#1F63ED" />;

  return (
    <article className="w-full max-h-[400px]rounded-lg shadow-md p-4 mb-4">
      <Link href={`/profile/${post?.author?.clerkId}`}>
        <div className="flex items-center space-x-2">
          <PostAvatar avatar={post?.author?.profilePicture} />
          <p>
            {post?.author?.firstName} {post?.author?.lastName}{" "}
            <span className="text-muted dark:text-background/65">
              @{post?.author?.username}
            </span>
          </p>
        </div>
      </Link>
      <Link href={`/posts/${post?._id}`} className="w-full">
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
        {post?.media && (
          <div className="h-[200px] md:h-[250px] w-full rounded-lg">
            <Image
              src={post.media}
              alt="post"
              height={500}
              width={500}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        )}
      </Link>
      <div className="flex items-center justify-between gap-4 w-full mt-4">
        <div className="flex justify-start gap-3 md:gap-4 items-center w-full">
          <p className="text-primary/60 dark:text-background/60 flex gap-[0.1rem] items-center">
            <LucideMessageCircle
              size={24}
              className="cursor-pointer"
              onClick={() => setIsCommenting(true)}
            />
            {post?.comments?.length || ""}
          </p>
          <p className="text-primary/60 dark:text-background/60 flex gap-[0.1rem] items-center">
            {upvotes?.filter(
              (vote) => vote.user === user?.publicMetadata?.userId
            )?.length ? (
              <MoveUpIcon
                className={cn(
                  "cursor-pointer text-secondary text-xs font-bold"
                )}
                onClick={handleUpvotePost}
                size={18}
              />
            ) : (
              <MoveUpIcon
                className={cn(
                  "cursor-pointer text-primary/60 dark:text-background/60 text-xs font-bold"
                )}
                onClick={handleUpvotePost}
                size={18}
              />
            )}{" "}
            {upvotes?.length || ""}
          </p>
          <p className="text-primary/60 dark:text-background/60 flex gap-[0.1rem] items-center">
            {downvotes?.filter(
              (vote) => vote.user === user?.publicMetadata?.userId
            )?.length ? (
              <MoveDownIcon
                className={cn(
                  "cursor-pointer text-red-400/60 text-xs font-bold"
                )}
                onClick={handleDownvotePost}
                size={18}
              />
            ) : (
              <MoveDownIcon
                className={cn(
                  "cursor-pointer text-primary/60 dark:text-background/60 text-xs font-bold"
                )}
                onClick={handleDownvotePost}
                size={18}
              />
            )}{" "}
            {downvotes?.length || ""}
          </p>
        </div>
        <div className="flex justify-start gap-8 items-center">
          {isPostBookmarked ? (
            <button
              className="flex gap-2 items-center text-primary/60 dark:text-background/60"
              onClick={handleUnBookmarkPost}
            >
              <MdBookmarkAdded className="text-secondary/80 text-3xl cursor-pointer" />
            </button>
          ) : (
            <button
              className="flex gap-2 items-center text-primary/60 dark:text-background/60"
              onClick={handleBookMarkPost}
            >
              <Bookmark className="text-primary/60 dark:text-background/60 text-3xl cursor-pointer" />
            </button>
          )}
          <button className="flex gap-2 items-center text-primary/60 dark:text-background/60">
            <Share2 className="text-primary/60 dark:text-background/60 text-3xl cursor-pointer" />
          </button>
        </div>
      </div>
      {isCommenting && (
        <CommentForm
          user={user}
          postId={post?._id}
          setCommenting={setIsCommenting}
        />
      )}
    </article>
  );
};

export default Post;
