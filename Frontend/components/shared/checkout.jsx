"use client";

import { getStripe } from "@/lib/utils";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { checkoutOrder } from "@/lib/actions/tickets.actions";
import { useUser } from "@clerk/clerk-react";

getStripe();

const Checkout = ({ event }) => {
  const userData = useUser();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const onCheckout = async () => {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      isFree: event.price === 0,
      price: event.price,
      buyerId: userData.user?.publicMetadata?.userId,
      image: event.imageUrl,
    };
    await checkoutOrder({ order, userClerkId: userData.user?.id });
  };
  return (
    <form action={onCheckout} method="POST">
      <Button
        className="primary-btn !max-w-[150px] sm:!max-w-full"
        role="link"
        size="lg"
      >
        {event.price === 0 ? "Get Ticket" : "Buy Ticket"}
      </Button>
    </form>
  );
};

export default Checkout;
