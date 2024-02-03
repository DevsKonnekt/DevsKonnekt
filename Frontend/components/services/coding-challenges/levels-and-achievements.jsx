import { codingChallengesPerks } from "@/constants";
import Image from "next/image";
import PerkCard from "./perkCard";

const LevelsAndAchievements = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8">
      <div className="w-full flex justify-between items-center gap-8 flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-4">
          <h2 className="text-2xl font-bold text-start">
            Levels & Achievements
          </h2>
          <p className="text-start max-w-[478px]">
            The more challenges you master, the more achievements you unlock!
            Earn badges and rankings based on your performance and dedication.
            Show off your coding intellect and track your progress on the
            community leaderboard.
          </p>
        </div>
        <Image
          src="/images/services/coding-challenges/levels.svg"
          alt="Celebrating"
          width={690}
          height={348}
          className="object-cover w-full max-w-[500px] md:max-w-full self-start md:w-1/2 h-[200px] lg:h-[300px] rounded-[10px]"
        />
      </div>
      <div className="w-full flex justify-center items-center gap- flex-col mt-8">
        {codingChallengesPerks.map((perk) => (
          <PerkCard key={perk.heading} {...perk} />
        ))}
      </div>
    </section>
  );
};

export default LevelsAndAchievements;
