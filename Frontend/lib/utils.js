import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { loadStripe } from "@stripe/stripe-js";
import { format, parse } from "date-fns";

let stripePromise;
export const getStripe = () => {
  if (!stripePromise) {
    // eslint-disable-next-line no-undef
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const convertFileToUrl = (file) => URL.createObjectURL(file);

export const formatDate = (dateString) => {
  const dateObject = parse(
    dateString,
    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
    new Date(),
  );
  dateObject.setHours(
    dateObject.getHours() - dateObject.getTimezoneOffset() / 60,
  );
  return format(dateObject, "EEEE, d MMM yyyy");
};

export const formatTime = (timeString) =>
  new Date(`2024-02-24T${timeString}`).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
