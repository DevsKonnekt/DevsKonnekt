import Benefits from "@/components/services/mentorship/benefits";
import Description from "@/components/services/mentorship/description";
import Hero from "@/components/services/mentorship/hero";
import Mentees from "@/components/services/mentorship/mentees";
import Mentors from "@/components/services/mentorship/mentors";
import Why from "@/components/services/mentorship/why";

const Mentoship = () => {
  return (
    <div>
      <Hero />
      <Description />
      <Mentees />
      <Mentors />
      <Why />
      <Benefits />
    </div>
  );
};

export default Mentoship;
