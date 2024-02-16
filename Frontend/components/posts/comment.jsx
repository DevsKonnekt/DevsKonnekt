"use client";
import TextareaAutosize from "react-textarea-autosize";
import ResponsiveDialog from "../myUI/responsiveDialog";
import { LucideMessageCircle } from "lucide-react";
import { Button } from "../ui/button";

const Comment = () => {
  return (
    <ResponsiveDialog
      triggerText={
        <LucideMessageCircle className="text-4xl cursor-pointer" size={32} />
      }
      triggerClassName={"p-0 w-max"}
    >
      <div className="px-4 mb-4 border-b-2 border-primary/60">
        <TextareaAutosize
          className="w-full border-none p-2 px-4 resize-none focus:outline-none"
          placeholder="What's on your mind?"
          autoFocus
        />
        <Button className="primary-btn w-full my-4">Comment</Button>
      </div>
    </ResponsiveDialog>
  );
};

export default Comment;
