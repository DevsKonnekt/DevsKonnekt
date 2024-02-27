"use client";

import ResponsiveDialog from "@/components/myUI/responsiveDialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TextareaAutosize from "react-textarea-autosize";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { useUploadThing } from "@/lib/uploadthing/uploadthing";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import FileUploader from "../forum/posts/fileUploader";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { createEvent, updateEvent } from "@/lib/actions/events.actions";
import {
  createCategory,
  getCategories,
} from "@/lib/actions/categories.actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const formSchema = z.object({
  title: z
    .string()
    .min(10, {
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
  startDate: z.date().min(new Date(), {
    message: "Start date must be in the future",
  }),
  endDate: z.date(),
  startTime: z.string().min(2, {
    message: "Start time must be at least 2 characters long",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters long",
  }),
  category: z.string(),
  organizer: z.string(),
  imageUrl: z.string().url({ message: "Please upload an image" }),
  status: z.enum(["isPublished", "isDraft", "isCancelled"]),
  isOnline: z.boolean(),
  isFree: z.boolean(),
  capacity: z.string(),
  price: z.string().optional(),
});

const EventForm = ({ type, data, userId, setOpen, open, trigger }) => {
  const [categories, setCategories] = useState([]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const { startUpload } = useUploadThing("imageUploader");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data?.title || "",
      description: data?.description || "",
      startDate: data?.startDate || "",
      endDate: data?.endDate || "",
      startTime: data?.startTime || "",
      location: data?.location || "",
      category: data?.category?._id || "",
      organizer: data?.organizer?._id || userId,
      imageUrl: data?.imageUrl || "",
      status: data?.status || "isPublished",
      isOnline: data?.isOnline || false,
      isFree: data?.isFree || false,
      price: data?.price || "",
      capacity: data?.capacity || "",
    },
  });
  const eventId = data?._id || null;
  const { toast } = useToast();

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories();
      if (fetchedCategories?.length) {
        const transfomedCategories = fetchedCategories.map((category) => ({
          label: category.name,
          value: category._id,
        }));
        setCategories(transfomedCategories);
      }
      return;
    };
    fetchCategories();
  }, []);

  if (!userId) {
    toast({
      title: "Error",
      description: "Please sign in to create an event",
      variant: "destructive",
    });
    return;
  }

  const submitHandler = async (data) => {
    setLoading(true);
    if (data.endDate < data.startDate) {
      toast({
        title: "Error",
        description: "End date must be after start date",
        variant: "destructive",
      });
      return;
    }
    if (parseFloat(data.price) === 0) {
      data.isFree = true;
    }
    setOpen(false);
    let uploadedImageUrl = data.imageUrl;
    if (files.length) {
      const uploadedImage = await startUpload(files);
      if (!uploadedImage) return;
      uploadedImageUrl = uploadedImage[0].url;
    }
    if (type === "Create") {
      try {
        const newEvent = await createEvent({
          event: {
            title: data.title,
            description: data.description,
            imageUrl: uploadedImageUrl,
            startDate: data.startDate,
            endDate: data.endDate,
            startTime: data.startTime,
            location: data.location,
            category: data.category,
            organizer: data.organizer,
            status: data.status,
            isOnline: data.isOnline,
            isFree: data.isFree,
            price: data.price,
          },
          path: "/events/",
        });
        if (newEvent) {
          form.reset();
          setLoading(false);
          toast({ description: "Event created successfully" });
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Oops! Something went wrong",
          description: "Failed to create event. Please try again.",
        });
        setLoading(false);
      }
    } else if (type === "Update") {
      try {
        const updatedEvent = await updateEvent({
          id: eventId,
          event: {
            title: data.title,
            description: data.description,
            imageUrl: uploadedImageUrl,
            startDate: data.startDate,
            endDate: data.endDate,
            startTime: data.startTime,
            location: data.location,
            category: data.category,
            organizer: data.organizer,
            status: data.status,
            isOnline: data.isOnline,
            isFree: data.isFree,
            price: data.price,
          },
          path: "/events/",
        });
        if (updatedEvent) {
          form.reset();
          setLoading(false);
          toast({ description: "Event updated successfully" });
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Oops! Something went wrong",
          description: "Failed to update event. Please try again.",
        });
        setLoading(false);
      }
    }
  };

  return (
    <ResponsiveDialog
      triggerText={trigger}
      size={"5xl"}
      open={open}
      setOpen={setOpen}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="space-y-8 overflow-y-scroll mb-4"
        >
          <h1 className="text-2xl font-bold">Create Event</h1>
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FileUploader
                  mediaUrl={field.value}
                  onFieldChange={field.onChange}
                  setFiles={setFiles}
                />
                <FormMessage className="w-full text-red-500" />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-2 md:flex-row w-full">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormControl>
                    <Input
                      placeholder="Your Event Title"
                      {...field}
                      autoFocus
                      className="input"
                    />
                  </FormControl>
                  <FormMessage className="w-full text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormControl>
                    <TextareaAutosize
                      placeholder="What's the event about?"
                      minRows={3}
                      maxRows={10}
                      {...field}
                      className="input resize-none text-sm"
                    />
                  </FormControl>
                  <FormMessage className="w-full text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row w-full">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal input",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "yyyy-MM-dd")
                          ) : (
                            <span>Starts on ...</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage className="w-full text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal input",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "yyyy-MM-dd")
                          ) : (
                            <span>Ends on ...</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < form.getValues("startDate")}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage className="w-full text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="startTime"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      type="time"
                      placeholder="Start Time"
                      {...field}
                      className="input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row w-full">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Where is the event happening?"
                      {...field}
                      className="input"
                    />
                  </FormControl>
                  <FormMessage className="w-full text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "justify-between w-full input",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value
                            ? categories.find(
                                (category) => category.value === field.value,
                              )?.label
                            : "Select category"}
                          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full px-2">
                      <Command className="w-full input !h-full">
                        <CommandInput
                          placeholder="Search category..."
                          className="h-9"
                        />
                        <CommandGroup className="w-full">
                          {categories?.length ? (
                            categories.map((category) => (
                              <CommandItem
                                value={category.label}
                                key={category.value}
                                onSelect={() => {
                                  form.setValue("category", category.value);
                                }}
                              >
                                {category.label}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    category.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                              </CommandItem>
                            ))
                          ) : (
                            <></>
                          )}
                          <CommandItem className="w-full flex items-center justify-center">
                            <AddCategory
                              setCategories={setCategories}
                              setValue={field.onChange}
                            />
                          </CommandItem>
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage className="w-full text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row w-full">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="How much does it cost?"
                      value={field.value}
                      onChange={field.onChange}
                      className="input"
                    />
                  </FormControl>
                  <FormMessage className="w-full text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isOnline"
              render={({ field }) => (
                <FormItem className="flex items-center w-full gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <span className="ml-2">Is it online?</span>
                  <FormMessage className="w-full text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row w-full">
            <FormField
              control={form.control}
              name="capacity"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="How many people can attend?"
                      value={field.value}
                      onChange={field.onChange}
                      className="input"
                    />
                  </FormControl>
                  <FormMessage className="w-full text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Save Event As" />
                      </SelectTrigger>
                      <SelectContent className="input !h-full">
                        <SelectGroup>
                          <SelectItem value="isPublished">
                            Ready To Publish
                          </SelectItem>
                          <SelectItem value="isDraft">Draft</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="w-full text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="primary-btn" disabled={loading}>
            {type === "Create" ? "Create Event" : "Update Event"}
          </Button>
        </form>
      </Form>
    </ResponsiveDialog>
  );
};

const AddCategory = ({ setCategories, setValue }) => {
  const [category, setCategory] = useState("");

  const handleAddCategory = async () => {
    if (!category) {
      return;
    }
    const newCategory = await createCategory({
      name: category,
    });
    if (newCategory) {
      setCategories((prev) => [
        ...prev,
        { label: newCategory.name, value: newCategory._id },
      ]);
      setValue("category", newCategory._id);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="w-max mx-auto">
        <Button className="primary-btn">Add New</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add New Category</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          <Input
            placeholder="Category Name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input"
          />
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              className="primary-btn"
              type="button"
              onClick={handleAddCategory}
            >
              Add
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EventForm;
