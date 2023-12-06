import { BiSolidTrophy, BiTrophy } from "react-icons/bi";

const Achievements = () => {
  return (
    <div className="flex flex-col w-full mt-4 lg:mt-0 lg:mx-2">
      <h1 className="text-2xl font-semibold text-start flex items-center gap-2 mb-4">
        <BiSolidTrophy className="text-secondary" />
        Achievements
      </h1>
      <div className="flex flex-col items-center mx-1 shadow-sm shadow-secondary p-4 rounded">
        <h1 className="text-lg font-semibold text-start">
          Completed Challenges
        </h1>
        <p className="text-start text-primary/75">7</p>
      </div>
      <div className="flex flex-col items-center mx-1 shadow-sm shadow-secondary mt-4 p-4 rounded">
        <h1 className="text-lg font-semibold text-start">
          Leaderboard Position
        </h1>
        <p className="text-start text-primary/75">2</p>
      </div>
    </div>
  );
};

export default Achievements;
