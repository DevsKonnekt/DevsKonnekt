import Stripe from "stripe";
import { createTicket } from "@/lib/actions/tickets.actions";
import { NextResponse } from "next/server";

export default async function POST(request) {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = request.headers.get("stripe-signature");
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      await request.text(),
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return NextResponse.json({
      status: 400,
      message: `Webhook Error: ${err.message}`,
    });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const ticket = {
      stripePaymentId: session.id,
      event: session.metadata.eventId,
      buyer: session.metadata.buyerId,
      totalAmount: session.amount_total ? session.amount_total / 100 : 0,
    };
    await createTicket(ticket);
  }

  return {
    status: 200,
    body: "success",
  };
}
