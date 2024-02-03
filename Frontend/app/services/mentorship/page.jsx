import Benefits from "@/components/services/mentorship/benefits";
import CTA from "@/components/services/mentorship/cta";
import Description from "@/components/services/mentorship/description";
import Hero from "@/components/services/mentorship/hero";
import Mentees from "@/components/services/mentorship/mentees";
import Mentors from "@/components/services/mentorship/mentors";
import Why from "@/components/services/mentorship/why";

const Mentoship = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Description />
      <Mentees />
      <Mentors />
      <Why />
      <Benefits />
      <CTA />
    </main>
  );
};

export default Mentoship;
