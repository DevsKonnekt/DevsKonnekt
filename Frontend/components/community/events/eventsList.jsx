"use client";

import { useInView } from "react-intersection-observer";
import { SpinnerCircular } from "spinners-react";
import EventCard from "./eventCard";
import { getEvents } from "@/lib/actions/events.actions";
import { revalidatePath } from "next/cache";
import { useEffect, useState } from "react";

const EventsList = ({
  initialEvents,
  userId,
  search,
  sortField,
  sortOrder,
}) => {
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState(initialEvents);
  const [loading, setLoading] = useState(events.length === 10);
  const { ref, inView } = useInView();

  async function loadMoreEvents() {
    const next = page + 1;
    const newEvents = await getEvents({
      page: next,
      searchParam: search,
      sortField,
      sortOrder,
    });

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
    <div className="w-full">
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
