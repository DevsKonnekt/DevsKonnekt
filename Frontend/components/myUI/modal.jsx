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
  triggerClassName,
  size,
  loading,
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className={cn(
            triggerClassName
              ? triggerClassName
              : "primary-btn text-background w-full",
          )}
        >
          {trigerText}
        </Button>
      </DialogTrigger>
      <DialogContent
        className={cn(
          "w-full h-full md:h-[80vh] p-6 flex items-start justify-start flex-col bg-background dark:bg-gray-700 overflow-y-scroll no-scrollbar",
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
                      : "max-w-7xl",
        )}
      >
        <DialogHeader className="w-full ">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div
          className={cn(
            "flex flex-col items-center justify-center gap-4 w-full h-full",
            className,
          )}
        >
          {children}
          <DialogFooter className="self-end justify-self-end w-full gap-4">
            {showCloseButton && (
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-transparent"
                >
                  Close
                </Button>
              </DialogClose>
            )}
            {actionButtonText && (
              <Button
                className="secondary-btn text-background disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading ? true : false}
                onClick={onAction}
              >
                {actionButtonText}
              </Button>
            )}
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
