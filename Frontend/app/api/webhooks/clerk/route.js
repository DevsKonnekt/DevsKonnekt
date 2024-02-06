import { Webhook } from "svix";
import { headers } from "next/headers";
import { clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { createUser, deleteUser, updateUser } from "@/lib/actions/user.actions";

export async function POST(req) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const eventType = evt.type;

  const { id, email_addresses, username, first_name, last_name, image_url } =
    evt.data;
  switch (eventType) {
    case "user.created":
      const user = {
        clerkId: id,
        email: email_addresses[0].email_address,
        username,
        firstName: first_name,
        lastName: last_name,
        profilePicture: image_url,
      };
      try {
        const newUser = await createUser(user);
        if (newUser?._id) {
          await clerkClient.users.updateUserMetadata(id, {
            publicMetadata: {
              userId: newUser._id,
            },
          });
        }
        return new NextResponse.json({ message: "Ok", user: newUser });
      } catch (error) {
        return new NextResponse.json({ message: "Error", error });
      }
    case "user.updated":
      try {
        const updatedUser = await updateUser(id, {
          username,
          firstName: first_name,
          lastName: last_name,
          profilePicture: image_url,
        });
        return new NextResponse.json({ message: "Ok", user: updatedUser });
      } catch (error) {
        return new NextResponse.json({ message: "Error", error });
      }
    case "user.deleted":
      try {
        const deletedUser = await deleteUser(id);
        return new NextResponse.json({ message: "Ok", user: deletedUser });
      } catch (error) {
        return new NextResponse.json({ message: "Error", error });
      }
  }
  return new Response("Something is wrong with your request.", { status: 400 });
}
