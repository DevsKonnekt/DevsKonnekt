"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function Modal({
  trigerText,
  children,
  title,
  description,
  showCloseButton = true,
  actionButtonText,
  onAction,
  className,
  size,
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="primary-btn text-background w-full"
        >
          {trigerText}
        </Button>
      </DialogTrigger>
      <DialogContent
        className={cn(
          "w-full h-[80vh] p-6 flex items-start justify-start flex-col",
          size === "sm"
            ? "max-w-[400px]"
            : size === "md"
            ? "max-w-2xl"
            : size === "lg"
            ? "max-w-3xl"
            : size === "xl"
            ? "max-w-4xl"
            : size === "2xl"
            ? "max-w-5xl"
            : size === "3xl"
            ? "max-w-6xl"
            : "max-w-7xl"
        )}
      >
        <DialogHeader className="w-full ">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className={cn("flex flex-col gap-4 w-full h-full", className)}>
          {children}
        </div>
        <DialogFooter className="self-end justify-self-end w-full">
          {showCloseButton && (
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Close
              </Button>
            </DialogClose>
          )}
          {actionButtonText && (
            <Button
              className="secondary-btn text-background"
              onClick={onAction}
            >
              {actionButtonText}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
