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
    <Card className="flex flex-col space-y-1.5 p-6 max-w-[400px]">
      <CardHeader>
        <Image
          src={image.src}
          alt={image.alt}
          width={1920}
          height={1080}
          loading="lazy"
          className="object-cover w-full h-full"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Link href="/services">Read more</Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
