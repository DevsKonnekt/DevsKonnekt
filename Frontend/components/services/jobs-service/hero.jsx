import { Button } from "@/components/ui/button";
import { default as Image } from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-screen xl:w-full  h-screen sm:h-[75vh] md:h-[90vh] relative flex flex-col items-center justify-center gap-6 sm:gap-8 pt-[80px]">
      <Image
        src="/images/services/jobs-service/hero.avif"
        alt="hero"
        width={1920}
        height={1080}
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-secondary/50 flex flex-col items-center justify-center gap-4 px-4 md:px-8 ">
        <h1 className="text-4xl sm:text-5xl md:text-7xl text-center text-primary z-10 font-black column-text">
          Match With the Best
        </h1>
        <p className="text-primary text-lg z-10 font-medium text-center">
          Discover amazing work opportunities with top local employers.
        </p>
        <div className="w-full max-w-3xl flex flex-col justify-between items-center gap-4 mt-4 md:flex-row">
          <Link href="/employers">
            <Button className=" primary-btn !bg-primary hover:!bg-primary/75 !text-background font-semibold min-w-[256px]">
              Connect With Employers
            </Button>
          </Link>
          <Link href="/jobs">
            <Button
              variant="outline"
              className="min-w-[256px] w-full border-primary text-primary hover:text-background bg-transparent hover:bg-primary/75 hover:border-primary/75  font-semibold transition-all duration-500 ease-linear"
            >
              Explore Jobs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
