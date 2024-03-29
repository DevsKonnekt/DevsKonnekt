import EventsList from "@/components/community/events/eventsList";
import NoEvents from "@/components/community/events/noEvents";
import PostsSort from "@/components/community/forum/postsSort";
import Search from "@/components/shared/search";
import { getEvents } from "@/lib/actions/events.actions";
import { currentUser } from "@clerk/nextjs";

const EventsPage = async ({ searchParams }) => {
  const searchParam = searchParams?.search || "";
  const sortOrder = searchParams?.sortOrder || -1;
  const sortField = searchParams?.sortField || "createdAt";

  const user = await currentUser();
  const events = await getEvents({
    searchParam,
    sortField,
    sortOrder,
  });

  if (!events) {
    return <NoEvents user={user} />;
  }
  return (
    <main className="w-full min-h-screen px-4 pt-24">
      <div className="flex gap-4 w-full h-full items-center justify-between my-8">
        <h1 className="text-3xl font-bold text-start w-full hidden sm:block">
          Explore Events
        </h1>
        <div className="w-full flex justify-end items-center gap-4">
          <Search
            search={searchParam}
            field={sortField}
            order={sortOrder}
            path={"events"}
          />
          <PostsSort
            allFields={[
              {
                label: "Date Posted",
                value: "createdAt",
              },
              {
                label: "Name",
                value: "title",
              },
              {
                label: "Start Date",
                value: "startDate",
              },
              {
                label: "End Date",
                value: "endDate",
              },
            ]}
            path={"events"}
            search={searchParam}
            field={sortField}
            order={sortOrder}
          />
        </div>
      </div>
      <EventsList
        userId={user?.publicMetadata?.userId}
        initialEvents={events}
        search={searchParam}
        sortField={sortField}
        sortOrder={sortOrder}
      />
    </main>
  );
};

export default EventsPage;
