"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const TestimonialCard = ({ name, image, text }) => {
  return (
    <Card className="w-full min-w-[300px] sm:max-w-[500px] bg-secondary rounded-xl shadow-sm shadow-primary text-background">
      <CardHeader className="flex flex-col items-center">
        <Avatar className="w-24 h-24">
          <AvatarImage src={image.src} className="object-cover" />
          <AvatarFallback>{image.alt}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{name}</CardTitle>
          <hr className="w-1/2 mx-auto mt-2" />
        </div>
      </CardHeader>
      <CardContent className="text-center">{text}</CardContent>
    </Card>
  );
};

export default TestimonialCard;
