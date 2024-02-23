"use client";

import { getStripe } from "@/lib/utils";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { checkoutOrder } from "@/lib/actions/orders.actions";

getStripe();

const Checkout = ({ event, userId, success, cancelled }) => {
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
  success &&
    toast({
      title: "Order Placed",
      description: "Your order has been placed successfully",
      variant: "success",
      dismissable: true,
    });

  cancelled &&
    toast({
      title: "Order Cancelled",
      description: "Your order has been cancelled",
      variant: "destructive",
      dismissable: true,
    });

  const onCheckout = async () => {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      isFree: event.price === 0,
      price: event.price,
      buyerId: userId,
    };
    await checkoutOrder(order);
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
