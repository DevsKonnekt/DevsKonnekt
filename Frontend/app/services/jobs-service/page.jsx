import Benefits from "@/components/services/jobs-service/benefits";
import Checkmate from "@/components/services/jobs-service/checkmate";
import CTA from "@/components/services/jobs-service/cta";
import Explore from "@/components/services/jobs-service/explore";
import Hero from "@/components/services/jobs-service/hero";
import Images from "@/components/services/jobs-service/images";

const JobsService = () => {
  return (
    <div>
      <Hero />
      <Explore />
      <Benefits />
      <Images />
      <Checkmate />
      <CTA />
    </div>
  );
};

export default JobsService;
