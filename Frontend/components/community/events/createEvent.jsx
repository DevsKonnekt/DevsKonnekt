"use client";
import { useState } from "react";
import EventForm from "./eventForm";

const CreateEvent = ({ data, type, userId, trigger }) => {
  const [open, setOpen] = useState(false);
  return (
    <EventForm
      data={data}
      type={type}
      userId={userId}
      open={open}
      setOpen={setOpen}
      trigger={trigger}
    />
  );
};

export default CreateEvent;
