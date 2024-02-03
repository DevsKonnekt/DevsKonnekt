import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ image, title, description }) => {
  return (
    <Card className="flex flex-col space-y-1.5 p-2 sm:p-4 md:p-6 w-full sm:max-w-[400px] shadow-sm shadow-secondary dark:bg-primary/30 dark:text-background">
      <CardHeader className="p-0 mx-0 w-full">
        <Image
          src={image.src}
          alt={image.alt}
          width={1920}
          height={1080}
          loading="lazy"
          className="object-cover w-full h-full"
        />
      </CardHeader>
      <CardContent className="p-2 mx-0 w-full">
        <CardTitle className="text-xl text-primary dark:text-background font-semibold mb-4">
          {title}
        </CardTitle>
        <p className="text-primary dark:text-background">{description}</p>
      </CardContent>
      <CardFooter>
        <Link
          href="/services"
          className="text-secondary hover:text-secondary/60 transition-all duration-500"
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
