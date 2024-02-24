import { SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import Checkout from "./checkout";
import { Button } from "../ui/button";

const CheckoutButton = ({ event }) => {
  const hasEventEnded = new Date(event?.endDate) < new Date();
  return (
    <div className="flex items-center justify-start">
      {hasEventEnded ? (
        <p className="p-2 text-red-400">
          Sorry, tickets are no longer available
        </p>
      ) : (
        <>
          <SignedIn>
            <Checkout event={event} />
          </SignedIn>
          <SignedOut>
            <SignIn mode="modal">
              <Button className="primary-btn !max-w-[150px] sm:!max-w-full">
                Get Tickets
              </Button>
            </SignIn>
          </SignedOut>
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
