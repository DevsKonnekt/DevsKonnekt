import Image from "next/image";

const Checkmate = () => {
  return (
    <section className="w-[100vw] lg:w-full h-60 sm:h-80 md:h-[318px] relative mb-8">
      <Image
        src="/images/services/jobs-service/checkmate.avif"
        alt="hero"
        width={500}
        height={500}
        className="absolute object-cover top-0 left-0 w-full h-full"
      />
      <div className="w-full px-4 mx-auto h-full flex justify-center items-center bg-primary/80 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl text-center text-shadow text-background  font-black column-text">
          Picture Your Success.
        </h1>
      </div>
    </section>
  );
};

export default Checkmate;
