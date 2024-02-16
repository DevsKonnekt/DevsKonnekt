"use client";

import {
  Bookmark,
  LucideMessageCircle,
  MoveDownIcon,
  MoveUpIcon,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { MdBookmarkAdded } from "react-icons/md";
import { cn } from "@/lib/utils";
import { SpinnerCircular } from "spinners-react";
import CommentForm from "./commentForm";
import PostAvatar from "../profile/postAvatar";
import { useToast } from "../ui/use-toast";
import CommentsList from "./commentsList";

const CommentDetail = ({ comment }) => {
  const { user, isSignedIn, isLoaded } = useUser();
  const [isCommentBookmarked, setIsCommentBookmarked] = useState(
    comment?.bookmarks?.includes(user?.publicMetadata?.userId) || false
  );
  const [isCommenting, setIsCommenting] = useState(false);
  const upvotes = comment?.votes?.filter((vote) => vote.voteType === "upvote");
  const downvotes = comment?.votes?.filter(
    (vote) => vote.voteType === "downvote"
  );
  const { toast } = useToast();

  const handleBookMarkComment = async () => {
    if (isSignedIn) {
      if (comment?.bookmarks?.includes(user.publicMetadata.userId)) {
        return;
      } else {
        try {
          await bookmarkComment({
            commentId: comment?._id,
            userId: user.publicMetadata.userId,
          });
          setIsCommentBookmarked(true);
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

  const handleUnBookmarkComment = async () => {
    if (isSignedIn) {
      try {
        await unbookmarkComment({
          commentId: comment?._id,
          userId: user.publicMetadata.userId,
        });
        setIsCommentBookmarked(false);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Oops! Something went wrong",
          description: "Failed to unbookmark. Please try again.",
        });
      }
    }
  };

  const handleUpvoteComment = async () => {
    if (isSignedIn) {
      try {
        await upvoteComment({
          commentId: comment?._id,
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

  const handleDownvoteComment = async () => {
    if (isSignedIn) {
      try {
        await downvoteComment({
          commentId: comment?._id,
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
    <article className={cn("w-full max-h-[400px] rounded-lg p-4 mb-4")}>
      <Link href={`/profile/${comment?.author?.clerkId}`} className="w-full">
        <div className="flex items-center space-x-2">
          <PostAvatar avatar={comment?.author?.profilePicture} />
          <p>
            {comment?.author?.firstName} {comment?.author?.lastName}{" "}
            <span className="text-muted dark:text-background/65">
              @{comment?.author?.username}
            </span>
          </p>
        </div>
      </Link>
      <div className="flex items-center space-x-2">
        <p className="text-sm font-thin">
          {new Date(comment?.createdAt)?.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <p className="text-primary/80 dark:text-background/80 line-clamp-5 mb-1">
        {comment?.body}
      </p>
      <div className="flex items-center justify-between gap-4 w-full mt-4">
        <div className="flex justify-start gap-3 md:gap-4 items-center w-full">
          <p className="text-primary/60 dark:text-background/60 flex gap-[0.1rem] items-center">
            <LucideMessageCircle
              size={24}
              className="cursor-pointer"
              onClick={() => setIsCommenting(true)}
            />
            {comment?.comments?.length || ""}
          </p>
          <p className="text-primary/60 dark:text-background/60 flex gap-[0.1rem] items-center">
            {upvotes?.filter(
              (vote) => vote.user === user?.publicMetadata?.userId
            )?.length ? (
              <MoveUpIcon
                className={cn(
                  "cursor-pointer text-secondary text-xs font-bold"
                )}
                onClick={handleUpvoteComment}
                size={18}
              />
            ) : (
              <MoveUpIcon
                className={cn(
                  "cursor-pointer text-primary/60 dark:text-background/60 text-xs font-bold"
                )}
                onClick={handleUpvoteComment}
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
                onClick={handleDownvoteComment}
                size={18}
              />
            ) : (
              <MoveDownIcon
                className={cn(
                  "cursor-pointer text-primary/60 dark:text-background/60 text-xs font-bold"
                )}
                onClick={handleDownvoteComment}
                size={18}
              />
            )}{" "}
            {downvotes?.length || ""}
          </p>
        </div>
        <div className="flex justify-start gap-8 items-center">
          {isCommentBookmarked ? (
            <button
              className="flex gap-2 items-center text-primary/60 dark:text-background/60"
              onClick={handleUnBookmarkComment}
            >
              <MdBookmarkAdded className="text-secondary/80 text-3xl cursor-pointer" />
            </button>
          ) : (
            <button
              className="flex gap-2 items-center text-primary/60 dark:text-background/60"
              onClick={handleBookMarkComment}
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
          postId={comment?._id}
          setCommenting={setIsCommenting}
        />
      )}
      {comment?.comments?.length > 0 && (
        <CommentsList comments={comment.comments} />
      )}
    </article>
  );
};

export default CommentDetail;
