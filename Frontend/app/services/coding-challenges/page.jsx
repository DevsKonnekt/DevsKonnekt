import BattleTypes from "@/components/services/coding-challenges/battle-types";
import CTA from "@/components/services/coding-challenges/cta";
import Hero from "@/components/services/coding-challenges/hero";
import LevelsAndAchievements from "@/components/services/coding-challenges/levels-and-achievements";
import Unleash from "@/components/services/coding-challenges/unleash";
import WhyUs from "@/components/services/coding-challenges/whyUs";

const CodingChallenges = () => {
  return (
    <main className="flex flex-col gap-4 w-full mx-auto">
      <Hero />
      <BattleTypes />
      <WhyUs />
      <LevelsAndAchievements />
      <Unleash />
      <CTA />
    </main>
  );
};

export default CodingChallenges;
