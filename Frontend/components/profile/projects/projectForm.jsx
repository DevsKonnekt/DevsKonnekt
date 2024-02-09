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
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUploadThing } from "@/lib/uploadthing/uploadthing";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { createProject } from "@/lib/actions/projects.actions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FileUploader from "@/components/posts/fileUploader";

const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Title must be at least 10 characters long",
    })
    .max(255, {
      message: "Title must be at most 255 characters long",
    }),
  description: z
    .string()
    .min(20, {
      message: "Body must be at least 20 characters long",
    })
    .max(2000, {
      message: "Body must be at most 2000 characters long",
    }),
  githubUrl: z.string().url(),
  liveUrl: z.string().url().optional(),
  technologies: z.string().optional(),
  status: z.enum(["In Progress", "Completed", "On Hold"]),
  imageUrls: z.array(z.string().url()).optional(),
});

const ProjectForm = ({ userId, type, setLoading, loading }) => {
  const [files, setFiles] = useState([]);
  const { startUpload } = useUploadThing("imageUploader");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      githubUrl: "https://github.com/",
      liveUrl: "",
      technologies: "",
      status: "Completed",
      imageUrls: [],
    },
  });
  const { toast } = useToast();

  const onSubmit = async (data) => {
    setLoading(true);
    let uploadedImageUrls = data.imageUrls;
    if (files.length) {
      const uploadedImages = await startUpload(files);
      if (!uploadedMedia) return;
      uploadedImageUrls = uploadedImages.map((media) => media.url);
    }
    if (type === "Create") {
      try {
        const newProject = await createProject({
          project: {
            owner: userId,
            name: data.name,
            description: data.description,
            imageUrls: uploadedImageUrls,
            githubUrl: data.githubUrl,
            liveUrl: data.liveUrl,
            technologies: data.technologies
              .split(",")
              .map((tech) => tech.trim()),
            status: data.status,
          },
          path: "/profile/[...id]/page",
        });
        if (newProject) {
          form.reset();
          setLoading(false);
          toast("Project created successfully");
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Oops! Something went wrong",
          description: "Failed to create project. Please try again.",
        });
      }
    }
    setLoading(false);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mx-auto px-4 pt-32 sm:pt-8 md:pt-0 sm:px-0"
      >
        <div className="space-y-4 flex items-center justify-center flex-col w-full">
          <FormField
            control={form.control}
            name="imageUrls"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    mediaUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormDescription>
                  {form.formState.errors.imageUrls &&
                    form.formState.errors.imageUrls?.message}
                </FormDescription>
              </FormItem>
            )}
          />
          <div className="w-full flex flex-col gap-4 sm:flex-row items-start justify-between">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Project Name:</FormLabel>
                  <FormControl>
                    <>
                      <Input
                        placeholder="Enter your project's name"
                        className="input"
                        {...field}
                      />
                      <span
                        className={cn(
                          "text-sm",
                          "text-muted-foreground text-right w-full -mt-2 block",
                          field.value.length > 255 ? "text-red-500" : ""
                        )}
                      >
                        {field.value.length > 0
                          ? `${field.value.length}/255`
                          : ""}
                      </span>
                    </>
                  </FormControl>
                  <FormDescription>
                    {form.formState.errors.name &&
                      form.formState.errors.name?.message}
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Description:</FormLabel>
                  <FormControl>
                    <>
                      <Textarea
                        rows={10}
                        placeholder="Enter your project's description"
                        className="input md:min-h-[200px]"
                        {...field}
                      />
                      <span
                        className={cn(
                          "text-sm",
                          "text-muted-foreground text-right w-full -mt-2 block",
                          field.value.length > 2000 ? "text-red-500" : ""
                        )}
                      >
                        {field.value.length > 0
                          ? `${field.value.length}/2000`
                          : ""}
                      </span>
                    </>
                  </FormControl>
                  <FormDescription>
                    {form.formState.errors.description &&
                      form.formState.errors.description?.message}
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex flex-col gap-4 sm:flex-row items-start justify-between">
            <FormField
              control={form.control}
              name="githubUrl"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Github URL:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your project's github url"
                      className="input"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {form.formState.errors.githubUrl &&
                      form.formState.errors.githubUrl?.message}
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="liveUrl"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Live URL:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. https://example.com/"
                      className="input"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {form.formState.errors.liveUrl &&
                      form.formState.errors.liveUrl?.message}
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex flex-col gap-4 sm:flex-row items-start justify-between">
            <FormField
              control={form.control}
              name="technologies"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Technologies:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. React, Node.js, Express, MongoDB, etc. (comma separated)"
                      className="input"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {form.formState.errors.technologies &&
                      form.formState.errors.technologies?.message}
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Status:</FormLabel>
                  <FormControl>
                    <Select
                      className="input"
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a project status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Project Status</SelectLabel>
                          <SelectItem value="In Progress">
                            In Progress
                          </SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                          <SelectItem value="On Hold">On Hold</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    {form.formState.errors.status &&
                      form.formState.errors.status?.message}
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full sm:min-w-[256px] sm:max-w-[300px] primary-btn self-start disabled:cursor-progress disabled:opacity-50 transition-all duration-500 ease-linear"
          >
            Create
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProjectForm;
