"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";

export const checkoutOrder = async (order) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  const price = order.isFree ? 0 : Nember(order.price) * 100;
  let session;
  try {
    session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: order.eventTitle,
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      metadata: {
        eventId: order.eventId,
        buyerId: order.buyerId,
      },
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/events`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/events/${order.eventId}`,
    });
  } catch (error) {
    console.error(error);
  }
  redirect(session.url);
};
