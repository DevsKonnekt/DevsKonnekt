import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { BiLogoGithub } from "react-icons/bi";

const GithubAuthButton = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-2 w-full">
      <div className="flex items-center gap-1 w-full">
        <Separator className="w-full flex-1 !h-[2px] !bg-primary" />
        <p className="text-primary text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Or
        </p>
        <Separator className="w-full flex-1 !h-[2px] !bg-primary" />
      </div>
      <div className="flex gap-4 w-full">
        <Button className="secondary-btn !w-full">
          {" "}
          <BiLogoGithub size={32} className="mr-2" />
          Continue With GitHub
        </Button>
      </div>
    </div>
  );
};

export default GithubAuthButton;
