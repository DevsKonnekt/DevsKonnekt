import Stripe from "stripe";
import { createTicket } from "@/lib/actions/tickets.actions";
import { NextResponse } from "next/server";

export async function POST(request) {
  // eslint-disable-next-line no-undef
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = request.headers.get("stripe-signature");
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      await request.text(),
      sig,
      // eslint-disable-next-line no-undef
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    return NextResponse.json({
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
    const newTicket = await createTicket(ticket);
    return NextResponse.json({ message: "OK", ticket: newTicket });
  }

  return new Response("", { status: 200 });
}
