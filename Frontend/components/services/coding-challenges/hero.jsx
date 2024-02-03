import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full mt-10 pt-24 flex flex-col md:flex-row gap-8 items-center justify-between">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="text-4xl font-black">Battles</h1>
        <h2 className="text-2xl font-semibold text-primary/75 dark:text-background/75">
          Welcome To The Ultimate Playground
        </h2>
        <p className="text-lg font-medium">
          Unleash your coding skills while battling other developers in our epic
          coding challenges. Ready to prove you’ve got what it takes? Let the
          games begin!
        </p>
        <Link href="/challenges">
          <Button
            variant="secondary"
            className="mt-4 primary-btn  font-semibold min-w-[256px]"
          >
            Explore Available Challenges
          </Button>
        </Link>
      </div>
      <Image
        src="/images/services/coding-challenges/hero.png"
        alt="hero"
        width={684}
        height={356}
        className="object-cover w-full md:w-1/2 h-full"
      />
    </div>
  );
};

export default Hero;
