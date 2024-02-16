"use client";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { useToast } from "../ui/use-toast";
import { commentOnComment, commentOnPost } from "@/lib/actions/posts.actions";

const CommentForm = ({ user, setCommenting, postId, type }) => {
  const [comment, setComment] = useState("");
  const commentRef = useRef(null);
  const { toast } = useToast();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (commentRef.current && !commentRef.current.contains(event.target)) {
        setCommenting(false);
      }
    };
    if (commentRef?.current)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [commentRef, setCommenting]);

  const handleSubmit = async () => {
    if (!comment) {
      toast({
        title: "Comment cannot be empty",
        description: "Please enter a comment",
        variant: "destructive",
      });
      return;
    }
    setCommenting(false);
    try {
      if (type == "comment") {
        await commentOnComment({
          commentId: postId,
          userId: user.publicMetadata.userId,
          comment,
        });
      } else {
        await commentOnPost({
          postId,
          comment,
          userId: user.publicMetadata.userId,
        });
      }
      toast({
        title: "Comment posted",
        description: "Your comment has been posted successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong",
        description: "Failed to post comment. Please try again.",
      });
    }
  };
  return (
    <div
      ref={commentRef}
      className="px-4 py-2 mb-4 border-b-2 border-primary/60 flex flex-col items-end gap-2 lg:flex-row"
    >
      <TextareaAutosize
        className="textarea"
        placeholder="What's on your mind?"
        autoFocus
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        variant="ghost"
        className="primary-btn !w-max !min-w-max"
        onClick={handleSubmit}
      >
        Post
      </Button>
    </div>
  );
};

export default CommentForm;
