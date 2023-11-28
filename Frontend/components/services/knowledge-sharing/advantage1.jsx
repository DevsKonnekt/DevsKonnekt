import Image from "next/image";

const Advantage1 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6 py-8 px-4">
      <div className="flex flex-col gap-6 md:gap-8 flex-1 max-w-[535px]">
        <h1 className="text-2xl text-primary font-bold">
          Transform Your Ideas into
          <br />
          Towering Concepts
        </h1>
        <p className="text-primary">
          Uncover a wealth of hidden insights lurking deep in the minds of your
          fellow developers. Plunge into the depths of your craft and emerge
          wiser, stronger, and more fearsome than before.
        </p>
      </div>
      <Image
        src="/images/services/knowledge-sharing/2.jpg"
        alt="Share"
        width={1920}
        height={1080}
        className="rounded-xl object-cover w-full max-w-[512px] max-h-[400px] flex-1"
      />
    </div>
  );
};

export default Advantage1;
