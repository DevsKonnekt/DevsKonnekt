import Link from "next/link";

const NoTickets = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-center">
        You currently don&apos;t have any tickets
      </h1>
      <p className="text-center">
        Explore available events and buy tickets to attend.
      </p>
      <Link href={"/events"} className="primary-btn">
        Explore Events
      </Link>
    </div>
  );
};

export default NoTickets;
