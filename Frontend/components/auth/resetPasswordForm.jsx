"use client";

import { Poppins } from "next/font/google";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const formSchema = z
  .object({
    newPassword: z.string().min(10, {
      message: "Password must be at least 10 characters long",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword === data.newPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function PasswordResetForm() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });
  function onSubmit(values) {
    setTimeout(() => {
      console.log(values);
      form.reset();
      toast({
        title: "Password Reset",
        description: "Your password has been reset ☑️",
        status: "success",
      });
    }, 3000);
  }

  return (
    <Form
      {...form}
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className={`${poppins.className} flex w-full flex-col gap-4 justify-center items-start`}>
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem className="!w-full">
              <FormLabel>New Password:</FormLabel>
              <FormControl>
                <Input
                  placeholder="New Password"
                  {...field}
                  type="password"
                  className="input !w-full"
                />
              </FormControl>
              <FormDescription className="hidden">
                This is the new password you want to use.
              </FormDescription>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="!w-full">
              <FormLabel>Confirm Password:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Confirm Password"
                  {...field}
                  type="password"
                  className="input !w-full"
                />
              </FormControl>
              <FormDescription className="hidden">
                Confirm your new password.
              </FormDescription>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />
        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="primary-btn !w-full disabled:cursor-not-allowed disabled:bg-gray-500"
        >
          Reset Password
        </Button>
      </form>
    </Form>
  );
}
