"use client";
import Image from "next/image";
import Link from "next/link";

const { Separator } = require("@/components/ui/separator");

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center pt-28 px-4">
      <div className="flex-1 flex flex-col">
        <h1 className="text-4xl md:text-3xl lg:text-4xl text-primary mb-6 font-bold">
          Konnekt, Learn, and
          <br />
          Grow with <br />
          DevsKonnekt
        </h1>
        <Separator className="h-1 bg-primary" />
        <p className="text-lg text-primary mt-3">
          Expand your knowledge and gain valuable insights from a community of
          like-minded software developers in your city.
        </p>
        <Link href="/signup" className="secondary-btn mt-8">
            Try Now
        </Link>
      </div>
      <Image
        src="/images/services/knowledge-sharing/hero.jpg"
        width={1920}
        height={1080}
        alt="Knowledge Sharing Hero Image"
        className="flex-1 w-full rounded-sm h-full object-cover md:max-h-[375px]"
      />
    </div>
  );
};

export default Hero;
