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

  // Get the body
  const evt = await req.json();
  console.log(evt);
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
