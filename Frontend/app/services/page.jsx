import Services from "@/components/services/servicesHero";
import Services1 from "@/components/services/service1";
import Services2 from "@/components/services/services2";
import Services3 from "@/components/services/services3";
import Services4 from "@/components/services/services4";
import Services5 from "@/components/services/service5";
import Services6 from "@/components/services/service6";
import CTA from "@/components/services/cta";

export default function Home() {
  return (
    <div className="flex max-w-7xl mx-auto bg-primary flex-col items-center justify-between w-full">
      <Services />
      <Services1 />
      <Services2 />
      <Services3 />
      <Services4 />
      <Services5 />
      <Services6 />
      <CTA />
    </div>
  );
}
