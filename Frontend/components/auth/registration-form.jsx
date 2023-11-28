"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AuthModal() {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = React.useState(false);

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleConfirmDelete = () => {
    // Perform the delete action here
    // ...
    setShowDeleteConfirmation(false);
  };

  return (
    <Dialog fixed>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={handleDeleteClick}>
          Delete Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete profile</DialogTitle>
          <DialogDescription>
            {showDeleteConfirmation
              ? "Are you sure you want to delete your profile?"
              : "Make changes to your profile here. Click save when you're done."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Your existing profile fields */}
        </div>
        <DialogFooter>
          {showDeleteConfirmation ? (
            <>
              <Button variant="outline" onClick={handleCancelDelete}>
                Cancel
              </Button>
              <Button onClick={handleConfirmDelete}>Confirm Delete</Button>
            </>
          ) : (
            <Button type="submit">Save changes</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
