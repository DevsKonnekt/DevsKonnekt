"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { deleteEvent } from "@/lib/actions/events.actions";
import { DeleteIcon, Trash } from "lucide-react";

const ConfirmEventDelete = ({ eventId }) => {
  const { toast } = useToast();
  const handleDeleteEvent = async () => {
    try {
      await deleteEvent({
        path: "/events",
        id: eventId,
      });
      toast({
        description: "Event deleted successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong",
        description:
          "An error occurred while deleting the event. Please try again.",
      });
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="w-max mx-auto">
        <Button variant="ghost" size="sm" className="text-red-500">
          <Trash className="w-8 h-8" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Event</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this event? This action cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              className="primary-btn !bg-red-500"
              type="button"
              onClick={handleDeleteEvent}
            >
              Delete
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmEventDelete;
