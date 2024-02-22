import EventCard from "./eventCard";

const EventsList = ({ events, userId }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {events.map((event) => (
        <EventCard key={event._id} event={event} userId={userId} />
      ))}
    </div>
  );
};

export default EventsList;
