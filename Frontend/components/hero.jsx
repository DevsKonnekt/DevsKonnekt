import Image from "next/image";
import AuthModal from "./auth/registration-form";

function Main() {
  return (
    <main className="w-full min-h-screen flex flex-col gap-4 justify-between items-center mx-4 pt-36 sm:pt-24 md:pt-0 md:px-12 md:flex-row">
      <div className="mb-14 lg:mb-0 md:w-1/2 flex-1 w-full">
        <h1 className="text-2xl leading-none text-primary font-bold lg:text-3xl sm:text-xl text-start lg:leading-tight mb-5 sm:pt-14 sm:mb-12">
          Connect, Collaborate, and <br className="hidden sm:block" />
          Conquer the Coding World <br className="hidden sm:block" />
          with DevsKonnekt
        </h1>
        <p className="text-primary font-normal">
          Join the ultimate platform for developers to connect, chat and explore
          local developer events in your community
        </p>
        <div className="flex justify-start items-center mt-16">
          <AuthModal title="Join Us" />
          <button className="text-primary text-base sm:text-lg bg-background transition-all duration-500 font-medium rounded-lg border border-primary px-6 py-1 ml-4 w-[150px] sm:auto text-center hover:bg-secondary hover:border-secondary hover:text-background">
            Contact
          </button>
        </div>
      </div>
      <div className="flex-1 w-full md:w-1/2">
        <Image
          src="/developers-img.jpeg"
          alt="Happy developers sitting on a table"
          width={800}
          height={700}
          className="rounded-md object-cover w-full"
        />
      </div>
    </main>
  );
}

export default Main;
