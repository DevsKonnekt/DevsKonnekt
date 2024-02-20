import EventForm from "@/components/community/events/eventForm";
import { currentUser } from "@clerk/nextjs";

const EventsPage = async () => {
  const user = await currentUser();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <EventForm type="Create" userId={user?.publicMetadata?.userId} />
    </div>
  );
};

export default EventsPage;
