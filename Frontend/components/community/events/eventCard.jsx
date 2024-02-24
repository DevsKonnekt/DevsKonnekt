"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { EditIcon } from "lucide-react";
import Image from "next/image";
import ConfirmEventDelete from "./confirmEventDelete";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CreateEvent from "./createEvent";
import { formatDate } from "@/lib/utils";

const EventCard = ({ event, userId }) => {
  return (
    <Card className="w-full sm:max-w-[450px] rounded-lg bg-background dark:bg-gray-700 shadow-sm shadow-secondary p-0 relative group">
      {userId && event.organizer._id === userId && (
        <div className="absolute top-4 right-0 z-22 flex lg:hidden lg:group-hover:flex flex-col gap-4 w-max p-2  rounded-lg">
          <Button
            variant="ghost"
            className="w-max bg-transparent hover:bg-transparent text-secondary"
            size="sm"
          >
            <CreateEvent
              trigger={<EditIcon className="w-8 h-8" />}
              type={"Update"}
              data={event}
              userId={userId}
            />
          </Button>
          <ConfirmEventDelete eventId={event?.id} />
        </div>
      )}
      <Link href={`/events/${event._id}`} className="w-full h-full block">
        <CardHeader className="w-full p-0">
          <Image
            src={event?.imageUrl}
            alt={event?.title}
            width={1920}
            height={1080}
            className="object-cover w-full h-72 rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="text-start px-4 py-2">
          <div className="flex justify-start items-center gap-8 mt-2 mb-4">
            <p className="text-lg font-medium text-secondary bg-secondary/35 p-1 px-2 rounded-full">
              {event.price === 0 ? "Free" : `$${parseFloat(event.price)}`}
            </p>
            <p className="text-lg text-primary text-medium dark:text-background opacity-60">
              {event.category.name}
            </p>
          </div>
          <p className="text-primary dark:text-background opacity-60 mb-4">
            {formatDate(event.startDate)}
          </p>
          <h3 className="text-xl font-semibold text-start">{event.title}</h3>
        </CardContent>
        <CardFooter className="px-4 pb-4">
          <p className="text opacity-90 text-start">
            {event.organizer?.firstName} {event.organizer?.lastName}
          </p>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default EventCard;
