import Image from "next/image";

const BattleTypes = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 flex flex-col gap-8 justify-between items-center my-8 pt-8 md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-4">
        <Image
          src="/images/services/coding-challenges/head-to-head-wars.avif"
          alt="solo wars"
          width={690}
          height={348}
          className="object-cover w-full h-[200px] lg:h-[300px] rounded-[10px]"
        />
        <h2 className="text-2xl font-bold text-start">Head-to-head Wars</h2>
        <p className="text-start max-w-[478px]">
          Face off against fierce competitors in fast-paced duels that’ll have
          your fingers and brain working overtime.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-4">
        <Image
          src="/images/services/coding-challenges/solo-wars.svg"
          alt="solo wars"
          width={690}
          height={348}
          className="object-cover w-full h-[200px] lg:h-[300px] rounded-[10px]"
        />
        <h2 className="text-2xl font-bold text-start">Solo Mastery</h2>
        <p className="text-start  max-w-[478px]">
          Sharpen your coding acumen with skill-building challenges that’ll take
          you from code novice to expert in no time.
        </p>
      </div>
    </section>
  );
};

export default BattleTypes;
