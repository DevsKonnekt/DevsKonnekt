/* eslint-disable no-undef */
"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import Stripe from "stripe";

export const checkoutOrder = async ({ order, userClerkId }) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  const price = order.isFree ? 0 : Number(order.price) * 100;
  let session;
  try {
    session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: order.eventTitle,
              images: [order.eventImage],
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
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile/${userClerkId}/event-tickets`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/events/${order.eventId}`,
    });
  } catch (error) {
    console.error(error);
  }
  redirect(session.url);
};

export const createTicket = async (order) => {
  try {
    const response = await axios.post(
      `${process.env.BACKEND_URL}/tickets`,
      order,
    );
    return response.data;
  } catch (error) {
    throw new Error(
      typeof error === "string" ? error : error?.response?.data?.message,
    );
  }
};

export const getTicketsByBuyer = async ({ buyerId, page, sortOrder }) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/tickets/buyer/${buyerId}?page=${
        page || 1
      }&sortOrder=${sortOrder || -1}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(
      typeof error === "string" ? error : error?.response?.data?.message,
    );
  }
};
