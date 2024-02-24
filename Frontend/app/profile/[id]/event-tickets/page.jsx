import EventsList from "@/components/community/events/eventsList";
import { getTicketsByBuyer } from "@/lib/actions/tickets.actions";
import { currentUser } from "@clerk/nextjs";

const MyTicketsPage = async () => {
  const user = await currentUser();
  const myTickets = await getTicketsByBuyer({
    buyerId: user?.publicMetadata?.userId,
  });
  if (!myTickets) {
    return <div>No tickets found</div>;
  }
  const eventsBought = myTickets.map((ticket) => ticket.event);
  return (
    <main className="w-full px-4 pt-32">
      <h1 className="text-3xl font-bold my-8">My Tickets</h1>
      <EventsList
        initialEvents={eventsBought}
        type={"tickets"}
        userId={user?.publicMetadata?.userId}
      />
    </main>
  );
};

export default MyTicketsPage;
