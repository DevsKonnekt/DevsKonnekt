import EventDetail from "@/components/community/events/eventDetail";
import EventsList from "@/components/community/events/eventsList";
import { getEvent, getEventsByCategory } from "@/lib/actions/events.actions";
import { currentUser } from "@clerk/nextjs";

const EventDetailPage = async ({ params, searchParams }) => {
  const { id } = params;
  const success = searchParams?.success || false;
  const cancelled = searchParams?.cancelled || false;
  const event = await getEvent(id);
  if (!event) {
    return {
      redirect: {
        destination: "/events",
        permanent: false,
      },
    };
  }
  const moreEvents = await getEventsByCategory(event.category._id);
  const relatedEvents = moreEvents.filter((event) => event._id !== id);
  const user = await currentUser();
  return (
    <main className="w-full min-h-screen px-4 pt-32">
      <EventDetail
        event={event}
        user={user}
        success={success}
        cancelled={cancelled}
      />
      <div className="w-full mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-start w-full mb-4">
          Related Events
        </h1>
        <EventsList
          initialEvents={relatedEvents}
          userId={user?.publicMetadata?.userId}
          path={"events"}
          search={""}
          sortField={"createdAt"}
          sortOrder={-1}
        />
      </div>
    </main>
  );
};

export default EventDetailPage;
