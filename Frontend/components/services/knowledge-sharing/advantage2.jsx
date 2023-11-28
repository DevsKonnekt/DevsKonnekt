import Image from "next/image";

const Advantage2 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-center mt-6 py-8 px-4">
      <Image
        src="/images/services/knowledge-sharing/3.jpg"
        alt="Share"
        width={1920}
        height={1080}
        className="rounded-[40px] object-cover w-full max-w-[512px] max-h-[400px] flex-1"
      />
      <div className="flex flex-col gap-6 md:gap-8 flex-1 max-w-[535px]">
        <h1 className="text-2xl text-primary font-bold">
          Build a Legacy with Your
          <br />
          Code Chronicles
        </h1>
        <p className="text-primary">
          Take pride in your conquests. Inspire those who dare to follow in your
          footsteps by sharing your bold adventures in code. Your epic tales
          shall echo through the digital halls of time!
        </p>
      </div>
    </div>
  );
};

export default Advantage2;
