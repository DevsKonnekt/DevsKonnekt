import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const convertFileToUrl = (file) => URL.createObjectURL(file);
