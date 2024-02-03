import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center px-4 sm:px-6 md:px-8 pt-[120px]">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <div className="relative">
          <Image
            src="/images/services/connect/2.svg"
            alt="hero"
            width={500}
            height={500}
            className="object-cover absolute w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] top-0 left-[100px] lg:left-[175px]"
          />
          <Image
            src="/images/services/connect/1.jpeg"
            alt="hero"
            width={500}
            height={500}
            className="object-cover absolute w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] rounded-full top-0 left-0"
          />
        </div>
        <div className="mt-[150px] lg:mt-[250px]">
          <h1 className="text-4xl lg:text-6xl font-black">
            Connect & <br className="" />
            Turn Up the Fun
          </h1>
          <Button
            variant="secondary"
            className="primary-btn mt-4 font-semibold"
          >
            <Link href="/developers">Browse Developer Profiles</Link>
          </Button>
        </div>
      </div>
      <Image
        src="/images/services/connect/3.jpeg"
        alt="hero"
        width={500}
        height={500}
        className="object-cover w-full md:w-1/2 rounded-[10px] h-full"
      />
    </section>
  );
};

export default Hero;
