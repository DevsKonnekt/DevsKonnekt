"use client";

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "../ui/form";
import FileUploader from "./fileUploader";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useUploadThing } from "@/lib/uploadthing/uploadthing";
import { createPost } from "@/lib/actions/posts.actions";

const formSchema = z.object({
  title: z
    .string()
    .min(10, {
      message: "Title must be at least 10 characters long",
    })
    .max(255, {
      message: "Title must be at most 255 characters long",
    }),
  body: z.string().min(20, {
    message: "Body must be at least 20 characters long",
  }),
  media: z.string().optional(),
  tags: z.string().optional(),
});

const PostForm = ({ userId, type }) => {
  const [files, setFiles] = useState([]);
  const { startUpload } = useUploadThing("imageUploader");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
      tags: "",
    },
  });

  const onSubmit = async (data) => {
    let uploadedMediaUrl = data.media;
    if (files.length) {
      const uploadedMedia = await startUpload(files);
      if (!uploadedMedia) return;
      uploadedMediaUrl = uploadedMedia[0].url;
    }
    if (type === "Create") {
      try {
        const newPost = await createPost({
          post: {
            author: userId,
            title: data.title,
            body: data.body,
            media: uploadedMediaUrl,
            tags: data.tags.split(",").map((tag) => tag.trim()),
          },
          path: "/profile/[...id]/page",
        });
        if (newPost) {
          form.reset();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex items-start justify-start flex-col md:flex-row-reverse space-x-8 w-full max-w-7xl mx-auto px-4 sm:px-0"
      >
        <FormField
          control={form.control}
          name="media"
          render={({ field }) => (
            <FormItem className="w-full md:w-1/2 md:ml-8">
              <FormControl>
                <FileUploader
                  onFieldChange={field.onChange}
                  mediaUrl={field.value}
                  setFiles={setFiles}
                />
              </FormControl>
              <FormDescription>
                {form.formState.errors.media &&
                  form.formState.errors.media?.message}
              </FormDescription>
            </FormItem>
          )}
        />
        <div className="flex flex-col space-y-8 w-full md:w-1/2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Title" className="input" {...field} />
                </FormControl>
                <FormDescription>
                  {form.formState.errors.title &&
                    form.formState.errors.title?.message}
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    rows={10}
                    placeholder="Body"
                    className="input min-h-[200px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {form.formState.errors.body &&
                    form.formState.errors.body?.message}
                </FormDescription>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full sm:min-w-[256px] sm:max-w-[300px] primary-btn self-start"
          >
            Post
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PostForm;
