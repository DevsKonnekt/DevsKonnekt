import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-screen sm:h-[50vh] lg:h-[75vh] flex flex-col justify-center items-center p-4 gap-4 relative">
      <Image
        src="/images/services/mentorship/main.jpeg"
        alt="Home image"
        width={1920}
        height={1080}
        className="object-cover w-full h-full absolute top-0 left-0 rounded-[75px] rounded-t-none"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-primary/90 rounded-[75px] rounded-t-none" />
      <div className="absolute top-0 left-0 w-full h-full rounded-[75px] rounded-t-none flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 pt-12 sm:pt-auto">
        <h1 className="text-3xl md:text-4xl text-background font-bold text-center leading-10">
          Connect with experienced mentors and guide{" "}
          <br className="hidden lg:block mb-2" /> others on their coding journey
        </h1>
        <Link
          href="/mentorship/search"
          className="bg-background font-semibold hover:bg-background/75 px-4 py-1 rounded-md transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-secondary hover:scale-105 w-full sm:w-auto flex items-center justify-center min-w-[280px] mt-8"
        >
          Find a Mentor
        </Link>
      </div>
    </div>
  );
};

export default Hero;
