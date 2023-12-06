"use client";

import { Poppins } from "next/font/google";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "../ui/use-toast";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const formSchema = z.object({
  email: z
    .string()
    .min(8, {
      message: "Email must be at least 8 characters long",
    })
    .email({
      message: "Invalid email address",
    }),
});

export function ForgotPasswordForm() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values) {
    setTimeout(() => {
      console.log(values);
      form.reset();
      toast({
        title: "Password Reset Link Sent",
        description: "Your password reset link has been sent to your email address ☑️",
        status: "success",
      });
    }, 3000);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm text-secondary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Forgot Password?
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:max-w-4xl w-full md:h-[70dvh] shadow-xl shadow-primary rounded-xl mx-auto bg-white">
          <div className="w-full h-full flex-1 flex flex-col items-start justify-center py-8 px-4">
            <h1 className="text-2xl font-bold text-primary">
              Forgot Your Password?
            </h1>
            <p className="text-primary text-md text-start font-semibold mt-2 mb-6">
              Enter your email and get password reset link.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={`${poppins.className} flex w-full flex-col gap-4 justify-center items-start`}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="!w-full">
                      <FormLabel>Email:</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          {...field}
                          placeholder="johndoe@devskonnekt.com"
                          type="email"
                          className="input !w-full"
                        />
                      </FormControl>
                      <FormDescription className="hidden">
                        This is the email address you used to sign up for your Devskonnekt account.
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
                  Submit
                </Button>
              </form>
            </Form>
          </div>
          <div className="hidden md:flex w-full flex-1 bg-primary/20 rounded-[15px] flex-col items-center justify-center py-8 px-4 m-4">
            <Image
              src="/images/auth.jpeg"
              width={1920}
              height={1080}
              alt="Auth Image"
              className="w-full h-[300px] object-cover rounded-[10px] mb-4"
            />
            <p className="text-center text-primary">
              Everyone makes mistakes... including forgetting passwords. No
              worries! We've got you covered. Reset your password here and
              regain access to your developer account. Let's get you back on
              track!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
