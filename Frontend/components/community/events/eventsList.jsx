"use client";

import { useInView } from "react-intersection-observer";
import { SpinnerCircular } from "spinners-react";
import EventCard from "./eventCard";
import { getEvents } from "@/lib/actions/events.actions";
import { revalidatePath } from "next/cache";
import { useEffect, useState } from "react";
import { getTicketsByBuyer } from "@/lib/actions/tickets.actions";
import CreateEvent from "./createEvent";
import { PlusIcon } from "lucide-react";

const EventsList = ({
  initialEvents,
  userId,
  search,
  sortField,
  sortOrder,
  type,
}) => {
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState(initialEvents);
  const [loading, setLoading] = useState(events?.length === 10);
  const { ref, inView } = useInView();

  async function loadMoreEvents() {
    const next = page + 1;
    let newEvents;
    if (type === "tickets") {
      const moreTickets = await getTicketsByBuyer({
        page: next,
        buyerId: userId,
      });
      newEvents = moreTickets.map((ticket) => ticket.event);
    } else {
      newEvents = await getEvents({
        page: next,
        searchParam: search,
        sortField,
        sortOrder,
      });
    }

    if (newEvents.length > 0) {
      setPage(next);
      setEvents((prev) => [...(prev?.length > 0 ? prev : []), ...newEvents]);
      revalidatePath("/events");
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (inView && !loading) {
      loadMoreEvents();
    }
  }, [inView]);

  return (
    <div className="w-full relative">
      <div className="absolute w-max bottom-6 right-3 z-10">
        <CreateEvent
          trigger={
            <span className="bg-secondary p-2 rounded-full text-3xl text-background hover:bg-transparent hover:border hover:border-secondary transition-all duration-300 ease-linear hover:text-secondary dark:hover:text-background">
              <PlusIcon className="" />
            </span>
          }
          type={"Create"}
          userId={userId}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard key={event._id} event={event} userId={userId} />
        ))}
      </div>
      <div ref={ref}>
        {loading && (
          <div className="w-full flex justify-center items-center">
            <SpinnerCircular
              size={40}
              thickness={180}
              speed={100}
              color="rgba(0, 0, 0, 0.5)"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsList;
