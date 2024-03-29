import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const BenefitCard = ({ icon, heading, text }) => {
  const IconComponent = icon;
  return (
    <Card className="w-full flex flex-col items-center justify-center dark:bg-gray-700">
      <CardHeader className="w-full flex items-center justify-center">
        <span className="text-4xl ">
          <IconComponent />
        </span>
      </CardHeader>
      <CardContent className="text-center ">
        <h3 className="text-xl font-bold mb-2 text-center">{heading}</h3>
        <p className="text-center">{text}</p>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
