"use client";

import { Poppins } from "next/font/google";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "../ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import Image from "next/image";
import { useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { BiCamera } from "react-icons/bi";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters long",
  }),
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters long",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters long",
  }),
  bio: z.string().optional(),
  employed: z.boolean(),
  avilableForHire: z.boolean(),
  avilableForCollab: z.boolean(),
  jobTitle: z.string().min(2, {
    message: "Job title must be at least 2 characters long",
  }),
  country: z.string().min(2, {
    message: "Country name must be at least 2 characters long",
  }),
  city: z.string().min(2, {
    message: "City name must be at least 2 characters long",
  }),
  state: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  twitter: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  otherVCS: z.string().optional(),
  website: z.string().optional(),
});

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState(
    "/images/profile/profilePlaceholder.avif"
  );
  const [coverImage, setCoverImage] = useState(
    "/images/profile/coverPlaceholder.avif"
  );
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      bio: "",
      employed: false,
      avilableForHire: false,
      avilableForCollab: false,
      jobTitle: "",
      country: "",
      city: "",
      state: "",
      linkedin: "",
      github: "",
      twitter: "",
      facebook: "",
      instagram: "",
      otherVCS: "",
      website: "",
    },
  });

  function onSubmit(values) {
    const newValues = {
      ...values,
      profileImage,
      coverImage,
    };
    setTimeout(() => {
      console.log(newValues);
      form.reset();
      toast({
        title: "Profile Update",
        description: "Your profile have been supdated successifully ☑️",
        status: "success",
      });
    }, 3000);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-secondary py-2 px-4 rounded-md text-background font-semibold">
          Edit Profile
        </button>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center justify-start md:max-w-3xl w-full max-h-[80vh] shadow-xl shadow-primary rounded-xl mx-auto bg-white overflow-y-scroll no-scrollbar">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={`${poppins.className} flex w-full flex-col gap-4 justify-center items-start`}
          >
            <div className="w-full relative group transition-all delay-300 duration-1000 ease-in-out">
              <div className="h-[150px] md:h-[200px] w-full rounded-lg">
                <Image
                  src={`${
                    coverImage
                      ? coverImage
                      : "/images/profile/coverPlaceholder.avif"
                  }`}
                  alt="cover"
                  height={1080}
                  width={1920}
                  className="object-cover w-full h-full rounded-lg"
                />
                <BiCamera className="absolute top-1/2 right-1/2 text-4xl text-background/50 md:opacity-0 group-hover:opacity-100 cursor-pointer" />
              </div>
              <div className="absolute bottom-[-50px] left-0 px-4 w-full flex items-start gap-4">
                <Avatar className="h-[100px] w-[100px] border-4 border-secondary/50 shadow-md block relative group">
                  <AvatarImage
                    src={
                      profileImage
                        ? profileImage
                        : "/images/profile/profilePlaceholder.avif"
                    }
                    alt="avatar"
                    height={300}
                    width={300}
                    className="object-cover"
                  />
                  <BiCamera className="absolute top-1/3 right-1/3 text-4xl text-background/50 md:opacity-0 group-hover:opacity-100 cursor-pointer" />
                </Avatar>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-10 w-full">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="!w-full">
                    <FormLabel>First Name:</FormLabel>
                    <FormControl>
                      <Input
                        id="firstName"
                        {...field}
                        placeholder="John"
                        type="text"
                        className="input !w-full"
                      />
                    </FormControl>
                    <FormDescription className="hidden">
                      This is the first name you used to sign up for your
                      Devskonnekt account.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="!w-full">
                    <FormLabel>Last Name:</FormLabel>
                    <FormControl>
                      <Input
                        id="lastName"
                        {...field}
                        placeholder="Doe"
                        type="text"
                        className="input !w-full"
                      />
                    </FormControl>
                    <FormDescription className="hidden">
                      This is the last name you used to sign up for your
                      Devskonnekt account.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="!w-full">
                    <FormLabel>Username:</FormLabel>
                    <FormControl>
                      <Input
                        id="username"
                        {...field}
                        placeholder="johndoe"
                        type="text"
                        className="input !w-full"
                      />
                    </FormControl>
                    <FormDescription className="hidden">
                      This is the username you used to sign up for your
                      Devskonnekt account.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem className="!w-full">
                    <FormLabel>Bio:</FormLabel>
                    <FormControl>
                      <Textarea
                        id="bio"
                        {...field}
                        placeholder="I am a fullstack developer"
                        type="text"
                        className="input !w-full"
                      />
                    </FormControl>
                    <FormDescription className="hidden">
                      This is the bio you used to sign up for your Devskonnekt
                      account.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <FormField
                control={form.control}
                name="employed"
                render={({ field }) => (
                  <FormItem className="flex flex-1 flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="employed"
                        name="employed"
                        {...field}
                      />
                    </FormControl>
                    <FormLabel>Employed</FormLabel>
                    <FormDescription className="hidden">
                      Update with your current employment status.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem className="!w-full flex-1">
                    <FormLabel>Job Title:</FormLabel>
                    <FormControl>
                      <Input
                        id="jobTitle"
                        disabled={!form.getValues("employed")}
                        {...field}
                        placeholder="Fullstack Developer"
                        type="text"
                        className="input !w-full"
                      />
                    </FormControl>
                    <FormDescription className="hidden">
                      This is the job title you used to sign up for your
                      Devskonnekt account.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <FormField
                control={form.control}
                name="avilableForHire"
                render={({ field }) => (
                  <FormItem className="flex flex-1 flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="availableForHire"
                        name="availableForHire"
                      />
                    </FormControl>
                    <FormLabel>Available for Hire</FormLabel>
                    <FormDescription className="hidden">
                      Update with your availability for hire status.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="avilableForCollab"
                render={({ field }) => (
                  <FormItem className="flex flex-row flex-1 items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="availableForCollab"
                        name="availableForCollab"
                      />
                    </FormControl>
                    <FormLabel>Available for Collaboration</FormLabel>
                    <FormDescription className="hidden">
                      Update with your current availability for collaboration
                      status.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="!w-full">
                    <FormLabel>Country:</FormLabel>
                    <FormControl>
                      <Input
                        id="country"
                        {...field}
                        placeholder="Nigeria"
                        type="text"
                        className="input !w-full"
                      />
                    </FormControl>
                    <FormDescription className="hidden">
                      This is the country you used to sign up for your
                      Devskonnekt account.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="!w-full">
                    <FormLabel>City:</FormLabel>
                    <FormControl>
                      <Input
                        id="city"
                        {...field}
                        placeholder="Lagos"
                        type="text"
                        className="input !w-full"
                      />
                    </FormControl>
                    <FormDescription className="hidden">
                      This is the city you used to sign up for your Devskonnekt
                      account.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="!w-full">
                    <FormLabel>State:</FormLabel>
                    <FormControl>
                      <Input
                        id="state"
                        {...field}
                        placeholder="Lagos"
                        type="text"
                        className="input !w-full"
                      />
                    </FormControl>
                    <FormDescription className="hidden">
                      This is the state you used to sign up for your Devskonnekt
                      account.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem className="!w-full">
                    <FormLabel>GitHub:</FormLabel>
                    <FormControl>
                      <Input
                        id="github"
                        {...field}
                        placeholder="https://github.com/johndoe"
                        type="url"
                        className="input !w-full"
                      />
                    </FormControl>
                    <FormDescription className="hidden">
                      This is your GitHub profile link.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="otherVCS"
                render={({ field }) => (
                  <FormItem className="!w-full">
                    <FormLabel>Other VCS:</FormLabel>
                    <FormControl>
                      <Input
                        id="otherVCS"
                        {...field}
                        placeholder="https://"
                        type="url"
                        className="input !w-full"
                      />
                    </FormControl>
                    <FormDescription className="hidden">
                      This is your other VCS if you are not using GitHub.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem className="!w-full">
                    <FormLabel>LinkedIn:</FormLabel>
                    <FormControl>
                      <Input
                        id="linkedin"
                        {...field}
                        placeholder="https://www.linkedin.com/in/johndoe"
                        type="url"
                        className="input !w-full"
                      />
                    </FormControl>
                    <FormDescription className="hidden">
                      This is your LinkedIn profile link.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem className="!w-full">
                    <FormLabel>Twitter:</FormLabel>
                    <FormControl>
                      <Input
                        id="twitter"
                        {...field}
                        placeholder="https://twitter.com/johndoe"
                        type="url"
                        className="input !w-full"
                      />
                    </FormControl>
                    <FormDescription className="hidden">
                      This is your Twitter profile link.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <FormField
                control={form.control}
                name="facebook"
                render={({ field }) => (
                  <FormItem className="!w-full">
                    <FormLabel>Facebook:</FormLabel>
                    <FormControl>
                      <Input
                        id="facebook"
                        {...field}
                        placeholder="https://www.facebook.com/johndoe"
                        type="url"
                        className="input !w-full"
                      />
                    </FormControl>
                    <FormDescription className="hidden">
                      This is your Facebook profile link.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="instagram"
                render={({ field }) => (
                  <FormItem className="!w-full">
                    <FormLabel>Instagram:</FormLabel>
                    <FormControl>
                      <Input
                        id="instagram"
                        {...field}
                        placeholder="https://www.instagram.com/johndoe"
                        type="url"
                        className="input !w-full"
                      />
                    </FormControl>
                    <FormDescription className="hidden">
                      This is your Instagram profile link.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Website:</FormLabel>
                    <FormControl>
                      <Input
                        id="website"
                        {...field}
                        placeholder="https://johndoe.com"
                        type="url"
                        className="input !w-full"
                      />
                    </FormControl>
                    <FormDescription className="hidden">
                      This is your personal website link.
                    </FormDescription>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="primary-btn disabled:cursor-not-allowed disabled:bg-gray-500 self-end"
            >
              Save Changes
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;
