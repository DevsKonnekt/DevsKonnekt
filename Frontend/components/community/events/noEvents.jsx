"use client";
import SignUpButton from "@/components/signUpButton";
import { useState } from "react";
import EventForm from "./eventForm";

const NoEvents = ({ user }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4 w-full h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-center">No events found</h1>
      <p className="text-center">
        Be the first to create an event or come back later.
      </p>
      {user ? (
        <div className="!w-max rounded-lg primary-btn flex justify-center mt-4">
          <EventForm
            type={"Create"}
            userId={user?.publicMetadata?.userId}
            open={open}
            setOpen={setOpen}
          />
        </div>
      ) : (
        <SignUpButton title={"Get Started"} variant={"secondary"} />
      )}
    </div>
  );
};

export default NoEvents;
