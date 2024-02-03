import SignUpButton from "@/components/signUpButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HandsOn = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-4 md:gap-8 items-center justify-center my-4 px-0 sm:px-2 md:px-4">
      <Image
        src="/images/services/events/6.png"
        alt="Woman wearing headphones behind a tablet"
        width={500}
        height={500}
        className="object-cover rounded-[20px] md:rounded-[40px] rounded-tl-[200px] md:rounded-tl-[400px] flex-1 w-full sm:w-1/2"
      />
      <div className="flex-1 flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-start ">Hands On</h3>
        <p className=" text-start">
          Let&#39;s face it, we learn best by doing! So, roll up your sleeves
          and sign up for hands-on coding challenges, workshops, and meaningful
          projects. Trust us, your future self will be thanking you for this
          endless pool of knowledge you&#39;ve dived into.
        </p>
        <SignUpButton variant={"primary"} title={"Join Now"} />
      </div>
    </section>
  );
};

export default HandsOn;
