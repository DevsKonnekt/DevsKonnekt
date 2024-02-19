"use client";

import ResponsiveDialog from "@/components/myUI/responsiveDialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
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
import { useState } from "react";

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
  imageUrl: z.string().url().optional(),
  status: z.enum(["isPublished", "isDraft", "isCancelled"]),
  isOnline: z.boolean(),
  isFree: z.boolean(),
  price: z.number().min(0).optional(),
});

const EventForm = () => {
  const [categories, setCategories] = useState([]);
  const [files, setFiles] = useState([]);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      startTime: "",
      location: "",
      category: "",
      organizer: "",
      imageUrl: "",
      status: "isDraft",
      isOnline: false,
      isFree: false,
      price: 0,
    },
  });

  const submitHandler = async (data) => {
    console.log(data);
  };

  return (
    <ResponsiveDialog triggerText="Create Event" size={"lg"}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="space-y-8 overflow-y-scroll"
        >
          <h1 className="text-2xl font-bold">Create Event</h1>
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FileUploader
                  mediaUrl={field.value}
                  onFieldChange={field.onChange}
                  setFiles={setFiles}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Event Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <TextareaAutosize
                    placeholder="Event Description"
                    minRows={3}
                    maxRows={10}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Start Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
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
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>End Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
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
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Time</FormLabel>
                <FormControl>
                  <Input type="time" placeholder="Start Time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Combobox
                    placeholder="Category"
                    data={categories}
                    value={field.value}
                    setValue={field.onChange}
                    commandEmpty={
                      <AddCategory
                        setCategories={setCategories}
                        setValue={field.onChange}
                      />
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </ResponsiveDialog>
  );
};

const Combobox = ({ placeholder, commandEmpty, data, value, setValue }) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? value : placeholder}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} className="h-9" />
          <CommandEmpty>{commandEmpty}</CommandEmpty>
          <CommandGroup>
            {data.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {data.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === data.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const AddCategory = ({ setCategories, setValue }) => {
  const [category, setCategory] = useState("");

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!category) {
      return;
    }
    const newCategory = await addCategory(category);
    if (newCategory) {
      setCategories((prev) => [...prev, newCategory]);
      setValue("category", newCategory._id);
    }
  };
  return (
    <ResponsiveDialog triggerText="Add Category" size={"sm"}>
      <form className="flex flex-col gap-4" onSubmit={handleAddCategory}>
        <Input placeholder="Category Name" />
        <Button type="submit">Add</Button>
      </form>
    </ResponsiveDialog>
  );
};

export default EventForm;
